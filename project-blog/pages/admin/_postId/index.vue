<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
  import axios from 'axios'

  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    layout: 'admin',
    components: {
      AdminPostForm
    },
    asyncData(context) {
      return axios.get(`${process.env.FIREBASE_URL}/posts/${context.params.postId}.json`)
        .then(res => ({
          loadedPost: res.data,
        }))
        .catch(e => context.error(e))
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
