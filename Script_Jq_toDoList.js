// JavaScript source code

$(function () {

    //addTaskToList();
  



    $('#sujetToDoList').submit(function (e) {

        var cardGlobal = $('#containerGlobal');

        var bloc = $('<div>');
        bloc.attr('class', 'border border-info rounded');
        bloc.css('padding', '10px');
        bloc.css('margin', '10px');
        bloc.css('width', '300px');
        bloc.css('display', 'inline-block');


        var titre = $('<h3>');
        // Récup titre de la Liste
        titre.text($('#title').val());

        var blocForm = $('<div>');

         // <form> => formulaire de tache à faire
        var ajoutTache = $('<form>');
        ajoutTache.attr('action', '#');
        ajoutTache.attr('method', 'post');
        ajoutTache.attr('class', 'form-inline');

        // <input> => champs de tache à faire
        var tacheToDo = $('<input>');
        tacheToDo.attr('type', 'text');
        tacheToDo.attr('id', 'nomTache');
        tacheToDo.attr('placeholder', 'Ajouter une tache');
        tacheToDo.attr('class', 'form-control mb-2 mr-sm-2');

        // <input> => bouton pour ajouter la tache à la liste.
        var bouton = $('<input>');
        bouton.attr('type', 'submit');
        bouton.attr('id', 'addToList');
        bouton.val('Ajouter');


        var toDoList = $('<ul>');
        toDoList.attr('class', 'list');

        
        


        //bouton.click(function (e) {
        //    var newTache = $('#nomTache').val(); 
        //    $(this).append
        //    var toDoList = $('<ul>');
        //    toDoList.append(newTache);
           
        //   //toDoList.append(elementToDo);
        //});


        // création des 2 listes
        //var toDoList = $('<ul>');
        //var elementToDo = $('<li>');
        //var doneList = $('<ul>');
        //var elementDone = $('<li>');

        //
        bloc.append(titre);
        
        blocForm.append(ajoutTache);
        blocForm.append(tacheToDo);
        blocForm.append(bouton);
        blocForm.append(toDoList);

        //toDoList.append(tache);

        bloc.append(blocForm);


        cardGlobal.append(bloc);

        

        e.preventDefault();
    });


    // Ajout d'une tache à faire

    //function addTaskToList() {

    //    $('#addToList').click(function () {
    //        var tache = $('#nomTache').val();
    //        if (tache.length) {
    //            $('<li>').text(tache).append(toDoList);
    //            e.preventDefault();
    //        }
    //    });
    //};



});
