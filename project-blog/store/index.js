import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
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
        return this.$axios.post(`${process.env.FIREBASE_URL}/posts.json`, createdPost)
          .then(result => {
            vuexCtx.commit('addPost', { ...createdPost, id: result.data.name })
          })
          .catch(err => console.log(err))
      },

      editPost(vuexCtx, post) {
        const postId = post.id
        delete post.id
        this.$axios.put(`${process.env.FIREBASE_URL}/posts/${postId}.json`, post)
          .then(() => {
            vuexCtx.commit('editPost', { ...post, id: postId })
            this.$router.push('/admin')
          })
          .catch(e => console.log(e))
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore
