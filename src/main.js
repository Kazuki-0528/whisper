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
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: ""
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
