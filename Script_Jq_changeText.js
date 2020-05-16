// JavaScript source code

$(document).ready(function () {
    changeText();


    function changeText() {
        $("#button").click(function () {
            $("#change").fadeOut(function () {
                $("#change").text(($("#change").text() == 'Un peu de texte') ? 'Good job' : 'Un peu de texte').fadeIn();
            })
        })
    }

});
