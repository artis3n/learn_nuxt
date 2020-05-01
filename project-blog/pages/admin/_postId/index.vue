<template>
  <div class="admin-post-page">
    <section class="update-form">
      <admin-post-form :post="loadedPost" @submit="updatePost" />
    </section>
  </div>
</template>

<script>
  import AdminPostForm from '~/components/Admin/AdminPostForm'

  export default {
    layout: 'admin',
    middleware: 'auth',
    components: {
      AdminPostForm
    },

    asyncData(context) {
      return context.$axios.get(`${process.env.FIREBASE_URL}/posts/${context.params.postId}.json`)
        .then(res => ({
          loadedPost: {
            ...res.data,
            id: context.params.postId,
          },
        }))
        .catch(e => context.error(e))
    },

    methods: {
      updatePost(editedPost) {
        this.$store.dispatch('editPost', { ...editedPost })
      }
    }
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
