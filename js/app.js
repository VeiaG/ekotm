import '../index.scss';
const nav = document.querySelector(".navigation");
document.addEventListener("scroll",(e)=>{
    const scrollY = document.documentElement.scrollTop;
    if(scrollY>64){
        nav.classList.add("scrolled");
        return;
    }
    nav.classList.remove("scrolled");
});