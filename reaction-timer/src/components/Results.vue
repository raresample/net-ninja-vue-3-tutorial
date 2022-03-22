<template>
  <div class="results">
    <p>Reaction Time: {{ score }}ms</p>
    <p class="rank">Rank: {{ rank }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return{
      rank: null
    }
  },
  props: ['score'],
  mounted() {
    if (this.score < 251) {
      this.rank = "Ninja Fingers!"
    } else if (this.score < 501) {
      this.rank = "Rapid Reflexes"
    } else {
      this.rank = "s  l    o        w"
    }
  }
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
.rank {
  font-size: 1.4em;
  color: #0faf87;
  font-weight: bold;
}

</style>