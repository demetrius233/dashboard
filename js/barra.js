const banderas = document.querySelector(".banderas") 
const banderasDropdown = document.querySelector(".banderas-dropdown")

const notificaciones = document.querySelector(".notificaciones")
const notificacionesDropdown = document.querySelector(".notificaciones-dropdown")

const body = document.body
const menuToogle = document.querySelector(".menu-toggle")
const imgLogo = document.querySelector(".logo img")

const sidebar = document.querySelector(".navegacion")

banderas.addEventListener("click", (e)=>{
    e.preventDefault()
    banderasDropdown.classList.toggle("open")
})


notificaciones.addEventListener("click", (e)=>{
    e.preventDefault()
    notificacionesDropdown.classList.toggle("open")
})

const mediumBp = matchMedia("(min-width: 576px)")

if (mediumBp.matches) {

    menuToogle.addEventListener("click", ()=>{
    
        if (body.classList.contains("sidebar-open")) {
    
            body.classList.remove("sidebar-open")
            imgLogo.setAttribute("src", "./img/logoP.png")
    
        }else{
            body.classList.add("sidebar-open")
            imgLogo.setAttribute("src", "./img/logoG.png")
        }
    })

}else{

    menuToogle.addEventListener("click", ()=>{
    
        sidebar.classList.toggle("show-sidebar")
         
    })
}
