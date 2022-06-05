var datoregistrado = [];
var arrayconvertido = [];


var leerinformacion = function(){
  arrayconvertido = JSON.parse(localStorage.getItem('datoregistrado'))
  datoregistrado = arrayconvertido
    console.log(arrayconvertido)
    document.getElementById('resultado').innerHTML = ''

    for (let a = 0; a < arrayconvertido.length; a++) {
        document.getElementById('resultado').innerHTML += '<tr><td>'+  arrayconvertido[a].nombre +'</td><td>'+  arrayconvertido[a].apellido +'</td><td>'+  arrayconvertido[a].direccion +'</td><td class="btn btn-danger" onclick="eliminar('+  a +')">Quitar</td></tr>' 
        
    }

   
   
}

var guardar = function(){
    var nombre = document.getElementById('nombre').value
    var apellido = document.getElementById('apellido').value
    var direccion = document.getElementById('direccion').value
    datoregistrado.push({nombre:nombre, apellido:apellido, direccion:direccion})
    localStorage.setItem('datoregistrado', JSON.stringify(datoregistrado))
    leerinformacion()
}

var eliminar = function(indice){
    console.log(indice)
    datoregistrado.splice(indice,1)
    localStorage.setItem('datosregistrado', JSON.parse(datoregistrado))
    leerinformacion()
}


leerinformacion()

