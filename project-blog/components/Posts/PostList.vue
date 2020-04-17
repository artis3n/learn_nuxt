<template>
  <section class="post-list">
    <post-preview
      id="1"
      thumbnail="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150"
      title="Hello There!"
      preview-text="This is my first post."
      :is-admin="isAdmin"
    />
    <post-preview
      id="2"
      thumbnail="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150"
      title="Hello There Again!"
      preview-text="This is my second post."
      :is-admin="isAdmin"
    />
    <post-preview
      id="3"
      thumbnail="https://s14-eu5.startpage.com/cgi-bin/serveimage?url=https%3A%2F%2Fi.ytimg.com%2Fvi%2F_1GLCEPezxk%2Fmaxresdefault.jpg&sp=3ac875bad39b3263c14e485a37d539e5&anticache=720150"
      title="Hi!"
      preview-text="This is my third post."
      :is-admin="isAdmin"
    />
  </section>
</template>

<script>
  import PostPreview from '~/components/Posts/PostPreview';

  export default {
    name: 'PostList',
    components: {
      PostPreview,
    },
    props: {
      isAdmin: {
        type: Boolean,
        default: false,
      },
    },
  }
</script>

<style scoped>
  .post-list {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
</style>
