
//MENU SCRIPT
const d=document,
$hamburgerBtn=d.querySelector(".hamburger-btn img"),
$closeBtn=d.querySelector(".close-img img"),
$options=d.querySelectorAll(".options-menu-mobile A"),
$menu=d.querySelector(".mobile-menu");




function showMenu(hamburger,close){

    d.addEventListener("click",e=>{

        if(e.target===hamburger  )$menu.classList.add("show-menu")

        if(e.target===close || e.target===$options )$menu.classList.remove("show-menu")

      

        
    })
}


showMenu($hamburgerBtn,$closeBtn);



//ANIMATION ON SCROLL  SCRIPT

AOS.init();
