<template>
  <div class="home-page">
    <section class="intro">
      <h1>Get the latest tech news</h1>
    </section>
    <post-list :posts="postLists" />
  </div>
</template>

<script>
  import PostList from '~/components/Posts/PostList'

  export default {
    components: {
      PostList,
    },
    asyncData(context, callback) {
      setTimeout(() => {
        callback(null, {
          postLists: [
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
        ]
        })
      }, 1500)
    },
  }
</script>

<style scoped>
  .intro {
    height: 300px;
    position: relative;
    padding: 30px;
    box-sizing: border-box;
    background-position: center;
    background-size: cover;
    background-image: url('~assets/images/original.jpg');
  }

  .intro h1 {
    position: absolute;
    top: 10%;
    left: 5%;
    width: 90%;
    font-size: 1.5rem;
    color: black;
    background-color: rgb(211, 211, 211);
    padding: 10px;
    border-radius: 10px;
    box-shadow: 3px 3px 3px black;
    box-sizing: border-box;
    border: 1px solid black;
  }

  @media (min-width: 768px) {
    .intro h1 {
      font-size: 2rem;
    }
  }
</style>
