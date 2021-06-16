import firebase from "firebase/app"
import "firebase/storage"

const firebaseConfig = {
    apiKey: "AIzaSyAxzwXwjn2QaSBNC1DN00wjEpMJQ5q_xqA",
    authDomain: "coba-830cc.firebaseapp.com",
    databaseURL: "https://coba-830cc-default-rtdb.firebaseio.com",
    projectId: "coba-830cc",
    storageBucket: "coba-830cc.appspot.com",
    messagingSenderId: "165279084523",
    appId: "1:165279084523:web:bb2ad484f9c62cadae33ae"
};

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default {storage, firebaseConfig};
