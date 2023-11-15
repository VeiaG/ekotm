import '../index.scss';
const nav = document.querySelector(".navigation");
const s1 = document.querySelector(".product");
const s2 = document.querySelector(".buy");
console.log(s1);
document.addEventListener("scroll",(e)=>{
    const scrollY = document.documentElement.scrollTop;
    if(scrollY>64){
        nav.classList.add("scrolled");
        if(scrollY+80>s1.offsetTop){
            if(scrollY+80>s2.offsetTop){
                nav.style="background:var(--primary)";
                return
            }
            nav.style="background:var(--accent)";
            return
        }
        nav.style="";
        return;
    }
    nav.classList.remove("scrolled");
});
