import firebase from 'firebase'
import 'firebase/firestore'

const config = {
  apiKey: "AIzaSyDZCodq8AaJoz54h6TyQDl_rN4GDNUXOeI",
  authDomain: "best-deals-admin.firebaseapp.com",
  databaseURL: "https://best-deals-admin.firebaseio.com",
  projectId: "best-deals-admin",
  storageBucket: "best-deals-admin.appspot.com",
  messagingSenderId: "524889628107"
};

firebase.initializeApp(config);

const auth = firebase.auth()
const firestore = firebase.firestore()
const currentUser = auth.currentUser

//firestore collections
const usersCollection = firestore.collection('users')
const productCollection = firestore.collection('products')
const reviewCollection = firestore.collection('reviews')


export {
    firestore,
    auth,
    currentUser,
    usersCollection,
    productCollection,
    reviewCollection
}