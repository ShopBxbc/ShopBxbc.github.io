/*=================================
animations.js
Part 1
=================================*/

document.addEventListener("DOMContentLoaded",()=>{

const cards=document.querySelectorAll(

".stat-card,.service-card,.brand-card,.bulk-card,.why-card,.gallery-card,.review-card,.contact-card"

);

const observer=new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("active");

}

});

},{

threshold:0.2

});

cards.forEach(card=>{

observer.observe(card);

});

});


/*==============================
Hero Floating Effect
==============================*/

const heroImage=document.querySelector(".hero-image img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/40;

const y=(window.innerHeight/2-e.clientY)/40;

heroImage.style.transform=

`translate(${x}px,${y}px)`;

});

}


/*==============================
Navbar Scroll
==============================*/

const navbar=document.querySelector(".navbar");

window.addEventListener("scroll",()=>{

if(window.scrollY>80){

navbar.classList.add("navbar-scroll");

}else{

navbar.classList.remove("navbar-scroll");

}

});

/*=================================
animations.js
Part 2
=================================*/

/*==============================
Smooth Scroll
==============================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(

this.getAttribute("href")

);

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});


/*==============================
Active Navigation
==============================*/

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


/*==============================
Scroll To Top Button
==============================*/

const topBtn=document.createElement("div");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});


/*==============================
Counter Animation
==============================*/

const counters=document.querySelectorAll(".stat-card h2");

let started=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight && !started){

started=true;

counters.forEach(counter=>{

const text=counter.innerText;

const target=parseInt(text);

const suffix=text.replace(/[0-9]/g,'');

let count=0;

const speed=Math.max(1,target/80);

function update(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+suffix;

requestAnimationFrame(update);

}else{

counter.innerText=target+suffix;

}

}

update();

});

}

});
