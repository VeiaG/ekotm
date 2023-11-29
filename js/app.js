import '../index.scss';
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
document.querySelector("#play-btn")?.addEventListener("click",togglePlay);
const videoContainer = document.querySelector('.video-container');
const video = document.getElementById('mainVideo');
function togglePlay() {
    video.play();
    videoContainer.classList.add('play');
    video.setAttribute('controls', 'true');
    document.querySelector("#play-btn").removeEventListener("click",togglePlay);
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