import Vue from "vue";
import VueRouter from "vue-router";
import Test from "./pages/Test.vue";
import {Gallery, IntroCard, ProjectScroller, MatrixCalculator, MusicTransposer,PageRenamer,TextToBeat,OpenVessel,Resume} from './pages.js';
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
     {path:'/OpenVessel', component: OpenVessel}
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
      "MatrixCalculator": MatrixCalculator,
      "MusicTransposer": MusicTransposer,
      "PageRenamer": PageRenamer,
      "TextToBeat": TextToBeat,
      "OpenVessel": OpenVessel,
      "ProjectArea": ProjectArea,
      "Gallery": Gallery
  },
  router
});

// Use <router-link to="/">Go to Foo</router-link>
// <router-link to="/Test">Go to Bar</router-link>
// to navigate

// and <router-view></router-view> to display
