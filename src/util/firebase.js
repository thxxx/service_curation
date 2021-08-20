import firebase from 'firebase';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
    apiKey: "AIzaSyBGtGUIcDkIpQxCzyvMjSMZA6FXb-lmX9A",
    authDomain: "servicecuration.firebaseapp.com",
    databaseURL: "https://servicecuration-default-rtdb.firebaseio.com",
    projectId: "servicecuration",
    storageBucket: "servicecuration.appspot.com",
    messagingSenderId: "879614272943",
    appId: "1:879614272943:web:5672527edf07352f35fb5a",
    measurementId: "G-D8JQBGCC81"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

export default firebase;