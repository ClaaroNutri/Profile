
let nombre=document.querySelector("#nombre")
console.log(nombre);


window.addEventListener("scroll", mostrarNombre)


function mostrarNombre(){
    if(scrollY > 50){
        nombre.style.opacity=1
    }else {
        nombre.style.opacity=0
    }
}


let navegador=document.querySelector("#navegador")
console.log(navegador);

window.addEventListener("scroll", barraColor)

function barraColor() {
   if (scrollY > 210) {

    navegador.classList.add("efecto")
    

   }else {    
    navegador.classList.remove("efecto")
    
}
}
