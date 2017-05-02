import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyDMtu9FUFQTGTfkomVrHu8RtPMJk331ZIs",
    authDomain: "straus-todo-app.firebaseapp.com",
    databaseURL: "https://straus-todo-app.firebaseio.com",
    projectId: "straus-todo-app",
    storageBucket: "straus-todo-app.appspot.com",
    messagingSenderId: "219381990702"
};
firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0'
    },
    isRunning: true,
    user: {
        name: 'Danny',
        age: 24
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('child_added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Get a job'
});

todosRef.push({
    text: 'Buy ammo'
});
