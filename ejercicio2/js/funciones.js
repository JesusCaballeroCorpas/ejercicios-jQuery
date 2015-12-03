$(document).ready(function() {
    //Despliega los controles de estilo
    $("ul > div").click(function(){
        //$(this).closest("ul").find("li").slideToggle("slow");
        $(this).siblings("li").slideToggle("slow");
    });
    //Aplica estilo 1 a la caja 1
    $("#conEstilos1").find("li").first().click(function(){
        //$("#caja1").toggleClass("estilo1Caja1");
        //$("#caja1").removeClass("estilo2Caja1").removeClass("estilo3Caja1");
        $("#caja1").animate({
            width:'100px',
            height:'100px',
            backgroundColor:'yellow'
        },1000);
    });
    //Aplica estilo 2 a la caja 1
    $("#conEstilos1").find("li").first().next().click(function(){
        //$("#caja1").toggleClass("estilo2Caja1");
        //$("#caja1").removeClass("estilo1Caja1").removeClass("estilo3Caja1");
        $("#caja1").animate({
            width:'200px',
            height:'100px',
            backgroundColor:'#B848FF'
        },1000);
    });
    //Aplica estilo 3 a la caja 1
    $("#conEstilos1").find("li").first().next().next().click(function(){
        //$("#caja1").toggleClass("estilo3Caja1");
        //$("#caja1").removeClass("estilo1Caja1").removeClass("estilo2Caja1");
        $("#caja1").animate({
            width:'200px',
            height:'200px',
            backgroundColor:'#FF5500'
        },1000);
    });
    //Aplica estilo 1 a la caja 2
    $("#conEstilos2").find("li").first().click(function(){
        $("#caja2").toggleClass("estilo1Caja2");
        $("#caja2").removeClass("estilo2Caja2").removeClass("estilo3Caja2");
    });
    //Aplica estilo 2 a la caja 2
    $("#conEstilos2").find("li").first().next().click(function(){
        $("#caja2").toggleClass("estilo2Caja2");
        $("#caja2").removeClass("estilo1Caja2").removeClass("estilo3Caja2");
    });
    //Aplica estilo 3 a la caja 2
    $("#conEstilos2").find("li").first().next().next().click(function(){
        $("#caja2").toggleClass("estilo3Caja2");
        $("#caja2").removeClass("estilo1Caja2").removeClass("estilo2Caja2");
    });
});