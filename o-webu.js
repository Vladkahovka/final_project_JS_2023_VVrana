//hamburger menu na strance O webu

const classShowOrHide2 = (menuTlacitko2, menuPolozky2, menuTlacitkoIcon2) => {
     if (menuPolozky2.classList.contains("show")) {
       menuPolozky2.classList.remove("show")
       menuTlacitkoIcon2.classList.add("fa-bars")
       menuTlacitkoIcon2.classList.remove("fa-xmark")
     } else {
          menuPolozky2.classList.add("show")
          menuTlacitkoIcon2.classList.remove("fa-bars")
          menuTlacitkoIcon2.classList.add("fa-xmark")
     }
     
   }
 
 
 const menuTlacitko2 = document.querySelector("#menuTlacitko2")
 const menuTlacitkoIcon2 = document.querySelector("#menuTlacitkoIcon2")
 const menuPolozky2 = document.querySelector("#menu-polozky2")
 menuTlacitko2.addEventListener("click", function(event) {
     console.log(event.target);
     classShowOrHide2(menuTlacitko2, menuPolozky2, menuTlacitkoIcon2)
   })