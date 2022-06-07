//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyAPQAVFpP3lAoGv7GPCnZO6K6t6RXQefRQ",
    authDomain: "project-94-f19f5.firebaseapp.com",
    projectId: "project-94-f19f5",
    storageBucket: "project-94-f19f5.appspot.com",
    messagingSenderId: "79833894860",
    appId: "1:79833894860:web:48024a4b1b96efd7789769"
};
    firebase.initializeApp(firebaseConfig);
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;

function send()
{
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name:user_name,
          message:msg,
          like:0
    });

    document.getElementById("msg").value = "";
}

    } });  }); }

