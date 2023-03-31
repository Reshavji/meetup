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
let messages = [];
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
}



function postMessage() {
    // Get the input elements
    let messageInput = document.getElementById('message');
    let imageInput = document.getElementById('image');
    let videoInput = document.getElementById('video');
    // Get the message text
    let messageText = messageInput.value.trim();
    // Get the image URL
    let imageURL = null;
    if (imageInput.files.length > 0) {
        imageURL = URL.createObjectURL(imageInput.files[0]);
    }
    // Get the video URL
    let videoURL = null;
    if (videoInput.files.length > 0) {
        videoURL = URL.createObjectURL(videoInput.files[0]);
    }
    // Return if message, image, and video are all empty
    if (!messageText && !imageURL && !videoURL) return;
    // Create a new message object with the text, image URL, video URL, and current time
    let message = {
        text: messageText,
        imageURL: imageURL,
        videoURL: videoURL,
        timestamp: new Date()
    };
    // Add the message to the beginning of the messages array
    messages.unshift(message);
    messageInput.value = '';
    imageInput.value = '';
    videoInput.value = '';
    // Update the message display
    displayMessages();
}
function displayMessages() {
    // Get the messages container element
    let messagesContainer = document.getElementById('messages');
    // Clear the container
    messagesContainer.innerHTML = '';
    // Loop through the messages array and add each message to the container
    for (let i = 0; i < messages.length; i++) {
        let message = messages[i];


        // Create a new message element
        let messageElement = document.createElement('div');
        messageElement.classList.add('message');

        
// ===================================================================

     let dothis=document.createElement("div");
     dothis.classList.add("post-activity");

    //  let aaa=document.createElement('div');
    //  dothis.appendChild(aaa);

    //  let imm=document.createElement('img');
    //  imm.setAttribute("src","message.imageURL");
    //  imm.classList.add("post-activity-user-icon");
    //  aaa.appendChild(imm);

    //  let arrr=document.createElement('img');
    //  arrr.setAttribute("src","image/down-arrow.png");
    //  arrr.classList.add("post-activity-arrow-icon");
    //  aaa.appendChild(arrr)

     let bbb=document.createElement('div');
     bbb.classList.add("post-activity-link")
     dothis.appendChild(bbb)

     let brrr=document.createElement('i')
     brrr.classList.add("fa","fa-thumbs-up")
     brrr.setAttribute("onclick","myFunction(this)")
     bbb.appendChild(brrr);

     let spaaa=document.createElement('span')
     spaaa.textContent="like";
     bbb.appendChild(spaaa)


     let ccc=document.createElement('div');
     ccc.classList.add("post-activity-link")
     dothis.appendChild(ccc)

     let crrr=document.createElement('i')
     crrr.classList.add("fa-solid", "fa-comment-dots")
     ccc.appendChild(crrr);

     let sbaaa=document.createElement('span')
     sbaaa.textContent="Comment";
     sbaaa.classList.add("deet");
    

    //  sbaaa.setAttribute("onclick","work()");
     ccc.appendChild(sbaaa)    



    

     let ddd=document.createElement('div');
     ddd.classList.add("post-activity-link")
     dothis.appendChild(ddd)

     
     let drrr=document.createElement('i')
     drrr.classList.add("fa-solid","fa-share")
     ddd.appendChild(drrr);

     let scaaa=document.createElement('span')
     scaaa.textContent="Share";
     ddd.appendChild(scaaa)


     
     let eee=document.createElement('div');
     eee.classList.add("post-activity-link")
     dothis.appendChild(eee)

     let errr=document.createElement('i')
     errr.classList.add("fa-solid","fa-share")
     eee.appendChild(errr);

     let sdaaa=document.createElement('span')
     sdaaa.textContent="Send";
     eee.appendChild(sdaaa)

     


    //  ==============================================================













    //  console.log(dothis)

    

     

     

        // let btn = document.createElement("i");
        // btn.classList.add("fa-solid", "fa-thumbs-up");
        // btn.setAttribute("onclick", "myFunction(this)")
        // btn.setAttribute("id", "icon-color");
        // btn.textContent = "Like";





        let mann=document.getElementById("indel");

        // let remove = document.createElement('i');
        // remove.classList.add('Mass');
        // remove.textContent = "Remove";
        // remove.setAttribute("id","del")
        mann.addEventListener('click', function (event) {
          messages.splice(i, 1);
          displayMessages();
        })



        // let sharebtn = document.createElement('i');
        // sharebtn.setAttribute("id", "icon-color");
        // sharebtn.textContent = "Share";
        // sharebtn.classList.add("fa-solid", "fa-share")




        // let combtn = document.createElement('i');
        // combtn.setAttribute("id", "icon-color");
        // combtn.classList.add("fa-solid", "fa-comment-dots")
        // combtn.textContent = " comment"

        let last=document.createElement('div');
        last.classList.add("manee");

        sbaaa.addEventListener('click', function (event) {
            last.classList.toggle("manee")
            // displayMessages();
          })
        
          let textElement = document.createElement('div');
          textElement.setAttribute("id", "come")

        let comim=document.createElement('img')
        comim.setAttribute("id","opo");
        comim.src = message.imageURL;
        if(textElement){
            comim.setAttribute("src",currentUser.name)
        }

        let combox=document.createElement("input");
        combox.setAttribute("id", "haha");
        combox.setAttribute("placeholder","write a comment");

        last.classList.add("last");
        last.appendChild(comim); 
        last.appendChild(combox);


        let send = document.createElement('i')
        send.setAttribute("id", "icon-color")
        send.classList.add("fa-solid", "fa-share-nodes")
        send.textContent = "Send";

        let lscs = document.createElement('h3');
        lscs.setAttribute("id", "bnb");

        lscs.textContent = currentUser.username;

        let sps = document.createElement("p")
        sps.setAttribute("id", "any");
        sps.textContent = "Founder and CEO at Gellelio Group | Angel Investor";

        let spss = document.createElement("p")
        spss.setAttribute("id", "any");
        spss.textContent = "Just now"

        // <button id="speed" onclick="document.getElementById('id01').style.display='block'">Open Modal</button>

        let dots = document.createElement('i');
        dots.classList.add('fas', 'fa-ellipsis-v');
        // remove.textContent = "Remove";
        dots.setAttribute("id", "dell");
        dots.setAttribute("onclick","document.getElementById('id01').style.display='block'");
        // dots.textContent="open Modal"
        
        var modal = document.getElementById('id01');

        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }

        
        
        // messageElement.appendChild(spann)
        // let textElement = document.createElement('div');
        // textElement.setAttribute("id", "come")
        // let spann=document.createElement('div');
        // spann.setAttribute("id","spann")

        textElement.appendChild(dots);

        // Set the text content of the message element
        let spann = document.createElement('div');
        spann.setAttribute("id", "spann")



        let don = document.createElement('img')
        don.setAttribute("id", "suc")

        // don.src = message.imageURL;
        don.setAttribute("src",currentUser.name)
        textElement.appendChild(don)

        textElement.appendChild(lscs);
        textElement.appendChild(sps)
        textElement.appendChild(spss)

        messageElement.appendChild(textElement);
        messageElement.appendChild(spann)
        spann.textContent = message.text;
        // textElement.appendChild(remove)
       

        // messageElement.appendChild(lscs);


        if (textElement) {
            
            messageElement.appendChild(dothis);
            messageElement.appendChild(last)
            spann.textContent = message.text; 

        }
        // Add the image to the message element, if present
        if (message.imageURL) {
            let imageElement = document.createElement('img');
            imageElement.src = message.imageURL;
            imageElement.classList.add('message-image');
            imageElement.setAttribute("width", "100%")
            messageElement.appendChild(spann)
            messageElement.appendChild(imageElement);
            // messageElement.appendChild(btn);
            // messageElement.appendChild(combtn);
            // messageElement.appendChild(sharebtn);
            // messageElement.appendChild(send)
            messageElement.appendChild(dothis);
            messageElement.appendChild(last)
            
            

        }
        console.log(message)

        // Add the video to the message element, if present
        if (message.videoURL) {
            let videoElement = document.createElement('video');
            videoElement.src = message.videoURL;
            videoElement.width = 500;
            videoElement.height = 500;
            videoElement.setAttribute("controls", "controls");
            videoElement.classList.add('message-video');
            messageElement.appendChild(videoElement);
            // messageElement.appendChild(btn);
            // messageElement.appendChild(combtn);
            // messageElement.appendChild(sharebtn);
            // messageElement.appendChild(send);
            messageElement.appendChild(dothis);
            messageElement.appendChild(last)
        }
        messagesContainer.appendChild(messageElement);
    }

}
