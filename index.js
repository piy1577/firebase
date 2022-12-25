const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA_yvxujN6NkJq2WWe0UzKJY9_eJ4lDppY",
    authDomain: "crwn-clothing-db-9ec7a.firebaseapp.com",
    projectId: "crwn-clothing-db-9ec7a",
    storageBucket: "crwn-clothing-db-9ec7a.appspot.com",
    messagingSenderId: "82349939450",
    appId: "1:82349939450:web:3789ed75fb1f76f6ae0743",
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const register = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.createUserWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user);
        })
        .catch((err) => {
            alert(err.message);
        });
};

const login = () => {
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    auth.signInWithEmailAndPassword(email, password)
        .then((res) => {
            console.log(res.user);
        })
        .catch((err) => {
            alert(err.message);
        });
};

const google = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();

    auth.signInWithPopup(googleProvider)
        .then((res) => {
            console.log(res.user);
        })
        .catch((err) => {
            console.log(err.message);
        });
};
