import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
import { getDatabase, ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
const firebaseConfig = {
    apiKey: "AIzaSyCuHrtSAPLC6CQeuv9WkaWcjksWFWly6TY",
    authDomain: "meetup-5ffb3.firebaseapp.com",
    databaseURL: "https://meetup-5ffb3-default-rtdb.firebaseio.com",
    projectId: "meetup-5ffb3",
    storageBucket: "meetup-5ffb3.appspot.com",
    messagingSenderId: "180793006827",
    appId: "1:180793006827:web:7665f36e7487bcf42e3cae"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getDatabase();
//...........................................The Refrences.......................//

const username = document.getElementById('userInp');
const pass = document.getElementById('passInp');
const submit = document.getElementById('sub_btn');
//..................................Authentication...............................//
function AuthenticateUser() {
    const dbref = ref(db);

    get(child(dbref, "userList/" + username.value)).then((snapshot) => {
        if (snapshot.exists()) {
            let dbpass = decPass(snapshot.val().password);
            if (dbpass == pass.value) {
                login(snapshot.val());
            }
            else {
                error1.innerHTML="Enter Correct Password !";
                error2.innerHTML="";
            }
        }
        else {
            error1.innerHTML="";
            error2.innerHTML="Username does not exist!";
        }

    });


}
//.................................Decryption.......................//
function decPass(dbpass) {
    var pass12 = CryptoJS.AES.decrypt(dbpass, pass.value);
    var password= pass12.toString(CryptoJS.enc.Utf8);
    console.log(password);
    return password;
}
//..................................Login..........................//
function login(user) {
    let keepLoggedIn = document.getElementById('customSwitch1').checked;
    if (!keepLoggedIn) {
        sessionStorage.setItem('user', JSON.stringify(user));
        window.location = "home.html";
    }
    else {
        localStorage.setItem('keepLoggedIn', 'yes');
        localStorage.setItem('user', JSON.stringify(user));
        window.location = "home.html";
    }
}
submit.addEventListener('click', AuthenticateUser);
