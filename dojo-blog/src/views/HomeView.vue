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
import { ref } from '@vue/reactivity'
import PostList from '../components/PostList.vue'
// @ is an alias to /src

export default {
  name: 'HomeView',
  components: { PostList },
  setup() {
    const posts = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/posts')
        if (!data.ok) {
          throw Error('no data available')
        }
        posts.value = await data.json()
      }
      catch(durrrr) {
        error.value = durrrr.message
        console.log(error.value)
      }
    }
    load()
    return { posts, error }
  }
}
</script>
