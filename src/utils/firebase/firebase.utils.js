import { initializeApp } from 'firebase/app';

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from 'firebase/auth';

import { getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch ,
  query,
  getDocs
} from 'firebase/firestore';


const firebaseConfig = {
  
  apiKey: "AIzaSyAxwLG8L28xc7fZy3inw8UZzm0ykL5LRiI",
  authDomain: "crwn-clothing-webapp-22951.firebaseapp.com",
  projectId: "crwn-clothing-webapp-22951",
  storageBucket: "crwn-clothing-webapp-22951.appspot.com",
  messagingSenderId: "605463477211",
  appId: "1:605463477211:web:52a80adbfe57193be545fe"
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

//----------------------------------Uploading SHOP_DATA to Firestore----------------------------------------//
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd, field) =>{
  const collectionRef = collection(db,collectionKey);
  const batch = writeBatch(db)

  objectsToAdd.forEach( (object) => {
    const docRef = doc(collectionRef,object.title.toLowerCase());
    batch.set(docRef,object)
  }) 
  await batch.commit();
  console.log("done");
}

//---------------------------------------Retreiving Data --------------------------------------------------//
export const getCategoriesAndDocuments = async () =>{
  const collectionRef = collection(db,'catgories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
   return querySnapshot.docs.map(docSnapshot =>docSnapshot.data());
 


//This is moved to categories.selector
  // const categoryMap = querySnapshot.docs.reduce((acc,docSnapshot) => {
  //     const {title,items} = docSnapshot.data();
  //     acc[title.toLowerCase()]=items;
  //     return acc;
  //   },{});
  //
  //return categoryMap;


}




//----------------------------------------Adding Users to Firestore------------------------------------------//
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async() => await signOut(auth);


export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback)