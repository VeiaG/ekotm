import '../index.scss';
const nav = document.querySelector(".navigation");
const sections = document.querySelectorAll("section");
document.addEventListener("scroll",(e)=>{
    const scrollY = document.documentElement.scrollTop;
    let backgroundColor;

    if (scrollY > 64) {
        nav.classList.add("scrolled");

        sections.forEach((section) => {
            if (scrollY + 80 > section.offsetTop) {
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

