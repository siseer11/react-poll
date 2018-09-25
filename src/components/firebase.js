import * as fire from 'firebase';

var config = {
  apiKey: "AIzaSyCD87vzJJrqxi9wtLdm5KhbutCnUGDac5k",
  authDomain: "voting-app-c6f11.firebaseapp.com",
  databaseURL: "https://voting-app-c6f11.firebaseio.com",
  projectId: "voting-app-c6f11",
  storageBucket: "voting-app-c6f11.appspot.com",
  messagingSenderId: "618233126779"
};

const firebase = fire.initializeApp(config);

export default firebase;