function suma(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var resultado = n1 + n2;
    document.getElementById("resultado").value=resultado;
    }

function resta(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var resultado = n1 - n2;
    document.getElementById("resultado").value=resultado;
    }

function multiplicacion(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var resultado = n1 * n2;
    document.getElementById("resultado").value=resultado;
    }

function division(){
    var n1 = parseInt(document.getElementById("n1").value);
    var n2 = parseInt(document.getElementById("n2").value);
    var resultado = n1 / n2;

    if (n2 == 0) {
        document.getElementById("resultado").value="No se puede dividir entre 0";
    } else {
        document.getElementById("resultado").value=resultado;
    }
    }

function limpiar(){
    document.getElementById("n1").value="";
    document.getElementById("n2").value="";
    document.getElementById("resultado").value="";
    }