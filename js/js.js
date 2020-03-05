//Obtener datos de local storage

 Obtener=function(dato){
       let datoLS;
    //comprobamos si hay algo en localStorage
    if (localStorage.getItem('datos') === null) {
        datoLS = [];

    } else {
        datoLS = JSON.parse(localStorage.getItem('datos'));
    }

    return datoLS;
 }
 Agregar=function(id){
       
     const nombre = document.getElementById('nombre').value;
     const urlfoto = document.getElementById('urlfoto').value;
     const descripcion = document.getElementById('descripcion').value;
     const dns = document.getElementById('dns').value;

var miObjeto = { 'nombre': nombre, 'urlfoto': urlfoto, 'descripcion': descripcion, 'dns': dns };

AgregarLS(miObjeto,0);
 }

 AgregarLS=function(dato,id){
  let datos;
    //Toma el valor de localStorage o vacio dependiendo de si hay datos
   // datos = Obtener();
    //El curso seleccionado se agrega al arreglo
   // datos.push(dato);
    //    
    localStorage.setItem('datos'+1, JSON.stringify(dato));

 }
//Pasar al siguiente registro     Siguiente=function()
{
if(registroactual==(productos.length-1))
alert("Este es el ultimo dato");
else
{
    registroactual++;
    mostrarProducto(registroactual);
}
}

//Pasar al anterior registro     
Anterior=function()
{
if(registroactual==0)
alert("Este es el primer dato");
else
{
    registroactual--;
    mostrarProducto(registroactual);
}
}

//Pasar al primero registro     
Primero=function()
{
if(productos.length==0)
alert("Ya no hay mas datos");
else
{
    registroactual=0;
    mostrarProducto(registroactual);
}
}

//Mostrar el registro indicado
mostrarProducto=function(no)
 {
    document.getElementById("nombre").value=localStorage.key(0).nombre; 
    document.getElementById("descripcion").value=localStorage.getItem('datos'+0).descripcion;
    document.getElementById("dns").value=localStorage.getItem('datos'+0).dnds;

    document.getElementById("urlfoto").value=localStorage.getItem('datos'+0).urlfoto;
    document.getElementById("foto").src=localStorage.getItem('datos'+0).urlfoto;
    document.getElementById("barra").innerHTML="<b>"+(registroactual+1)+" de "+productos.length + " productos" +"</b>" ;

    if (localStorage.getItem('datos') === null) {
    

    } else {

    }


 }

 var productos=[];
 var registroactual=0;

 mostrarProducto(registroactual);

 </script>   