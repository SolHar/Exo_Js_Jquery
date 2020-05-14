// JavaScript source code

//1. Au chargement de la page:

// o Ecrire « Hello World » dans la console

window.addEventListener('load', function (e) {
    maj();
});

console.log('Hello World');

/* o Modifier le contenu d’un span qui est dans votre page lors d’un click sur un
bouton présent dans votre page*/

function changeText() {
    document.getElementById('change').innerHTML = 'Good Job';
}

//o Afficher les tables de multiplications dans une table généré en JS

var container = document.getElementById('multitable');

var newtable = document.createElement('table');

for (var i = 0; i < 8; i++) {
    var ligne = document.createElement('tr');

    for (var j = 0; j < 8;  i++){
        var cellule = document.createElement('td');
        cellule.innerText = i * j;
        ligne.appendChild(cellule);
            
    }
    table.appendChild(table);

   }

    /*
     * // Exo 3
    // Récupération du container dans la vue
    var container = document.getElementById('containerTable');

    // Création de la table
    var table = document.createElement('table');

    for (var i = 1; i <= 10; i++) {
        var ligne = document.createElement('tr');

        for (var y = 1; y <= 10; y++) {
            var cases = document.createElement('td');
            cases.innerText = i * y;
            ligne.appendChild(cases);
        }

        table.appendChild(ligne);
    }

    // Ajout au container
    container.appendChild(table);
     */
     

//2. Créez un formulaire HTML qui contient
//o Une textbox
//o Un textblock
//o Une checkbox
//o Un bouton submit


//3. Sur le submit du formulaire:

//o Lors de l’écriture dans la textbox, forcer l’écriture en majuscule

function maj() {
    var chaine = document.getElementById('title').addEventListener('keyup', function () {

        chaine.value = chaine.value.toUpperCase();
    });
}

//o Ajouter un paragraphe dans un div externe au formulaire(on peut avoir
//plusieurs paragraphes)

function submitForm(event) {
    event.preventDefault();
    console.log('testjksdj');

    var createPara = document.createElement('p');
    createPara.setAttribute('id', 'para');

    //o Le titre aura le contenu de la textbox

    var createTitle = document.createElement('h3');
    createTitle.innerText = document.getElementById('title').value;
    createPara.appendChild(createTitle);

    //o Le contenu aura le contenu de la textblock

    var createContent = document.createElement('span');
    createContent.innerText = document.getElementById('content').value;
    createPara.appendChild(createContent);

    //o Le paragraphe aura un fond vert si la checkbox est cochée

    if (document.getElementsById('check').checked) {
        createPara.style.background - color('green');
    }

    //o Le paragraphe contiendra aussi un bouton permettant de supprimer ce
    //paragraphe

    var createButtonDel = document.createElement('input');
    createButtonDel.setAttribute('type', 'submit');
    createButtonDel.setAttribute('value', 'Supprimer');
    createButtonDel.addEventListener('click', deletePara);
    createPara.appendChild(createButtonDel);

    function deletePara() {
        var delPara = document.getElementById('para');
        delPara.remove();
    }


    //o Lors de l’ajout et de la suppression du paragraphe il doit y avoir une animation


    

    
    document.getElementById('container').appendChild(createPara);
}