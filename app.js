window.onload = function validarForm (event) {
    event.preventDefault()
    console.log("hola")

let envio = document.getElementById("Send")
envio.addEventListener("click",validacion)

function validacion () {
    let card = document.getElementById("inputCard").value
    if (card == ""){
        document.getElementById("inputCard").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").clasName = "alert alert-danger text-start"
    }
    else (document.getElementById("inputCard").className= "form-control")
    
    
    let cvc = document.getElementById("inputCvc").value
    if (cvc == ""){
        document.getElementById("inputCvc").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }


    let amount = document.getElementById("inputAmount").value
    if (amount == ""){
        document.getElementById("inputAmount").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }

    let name = document.getElementById("inputName").value
    if (name == ""){
        document.getElementById("inputName").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }

    let apellido = document.getElementById("inputApellido").value
    if (apellido == ""){
        document.getElementById("inputApellido").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }


    let city = document.getElementById("inputCity").value
    if (city == ""){
        document.getElementById("inputCity").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }


    let state = document.getElementById("inputState").value
    if (state == "Choose..."){
        document.getElementById("inputState").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }

    let codigoPostal = document.getElementById("inputZip").value
    if (codigoPostal == ""){
        document.getElementById("inputZip").className= "form-control bg-danger bg-opacity-50"
        document.getElementById("alerta").className="alert alert-danger text-start"
    }
}
}


// function Aalerta() {
//     let alert = document.getElementById("alerta");
//     if (alert.style.display === "none") {
//         alert.style.display = "block";
//     } else {
//         alert.style.display = "none";
//     }
// }
// function veralert() {
//     var x = document.getElementById("alerta");
//     if (x.style.display === "none") {
//         x.style.display = "block";
//     } else {
//         x.style.display = "none";
//     }
// }
// <button onclick="myFunction()">Clickeame</button>

// let aparecer = document.getElementById("alerta");

// document.getElementById("send").addEventListener("click", () => {
// div.classList.remove("div_hide");
// });
