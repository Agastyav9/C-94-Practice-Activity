
//ADD YOUR FIREBASE LINKS

var firebaseConfig = {
    apiKey: "AIzaSyDa-dXIijMLqeeufi3bUpb6Mo-5ppK1vSg",
    authDomain: "kwitter-96785.firebaseapp.com",
    databaseURL: "https://kwitter-96785-default-rtdb.firebaseio.com",
    projectId: "kwitter-96785",
    storageBucket: "kwitter-96785.appspot.com",
    messagingSenderId: "813187779577",
    appId: "1:813187779577:web:21cad06eb054ec28704b28",
    measurementId: "G-ZB3YQKKDBT"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();


  function addUser()
  {
      user_name = document.getElementById("user_name").value
      firebase.database().ref("/").child(user_name).update({
          purpose : "adding user"
      });
  }