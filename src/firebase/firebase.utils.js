import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAF1jatBP3fvDqRy5KWJesx3tiYpg9cY_8",
    authDomain: "crwn-db-812f0.firebaseapp.com",
    databaseURL: "https://crwn-db-812f0.firebaseio.com",
    projectId: "crwn-db-812f0",
    storageBucket: "crwn-db-812f0.appspot.com",
    messagingSenderId: "34717327767",
    appId: "1:34717327767:web:6b04abbdef07ffed0b24d2",
    measurementId: "G-72H9LT83H0"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if(!snapShot.exists){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error){
            console.log('error creating user', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;