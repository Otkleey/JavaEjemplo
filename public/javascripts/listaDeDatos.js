var form = document.getElementById("formDatos");
var lista = document.getElementById("ulDatos");
var filtro = document.getElementById("buscarDatos");

form.addEventListener("submit",agregarDato);
lista.addEventListener("click", eliminarDato);
filtro.addEventListener("keyup", buscarDato);

function agregarDato(e){
    e.preventDefault();
    var newDato = document.getElementById("inputDatos").value;

    var li = document.createElement("li");
    li.appendChild(document.createTextNode(newDato));
    
    var buttonDel = document.createElement("button");
    buttonDel.className = "eliminar";
    buttonDel.appendChild(document.createTextNode("X"));

    li.appendChild(buttonDel);
    
    lista.appendChild(li);
}

function eliminarDato(e){
    e.preventDefault();
    if(e.target.classList.contains("eliminar")){
        if(confirm("¿Deseas eliminar el dato?")){
            var li = e.target.parentElement;
            lista.removeChild(li);
        }
    }
}

function buscarDato(e){
    var texto = e.target.value.toLowerCase();
    var items = lista.getElementsByTagName("li");
    Array.from(items).forEach(function(item){
        var itemNombre = item.firstChild.textContent;
        if(itemNombre.toLowerCase().indexOf(texto) != -1){
            item.style.display = "block";
        }else{
            item.style.display = "none";
        }
    });
}


