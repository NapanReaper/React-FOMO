import './App.css';
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

import { useEffect, useRef, useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

import SendInvites from './components/SendInvites';
import SignUp from './components/SignUp';

const firebaseConfig = {
  apiKey: "AIzaSyAIlke1MpAxgAGZPa2O9-NDYN_H19MuSLE",
  authDomain: "react-fomo.firebaseapp.com",
  projectId: "react-fomo",
  storageBucket: "react-fomo.appspot.com",
  messagingSenderId: "547631659710",
  appId: "1:547631659710:web:555643865014124908bcef",
  measurementId: "G-6XR8KXHHXF"
};

if (!firebase.app.length) {
  firebase.initializeApp(firebaseConfig)
}
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth)

  return (
    <div className="App">
      <header className="App-header">
        {user ? <SendInvites user={user} /> : <SignUp />}
      </header>
    </div>
  );
}

export default App;
