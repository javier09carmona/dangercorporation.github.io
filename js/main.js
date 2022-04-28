let ventana = document.getElementById("ventana")
let btn = document.getElementById("nav")
let Texto = document.getElementById("texto")
let icono = document.getElementById("ico")


btn.addEventListener("click", function(){

    if(ventana.classList.contains("navactive")){
        ventana.classList.remove("navactive")
    }else if(!ventana.classList.contains("navactive")){
        ventana.classList.toggle("navactive")
    }

    if(Texto.classList.contains("cambio")){
        Texto.classList.remove("cambio")
    }else if(!Texto.classList.contains("cambio")){
        Texto.classList.toggle("cambio")
    }

    if(icono.classList.contains("icon-cross")){
        icono.classList.remove("icon-cross")
    }else if(!icono.classList.contains("icon-cross")){
        icono.classList.toggle("icon-cross")
    }

}) 