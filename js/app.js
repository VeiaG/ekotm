import '../index.scss';

const currentYear = new Date().getFullYear().toString();
document.querySelector("#year").textContent = currentYear;

//language
const langArr={
    "unit" : "ECO TM",
    "header-text":"Innovative equipment for environmentally friendly packaging",
    "link1": "Equipment",
    "link2":"Contacts",
    "link3": "About us",
    "product-name":"Heat sealer",
    "p1":"Rent",
    "p2":"Leasing",
    "p3":"Selling",
    "p4":"Service",
    "p5":"10 years warranty",
    "order" : "Order now",
    "s1_h":"Equipment in action",
    "s1_d":"See for yourself how our heat sealing equipment will ensure the highest standard of packaging for your products.",
    "s2_h":"Our Heat sealer",
    "s2_d":"Effective, environmentally friendly and easy-to-use equipment is how we help your products stand out.",
    "s2_p1_h":"INSTANT PACKAGING",
    "s2_p1_d":"Our heat sealer is not just a piece of equipment, it's about speed and ease in every step of the packaging process. Give preference to efficiency and quality!",
    "s2_p2_h":"UNRIVALED PROTECTION",
    "s2_p2_d":"Two-component paper is used for packaging. Cellulose and a thin layer of film, which is heat sealed to form an obstacle to the spread of odors, contaminants and even liquids during transportation after the purchase of goods in the store",
    "s2_p3_h":"AESTHETICS AND QUALITY",
    "s2_p3_d":"Such packaging doesn't just protect products - it creates impressions! The quality of your packaging reflects on your brand, giving customers an unparalleled aesthetic experience and increasing their trust in your product.",
    "s3_h":"Consumables",
    "s3_d":"Perfect Harmony Between Durability and Environmental friendliness.",
    "cel":"Cellulose",
    "mic":"10 microns",
    "pol":"Polyethylene nanolayer",
    "s3_p1_h":"Eco-friendliness",
    "s3_p1_d":"Safe for use <br> and disposal",
    "s3_p2_h":"Durability",
    "s3_p2_d":"Tight packaging prevents any damage to the products",
    "s3_p3_h":"Quality",
    "s3_p3_d":"Qualitatively packaged goods leave a pleasant impression on customers",
    "s4_d":"Find answers to your questions in our FAQ section.",
    "q1":"Terms of partnership",
    "q1_a1":"acquisition on a sale and purchase basis",
    "q1_a2":"rent",
    "q1_a3":"leasing with the right of redemption",
    "q2":"Metric dimensions",
    "q2_a":"400x330x230 mm",
    "s5_h":"Feedback",
    "r1_n": "Iryna S.",
    "r2_n": "Oleksandr K.",
    "r3_n": "Liudmyla H.",
    "r4_n": "Andrii M.",
    "r5_n": "Natalia P.",
    "r1":'The equipment from <span class="strong">"ECO TM"</span> is a step forward in the world of sustainable business. Our customers are delighted not only with the environmental friendliness of the packaging, but also with its ease of use. This is a win for everyone - for us and for nature!',
    "r2":`Our company has chosen <span class="strong">EKO TM</span> to package our products, and we remain impressed with the results. Reliability of packaging and aesthetics are what make cooperation with this company profitable.`,
    "r3":`As a specialist in the field of cheese production, I highly appreciate the quality provided by <span class="strong">"ECO TM"</span>. The paper for thermal storage is just great. Customers are satisfied, and I am confident in the quality of my products.`,
    "r4":`Thermopackers from <span class="strong">"ECO TM"</span> have become an integral part of our business. Ease of use and preservation of product flavor is what makes this technique unsurpassed!`,
    "r5":`I chose this equipment for the restaurant and I couldn't be more pleased. Easy to use, aesthetically pleasing, and environmentally friendly - everything we were looking for for our business. I recommend it!`,
    "adress":"1a P. Hryhorenko Ave., office 154, Kyiv",
    "f1_l":"Name",
    "f1_p":"Your name",
    "f2_l":"Phone number",
    "f2_p":"Your phone number",
    "f3_l":"Question",
    "f3_p":"What would you like to know more about?",
    "f_e":"Submit",
    "coop":"Made in cooperation with",
    "nuft":"NUFT",
    "form_sucess":"Successfully sent. You will be contacted shortly.",
    "form_error":"There was an error. Please try again later."
}


const ua_button = document.querySelector(".fi-ua");
const us_button = document.querySelector(".fi-gb");
const allLang = ['ua','us'];

let lang = window.location.hash.substring(1) || "ua";
ua_button.addEventListener('click', ()=>{changeURLlang("");changeLang()});
us_button.addEventListener('click', ()=>{changeURLlang("#us");changeLang()});

function changeURLlang(langName){
    location.href = window.location.pathname + `${langName}`;
    if(langName==="#us"){
        location.reload();
    }
    
}
function changeLang(){
    if(!allLang.includes(lang)){
        location.href = window.location.pathname ;
        // location.reload();
    }
    if(lang==="us"){
        document.querySelector('title').innerHTML = langArr["unit"];
        for(let key in langArr){
            let elements = document.querySelectorAll(`[data-lang="${key}"]`);
            let formPlaceholder = document.querySelectorAll(`[data-placeholder-lang="${key}"]`);
            if(elements){
                elements.forEach(element =>{
                    element.innerHTML = langArr[key];
                });
            }
            if(formPlaceholder){
                formPlaceholder.forEach(element =>{
                    element.placeholder = langArr[key];
                });
            }
    
        }
    }
}
changeLang();

