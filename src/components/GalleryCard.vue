<template>

  <div :id='id' class="card bg-transparent text-dark m-4" :style='{minWidth: this.width + "em"}'>
    <a :href='image' style='color: inherit;'>
      <div class="card-body" style='padding:0px'>
        <img class="img-fluid rounded"
        :id= 'getImageId()'
        :src='thumbnail'
        @load='resize()' >
      </div>
      <div class="card-footer dark-transparent text-white">
        {{title}}
      </div>
    </a>
  </div>
</template>

<script>
// PROPS ARE IN CAMEL CASE FOR SOME REASON WHEN DOING V-bind STYLE
export default{
  //image prop a link
  props: ["title", "image", "id", "thumbnail"],
  data(){
    return {
      height: 30,
      width: 20
    }
  },
  methods: {
    getImageId: function(){
      return this.id + "Img";
    },
    resize: function(){ // OCCURS ON @load
      var domImage = document.getElementById(this.getImageId());// ONLY works once the image is fully loaded lmao
      this.width = this.height * (domImage.naturalWidth / domImage.naturalHeight);
      console.log(this.width);
      var cardId = '#' + this.id;
      $(cardId).css('min-width', this.width + 'em');
    }
  }
};
</script>

<style scoped>
.card {
  box-shadow: 0px 0px 5px rgba(0,0,0,.5);
  transition: transform .2s;
}
.card:hover {
  box-shadow: 0px 0px 10px rgba(0,0,0,.5);
  transform: scale(1.05);
}
a:hover {
  color:inherit;
}

</style>
