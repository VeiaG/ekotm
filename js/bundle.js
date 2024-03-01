!function(){"use strict";const e=(new Date).getFullYear().toString(),t=document.querySelector("#year");t&&(t.textContent=e);const n={unit:"ECO TM",unit2:"ECO TM - About us","header-text":"Innovative equipment for environmentally friendly packaging",link1:"Equipment",link2:"Contacts",link3:"About us","product-name":"Heat sealer",p1:"Rent",p2:"Leasing",p3:"Selling",p4:"Service",p5:"10 years warranty",order:"Order now",s1_h:"Equipment in action",s1_d:"See for yourself how our heat sealing equipment will ensure the highest standard of packaging for your products.",s2_h:"Our Heat sealer",s2_d:"Effective, environmentally friendly and easy-to-use equipment is how we help your products stand out.",s2_p1_h:"INSTANT PACKAGING",s2_p1_d:"Our heat sealer is not just a piece of equipment, it's about speed and ease in every step of the packaging process. Give preference to efficiency and quality!",s2_p2_h:"UNRIVALED PROTECTION",s2_p2_d:"Two-component paper is used for packaging. Cellulose and a thin layer of film, which is heat sealed to form an obstacle to the spread of odors, contaminants and even liquids during transportation after the purchase of goods in the store",s2_p3_h:"AESTHETICS AND QUALITY",s2_p3_d:"Such packaging doesn't just protect products - it creates impressions! The quality of your packaging reflects on your brand, giving customers an unparalleled aesthetic experience and increasing their trust in your product.",s3_h:"Consumables",s3_d:"Perfect Harmony Between Durability and Environmental friendliness.",cel:"Cellulose",mic:"10 microns",pol:"Polyethylene nanolayer",s3_p1_h:"Eco-friendliness",s3_p1_d:"Safe for use <br> and disposal",s3_p2_h:"Durability",s3_p2_d:"Tight packaging prevents any damage to the products",s3_p3_h:"Quality",s3_p3_d:"Qualitatively packaged goods leave a pleasant impression on customers",s4_d:"Find answers to your questions in our FAQ section.",q1:"Terms of partnership",q1_a1:"acquisition on a sale and purchase basis",q1_a2:"rent",q1_a3:"leasing with the right of redemption",q2:"Metric dimensions",q2_a:"400x330x230 mm",s5_h:"Feedback",r1_n:"Iryna S.",r2_n:"Oleksandr K.",r3_n:"Liudmyla H.",r4_n:"Andrii M.",r5_n:"Natalia P.",r1:'The equipment from <span class="strong">"ECO TM"</span> is a step forward in the world of sustainable business. Our customers are delighted not only with the environmental friendliness of the packaging, but also with its ease of use. This is a win for everyone - for us and for nature!',r2:'Our company has chosen <span class="strong">EKO TM</span> to package our products, and we remain impressed with the results. Reliability of packaging and aesthetics are what make cooperation with this company profitable.',r3:'As a specialist in the field of cheese production, I highly appreciate the quality provided by <span class="strong">"ECO TM"</span>. The paper for thermal storage is just great. Customers are satisfied, and I am confident in the quality of my products.',r4:'Thermopackers from <span class="strong">"ECO TM"</span> have become an integral part of our business. Ease of use and preservation of product flavor is what makes this technique unsurpassed!',r5:"I chose this equipment for the restaurant and I couldn't be more pleased. Easy to use, aesthetically pleasing, and environmentally friendly - everything we were looking for for our business. I recommend it!",adress:"1a P. Hryhorenko Ave., office 154, Kyiv",f1_l:"Name",f1_p:"Your name",f2_l:"Phone number",f2_p:"Your phone number",f3_l:"Question",f3_p:"What would you like to know more about?",f_e:"Submit",coop:"Made in cooperation with",nuft:"NUFT",form_sucess:"Successfully sent. You will be contacted shortly.",form_error:"There was an error. Please try again later.",new:"NEW PACKAGING IDEAS",ab_d:"Welcome to the world of innovation and difference, where every product is a part of our professional approach and commitment to high quality. EKO TM is at the forefront of the heat sealing equipment industry, offering the most advanced solutions for your business.",ab_h1:"OUR MISSION",ab_h2:"OUR ADVANTAGES",ab1_p1_h:"TAKE CARE OF THE ENVIRONMENT",ab1_p1_d:"Our technologies and materials help reduce the negative impact on the environment by developing sustainable and environmentally friendly solutions.",ab1_p2_h:"IMPLEMENT INNOVATIONS",ab1_p2_d:"We are constantly improving our equipment, studying new technologies and looking for effective ways to improve the packaging of your product.",ab1_p3_h:"RAISE QUALITY STANDARDS",ab1_p3_d:"Our equipment sets new standards in packaging quality, ensuring the highest reliability and product protection.",ab2_p1_h:"DOMESTIC MANUFACTURER",ab2_p1_d:"We are a Ukrainian company, proud of our national heritage and manufacturing in Ukraine.",ab2_p2_h:"COOPERATION AND TRUST",ab2_p2_d:"We believe that open dialog and partnership are the basis for successful cooperation. You can count on us as a reliable partner.",ab2_p3_h:"FOCUS ON SUSTAINABILITY",ab2_p3_d:"Our solutions are aimed at supporting sustainable consumption and resource conservation."};document.querySelectorAll("a").forEach((e=>{const t=new URL(e.href);for(let[e,n]of new URLSearchParams(window.location.search).entries())t.searchParams.set(e,n);e.href=t.toString()}));const o=document.querySelector(".fi-ua"),a=document.querySelector(".fi-gb"),s=["ua","us"],r=new URLSearchParams(window.location.search);let i=r.get("lang")||"ua";function c(e){"us"===e?r.set("lang",e):r.delete("lang"),window.location.search=r}function l(){if(s.includes(i)||(location.href=window.location.pathname),"us"===i)for(let e in n){let t=document.querySelectorAll(`[data-lang="${e}"]`),o=document.querySelectorAll(`[data-placeholder-lang="${e}"]`);t&&t.forEach((t=>{t.innerHTML=n[e]})),o&&o.forEach((t=>{t.placeholder=n[e]}))}}o&&o.addEventListener("click",(()=>{c(""),l()})),a&&a.addEventListener("click",(()=>{c("us")})),l();const d=document.querySelector(".navigation"),u=document.querySelectorAll("[data-background]"),p=d.classList.contains("static");let h;p&&d.classList.add("scrolled");const m=()=>{if(scrollY>64){d.classList.add("scrolled");const e=document.documentElement.scrollTop;u.forEach((t=>{e+64>t.offsetTop&&(h=t.getAttribute("data-background"))}))}else p||(d.classList.remove("scrolled"),h=void 0);d.style.background=h||""};m(),document.addEventListener("scroll",m);const f=document.querySelector(".slider__image"),g=document.querySelectorAll(".slider__select-image");if(f){let L=0;function O(){const e=g[L].src;f.src=e,g.forEach(((e,t)=>{t!==L?e.classList.remove("selected"):e.classList.add("selected")}))}O();const I=setInterval((()=>{const e=g.length;L=(L+1)%e,O()}),5e3);g&&g.forEach(((e,t)=>{e.addEventListener("click",(e=>{L=t,clearTimeout(I),O()}))}))}gsap.registerPlugin(ScrollTrigger);const y=document.querySelectorAll("[data-animate]");y?.forEach((e=>{gsap.from(e,{opacity:0,y:20,scrollTrigger:{trigger:e,start:"top 90%",end:"bottom 80%",once:!0}})}));const _=document.getElementById("header__line");_&&gsap.fromTo(_,{width:"8px"},{width:"100%",opacity:.9,scrollTrigger:{trigger:".header",start:"top ",end:"bottom 75%",scrub:1}}),document.querySelector(".play-btn")?.addEventListener("click",(function e(){v.play(),b.classList.add("play"),v.setAttribute("controls","true"),document.querySelector(".play-btn")?.removeEventListener("click",e)}));const b=document.querySelector(".video-container"),v=document.getElementById("mainVideo"),q=document.querySelector(".navigation__menuBtn"),E=document.querySelector(".navigation__links");q.addEventListener("click",(()=>{E.classList.contains("opened")?(E.classList.remove("opened"),document.body.style.overflow=""):(E.classList.add("opened"),document.body.style.overflow="hidden")}));const S=document.querySelectorAll(".navigation__links a");document.querySelector(".navigation__logo").addEventListener("click",(()=>{E.classList.remove("opened"),document.body.style.overflow=""})),S.forEach((e=>{e.addEventListener("click",(()=>{E.classList.remove("opened"),document.body.style.overflow=""}))}));const w=document.querySelectorAll(".faq__question"),T=document.querySelectorAll(".faq__qBtn");w&&T.forEach(((e,t)=>{e.addEventListener("click",(()=>{w[t].classList.contains("opened")?w[t].classList.remove("opened"):w[t].classList.add("opened")}))}));const A=document.querySelector("form"),k=document.querySelector(".form-sucess");A.addEventListener("submit",(e=>{e.preventDefault(),k.classList.add("fetched");const t="us"===i?n.form_sucess:"Успішно відправлено. Зачекайте поки з вами зв'яжуться.",o="us"===i?n.form_error:"Сталася помилка. Будь-ласка , спробуйте пізніше.";fetch("https://script.google.com/macros/s/AKfycbxqx_nwAQuf2bQvtTtM20JvkS0VpJp2qJSnACGuSOuuWqQlmEI7bMTsii8rneyzgXBp_A/exec",{method:"POST",body:new FormData(A)}).then((e=>k.innerHTML=t)).catch((e=>k.innerHTML=o))}))}();
//# sourceMappingURL=bundle.js.map