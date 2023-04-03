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
    const msgshow = document.getElementById('box');
    // const error = document.getElementById('error1');
    //..........................................Validation.............................//
    
    function isEmptyOrSpaces(str){
        return str === null || str.match(/^ *$/) !==null;
    }
    function Validation(){
        let nameregex =/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/;
        let emailregex = /^[a-zA-z0-9]+@(gmail|yahoo|outlook|cyclesat)\.com$/;
        let userregex=/^[A-Za-z\s]{1,}[\.]{0,1}[A-Za-z\s]{1,}$/;
        let passregex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        
        if(isEmptyOrSpaces(name.value)|| isEmptyOrSpaces(email.value)|| isEmptyOrSpaces(username.value)|| isEmptyOrSpaces(pass.value)){
            error.innerHTML="Please fill all the empty fields!";
            return false;
        }
        if(!nameregex.test(name.value)){
            error1.innerHTML="Enter URL not correct!";
            return false;
          }
          else{
            error1.innerHTML="";
          }
       if(!emailregex.test(email.value)){
          error2.innerHTML="Enter a valid email!";
          return false;
        }
        else{
            error2.innerHTML="";
        }
        if(!userregex.test(username.value)){
          error3.innerHTML="The name should only contain alphabets";
            
          return false;
        }
        else{
            error3.innerHTML="";
        }
       
          if(!passregex.test(pass.value)){
             error4.innerHTML="Password should be Minimum 8 characters, At least one uppercase letter, one lowercase letter, one number and one special character!";
            return false;
          }
          else{
            error4.innerHTML="";
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
                error.innerHTML="Account Already Exist!";
            }
            else{
                set(ref(db,"userList/"+username.value),
                {
                    name:name.value,
                    email:email.value,
                    username:username.value,
                    password:encPass()

                })
                .then(()=>{
                    
                    msgshow.style.display="flex";
                    setTimeout(function() {
                        window.location="index.html";
                      }, 2000);
                    
                })
                .catch((error)=>{
                    alert("error"+error);
                    error.innerHTML=error;
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
