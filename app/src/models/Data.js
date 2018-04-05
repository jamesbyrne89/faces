import Rebase from 're-base';
import firebase from 'firebase';

// Firebase

const config = {
    apiKey: 'AIzaSyAJPmiX_d1DzFALvH_6_IPKfBu_QZN6a2A',
    authDomain: 'faces-4a0b7.firebaseapp.com',
    databaseURL: 'https://faces-4a0b7.firebaseio.com',
    projectId: 'faces-4a0b7',
    storageBucket: 'faces-4a0b7.appspot.com',
    messagingSenderId: '353398490697'
  };

const app = !firebase.apps.length ? firebase.initializeApp(config) : firebase.app();
const base = Rebase.createClass(app.database());
const facebookProvider = new firebase.auth.FacebookAuthProvider();
const githubProvider = new firebase.auth.GithubAuthProvider();


export { app, base, facebookProvider, githubProvider };