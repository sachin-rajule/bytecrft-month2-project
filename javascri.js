
// Form validation

document.addEventListener("DOMContentLoaded", function(){

let form = document.getElementById("contactForm");

if(form){

form.addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value;
let email = document.getElementById("email").value;

if(name === "" || email === ""){

document.getElementById("msg").innerText="Please fill all fields";

}

else{

document.getElementById("msg").innerText="Message sent successfully!";

form.reset();

}

});

}

});


// Scroll animation example

window.addEventListener("scroll",function(){

let cards=document.querySelectorAll(".service-card");

cards.forEach(card=>{

let position=card.getBoundingClientRect().top;

if(position<window.innerHeight){

card.style.opacity="1";
}

});

});

document.getElementById("contactForm").addEventListener("submit", function(e){

e.preventDefault();

let name = document.getElementById("name").value.trim();
let email = document.getElementById("email").value.trim();
let message = document.getElementById("message").value.trim();

let valid = true;

document.getElementById("nameError").innerText="";
document.getElementById("emailError").innerText="";
document.getElementById("messageError").innerText="";

if(name === ""){
document.getElementById("nameError").innerText="Name is required";
valid=false;
}

if(email === ""){
document.getElementById("emailError").innerText="Email is required";
valid=false;
}

if(message === ""){
document.getElementById("messageError").innerText="Message cannot be empty";
valid=false;
}

if(valid){

document.getElementById("successMessage").innerText="Your message has been sent successfully!";

document.getElementById("contactForm").reset();

}

});

function filterProjects(category){

let projects=document.querySelectorAll(".project");

projects.forEach(project=>{

if(category==="all"){
project.style.display="block";
}

else if(project.classList.contains(category)){
project.style.display="block";
}

else{
project.style.display="none";
}

});

}

function filterProjects(category){

let projects=document.querySelectorAll(".project");
let buttons=document.querySelectorAll(".filter-btn");

buttons.forEach(btn=>btn.classList.remove("active"));
event.target.classList.add("active");

projects.forEach(project=>{

if(category==="all"){
project.style.display="block";
}

else if(project.classList.contains(category)){
project.style.display="block";
}

else{
project.style.display="none";
}

});

}