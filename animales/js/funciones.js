$(document).ready(function() {
    //Se crean las variables globales
    var animales = ['oso','pajaro','gato','perro','leon','conejo'];
    var tipoAnimal;
    var level;
    var numVidas;
    
    //Funcion para comenzar  un nivel
    function siguienteNivel(){
        //Borra todos los animales del tablero y oculta los mensajes
        $('#tablero').find('div').remove();
        $('#mensaje').css('display','none');
        $('#tablero > p').css('display','none');
        
        //Se crean los 20 animales aleatorios
        for(var i = 1; i <= 10 + level; i++){
            //Se genera el tipo de animal y la posición donde va a salir
            tipoAnimal = Math.floor(Math.random() * 6);
            leftAnimal = Math.floor(Math.random() * 510);
            topAnimal = Math.floor(Math.random() * 310);
            //Se genera el animal y se le añaden sus caracteristicas
            var animal = $('<div></div>')
                            .addClass('animales')
                            .addClass(animales[tipoAnimal])
                            /*.attr('id','animal' + i)*/
                            .css('top',topAnimal + 'px')
                            .css('left',leftAnimal + 'px');
            $(animal).on('click',function(){
               compruebaAnimal(this);
            });
            //Se añade el animal al tablero
            $("#tablero").append(animal);
        }
        //Indica el animal a pinchar y el nivel en el que te encuentras
        $('#animal').text("Animal: " + animales[tipoAnimal]);
        $('#nivel').text("Level: " + level);
    };
    
    //Función para comprobar si el animal es el que tienes que pinchar o no
    function compruebaAnimal(animal){
        //Comprueba si has hecho click en el animal correcto
        if($(animal).hasClass(animales[tipoAnimal])){
            $(animal).animate({left:'600px',opacity:'0'},500,function(){
                $(animal).remove();
                if(!$('#tablero').find('div').hasClass(animales[tipoAnimal])){
                    //alert('siguiente nivel');
                    level++;
                    $('#botonSiguiente').removeAttr('disabled');
                    $('#mensaje').css('display','block')
                                 .text('Pulse Next para pasar al siguiente nivel');
                }
            });   
        } else { //Si has fallado te quita una vida
            $(animal).animate({left:'+=10px'},50)
                     .animate({left:'-=10px'},50)
                     .animate({left:'+=10px'},50)
                     .animate({left:'-=10px'},50)
                     .animate({left:'+=10px'},50)
                     .animate({left:'-=10px'},50);
            $('#vida' + numVidas).remove();
            numVidas--;
            if(numVidas == 0){
                $('#tablero > p').css('display','block');
                $('#botonComenzar').removeAttr('disabled');
                $('#mensaje').css('display','block')
                             .text('Pulse New Game para comenzar otra partida');
            }
        }
    }
    
    //Funcion del boton comenzar.
    $('#botonComenzar').on('click', function(){
        level = 1;
        numVidas = 3;
        //Se desactiva el botón comenzar y se dan las 3 vidas.
        $(this).attr('disabled','true');
        for(var i = 1; i <= 3; i++){
            var vida = $('<div></div>').addClass('corazon').attr('id','vida' + i);
            $('#vidas').append(vida);
        }
        siguienteNivel();  
    });
    
    //Funcion del boton siguiente.
    $('#botonSiguiente').on('click', function(){
        siguienteNivel();
        $(this).attr('disabled','true');
    });
});