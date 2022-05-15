import { createApp } from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";

import BootstrapVue3 from "bootstrap-vue-3";

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-3/dist/bootstrap-vue-3.css";

createApp(App).use(router).use(BootstrapVue3).mount("#app");
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCZvawo4JnISANMiPaihzYHXpaw_8qy0VU",
  authDomain: "baemin-taegeun.firebaseapp.com",
  projectId: "baemin-taegeun",
  storageBucket: "baemin-taegeun.appspot.com",
  messagingSenderId: "52084758333",
  appId: "1:52084758333:web:c09c2f4fdb2d04a3cb5754",
  measurementId: "G-7F93V4EPEM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
