import firebase from 'firebase/app'
import 'firebase/firestore'
// import Chart from '../components/lists/Chart';

const firebaseConfig = {
    apiKey: "AIzaSyDeRSsg7KmmEIXlMQoVNzxXE67kPLoMIYM",
    authDomain: "bibliophile-8ffc8.firebaseapp.com",
    databaseURL: "https://bibliophile-8ffc8.firebaseio.com",
    projectId: "bibliophile-8ffc8",
    storageBucket: "",
    messagingSenderId: "994255366730",
    appId: "1:994255366730:web:936fa4108fb9c60f"
  };
  firebase.initializeApp(firebaseConfig);
//   firebase.firestore().settings({ timestampsInSnapshots: true });


// const settings = {timestampsInSnapshots: true};
// db.settings(settings);




  export default firebase 