$("#hello").show();
$("#iAm").show();
$("#Albert").show();

$("#about").hide();
$("#work").hide();
$("#contact").hide();


$("#hello").mouseenter(function () {
    $(this).hide();
    $("#about").show();
});

$("#iAm").mouseenter(function () {
    $(this).hide();
    $("#work").show();
});

$("#Albert").mouseenter(function () {
    $(this).hide();
    $("#contact").show();
});

$("#about").mouseleave(function(){
    $(this).hide();
    $("#hello").show();
});

$("#work").mouseleave(function(){
    $(this).hide();
    $("#iAm").show();
})

$("#contact").mouseleave(function(){
    $(this).hide();
    $("#Albert").show();
})