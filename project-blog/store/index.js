import Vuex from 'vuex'
import axios from 'axios'

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts
      }
    },
    actions: {
      nuxtServerInit(vuexCtx, globalCtx) {
        return axios.get(`${process.env.FIREBASE_URL}/posts.json`)
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
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts
      }
    },
  })
}

export default createStore
