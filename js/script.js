$(document).ready(function () {
    console.log("jQuery loaded.....");

    // change the class name of the burger menu and the header to position new the header.
$('#menu').click(function(){

    $(this).toggleClass('fa-times');
    $('header').toggleClass('toggle');

});

//remove the classes

$(window).on('scroll load',function(){

    $('#menu').removeClass('fa-times');
    $('header').removeClass('toggle');

});


  });