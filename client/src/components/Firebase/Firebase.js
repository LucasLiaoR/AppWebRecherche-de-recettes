import app from 'firebase/app';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCnn8B9y-bwn7R4zga9cCte3Tz_7XQT5Q8",
    authDomain: "apprechercherecette.firebaseapp.com",
    projectId: "apprechercherecette",
    storageBucket: "apprechercherecette.appspot.com",
    messagingSenderId: "615876266878",
    appId: "1:615876266878:web:21410ee85464f46fbdc12f"
}

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
    }

    //inscription
    signupUser = (email, password) => {
        this.auth.createUserWithEmailAndPassword(email, password);
    }

    //connexion
    signinUser = (email, password) => {
        this.auth.signInWithEmailAndPassword(email, password);
    }


    //deconnexion
    signoutUser = () => {
        this.auth.signOut();
    }
}

export default Firebase;