const nav = document.querySelector(".navigation");
const sections = document.querySelectorAll("[data-background]");
const isNavStatic = nav.classList.contains("static");
if(isNavStatic){
    nav.classList.add("scrolled");
}
let navBackgroundColor;
const checkSectionColor = ()=>{
    if (scrollY > 64) {
        nav.classList.add("scrolled");

        const scrollY = document.documentElement.scrollTop;
        sections.forEach((section) => {
            if (scrollY + 64 > section.offsetTop) {
                navBackgroundColor = section.getAttribute("data-background");
            }
        });
    } else if(!isNavStatic){
        nav.classList.remove("scrolled");
        navBackgroundColor=undefined;
    }
    
    nav.style.background = navBackgroundColor || "";
}
checkSectionColor();
document.addEventListener("scroll",checkSectionColor);

const curSlide = document.querySelector(".slider__image");
const slides = document.querySelectorAll(".slider__select-image");
if(curSlide){
    let currentSlide = 0;

    function updateSelected(){
        const src = slides[currentSlide].src;
        curSlide.src = src;
        slides.forEach((slide,i)=>{
            if(i===currentSlide){
                slide.classList.add("selected");
                return
            }
            slide.classList.remove("selected");
        })
    }
    updateSelected();
    const nextTimer = ()=>{
        const length = slides.length;
        currentSlide = (currentSlide+1)%length;
        updateSelected();
    }
    const timeout = setInterval(nextTimer,5000);
    slides.forEach((slide,i)=>{
        slide.addEventListener("click",(e)=>{
            currentSlide = i;
            clearTimeout(timeout);
            updateSelected();
        });
    });
}



gsap.registerPlugin(ScrollTrigger);
const elementsToAnimate = document.querySelectorAll('[data-animate]');


elementsToAnimate.forEach((element) => {
    gsap.from(element, {
      opacity: 0, 
      y: 20, 
      scrollTrigger: {
        trigger: element, 
        start: "top 90%", 
        end: "bottom 80%", 
        once: true, 
      },
    });
  });
const headerLine = document.getElementById("header__line");
if(headerLine){
    gsap.fromTo(
        headerLine,
        { width:"8px"}, 
        {
            width:"100%",
            opacity:0.9,
            scrollTrigger: {
            trigger: ".header", 
            start: "top ", 
            end: "bottom 75%", 
            scrub: 1, 
            },
        }
    );
}
//video
document.querySelector(".play-btn")?.addEventListener("click",togglePlay);
const videoContainer = document.querySelector('.video-container');
const video = document.getElementById('mainVideo');
function togglePlay() {
    video.play();
    videoContainer.classList.add('play');
    video.setAttribute('controls', 'true');
    document.querySelector(".play-btn")?.removeEventListener("click",togglePlay);
}
const menuBtn = document.querySelector(".navigation__menuBtn");
const menuLinks = document.querySelector(".navigation__links");
menuBtn.addEventListener("click",()=>{
    if(menuLinks.classList.contains("opened")){
        menuLinks.classList.remove("opened");
        document.body.style.overflow="";
    }else{
        menuLinks.classList.add("opened");
        document.body.style.overflow="hidden";
    }
})
const links = document.querySelectorAll(".navigation__links a");
const logoLink = document.querySelector(".navigation__logo");
logoLink.addEventListener("click",()=>{
    menuLinks.classList.remove("opened");
    document.body.style.overflow="";
})
links.forEach(link=>{
    link.addEventListener("click",()=>{
        menuLinks.classList.remove("opened");
        document.body.style.overflow="";
    })
})

//faq
const questions = document.querySelectorAll(".faq__question");
const questionsBtn = document.querySelectorAll(".faq__qBtn");
if(questions){
    questionsBtn.forEach((btn,i)=>{
        btn.addEventListener("click",()=>{
            if(questions[i].classList.contains("opened")){
                questions[i].classList.remove("opened");
            }
            else{
                questions[i].classList.add("opened");
            }
        })
    })
}
const scriptURL = "https://script.google.com/macros/s/AKfycbxqx_nwAQuf2bQvtTtM20JvkS0VpJp2qJSnACGuSOuuWqQlmEI7bMTsii8rneyzgXBp_A/exec";
const form = document.querySelector("form");
const formMessage = document.querySelector(".form-sucess");
form.addEventListener('submit', e => {
    e.preventDefault();
    formMessage.classList.add("fetched");
    const sucessMsg = lang==="us" ? langArr["form_sucess"] : "Успішно відправлено. Зачекайте поки з вами зв'яжуться.";
    const errorMsg = lang==="us" ? langArr["form_error"] : 'Сталася помилка. Будь-ласка , спробуйте пізніше.';
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => formMessage.innerHTML= sucessMsg)
    .catch(error => formMessage.innerHTML=errorMsg)
  })

