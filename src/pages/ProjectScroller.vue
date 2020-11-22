<template>
  <div class="container-fluid bg-dark space-background" style='background-image: url("public/Files/celebration-milky-way.jpg");'>
    <div class="row flex-row flex-nowrap" style="overflow-x: scroll; overflow-y: hidden;">
      <!-- <ProjectCard
        class='col-xs'
        title='My Portfolio'
        summary=
        "This is the website you're on right now. I used building my portfolio as an opportunity to introduce myself to Vue.js.
        Enjoy!"
        link='/'
        image='public/Files/iris-nebula.jpg'
        footer-color='rgba(255, 0, 255, .05)'
      /> -->
      <ProjectCard
        class='col-xs'
        title='OpenVessel'
        summary=
        "Built a React framework for a Flask.py full stack application.  Also built a 3D viewer for clients to view machine learning results. Implemented through ECMAScript 6."
        link='/OpenVessel'
        image='public/Files/ProjectArea/openvessel.jpeg'
        footer-color='rgba(0, 0, 255, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='Page Renamer'
        summary=
        "This desktop app assists archivists by naming multiple pages after a user-specified location across images. Written in Python, using PILlow, PyTesseract, and TKinter."
        link='/PageRenamer'
        image='public/Files/ProjectArea/map.jpg'
        footer-color='rgba(255, 255, 0, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='Music Transposer'
        summary=
        "Application that uses machine learning to attempt to classify notes from audio.  Written in JavaScript, using tensorflowjs.  Presented at science fairs in Spring 2019."
        link='/MusicTransposer'
        image='public/Files/ProjectArea/sheet-music.jpg'
        footer-color='rgba(165,42,42, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='Text To Beat'
        summary=
        "This web application converts text to a drum beat using phonetic conversion.  Written in JavaScript, using TextToIPA."
        link='/TextToBeat'
        image='public/Files/ProjectArea/drumset.jpg'
        footer-color='rgba(0, 255, 0, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='Matrix Calculator'
        summary=
        "In progess project for matrix calculations, built to be lightweight and more user friendly.  Built using Python."
        link='/MatrixCalculator'
        image='public/Files/ProjectArea/math-board.jpg'
        footer-color='rgba(50, 100, 100, .05)'
      />
      <div class='px-2'></div>
    </div>
  </div>
</template>

<script>
import {ProjectCard} from "../components.js";
export default {
  components:{
    ProjectCard
  }
}
</script>


<style scoped>
.container {
  background-image: url("../../public/Files/celebration-milky-way.jpg");
}

.row {
  overflow-x: scroll;
  overflow-y: hidden;
}
</style>
