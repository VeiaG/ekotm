!function(){"use strict";const e=document.querySelector(".navigation"),t=document.querySelectorAll("[data-background]");document.addEventListener("scroll",(o=>{const c=document.documentElement.scrollTop;let r;c>64?(e.classList.add("scrolled"),t.forEach((e=>{c+64>e.offsetTop&&(r=e.getAttribute("data-background"))}))):e.classList.remove("scrolled"),e.style.background=r||""}));const o=document.querySelector(".slider__image"),c=document.querySelectorAll(".slider__select-image");let r=0;function l(){const e=c[r].src;o.src=e,c.forEach(((e,t)=>{t!==r?e.classList.remove("selected"):e.classList.add("selected")}))}l();const n=setInterval((()=>{const e=c.length;r=(r+1)%e,l()}),5e3);c.forEach(((e,t)=>{e.addEventListener("click",(e=>{r=t,clearTimeout(n),l()}))})),gsap.registerPlugin(ScrollTrigger),document.querySelectorAll("[data-animate]").forEach((e=>{gsap.from(e,{opacity:0,y:20,scrollTrigger:{trigger:e,start:"top 90%",end:"bottom 80%",once:!0}})})),gsap.fromTo("#header__line",{width:"8px"},{width:"100%",opacity:.9,scrollTrigger:{trigger:".header",start:"top ",end:"bottom 75%",scrub:1}}),document.querySelector("#play-btn").addEventListener("click",(function e(){a.play(),s.classList.add("play"),a.setAttribute("controls","true"),document.querySelector("#play-btn").removeEventListener("click",e)}));const s=document.querySelector(".video-container"),a=document.getElementById("mainVideo")}();
//# sourceMappingURL=bundle.js.map