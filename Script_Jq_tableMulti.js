// JavaScript source code
$(document).ready(function () {

    $('#button').on('click', function () {

        var container = $('#multitable');

        var newtable = $('<table>');

        for (var i = 1; i <= 10; i++) {
            var ligne = $('<tr>');

            for (var j = 1; j <= 10; j++) {
                var cellule = $('<td>');
                cellule.text(i * j);

                ligne.append(cellule);

            }

            newtable.append(ligne);

        }

        container.append(newtable);
    });
});