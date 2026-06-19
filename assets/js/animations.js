/*=================================
animations.js
Part 1
=================================*/

/* Scroll Reveal Animation */

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
Navbar Scroll Effect
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
/*=================================
animations.js
Part 3
=================================*/

/*==============================
Counter Animation
==============================*/

const counters=document.querySelectorAll(".stat-card h2");

let counterStarted=false;

window.addEventListener("scroll",()=>{

const stats=document.querySelector(".stats");

if(!stats) return;

const statsTop=stats.getBoundingClientRect().top;

if(statsTop<window.innerHeight && !counterStarted){

counterStarted=true;

counters.forEach(counter=>{

const text=counter.innerText;

const target=parseInt(text);

const suffix=text.replace(/[0-9]/g,"");

let count=0;

const speed=Math.max(1,target/80);

function updateCounter(){

count+=speed;

if(count<target){

counter.innerText=Math.floor(count)+suffix;

requestAnimationFrame(updateCounter);

}else{

counter.innerText=target+suffix;

}

}

updateCounter();

});

}

});


/*==============================
Button Ripple Effect
==============================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const ripple=document.createElement("span");

const rect=this.getBoundingClientRect();

const size=Math.max(rect.width,rect.height);

const x=e.clientX-rect.left-size/2;

const y=e.clientY-rect.top-size/2;

ripple.style.width=size+"px";

ripple.style.height=size+"px";

ripple.style.left=x+"px";

ripple.style.top=y+"px";

ripple.classList.add("ripple");

const oldRipple=this.querySelector(".ripple");

if(oldRipple){

oldRipple.remove();

}

this.appendChild(ripple);

setTimeout(()=>{

ripple.remove();

},600);

});

});


/*==============================
Gallery Hover Effect
==============================*/

document.querySelectorAll(".gallery-card").forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-10px) scale(1.02)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0) scale(1)";

});

});

/*=================================
animations.js
Part 4 (Final)
=================================*/

/*==============================
Floating Buttons Pulse
==============================*/

setInterval(()=>{

document.querySelectorAll(

".floating-call,.floating-whatsapp"

).forEach(btn=>{

btn.animate([

{

transform:"scale(1)"

},

{

transform:"scale(1.08)"

},

{

transform:"scale(1)"

}

],{

duration:1000,

iterations:1

});

});

},5000);


/*==============================
Hero Auto Floating
==============================*/

const hero=document.querySelector(".hero-image img");

if(hero){

setInterval(()=>{

hero.animate([

{

transform:"translateY(0px)"

},

{

transform:"translateY(-10px)"

},

{

transform:"translateY(0px)"

}

],{

duration:3000,

iterations:1

});

},3000);

}


/*==============================
Footer Reveal Animation
==============================*/

const footer=document.querySelector(".footer");

window.addEventListener("scroll",()=>{

if(!footer) return;

const footerTop=footer.getBoundingClientRect().top;

if(footerTop<window.innerHeight-100){

footer.classList.add("active");

}

});


/*==============================
Page Load Animation
==============================*/

window.addEventListener("load",()=>{

document.body.classList.add("loaded");

});


/*==============================
Parallax Hero Background
==============================*/

window.addEventListener("scroll",()=>{

const heroSection=document.querySelector(".hero");

if(heroSection){

heroSection.style.backgroundPositionY=

window.pageYOffset*0.3+"px";

}

});


/*==============================
Console Message
==============================*/

console.log(

"✅ BXBC Website Loaded Successfully"

);

console.log(

"🚀 Developed with HTML, CSS & JavaScript"

);
