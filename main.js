const parallax_el = document.querySelectorAll(".parallax")
const project1 = document.getElementsByClassName("proyectos")[0]
const project2 = document.getElementsByClassName("proyectos")[1]
const project3 = document.getElementsByClassName("proyectos")[2]
const project4 = document.getElementsByClassName("proyectos")[3]

document.body.addEventListener('touchmove', function(e){ e.preventDefault(); }, { passive: false });
project1.addEventListener("click",()=>{
    window.open("https://christianc8.github.io/proyect-class-e/")
})


let xValue = 0, yValue = 0;

window.addEventListener("mousemove",(e)=>{
    xValue = e.clientX - window.innerWidth / 2;
    yValue = e.clientY - window.innerHeight / 2;
    
   
    parallax_el.forEach((el) =>{
        let speedx = el.dataset.speedx;
        let speedy = el.dataset.speedy;
/*           el.style.transform = `translateX(calc(-50%+${xValue}px)) translateY(calc(-50%+${yValue}px))`;   */
        el.style.transform = ` translateX(-50%) translateX(${-xValue * speedx}px)  translateY(-50%) translateY(${yValue*speedy}px) `  
        
    });


})