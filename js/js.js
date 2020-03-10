Eliminar = function() {
    virus.splice(registroactual, 1);
    AgregarLS(virus);

    registroactual--;
    mostrar(registroactual);


}
Limpiar = function() {

    document.getElementById("nombre").value = "";
    document.getElementById("urlfoto").value = "";
    document.getElementById("descripcion").value = "";
    document.getElementById("dns").value = "";
    document.getElementById("foto").value = "";

    document.getElementById("buscar").value = "";


}
Siguiente = function() {
    if (registroactual == (virus.length - 1))
        alert("Compa ya esta en el ultimo producto!!");
    else {
        registroactual++;
        mostrar(registroactual);
    }
}
Ultimo = function() {

    registroactual = virus.length - 1;
    mostrar(registroactual);

}

Primero = function() {

        registroactual = 0;
        mostrar(registroactual);

    }
    //Pasar al anterior registro     
Anterior = function() {
    if (registroactual == 0)
        alert("Compa ya esta en el primer producto!!");
    else {
        registroactual--;
        mostrar(registroactual);
    }
}

//Pasar al primero registro     
Primero = function() {
    if (virus.length == 0)
        alert("Compa no hay productos!!");
    else {
        registroactual = 0;
        mostrar(registroactual);
    }
}

//Mostrar el registro indicado
mostrar = function(no) {
    document.getElementById("nombre").value = getVirus()[no].name;
    document.getElementById("urlfoto").value = getVirus()[no].urlfoto;
    document.getElementById("descripcion").value = getVirus()[no].descripcion;
    document.getElementById("dns").value = getVirus()[no].dondesurgio;
    document.getElementById("foto").src = getVirus()[no].urlfoto;
    document.getElementById("barra").innerHTML = "<b>" + (registroactual + 1) + " de " + getVirus().length + "</b>";
}
Agregar = function() {
    nom = document.getElementById("nombre").value;
    url = document.getElementById("urlfoto").value;
    ds = document.getElementById("descripcion").value;
    dns = document.getElementById("dns").value;

    var newVirus = {
        id: virus.length,
        name: nom,
        urlfoto: url,
        descripcion: ds,
        dondesurgio: dns

    }
    console.log(newVirus);
    virus.push(newVirus);
    AgregarLS(virus);
}
Editar = function() {

    nom = document.getElementById("nombre").value;
    url = document.getElementById("urlfoto").value;
    ds = document.getElementById("descripcion").value;
    dns = document.getElementById("dns").value;


    virus[registroactual] = { id: registroactual, name: nom, urlfoto: url, descripcion: ds, dondesurgio: dns };

    AgregarLS(virus);


    alert('Editado');


}

Buscar = function() {
    nom = document.getElementById("nombre").value;
    url = document.getElementById("urlfoto").value;
    ds = document.getElementById("descripcion").value;
    dns = document.getElementById("dns").value;
    nom = document.getElementById("nombre").value;
    url = document.getElementById("urlfoto").value;
    ds = document.getElementById("descripcion").value;
    buscar = document.getElementById("buscar").value;
    var buscarSelect = document.getElementById("buscarSelect").value;
    alert(buscarSelect);
    let contador = 0;

    for (value in virus) {
        if (getVirus()[value].buscarSelect == buscar) {
            alert(`Fue encontrado ${buscar} en la posicion ${parseInt(value)+1}`);
            mostrar(value);
        } else {}
    }

    switch (buscarSelect) {
        case 'name':
            for (value in virus) {
                if (getVirus()[value].name === buscar) {
                    alert(`Fue encontrado ${buscar} en la posicion ${parseInt(value)+1}`);
                    mostrar(value);
                }
            }
            break;
        case 'urlfoto':
            for (value in virus) {
                if (getVirus()[value].urlfoto == buscar) {
                    alert(`Fue encontrado ${buscar} en la posicion ${parseInt(value)+1}`);
                    mostrar(value);
                } else {}
            }

            break;
        case 'descripcion':
            for (value in virus) {
                if (getVirus()[value].descripcion === buscar) {
                    alert(`Fue encontrado ${buscar} en la posicion ${parseInt(value)+1}`);
                    mostrar(value);
                }
            }
            break;
        case 'dondesurgio':
            for (value in virus) {
                if (getVirus()[value].dondesurgio === buscar) {
                    alert(`Fue encontrado ${buscar} en la posicion ${parseInt(value)+1}`);
                    mostrar(value);
                } else {
                    contador++;


                }
            }
            (contador >= getVirus().length) ? alert('No se encuentra'): console.log('Si se encontro');
            break;

        default:
            alert('Todavia no selecciona el tema a buscar');
    }


}

AgregarLS = function(dato) {

    localStorage.setItem('db', JSON.stringify(dato));

}
getVirus = function() {
    var storedList = localStorage.getItem('db');
    if (storedList == null) {
        virus = [];
    } else {
        virus = JSON.parse(storedList);
    }

    return virus;
}
var virus = [];
var registroactual = 0;

console.log(getVirus().length);
mostrar(registroactual);