
document.addEventListener("Click", function() {
    console.log("Event listener click event");
})

//DOM
let links = document.getElementsByTagName("a");

for (let a of links) {
    a.addEventListener("click2", function() {
        console.log("Clicked to one link!");
    })
}

$(document).ready(function() {

    $('#link1').on("click", function(){
        $('button').hide("fadeout");
    })

    $('#link2').on("click", function(){
        $('button, input').css("background-color", "black");
    })



});

$(document).ready(function() {

    $('.button').css('background-color', 'gray');

    $('table').on("click", ".button", function(){
        $(this).closest('tr').remove();
    })

});
