// JavaScript source code

//document.getElementById
//$('#monId, #monId2') $('.class') $('div')

//document.createElement
//$('<div>')

//addEventListener
//$('#monId').on('submit', function () {

//})
//$('#monId').click(function () {

//})
//$('#monId').submit(function () {

//})

//appendChild
//$('#monId').append

//document.getElementById('monId').innerText = "test";
//$('#monId').text("rrr");
//$('#monId').text();

//$('#monId').val("rrr");
//$('#monId').val();

//$('#monId').width(10);
//$('#monId').width();

//$('#monId').css('color');
//$('#monId').css('color', 'red');

//$('#monId').attr('for');
//$('#monId').attr('for', 'red');

//// Les points d'entrés
//$(document).ready(function () { };
//$(function () { })

//--------------------------------------------------------------------------

$(document).ready(function () {
    changeText();
    uppercaseTitle()


    function changeText() {
        $("#button").click(function () {
            $("#change").fadeOut(function () {
                $("#change").text(($("#change").text() == 'Un peu de texte') ? 'Good job' : 'Un peu de texte').fadeIn();
            })
        })
    }

});

//o Afficher les tables de multiplications dans une table généré en JS

//var container = $('#multitable');

//var newtable = $('<table>');

//for (var i = 0; i < 8; i++) {
//    var ligne = $('<tr>');

//    for (var j = 0; j < 8; i++) {
//        var cellule = $('<td>');
//        cellule.text(i * j);
//        ligne.append(cellule);

//    }
//    container.append(table);

//}

            // EXO 3 \\
function uppercaseTitle() {

    var chaine = $('#title').keyup(function () {
    chaine.val(chaine.val().toUpperCase());
    });
}

function submitForm(event) {
    event.preventDefault();

    
        var container = $('#containerParagraphe');

        var bloc = $('<div>');
        var titre = $('<h1>');
        var contenu = $('<p>');
        var bouton = $('<input>');

        titre.text($('#title').val());
        contenu.text($('#content').val());

        if ($('#check:checked').length) {
            contenu.css('backgroundColor', 'green');
        }

        bouton.val('supprimer');
        bouton.attr('type', 'submit');
       
       bouton.click(function () {
            bloc.remove();
       })
        

        bloc.append(titre);
        bloc.append(contenu);
        bloc.append(bouton);

        container.append(bloc);
   
};



