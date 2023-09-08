

function boton_login(){
    var nuevoelemento = document.createElement("p");
    nuevoelemento.textContent = "Login correcto";
    var content = document.getElementById("agr_parrafo");
    content.appendChild(nuevoelemento);

};

function boton_registrarme(){
    var nombre = document.getElementById("u_in");
    var nombrevalue = nombre.value;
    var texto = "Registro con exito ";
    var contenido = texto + nombrevalue;
    
    var nuevoelemento = document.createElement("p");
    nuevoelemento.textContent = contenido;
    var content = document.getElementById("agr_parrafo");
    content.appendChild(nuevoelemento);
}

