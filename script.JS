let menu = document.querySelector (".fixed-menu");
let menuBtns = document.querySelectorAll('.nav-link')
let burgerMenu=document.querySelector (".nav-links");
let burgerLine=document.querySelectorAll (".burgerLine");
let burger=document.querySelector (".burger");
function btnChoose(id){
    for (let i = 0; i < menuBtns.length; i++) {
        menuBtns[i].classList.remove('active')
        if(i==id){
            console.log(id)
            menuBtns[i].classList.add('active')
        }
    }
    burgerMenu.classList.remove("active")
   
}

function burgerChange (){
    burgerMenu.classList.toggle("active");
    for(let i=0;i<burgerLine.length;i++){
    burgerLine[i].classList.toggle("active");
    }
    burger.classList.toggle("active");
}
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

