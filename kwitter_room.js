
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyDx82FNZVGjtwzxASzzDvQE7bsR_PLIlLw",
      authDomain: "kwitter-485dc.firebaseapp.com",
      databaseURL: "https://kwitter-485dc-default-rtdb.firebaseio.com",
      projectId: "kwitter-485dc",
      storageBucket: "kwitter-485dc.appspot.com",
      messagingSenderId: "462894338898",
      appId: "1:462894338898:web:e171f6b66e4fff46d4e08b",
      measurementId: "G-Y5YVY1XME5"
    };
    firebase.intialiseApp(firebaseConfig);
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name -" + Room_names);
row ="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#  " + Room_names+"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();

function redirectToRoomName(name){

      console.log(name);
      localStorage.setItem("room_name" , Room_names);
      window.location = "kwitter_page.html";
}

function addRoom(){

      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });

localStorage.setItem("room_name" , room_name);
window.location = "kwitter_page.html";
}