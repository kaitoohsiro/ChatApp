import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import firebase from "firebase";

Vue.config.productionTip = false;

var firebaseConfig = {
  apiKey: "AIzaSyA83h-9woNOKMLAOQwnrIoqqcAyNJKEVpw",
  authDomain: "chat-app-89deb.firebaseapp.com",
  databaseURL: "https://chat-app-89deb-default-rtdb.firebaseio.com",
  projectId: "chat-app-89deb",
  storageBucket: "chat-app-89deb.appspot.com",
  messagingSenderId: "278848793927",
  appId: "1:278848793927:web:8ebc1cbe3f1c77c5e3b062",
  measurementId: "G-XQRSK402VG"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
