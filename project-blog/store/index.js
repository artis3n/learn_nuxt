import Vuex from 'vuex'

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
        return new Promise(resolve => {
          setTimeout(() => {
            vuexCtx.commit('setPosts', [
              {
                id: '1',
                thumbnail: "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150",
                title: "Hello There",
                previewText: "This is my first post",
              },
              {
                id: '2',
                thumbnail: "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150",
                title: "Hello There Again",
                previewText: "This is my second post",
              },
              {
                id: '3',
                thumbnail: "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150",
                title: "Hi!",
                previewText: "This is my third post"
              }
            ])
            resolve()
          }, 1000)
        })
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
