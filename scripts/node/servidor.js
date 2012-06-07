//Servidor del node

var http = require('http');
var url = require('url');
var router = require('./router');
var manejadorPeticiones = require('./manejadorPeticiones');

function onRequest(request, response){

    var handle = {};
    handle["/"] = manejadorPeticiones.iniciar;
    handle["/iniciar"] = manejadorPeticiones.iniciar;
    handle["/find"] = manejadorPeticiones.find;

    var ruta = url.parse(request.url).pathname;

    router.route(handle, ruta, response);
       
}

http.createServer(onRequest).listen(8888);

console.log('Servidor corriendo en localhost puerto 8124');