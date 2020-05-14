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

$console.log('hello world');

function changeText() {
    $('#change').text('Good Job');
}

//o Afficher les tables de multiplications dans une table généré en JS

var container = $('#multitable');

var newtable = $('<table>');

for (var i = 0; i < 8; i++) {
    var ligne = $('<tr>');

    for (var j = 0; j < 8; i++) {
        var cellule = $('<td>');
        cellule.text(i * j);
        ligne.append(cellule);

    }
    container.append(table);

}


// Les points d'entrés
$(document).ready(function () {

});
