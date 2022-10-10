// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCkHXkt1Np0qpMu1RPl7N072jEUc0h9IE",
  authDomain: "kitchenwarehouse-7ed28.firebaseapp.com",
  projectId: "kitchenwarehouse-7ed28",
  storageBucket: "kitchenwarehouse-7ed28.appspot.com",
  messagingSenderId: "194041223975",
  appId: "1:194041223975:web:74324e7d053c697656a702"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);

export const getItems = async () => {
  try {
    const myCollection = collection(firestore, 'products');
    let snapShotDB = await getDocs(myCollection);
    let dataDocs = snapShotDB.docs.map(doc => {
      let docsFormat = {
        ...doc.data(),
        id: doc.id
      };
      return docsFormat
    });
    return dataDocs;
  } catch (error) {
    console.log(error)
  }
};

export const getSingleItem = async (idParams) => {
  try {
    const docRef = doc(firestore, 'products', idParams);
    const docSnapShot = await getDoc(docRef);
    return { ...docSnapShot.data(), id: docSnapShot.id };
  } catch (error) {
    console.log(error);
  }
};

export const getItemsByCategory = async (catParams) => {
  try {
    const myCollection = collection(firestore, 'products');
    const queryCategory = query(myCollection, where('category', '==', catParams));
    const querySnapShot = await getDocs(queryCategory);
    let dataDocs = querySnapShot.docs.map(doc => {
      return { ...doc.data(), id: doc.id }
    })
    return dataDocs
  } catch (error) {
    console.log(error)
  }
};

export default firestore;