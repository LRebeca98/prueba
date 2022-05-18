$(function () {

    // Navegador
    $("nav > ul > li").hide();
      $("nav > ul:nth-child(2) > a").click(function(){
      $("nav > ul:nth-child(2) > li").toggle();
    });

    $("nav > ul > li").hide();
      $("nav > ul:nth-child(3) > a").click(function(){
      $("nav > ul:nth-child(3) > li").toggle();
    });

    $("nav > ul > li").hide();
      $("nav > ul:nth-child(4) > a").click(function(){
      $("nav > ul:nth-child(4) > li").toggle();

    });

    // Imagenes
    // $("article > div > img").click(function() {
    //     $("article > div").find("img:nth-child(1)").remove();
    //     $(this).appendTo("article > div");
    // });

   // Imagenes 
   $("article > div > img").click(function() {
    var img =  $(this).attr("src");
     $(this).siblings(":first-child").attr("src", img);
   });

   // Ventana
   var ww = window.innerWidth;
   var wh = window.innerHeight;
   $("#ventana").width(ww / 2);
   $("#ventana").height(wh / 2);
   $("#ventana").css({"top" : wh / 4, "left" : ww / 4})

   // Ventana emergente
   $("article > div > img").dblclick(function () {
    $("#ventana").find("img").remove();
    $("#ventana").css({"display" : "flex"});
    
    //$(this).clone().prependTo("#ventana").siblings();
    $(this).clone().prependTo("#ventana");

    // $("#ventana").prepend("")


    // var img =  $(this).attr("src");

    // <img src="img/nz zapa 31.jpg" alt="Calzado Infantil">
    // var imagenstr= "<img src=" + "\""  
    //  $(this).siblings(":first-child").attr("src", img);
   });

   // Botón cerrar
   $("#ventana button").click(function() {
    $(this).parent().find("img").remove();
    $("#ventana").css("display" , "none");
    
   });
});