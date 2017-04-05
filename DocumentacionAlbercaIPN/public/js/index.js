console.log("Hola");
$(document).ready(function(){
    $('body').scrollspy({target: "#myNavSpy", offset: 0});
});

$("#myNavSpy").on("activate.bs.scrollspy", function(){
        var x = $("li.active > a").text();
        console.log("You are currently viewing section : " + x);
})