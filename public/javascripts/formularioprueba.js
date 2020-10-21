function validar(){
    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email".value);

    if (nombre == ""){
        console.log("Nombre Vacio");
        return false;
    }else {
        console.log(nombre)
        return true;
    } 
}
