// JavaScript source code

function multi() {

// R�cup�ration du container dans la vue
var container = document.getElementById('multitable');

// Cr�ation de la table
var newTable = document.createElement('table');

for (var i = 1; i <= 10; i++) {
    var ligne = document.createElement('tr');

    for (var y = 1; y <= 10; y++) {
        var cellule = document.createElement('td');
        cellule.innerText = i * y;
        ligne.appendChild(cellule);
    }

    newTable.appendChild(ligne);
}

// Ajout au container
multitable.appendChild(newTable);
};