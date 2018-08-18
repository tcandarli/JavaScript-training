$(document).ready(function() {

    $("p").css("color", "green");

    $("a").html("JQuery");

    $("input").css("background-color", "skyblue");

    $("h1").css("font-size", "72px");

    $("p").append($("<span>Coding is great!</span>").css("color", "red"));

    $("p: Last").remove();
});