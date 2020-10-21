function calcular(){
    var figura = document.getElementById("figuras").value;
    if(figura == "cuadrado"){
        document.getElementById("cuadrado").style.display = "block";
        document.getElementById("rectangulo").style.display = "none";
        document.getElementById("triangulo").style.display = "none";
    }
    if(figura == "rectangulo"){
        document.getElementById("cuadrado").style.display = "none";
        document.getElementById("rectangulo").style.display = "block";
        document.getElementById("triangulo").style.display = "none";
    }
    if(figura == "triangulo"){
        document.getElementById("cuadrado").style.display = "none";
        document.getElementById("rectangulo").style.display = "none";
        document.getElementById("triangulo").style.display = "block";
    }
}

function formulasCuadrado(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
    var formula = document.getElementById("areayperimetrocuadrado").value;
    if(formula == "area"){
        document.getElementById("areaCuadrado").style.display = "block";
        document.getElementById("perimetroCuadrado").style.display = "none";

    }
    if(formula == "perimetro"){
        document.getElementById("areaCuadrado").style.display = "none";
        document.getElementById("perimetroCuadrado").style.display = "block";
    }
}

function areaCuadrado(){
    var n1 = parseInt(document.getElementById("n1").value);
    var resultado = n1 * n1;
    document.getElementById("resultadoareacuadrado").value=resultado;
}

function perimetroCuadrado(){
    var n2 = parseInt(document.getElementById("n2").value);
    var resultado = n2 * 4;
    document.getElementById("resultadoperimetrocuadrado").value=resultado;
}

function formulasRectangulo(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
    var formula = document.getElementById("areayperimetrorectangulo").value;
    if(formula == "area"){
        document.getElementById("areaRectangulo").style.display = "block";
        document.getElementById("perimetroRectangulo").style.display = "none";

    }
    if(formula == "perimetro"){
        document.getElementById("areaRectangulo").style.display = "none";
        document.getElementById("perimetroRectangulo").style.display = "block";
    }
}

function areaRectangulo(){
    var base = parseInt(document.getElementById("n3").value);
    var altura = parseInt(document.getElementById("n4").value);
    var resultado = base * altura;
    document.getElementById("resultadoarearectangulo").value=resultado;
}

function perimetroRectangulo(){
    var base = parseInt(document.getElementById("n5").value);
    var altura = parseInt(document.getElementById("n6").value);
    var resultado = (base * 2) + (altura * 2);
    document.getElementById("resultadoperimetrorectangulo").value=resultado;
}

function formulasTriangulo(){
    let inputs = document.querySelectorAll("input");
    inputs.forEach(input => input.value = "");
    var formula = document.getElementById("areayperimetrotriangulo").value;
    if(formula == "area"){
        document.getElementById("areaTriangulo").style.display = "block";
        document.getElementById("perimetroTriangulo").style.display = "none";

    }
    if(formula == "perimetro"){
        document.getElementById("areaTriangulo").style.display = "none";
        document.getElementById("perimetroTriangulo").style.display = "block";
    }
}

function areaTriangulo(){
    var base = parseInt(document.getElementById("n7").value);
    var altura = parseInt(document.getElementById("n8").value);
    var resultado = (base * altura)/2;
    document.getElementById("resultadoareatriangulo").value=resultado;
}

function perimetroTriangulo(){
    var lado = parseInt(document.getElementById("n9").value);
    var resultado = lado + lado + lado;
    document.getElementById("resultadoperimetrotriangulo").value=resultado;
}
