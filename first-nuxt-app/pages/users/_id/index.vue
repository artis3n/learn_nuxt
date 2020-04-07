<template>
  <h1>A single user: {{ $route.params.id }}</h1>
</template>

<script>
export default {
  layout: 'users',
  validate(data) {
    return /^\d+$/.test(data.params.id)
  }
}
</script>
