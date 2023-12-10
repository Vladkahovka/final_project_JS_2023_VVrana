//hamburger menu na hlavni strance

const classShowOrHide = (menuTlacitko, menuPolozky, menuTlacitkoIcon) => {
     if (menuPolozky.classList.contains("show")) {
       menuPolozky.classList.remove("show")
       menuTlacitkoIcon.classList.add("fa-bars")
       menuTlacitkoIcon.classList.remove("fa-xmark")
     } else {
          menuPolozky.classList.add("show")
          menuTlacitkoIcon.classList.remove("fa-bars")
          menuTlacitkoIcon.classList.add("fa-xmark")
     }
     
   }


const menuTlacitko = document.querySelector("#menuTlacitko")
const menuTlacitkoIcon = document.querySelector("#menuTlacitkoIcon")
const menuPolozky = document.querySelector("#menu-polozky")
menuTlacitko.addEventListener("click", function(event) {
     console.log(event.target);
     classShowOrHide(menuTlacitko, menuPolozky, menuTlacitkoIcon)
   })


   


 