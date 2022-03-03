import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyAk90MRsSWCelYDgtAXMxxJqq4UeNpNT7E",
  authDomain: "crown-db-35e4e.firebaseapp.com",
  projectId: "crown-db-35e4e",
  storageBucket: "crown-db-35e4e.appspot.com",
  messagingSenderId: "969458050965",
  appId: "1:969458050965:web:74097bcb2e8527b0baf89c",
  measurementId: "G-S07BWFJW7L"
  };

  export const createUserProfileDocument = async(userAuth,additionalData) => {
    if(!userAuth) return;
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
      }catch(err){
        console.log(err.message)
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();


  const provider = new firebase.auth.GoogleAuthProvider();

  provider.setCustomParameters({prompt: 'select_account'});


  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;