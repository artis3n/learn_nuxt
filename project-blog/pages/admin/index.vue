<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')">Create Post</app-button>
      <app-button @click="logout" style="margin-left: 10px">Logout</app-button>
    </section>
    <section class="existing-posts">
      <h1>Existing Posts</h1>
      <PostList is-admin :posts="postList" />
    </section>
  </div>
</template>

<script>
  export default {
    layout: 'admin',
    middleware: ['checkAuth', 'auth'],
    computed: {
      postList() {
        return this.$store.getters.loadedPosts
      }
    },

    methods: {
      logout() {
        this.$store.dispatch('logout')
        this.$router.push('/')
      }
    }
  }
</script>

<style scoped>
  .admin-page {
    padding: 20px;
  }

  .new-post {
    text-align: center;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
  }

  .existing-posts {
    text-align: center;
  }
</style>
