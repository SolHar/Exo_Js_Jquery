// JavaScript source code

$(document).ready(function () {

    document.getElementById('title').addEventListener('keyup', function () {
        this.value = this.value.toUpperCase();
        $('#title').onkeyup(function () {
            this.val() = this.val(toUpperCase);
        })


$('#container').submit(function () {
    var containerPara = $('#container');

    var bloc = $('<div>')
    var titre = $('<h1>');
    var contenu = $('<p>');
    var bouton = $('<input>');

    titre.text($('#title').val());
    contenu.text($('#content').val());

    if ($('#cbEstVert:checked').length)
        contenu.css('backgroundColor', 'green');

    bouton.val("Supprimer");
    bouton.attr('type', 'submit');

    bloc.append(titre);
    bloc.ppend(content);
    bloc.append(bouton);

    containerPara.append(bloc);
});

};