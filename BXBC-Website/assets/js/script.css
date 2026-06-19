/*=================================
script.js
=================================*/

/* Hamburger Menu */

const menuToggle=document.querySelector(".menu-toggle");

const nav=document.querySelector("nav");

if(menuToggle){

menuToggle.addEventListener("click",()=>{

nav.classList.toggle("active");

});

}

/* Close Menu */

document.querySelectorAll("nav a").forEach(link=>{

link.addEventListener("click",()=>{

nav.classList.remove("active");

});

});

/* Sticky Navbar */

window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

if(window.scrollY>50){

navbar.style.padding="14px 8%";

navbar.style.boxShadow="0 10px 25px rgba(0,0,0,.08)";

}

else{

navbar.style.padding="18px 8%";

navbar.style.boxShadow="0 5px 20px rgba(0,0,0,.05)";

}

});

/* Active Navigation */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

const sectionHeight=section.clientHeight;

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

/* Smooth Scroll */

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/* Scroll To Top */

const topBtn=document.createElement("div");

topBtn.className="top-btn";

topBtn.innerHTML='<i class="fas fa-arrow-up"></i>';

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>500){

topBtn.classList.add("show");

}

else{

topBtn.classList.remove("show");

}

});

topBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

/* Reveal Animation */

const revealElements=document.querySelectorAll(

".service-card,.brand-card,.bulk-card,.why-card,.gallery-card,.review-card,.stat-card"

);

function reveal(){

const trigger=window.innerHeight*0.85;

revealElements.forEach(el=>{

const top=el.getBoundingClientRect().top;

if(top<trigger){

el.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

window.addEventListener("load",reveal);

/* Counter Animation */

const counters=document.querySelectorAll(".stat-card h2");

let counted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const top=stats.getBoundingClientRect().top;

if(top<window.innerHeight&& !counted){

counted=true;

counters.forEach(counter=>{

const target=parseInt(counter.innerText);

let count=0;

const speed=target/80;

const update=()=>{

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+"+";

requestAnimationFrame(update);

}

else{

counter.innerText=target+"+";

}

};

update();

});

}

});
