<template>
  <div class="results">
    Reaction Time: {{ score }}ms
  </div>
</template>

<script>
export default {
  props: ['score']
}

</script>

<style>
.results {
    width: 400px;
    border-radius: 20px;
    background:  #af0f9a;;
    color: white;
    text-align: center;
    padding: 100px 0;
    margin: 40px auto;
  }

</style>