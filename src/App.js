import './App.css';
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import { StyledFirebaseAuth } from 'react-firebaseui';
import { Component } from 'react'
import { Button } from 'react-bootstrap';
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth'
// import initializeApp  from "firebase/compat/app";

firebase.initializeApp({
  apiKey: "AIzaSyBZFH3Fih1zJGjCCmoxNumjtYcCaDvRFFg",
  authDomain: "react-login-2cd54.firebaseapp.com",
})
class App extends Component {
  state = {isSignedIn : false}
  uiConfig = {
    signInFlow: 'popup',
    // signInSuccessUrl: '/',
    signInOptions: [
      // firebase.auth().signInWithPopup(new firebase.auth.GoogleAuthProvider(PROVIDER_ID)),
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.FacebookAuthProvider.PROVIDER_ID,
      firebase.auth.TwitterAuthProvider.PROVIDER_ID,
      firebase.auth.GithubAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
      /////////////////////////////
      // { provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      //   requireDisplayName: true
      // },
    ],
    callbacks: {
      signInSuccessWithAuthResult: () => false
    }
  }
//   callbacks: {
//     signInSuccess: function(currentUser, credential, redirectUrl) {
//       const userId = currentUser.uid;
//       redirectUrl = `/users/${userId}`;
//       return false
//     },
//   }
// };
  componentDidMount = () => {
    
    firebase.auth().onAuthStateChanged(user => {
      this.setState({isSignedIn: !!user})
      console.log('user',user)
    })
  }
  render(){
  return (
    <div className="App">
    {this.state.isSignedIn ? (
      <>
      <div>Signed In</div>
      <Button onClick={()=>firebase.auth().signOut()}>Sign Out!</Button>
      <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
      <h3>Your Email: {firebase.auth().currentUser.email}</h3>
      <img alt='avatar' src={firebase.auth().currentUser.photoURL}></img>
      <p>Phone: {firebase.auth().currentUser.phoneNumber}</p>
      </>
      ) : (
        <StyledFirebaseAuth uiCallback={ui => ui.disableAutoSignIn()} uiConfig={this.uiConfig} firebaseAuth={firebase.auth()}/>
        )}
    </div>
  );
}
}

{/* <StyledFirebaseAuth 
        uiConfig={this.uiConfig} 
        firebaseAuth = {firebase.auth()}/> */}
export default App;
// https://stackoverflow.com/questions/48863485/typeerror-cannot-read-property-googleauthprovider-of-undefined
// https://stackoverflow.com/questions/48475668/firebaseui-signinsuccess-redirect-in-callback
// https://www.google.com/search?q=%5Bfirebaseui%5D+signInSuccess+callback+is+deprecated.+Please+use+signInSuccessWithAuthResult+callback+instead.&sxsrf=APq-WBu4bwiMb7tk6X6oKZ1xcTBAQPz90w%3A1648406647285&ei=d7BAYr2EEeKOseMPrNyfyAg&ved=0ahUKEwj9m6Cl-eb2AhViR2wGHSzuB4kQ4dUDCA4&uact=5&oq=%5Bfirebaseui%5D+signInSuccess+callback+is+deprecated.+Please+use+signInSuccessWithAuthResult+callback+instead.&gs_lcp=Cgdnd3Mtd2l6EANKBAhBGABKBAhGGABQAFgAYLEBaABwAHgAgAEAiAEAkgEAmAEAoAEBwAEB&sclient=gws-wiz
// https://stackoverflow.com/questions/48592656/firebase-auth-is-not-a-function
// https://www.google.com/search?q=App.js%3A44+Uncaught+TypeError%3A+firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__.default.auth.onAuthStateChanged+is+not+a+function&oq=App.js%3A44+Uncaught+TypeError%3A+firebase_compat_app__WEBPACK_IMPORTED_MODULE_1__.default.auth.onAuthStateChanged+is+not+a+function&aqs=chrome..69i57.560j0j7&sourceid=chrome&ie=UTF-8
// https://stackoverflow.com/questions/47353822/firebase-authentication-auth-auth-domain-config-required