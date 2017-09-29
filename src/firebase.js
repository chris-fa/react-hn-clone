import * as firebase from 'firebase';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAL7U4T8s87NPZZVNvm8a84rTbrmJu5MUQ",
    authDomain: "react-hn-clone.firebaseapp.com",
    databaseURL: "https://react-hn-clone.firebaseio.com",
    projectId: "react-hn-clone",
    storageBucket: "react-hn-clone.appspot.com",
    messagingSenderId: "98818537609"
};

firebase.initializeApp(config);

export default firebase;
