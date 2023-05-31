let searchBtn = document.querySelector('#search-btn');
let searchBar = document.querySelector('.search-bar-container');
let formBtn = document.querySelector('#login-btn');
let loginForm = document.querySelector('.login-form-container');
let formClose = document.querySelector('#form-close');
let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');
let videoBtn = document.querySelectorAll('.vid-btn');

window.onscroll = () => {
    searchBtn.classList.remove('fa-times');
    searchBtn.classList.remove('active');
    menu.classList.remove('fa-times')
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
}

menu.addEventListener('click', ()=> {
    menu.classList.toggle('fa-times')
    navbar.classList.toggle('active');
});

searchBtn.addEventListener('click', ()=> {
    searchBtn.classList.toggle('fa-times')
    searchBar.classList.toggle('active');
});


formBtn.addEventListener('click', ()=> {
    loginForm.classList.add('active');
});

formClose.addEventListener('click', ()=> {
    loginForm.classList.remove('active');
});


videoBtn.forEach(btn => {
    btn.addEventListener('click', ()=> {
        document.querySelector('.controls .active').classList.remove('active');
        btn.classList.add('active');
        let src = btn.getAttribute('data-src')
        document.querySelector('#video-slider').src = src;
    })
});


function validateform(){  
    var x=document.myform.email.value;  
    var password=document.myform.password.value;  
      
    var atposition=x.indexOf("@");  
    var dotposition=x.lastIndexOf(".");  
    if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
    alert("Please enter a valid e-mail address");  
    return false;  
    }  
    else if(password.length<6){  
      alert("Password must be at least 6 characters long");  
      return false;  
      }
      else {
        document.myform.email.value = ""
        document.myform.password.value = ""
        alert("Successfully logged in");
        console.log("true")
        return true
      }
        
      }




