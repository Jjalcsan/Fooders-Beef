
window.addEventListener("load", ()=>{
    setTimeout(function(){
        document.querySelector("#loaderContenedor").classList.toggle("hidden");
    },3000)
    document.querySelector("body").classList.toggle("hiddenFlow");
})

let icono = document.querySelector(".icono");
let ul = document.querySelector("ul");
icono.addEventListener("click", (e)=>{
    ul.classList.toggle("show");
})
