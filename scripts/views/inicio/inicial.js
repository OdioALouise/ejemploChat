/* Vista logica inicial */

define(['order!jquery', 'order!underscore', 'order!backbone','text!templates/inicio/tmpInicial.html' , 'order!jqueryuicore', 'order!jqueryuiwidget', 'order!jqueryuiposition', 'order!jqueryuieffcore', 'order!jqueryuimouse', 'order!jqueryuidrag', 'order!jqueryuisize', 'order!jqueryuidialog'], function(jQuery, _, Backbone, tmpInicial){

    var vistaInicial = Backbone.View.extend({
	el: jQuery('#vistaInicial'),
        render : function(){
	    
	    var data = {}
	    var tmpCompilado = _.template(tmpInicial, data);
	    
	    jQuery(this.el).dialog({
		create: function(event, ui) { jQuery(this).show('slide'); }
	    });

	    jQuery(this.el).append(tmpCompilado);
	} 
    });

    return new vistaInicial();

});