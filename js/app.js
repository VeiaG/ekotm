import '../index.scss';
const nav = document.querySelector(".navigation");
const sections = document.querySelectorAll("section");
document.addEventListener("scroll",(e)=>{
    const scrollY = document.documentElement.scrollTop;
    let backgroundColor;

    if (scrollY > 64) {
        nav.classList.add("scrolled");

        sections.forEach((section) => {
            if (scrollY + 64 > section.offsetTop) {
                backgroundColor = section.getAttribute("data-background");
            }
        });
    } else {
        nav.classList.remove("scrolled");
    }
    nav.style.background = backgroundColor || "";
});

const curSlide = document.querySelector(".slider__image");
const slides = document.querySelectorAll(".slider__select-image");
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

gsap.fromTo(
    "#header__line",
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
