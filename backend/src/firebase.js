import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAvjIcDIFWvqnBqMY_XiWFUg0uL5cBMAgQ",
    authDomain: "coba2-9f4d3.firebaseapp.com",
    databaseURL: "https://coba2-9f4d3-default-rtdb.firebaseio.com",
    projectId: "coba2-9f4d3",
    storageBucket: "coba2-9f4d3.appspot.com",
    messagingSenderId: "749602916088",
    appId: "1:749602916088:web:b176606d0ee145a9141d0d"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default {storage, firebaseConfig};
