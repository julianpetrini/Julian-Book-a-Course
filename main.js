
//document.getElementById("test").innerHTML="hello world"

// nav toggle - select button and links
const navToggle=document.querySelector("#navToggle");
const nav =document.querySelector("#nav-links");

//add event listener. Connect css 
navToggle.addEventListener("click",() =>{
    nav.classList.toggle("nav-open")
})