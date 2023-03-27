import { initializeApp } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-app.js";
    import { getDatabase , ref, set, child, get } from "https://www.gstatic.com/firebasejs/9.18.0/firebase-database.js";
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

    const name = document.getElementById('nameInp');
    const email = document.getElementById('emailInp');
    const username = document.getElementById('userInp');
    const pass = document.getElementById('passInp');
    const submit = document.getElementById('sub_btn');
    //..........................................Validation.............................//
    
    function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !==null;
    }
    function Validation(){
        let nameregex =/^[a-zA-Z\s]+$/;
        let emailregex = /^[a-zA-z0-9]+@(gmail|yahoo|outlook)\.com$/;
        let userregex=/^[a-zA-z0-9]{5,}$/;
        
        if(isEmptyOrSpaces(name.value) || isEmptyOrSpaces(email.value)|| isEmptyOrSpaces(username.value)|| isEmptyOrSpaces(pass.value)){
            alert("Please fill all the empty fields!");
            return false;
        }
        if(!nameregex.test(name.value)){
          alert("The name should only contain alphabets!");
          return false;
        }
        if(!emailregex.test(email.value)){
          alert("Enter a valid email!");
          return false;
        }
        if(!userregex.test(username.value)){
          alert("The name should only contain alphabets!");
          return false;
        }
        return true;
    }
    //.............................................Register User........................//

    function RegisterUser(){
        if(!Validation()){
            return;
        };
        const dbRef = ref(db);
        get(child(dbRef,"userList/"+ username.value)).then((snapshot)=>{
            if(snapshot.exists()){
                alert("Account Already Exist!");
            }
            else{
                set(ref(db,"userList/"+username.value),
                {
                    fullname:name.value,
                    email:email.value,
                    username:username.value,
                    password:encPass()

                })
                .then(()=>{
                    alert("user Added Successfully!")
                    window.location="login.html";
                })
                .catch((error)=>{
                    alert("error"+error);
                })
            }
        });
    }
    //...............................Encription..................../
    function encPass(){
        var pass12 = CryptoJS.AES.encrypt(pass.value, pass.value);
        return pass12.toString();
    }
    //..............................Function call...................//
    submit.addEventListener('click',RegisterUser);