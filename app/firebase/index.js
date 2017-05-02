import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyDMtu9FUFQTGTfkomVrHu8RtPMJk331ZIs",
        authDomain: "straus-todo-app.firebaseapp.com",
        databaseURL: "https://straus-todo-app.firebaseio.com",
        projectId: "straus-todo-app",
        storageBucket: "straus-todo-app.appspot.com",
        messagingSenderId: "219381990702"
    };
    firebase.initializeApp(config);
} catch (e) {
    console.log('Error starting up firebase', e);
}

export var firebaseRef = firebase.database().ref();
export default firebase;
