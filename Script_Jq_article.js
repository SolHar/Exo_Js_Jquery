// JavaScript source code

$(function () { 

   
    $('#title').keyup(function (e) {
        this.value = this.value.toUpperCase();
        e.preventDefault();
    });

   


    $('#formPara').submit(function (e) {


        var containerPara = $('#container');

        var bloc = $('<div>')
        var titre = $('<h1>');
        var contenu = $('<p>');
        var bouton = $('<input>');

        titre.text($('#title').val());
        contenu.text($('#content').val());


        if ($('#check:checked').length){
           //contenu.css('backgroundColor', 'green');
            contenu.attr('class', 'p-3 mb-2 bg-success text-white');
        }

        bloc.attr('class', 'border border-info rounded');
        bloc.css('padding', '10px');
        bloc.css('margin', '10px');

        bouton.val("Supprimer");
        bouton.attr('type', 'submit');
        bouton.click(function (e) {
            bloc.remove();
        });

        bloc.append(titre);
        bloc.append(contenu);
        bloc.append(bouton);

        containerPara.append(bloc);

        e.preventDefault();
    });



});