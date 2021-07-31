import Vue from "vue";
import VueRouter from "vue-router";
import Test from "./pages/Test.vue";
import {Gallery, IntroCard, ProjectScroller, MatrixCalculator, MusicTransposer,PageRenamer,TextToBeat,OpenVessel, FifthSense, JBODDiskDriver, FiveStagePipelinedCPU, WabtecSummer2021} from './pages.js';
import {TitleCard, ProjectArea} from './components.js'

global.jQuery = require('jquery');
var $ = global.jQuery;
window.$ = $;

Vue.use(VueRouter);
//
const routes = [
  {path:'/user/:id', component: ProjectArea,
    children: [
     {path:'/MatrixCalculator', component: MatrixCalculator},
     {path:'/MusicTransposer', component: MusicTransposer},
     {path:'/PageRenamer', component: PageRenamer},
     {path:'/TextToBeat', component: TextToBeat},
     {path:'/OpenVessel', component: OpenVessel},
     {path:'/5thSense', component: FifthSense},
     {path:'/JBODDiskDriver', component: JBODDiskDriver},
     {path:'/5StagePipelinedCPU', component: FiveStagePipelinedCPU},
     {path:'/WabtecSummer2021', component: WabtecSummer2021},
    ]
  }
];
//
const router = new VueRouter({
   routes // short for `routes: routes`
  });

const app = new Vue({
  el: '#content',
  components:{
     "TitleCard": TitleCard,
      "IntroCard": IntroCard,
      "ProjectScroller": ProjectScroller,
      "ProjectArea": ProjectArea,
      "Gallery": Gallery
  },
  router
});

// Use <router-link to="/">Go to Foo</router-link>
// <router-link to="/Test">Go to Bar</router-link>
// to navigate

// and <router-view></router-view> to display
