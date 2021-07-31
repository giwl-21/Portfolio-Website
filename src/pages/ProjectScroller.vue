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
        title='Wabtec Corporation'
        summary=
        "For the summer of 2021, I interned at Wabtec Corporation.  I mainly developed software tools in Visual C# to streamline locomotive testing."
        link='/WabtecSummer2021'
        image='public/Files/ProjectArea/wabtec.jpg'
        footer-color='rgba(50, 100, 100, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='5-Stage FPGA CPU'
        summary=
        "For my Computer Organization and Design class, I built a simulation of a 5-Stage Piplined FPGA CPU in Verilog."
        link='/5StagePipelinedCPU'
        image='public/Files/ProjectArea/cpu.png'
        footer-color='rgba(0, 255, 0, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='JBOD Disk Driver'
        summary=
        "For my Intro to Systems Programming class, I created a disk driver for a JBOD disk drive with an implemented look-aside cache and networking support."
        link='/JBODDiskDriver'
        image='public/Files/ProjectArea/serverstorage.png'
        footer-color='rgba(165,42,42, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='5th Sense'
        summary=
        "For the Nittany AI 2021 Challenge, my team created an accessible real-time voice transcription app.  I designed and implemented the sound transcription system using Azure Cognitive Services."
        link='/5thSense'
        image='public/Files/ProjectArea/5thsenselogo.png'
        footer-color='rgba(255, 0, 255, .05)'
      />
      <ProjectCard
        class='col-xs'
        title='OpenVessel'
        summary=
        "For my 2020 summer internship, I built a React framework for a Flask.py full stack application.  Also built a 3D viewer for clients to view machine learning results. Implemented through ECMAScript 6."
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
        title='Matrix Calculator'
        summary=
        "In progess project for matrix calculations, built to be lightweight and more user friendly.  Built using Python."
        link='/MatrixCalculator'
        image='public/Files/ProjectArea/math-board.jpg'
        footer-color='rgba(50, 100, 100, .05)'
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
        title='Music Transposer'
        summary=
        "Application that uses machine learning to attempt to classify notes from audio.  Written in JavaScript, using tensorflowjs.  Presented at science fairs in Spring 2019."
        link='/MusicTransposer'
        image='public/Files/ProjectArea/sheet-music.jpg'
        footer-color='rgba(165,42,42, .05)'
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
