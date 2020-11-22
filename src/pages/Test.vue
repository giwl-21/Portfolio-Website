<template>
  <button v-on:click="count++">Not Scoop {{count}}!!</button>
</template>

<script>
  export default{
    data() {
      return {
        count:0
      };
    }
  }
</script>

<style scoped>
button {
  background-color: rgba(255,0,0,1)
}
</style>
