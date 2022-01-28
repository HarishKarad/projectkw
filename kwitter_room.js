
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyBpeyOWmwtSxuxVso7ILMLJ7iTgXwpRzG8",
      authDomain: "kwitter-3c9af.firebaseapp.com",
      databaseURL: "https://kwitter-3c9af-default-rtdb.firebaseio.com",
      projectId: "kwitter-3c9af",
      storageBucket: "kwitter-3c9af.appspot.com",
      messagingSenderId: "509595416759",
      appId: "1:509595416759:web:e45c8ae0190d92e780f532"
    };
    
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
