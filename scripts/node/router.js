
function route(handle,ruta, response){
    
    if((typeof handle[ruta]) === 'function'){
	handle[ruta](response);	
    }else{
	console.log('Error 404 URL no encontrada');
	response.writeHead(404, {"content-type" : "text/html"});
	response.write("404 not found");
	response.end();
    }	

}

exports.route =  route;