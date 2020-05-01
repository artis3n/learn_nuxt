import Vuex from 'vuex'
import Cookie from 'js-cookie'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: [],
      token: null,
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      },
      addPost(state, post) {
        state.loadedPosts.push(post)
      },
      editPost(state, editedPost) {
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id)
        state.loadedPosts[postIndex] = editedPost
      },

      setToken(state, token) {
        state.token = token
      },
      clearToken(state) {
        state.token = null
      }
    },

    actions: {
      nuxtServerInit(vuexCtx, globalCtx) {
        return globalCtx.app.$axios.get(`${process.env.FIREBASE_URL}/posts.json`)
          .then(res => {
            const postsArray = []
            for (const key in res.data) {
              if (res.data.hasOwnProperty(key)) {
                postsArray.push({ ...res.data[key], id: key })
              }
            }
            vuexCtx.commit('setPosts', postsArray)
          })
          .catch(e => globalCtx.error(e))
      },

      setPosts(vuexCtx, posts) {
        vuexCtx.commit('setPosts', posts)
      },

      addPost(vuexCtx, post) {
        const createdPost = {
          ...post,
          updatedDate: new Date(),
        }
        return this.$axios.post(`${process.env.FIREBASE_URL}/posts.json?auth=${vuexCtx.state.token}`, createdPost)
          .then(result => {
            vuexCtx.commit('addPost', { ...createdPost, id: result.data.name })
          })
          .catch(err => console.log(err))
      },

      editPost(vuexCtx, post) {
        const postId = post.id
        delete post.id
        this.$axios.put(`${process.env.FIREBASE_URL}/posts/${postId}.json?auth=${vuexCtx.state.token}`, post)
          .then(() => {
            vuexCtx.commit('editPost', { ...post, id: postId })
            this.$router.push('/admin')
          })
          .catch(e => console.log(e))
      },

      authenticateUser(vuexCtx, authData) {
        return this.$axios.$post(`https://identitytoolkit.googleapis.com/v1/accounts:${determineAuthMethod(authData.isLogin)}?key=${process.env.FIREBASE_API_KEY}`, {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true,
        })
          .then(data => {
            vuexCtx.commit('setToken', data.idToken)
            Cookie.set('jwt', data.idToken)
            Cookie.set('tokenExpiration', new Date().getTime() + (Number.parseInt(data.expiresIn) * 1000))
            return this.$axios.$post('http://localhost:3000/api/track-data', {
              data: 'Registered data!',
            })
          })
          .catch(e => console.log(e))
      },

      initAuth(vuexCtx, req) {
        let token
        let expirationDate

        if (req) {
          if (!req.headers.cookie) {
            return
          }
          const jwtCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('jwt='))
          const expirationCookie = req.headers.cookie
            .split(';')
            .find(c => c.trim().startsWith('tokenExpiration='))
          if (!jwtCookie) {
            return
          }
          token = jwtCookie.split('=')[1]
          expirationDate = expirationCookie.split('=')[1]

        } else {
          token = Cookie.get("jwt")
          expirationDate = Cookie.get("tokenExpiration")
        }

        if (new Date().getTime() > +expirationDate || !token) {
          console.log('no token or invalid token')
          vuexCtx.dispatch('logout')
          return;
        }
        vuexCtx.commit('setToken', token);
      },

      logout(vuexCtx) {
        Cookie.remove('jwt')
        Cookie.remove('tokenExpiration')
        vuexCtx.commit('clearToken')
      },
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      },

      isAuthenticated(state) {
        return state.token != null
      },
    },
  })
}

function determineAuthMethod(isLogin) {
  return isLogin ? 'signInWithPassword' : 'signUp'
}

export default createStore
