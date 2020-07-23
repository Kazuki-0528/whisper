import Vue from "vue";
import App from "./App";
import router from "./router";

import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faSignOutAlt,
  faEllipsisV,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faUser, faSignOutAlt, faEllipsisV);

import { firestorePlugin } from "vuefire";
import firebase from "firebase";
import "firebase/firebase";

Vue.use(firestorePlugin);

firebase.initializeApp({
  apiKey: "AIzaSyB-5fUrXhKNdTL-5s9pBn4LRGgFNmOFbhc",
  authDomain: "practice-firebase-f1854.firebaseapp.com",
  databaseURL: "https://practice-firebase-f1854.firebaseio.com",
  projectId: "practice-firebase-f1854",
  storageBucket: "practice-firebase-f1854.appspot.com",
  messagingSenderId: "1020702246786",
  appId: "1:1020702246786:web:3fc8e2f129cfc0d890b19b",
  measurementId: "G-KPT6H4417J",
});

export const db = firebase.firestore()
export const auth = firebase.auth()

Vue.component("fa", FontAwesomeIcon);

Vue.config.productionTip = false;

new Vue({
  router,
  render: function(h) {
    return h(App);
  },
}).$mount("#app");
