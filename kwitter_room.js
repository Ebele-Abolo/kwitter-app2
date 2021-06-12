 // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyAts75jY57_yYvXDYLNpZbRZYfV2R6_q84",
    authDomain: "projectname-6e3dd.firebaseapp.com",
    databaseURL: "https://projectname-6e3dd-default-rtdb.firebaseio.com",
    projectId: "projectname-6e3dd",
    storageBucket: "projectname-6e3dd.appspot.com",
    messagingSenderId: "1028635853293",
    appId: "1:1028635853293:web:7b004cab98a8959661a7e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

//ADD YOUR FIREBASE LINKS HERE
function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "kwitter_page.html";
}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class=' room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}

function logout() {
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
    window.location = "index.html";
}
