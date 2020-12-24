<template>
  <div class="container-fluid text-white space-background" style='text-align: center'>
    <TitleCard id='gallerytitle' text='Gallery'/>
    <div class="row flex-row flex-nowrap px-2 pb-2" style="overflow-x:scroll; overflow-y:hidden;">
      <GalleryCard v-for='imageName in images' v-bind:key='convertId(imageName)' class='' :id='convertId(imageName)' :title='imageName' :image='convertFilenameToPath(imageName)' :thumbnail='convertFilenameToThumb(imageName)'></GalleryCard>
      <div class="px-2"></div>
    </div>
  </div>
</template>

<script>
import {GalleryCard, TitleCard} from "../components.js";

var imageLibrary = [
  "Curtains In Pen",
  "Charcoal Landscape",
  "Charcoal Still Life",
  "City Scape Drawing",
  "Mirror In Pen",
  "Nose Sketches",
  "Objects In Pen",
  "Clothes Sketches",
  "Pencil Cube",
  "Pencil Cylinder",
  "Pencil Sphere",
  "Plant Negative Space",
  "Blind Contour 1",
  "Contour Grid Bottle",
  "Contour Vertical Bottle"
];
export default {
  components:{
    GalleryCard,
    TitleCard
  },
  data(){
    return {
      images: imageLibrary
    }
  },
  methods:{
    convertFilenameToPath: function(title){
      // returns a file path for an image title file
      return "public/Files/Gallery/" + title.replace(/\s+/g, '') + ".jpg";
    },
    convertFilenameToThumb: function(title){
      return "public/Files/Gallery/Thumbnails/" + title.replace(/\s+/g, '') + ".jpg";
    },
    convertId: function(title){
      // returns a id for an image title file
      return title.replace(/\s+/g, '');
    }
  }
};
</script>


<style scoped>

.row {
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
