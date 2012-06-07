/* Archivo de configuracion inicial para levantar modulos a traves de require*/

require.config(
    {paths: {
	"jquery" : "libs/jquery/jqueryui//jquery-1.7.2",
	"underscore" : "libs/underscore/underscore",
	"backbone" : "libs/backbone/backbone",
     "jqueryuicore" : "libs/jquery/jqueryui/ui/jquery.ui.core",
"jqueryuiwidget" : "libs/jquery/jqueryui/ui/jquery.ui.widget",
	"jqueryuiposition" : "libs/jquery/jqueryui/ui/jquery.ui.position",
"jqueryuieffcore" : "libs/jquery/jqueryui/ui/jquery.effects.core",
"jqueryuimouse" : "libs/jquery/jqueryui/ui/jquery.ui.mouse",
"jqueryuidrag" : "libs/jquery/jqueryui/ui/jquery.ui.draggable",
	"jqueryuisize" : "libs/jquery/jqueryui/ui/jquery.ui.resizable",
"jqueryuidialog" : "libs/jquery/jqueryui/ui/jquery.ui.dialog"
      }
    }
);

require(['app'], function(inicio){
    inicio.inicio();    
});