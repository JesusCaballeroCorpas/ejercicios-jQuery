$(document).ready(function() {
    
    //Creo variables globales
    var seleccion;
    
    //Función para el boton quitar/poner
    $('#quitapon').on('click',function(){
        
        //Guardo el valor de la seleccion en una variable
        seleccion = $('#seleccion').val();
        
        //Si el cuadro seleccionado esta visible lo oculto y viceversa
        if($('#' + seleccion).css('display') != 'none'){
            $('#' + seleccion).css('display','none');
        } else {
            $('#' + seleccion).css('display','block');
        }
        
        //Reinicio el texto
        $('#texto').text("");
        
    });
    
    //Función para el boton Plegar
    $('#plegar').on('click',function(){
        
        //Pliega o despliega las notas
        $('#notas').slideToggle();
        
        //Si en el boton pone plegar lo cambia por desplegar y viceversa
        if($(this).text() == 'Plegar'){
            $(this).text('Desplegar');
        } else {
            $(this).text('Plegar');
        }
       
        //Reinicio el texto
        $('#texto').text("");
        
    });
    
    //Función para el boton piano
    $('#piano').on('click',function(){
        
        //Guardo en un array los elementos dentro de notas
        //var arrayNotas = $('#notas').find('div');
        
        //Si en el boton pone piano lo cambia por silófono y viceversa
        if($(this).text() == 'Piano'){
            //Recorro el array y les añado las clases negro o blanco
            /*for(var i = 0;i < arrayNotas.length;i++){
                if(i % 2 == 0){
                    $(arrayNotas[i]).addClass('negro');
                } else {
                    $(arrayNotas[i]).addClass('blanco');
                }
            };*/
            $('#notas').find('div:even').addClass('negro');
            $('#notas').find('div:odd').addClass('blanco');
            $(this).text('Silófono');
        } else {
            //Recorro el array y les borro las clases blanco y negro
            $('#notas').find('div:even').removeClass('negro');
            $('#notas').find('div:odd').removeClass('blanco');
            $(this).text('Piano');
        }
        
        //Reinicio el texto
        $('#texto').text("");
        
    });
    
    //Función para escribir las notas y aumentarlas al pasar por encima.
    $('#notas div').on('mouseover',function(){
        //debugger;
        /*var ancho = ($(this).css('width')).replace('px','');
        var alto = ($(this).css('height')).replace('px','');
        $(this).animate({width: (+ancho * 2) + 'px',height:(+alto * 2) + 'px'},'slow');*/
        if($('#guitarra').text() == 'Guitarra')
        $(this).animate({width: '100px',height:'100px',opacity:'0.7'},'slow');
        $('#texto').append(" " + $(this).text());
    });
    $('#notas div').on('mouseout',function(){
        if($('#guitarra').text() == 'Guitarra')
        $(this).animate({width: '50px',height:'50px',opacity:'1'},'slow');
    });
    
    //Función para convertirlas en Guitarra
    $('#guitarra').on('click',function(){
        if($(this).text() == 'Guitarra'){
            var tam = 25;
            $('#notas div').each(function(val,elem){
                $(elem).animate({height: tam + 'px'});
                tam += 25;
            });
            $(this).text('Normal');
        } else {
            $('#notas div').each(function(val,elem){
                $(elem).animate({height: '50px'});
            });
            $(this).text('Guitarra');
        }
        //Reinicio el texto
        $('#texto').text("");
    });
});