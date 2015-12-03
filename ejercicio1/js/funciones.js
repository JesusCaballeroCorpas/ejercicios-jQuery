$(document).ready(function() {
    $('#botonAvanzar').on('click',function(){
        $('#vehiculo').animate({left:'749px'},4000);
        
        $('#puerta').animate({bottom:'0px'},1000,function(){
            $('#puerta').animate({bottom:'90px'},1000);
            $('#puerta').animate({bottom:'0px'},1000);
        });
    });

    $('#botonParar').on('click',function(){
        $('#vehiculo').stop(true);
        $('#puerta').stop(true);
    });

    $('#botonRetroceder').on('click',function(){
        $('#vehiculo').animate({left:'1px'},4000);
        $('#puerta').animate({bottom:'0px'},1000,function(){
            $('#puerta').animate({bottom:'90px'},1000);
            $('#puerta').animate({bottom:'0px'},1000);
        });
    });
    
});