const nombre = document.getElementById("nombre")
const email = document.getElementById("email")
const comentario = document.getElementById("comentario")
const form = document.getElementById("form")
const parrafo = document.getElementById("warnings")
const parrafo1 = document.getElementById("warnings2")

form.addEventListener("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
    parrafo.innerHTML = ""
    if(nombre.value.lenght <0){
    warnings += "El nombre no es valido <br>"
    entrar = true
    }
    if(!regexEmail.test(email.value)){
        warnings += "El email no es valido <br>"
        entrar = true
    }
    if(entrar){
        parrafo.innerHTML = warnings
    }
    else {
        parrafo1.innerHTML = "Gracias Por su Consulta"
        
    }
})

