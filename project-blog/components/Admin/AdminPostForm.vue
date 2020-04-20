<template>
  <form @submit.prevent="onSave">
    <app-input-control v-model="editedPost.author">Author Name</app-input-control>
    <app-input-control v-model="editedPost.title">Title</app-input-control>
    <app-input-control v-model="editedPost.thumbnail">Thumbnail Link</app-input-control>

    <app-input-control control-type="textarea" v-model="editedPost.content">Content</app-input-control>
    <app-input-control control-type="textarea" v-model="editedPost.previewText">Preview Text</app-input-control>

    <app-button type="submit">Save</app-button>
    <app-button
      type="button"
      style="margin-left: 10px"
      btn-style="cancel"
      @click="onCancel"
    >Cancel</app-button>
  </form>
</template>

<script>
  import AppInputControl from '~/components/UI/AppControlInput'
  import AppButton from '~/components/UI/AppButton'

  export default {
    name: 'AdminPostForm',
    components: {
      AppButton,
      AppInputControl,
    },
    props: {
      post: {
        type: Object,
        required: false,
      },
    },
    data() {
      return {
        editedPost: this.post ? { ...this.post } : {
          author: '',
          title: '',
          thumbnail: '',
          previewText: '',
        },
      }
    },

    methods: {
      onSave() {
        this.$emit('submit', this.editedPost)
      },

      onCancel() {
        this.$router.push('/admin')
      }
    }
  }
</script>

<style scoped>

</style>
