/* Ruteador de la pagina*/

define(['order!jquery', 'order!underscore', 'order!backbone', 'views/inicio/inicial'], function(jQuery, _, Backbone, inicial){

    var rutas = Backbone.Router.extend({
	routes : {
	    '/pagDos': 'segundaAccion',
	    '*actions': 'defaultAction'
	},

	segundaAccion : function(){
	    console.log('Segunda accion');
	},
	defaultAction : function(){
	    inicial.render();
	}
    });

    var iniciar = function(){
	r = new rutas();
	Backbone.history.start();
    };

    return {iniciar : iniciar};

}); 