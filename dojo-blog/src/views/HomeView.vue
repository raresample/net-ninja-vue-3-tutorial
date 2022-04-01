<template>
  <div class="home">
    <h1>Home</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>loading...</div>
  </div>
</template>

<script>
import PostList from '../components/PostList.vue'
import getPosts from '../composables/getPosts'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const {posts, error, load } = getPosts()

    load()

    return { posts, error }
  }
}
</script>

<style>
  .home {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout {
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>