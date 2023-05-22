const nombre = document.querySelector("[data-input-nombre]")
const email = document.querySelector("[data-input-email]")
const asunto = document.querySelector("[data-input-asunto]")
const mensaje = document.querySelector("[data-input-mensaje]")
const form = document.querySelector("[data-formulario]")

const regexEmail = /^(([^<>()\[\]\.,;:\s@\”]+(\.[^<>()\[\]\.,;:\s@\”]+)*)|(\”.+\”))@(([^<>()[\]\.,;:\s@\”]+\.)+[^<>()[\]\.,;:\s@\”]{2,})$/

nombre.addEventListener("blur",()=>{    
    let error = document.querySelector(".errorNombre")
    error.textContent=""
    if(nombre.value.length == 0){
        error.textContent = "el campo esta vacio favor de completarlo"
    }
})

email.addEventListener("blur",()=>{
    let error = document.querySelector(".errorEmail")
    error.textContent=""
    if(!(regexEmail.test(email.value))){        
        error.textContent = "formato de correo incorrecto"
    }
})

asunto.addEventListener("blur",()=>{
    let error = document.querySelector(".errorAsunto")
    error.textContent=""
    if(asunto.value.length == 0){
        error.textContent = "el campo esta vacio favor de completarlo"
    }
    if(asunto.value.length > 250 ){
        console.log("el mensaje no debe ser mayor a 250 caracteres")
    }
})
mensaje.addEventListener("blur",()=>{
    let error = document.querySelector(".errorMensaje")
    error.textContent=""
    if(mensaje.value.length == 0){
        error.textContent = "el campo esta vacio favor de completarlo"
    }
    if(mensaje.value.length > 11 ){
        error.textContent = "el mensaje no debe ser mayor a 250 caracteres"
    }
})
form.addEventListener("submit", (e)=>{
    e.preventDefault()
        
})
