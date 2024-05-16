var firebaseConfig = {
    apiKey: "AIzaSyBWirZFVOdty-B_wmlvvnBHFfhUFGA_Xes",
    authDomain: "testdatabase-3c101.firebaseapp.com",
    databaseURL: "https://testdatabase-3c101-default-rtdb.firebaseio.com",
    projectId: "testdatabase-3c101",
    storageBucket: "testdatabase-3c101.appspot.com",
    messagingSenderId: "702034613002",
    appId: "1:702034613002:web:244698d718f6f6814ae0f3"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);
  var auth = firebase.auth();
  var database = firebase.database();

  function getVal(){
    var name = document.getElementById("name");
    var rollno = document.getElementById("rollno");
    var obj = {name:name.value,
        rollno:rollno.value};
        var key = Date.now().toString(25);
        firebase.database().ref("users/" + key).set(obj);
    }

    function getDataFromDatabase(){
        firebase.database().ref("users").on("child_added", function (data){
            console.log(data.val());
        })
    }
    getDataFromDatabase()