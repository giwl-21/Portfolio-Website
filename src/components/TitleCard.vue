<template>
  <div class="text-light" style="height:10em; padding:3.5em;">
    <div style="text-align: center;">
      <h1 class="card-title" :id="id" style="text-shadow: 0px 0px 4px rgba(5,0,2,1);">{{text}}</h1>
    </div>
  </div>
</template>

<script>
export default{
  props:['text', 'id']
};
</script>

<style scoped>
h1 {
  text-shadow: 0px 0px 4px rgba(5,0,2,1);
}
</style>
