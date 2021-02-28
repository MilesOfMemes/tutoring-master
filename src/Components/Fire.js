import firebase from 'firebase';
// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBIxWkQmSKfI7QuEW4mQaP6x9jY0wPyvXU",
    authDomain: "tutoring-master.firebaseapp.com",
    projectId: "tutoring-master",
    storageBucket: "tutoring-master.appspot.com",
    messagingSenderId: "65578137768",
    appId: "1:65578137768:web:a2d84a765576f56f492a9d"
  };
  // Initialize Firebase
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;