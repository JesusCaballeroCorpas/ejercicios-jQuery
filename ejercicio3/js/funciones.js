$(document).ready(function() {
    var idCaja = 1;
    //Creo las cajas dinamicamente
    $("#botonComenzar").on("click", function(){
        function creaCaja(){
            var caja = $('<div></div>')
                        .addClass('caja')
                        .attr('id','caja' + idCaja)
                        .text(idCaja);
            var option = $('<option></option>')
                        .attr('value','caja' + idCaja)
                        .text(idCaja);
            $("#cajas").append(caja);
            $("#seleccion").append(option);
            idCaja++;
            if(idCaja < 21){
                setTimeout(creaCaja,1000);
            }
        }
        creaCaja();
        $("#botonComenzar").off("click");
    });
    
    //Función para el boton Mostrar/Ocultar
    $('#botonMostrarOcultar').on('click',function(){
        //Guardo el valor de la seleccion en una variable
        var seleccion = $('#seleccion').val();
        //Compruebo si esa caja existe
        if ( $('#' + seleccion).length ) {
            $('#' + seleccion).animate({
                height: 'toggle',
                width: 'toggle'
            });
        } else {
            $("#texto").text("La " + seleccion + " no existe.");
            $("#texto").fadeIn();
            $("#texto").animate({height: 'toggle'},3000);
        }    
    });
    
    //Función para el boton quitar
    $('#botonQuitar').on('click',function(){
        //Guardo el valor de la seleccion en una variable
        var seleccion = $('#seleccion').val();
        //Compruebo si esa caja existe
        if ( $('#' + seleccion).length ) {
          // hacer algo aquí si el elemento existe
            $('#' + seleccion).animate({
                height: 'toggle',
                width: 'toggle',
                backgroundColor: 'red'
            },1000, function(){
                $('#' + seleccion).remove();
            });
        } else {
            $("#texto").text("La " + seleccion + " no existe.");
            $("#texto").fadeIn();
            $("#texto").animate({height: 'toggle'},3000);
        }
        
    });
});