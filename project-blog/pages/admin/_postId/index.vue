<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm'
  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    data() {
      return {
        loadedPost: {
          author: 'Artis3n',
          title: 'The title of the post',
          content: 'It is super amazing. Thanks for reading.',
          thumbnailLink: 'https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150',
        }
      }
    },
  }
</script>

<style scoped>
  .update-form {
    width: 90%;
    margin: 20px auto;
  }

  @media (min-width: 768px) {
    .update-form {
      width: 500px;
    }
  }
</style>
