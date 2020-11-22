<template>
  <div class="project-card card m-4">
    <div class="card-header"
          :style="{
            height: '10em',
            backgroundImage: 'url('+ image +')',
            backgroundSize:'cover'}"></div>

    <div class="card-body" style="height: 20em">
      <h4 class="card-title">{{title}}</h4>
      <p class="card-text" style="white-space:pre-line;">{{summary}}</p>
    </div>
    <button class="card-footer btn" :style="{height: '3em', textAlign:'left', backgroundColor: footerColor}"
          v-on:click="footerClick(link)">Read More</button>
  </div>
</template>

<script>
// PROPS ARE IN CAMEL CASE FOR SOME REASON WHEN DOING V-bind STYLE
export default{
  props: ["title", "image", "summary", "link", "footer-color"],
  methods:{
    footerClick: function(link){
      // open using link
      if (this.$route.path == link){
        this.$router.push("/");
      }
      else {
        this.$router.push(link);
      }
    },
  }
};
</script>

<style>

</style>
