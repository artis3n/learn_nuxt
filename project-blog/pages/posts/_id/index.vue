<template>
  <div class="single-post-page">
    <section class="post">
      <h1 class="post-title">{{ loadedPost.title }}</h1>
      <div class="post-details">
        <div class="post-detail">Last updated on: {{ loadedPost.updatedDate }}</div>
        <div class="post-detail">Written by: {{ loadedPost.author }}</div>
      </div>
      <p class="post-content">{{ loadedPost.content }}</p>
    </section>
    <section class="post-feedback">
      <p>Let me know what you think about the post, send a mail to <a href="mailto:feedback@domain.com">feedback@domain.com</a></p>
    </section>
  </div>
</template>

<script>
  export default {
    asyncData(context) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve({
            loadedPost: {
              id: '1',
              thumbnail: "https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150",
              title: "Hello There: " + context.params.id,
              previewText: "This is my first post",
              author: 'Artis3n',
              updatedDate: new Date(),
              content: 'Some dummy text',
            },
          })
        }, 1000)
      })
    }
  }
</script>

<style scoped>
  .single-post-page {
    padding: 30px;
    text-align: center;
    box-sizing: border-box;
  }

  @media (min-width: 768px) {
    .post {
      width: 600px;
      margin: auto;
    }
  }

  .post-title {
    margin: 0;
  }

  .post-details {
    padding: 10px;
    box-sizing: border-box;
    border-bottom: 2px solid #cccccc;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    .post-details {
      flex-direction: row;
    }
  }

  .post-detail {
    color: rgb(88, 88, 88);
    margin: 0 10px;
  }

  .post-feedback {
    color: red;
    text-decoration: none;
  }

  .post-feedback a:hover,
  .post-feedback a:active {
    color: salmon;
  }
</style>
