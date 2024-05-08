  // Import the functions you need from the SDKs you need
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDeqPbhzIk2SAh0iSD2Vc83kORXrjnE1e8",
    authDomain: "form-619eb.firebaseapp.com",
    projectId: "form-619eb",
    storageBucket: "form-619eb.appspot.com",
    messagingSenderId: "266320556869",
    appId: "1:266320556869:web:118e40dada9c9036d1c42c"
  };

  // Initialize Firebase
  var app = firebase.initializeApp(firebaseConfig);

    var auth = firebase.auth();




// var name = "faraz";
// var arr = ["farooq", 500,true];
// var obj = {
//     name: "faraz",
//     age: 20,
//     isMarried: false}

// localStorage.setItem("obj",JSON.stringify(obj));

// var getData = localStorage.getItem("obj");

// console.log(JSON.parse(getData));

// localStorage.removeItem("age");

// localStorage.clear();

// function clicked(){
//     var input = document.getElementById("name");
//     var getDataFromLocalStorage = localStorage.getItem("obj");
//     var arr = JSON.parse(getDataFromLocalStorage);

//     if (!arr){
//         arr = [];
//     }

//     var obj = {name: input.value};

//     arr.push(obj);

//     localStorage.setItem("obj", JSON.stringify(arr));

//     console.log(obj);

//     input.value = ""
// }

function changeIcon(){
    var passwordInput = document.getElementById("password");
    var img = document.getAnimations("img");

    if(passwordInput.type === "password"){
        passwordInput.type = "text";
        img.src = "./img/show.png";
    } else {
        passwordInput.type = "password";
        img.src = "./img/hide.png";
    }
}

function validation(){
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var mobileNumber = document.getElementById("mobileNumber").value;

    var userCheck = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
    var emailCheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    var passwordCheck = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    var mobileCheck = /^((\+92)|(0092))-{0,1}\d{3}-{0,1}\d{7}$|^\d{11}$|^\d{4}-\d{7}$/;

    if(userCheck.test(username)){
        document.getElementById("usernameError").innerHTML = "";
    } else {
        document.getElementById("usernameError").innerHTML = "** Invalid";
        return false;
    }

    if(emailCheck.test(email)){
        document.getElementById("emailError").innerHTML = "";
    } else {
        document.getElementById("emailError").innerHTML = "** Invalid";
        return false;
    }

    if(passwordCheck.test(password)){
        document.getElementById("passwordError").innerHTML = "";
    } else {
        document.getElementById("passwordError").innerHTML = "** Invalid";
        return false;
    }

    if(mobileCheck.test(mobileNumber)){
        document.getElementById("mobileError").innerHTML = "";
    } else {
        document.getElementById("mobileError").innerHTML = "** Invalid";
        return false;
    }

    var userDetails = {
        name: username,
        mobile: mobileNumber
    };

    localStorage.setItem("userDetails", JSON.stringify(userDetails));

    firebase.auth().createUserWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    console.log(user);
    window.location = "profile.html";
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
  });

}

function login(){
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in
    var user = userCredential.user;
    console.log(user)
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
});
}

firebase.auth().onAuthStateChanged((user) => {
    if (user) { 
        if(location.pathname !== "/profile.html"){
            window.location = "profile.html";
        }
    
      console.log(user)
    } else {
      if(location.pathname !== "/login.html" && location.pathname !== "/index.html") {
        window.location = "login.html";
      } 
      console.log("not logged in")
    }
 });
  
