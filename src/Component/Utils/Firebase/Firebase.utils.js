import { initializeApp } from "firebase/app";
import {getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider} from "firebase/auth";
import {getFirestore,doc ,getDoc,setDoc, collection} from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyDIb5XY8L_YK82HIxngPc07w_Qd6NkVydI",
    authDomain: "crown-clothing-db-5e6fc.firebaseapp.com",
    projectId: "crown-clothing-db-5e6fc",
    storageBucket: "crown-clothing-db-5e6fc.appspot.com",
    messagingSenderId: "672274748031",
    appId: "1:672274748031:web:b6035407ef99c85d2da54a"
};

const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
})


export const auth = getAuth();
export const signInWithGooglePopup = ()=> signInWithPopup(auth,provider);

const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth)=>{
    const userDocRef = doc(db, 'users', userAuth.uid);

    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if(!userSnapshot.exists()){
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await setDoc(userDocRef,{
                displayName,email,createdAt
            })
        } catch (error) {
            console.log("Error While Creating The User :  " , error.message);
        }
    }
    return userDocRef;


}

