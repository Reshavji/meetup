let profileMenu = document.getElementById("profileMenu");

function toggleMenu() {
    profileMenu.classList.toggle("open-menu");
}
//............................................Ref.........................//
let userlink = document.getElementById('userlink');
let signoutlink = document.getElementById('signoutlink');
let brandimg = document.getElementById('brandimg');
let proname = document.getElementById('pn');
let proimg = document.getElementById('proimg');
let profile = document.getElementById('profile');
let postimg = document.getElementById('postimg');
let profileimg = document.getElementById('profileimg');
let pname = document.getElementById('pname');
var currentUser = null;
//.........................................Functions...........................//
function getUsername() {
    let keepLoggedIn = localStorage.getItem("keepLoggedIn");
    if (keepLoggedIn == "yes") {
        currentUser = JSON.parse(localStorage.getItem('user'));
    }
    else {
        currentUser = JSON.parse(sessionStorage.getItem('user'))
    }
}
function Signout(){
    sessionStorage.removeItem('user');
    localStorage.removeItem('user');
    localStorage.removeItem('keepLoggedIn');
    location.replace("index.html");
}
window.onload = function () {
    getUsername();
    if (!currentUser) {
        signoutlink.href ="index.html";
        location.replace("index.html");
    }
    else {
        brandimg.src =currentUser.name;
    proname.innerText = currentUser.username;
    pname.innerText = currentUser.username;
    profile.src = currentUser.name;
    proimg.src = currentUser.name;
    postimg.src = currentUser.name;
    profileimg.src = currentUser.name;
        signoutlink.href = "javascript:Signout()";
    }
}