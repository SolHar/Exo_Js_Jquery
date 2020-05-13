// JavaScript source code

//1. Au chargement de la page:

// o Ecrire « Hello World » dans la console

console.log('Hello World');

/* o Modifier le contenu d’un span qui est dans votre page lors d’un click sur un
bouton présent dans votre page*/

function changeText() {
    document.getElementById('change').innerHTML = 'Good Job';
}

//o Afficher les tables de multiplications dans une table généré en JS

//function multiTables(i , j ) {

//    for (var i = 0; i < 8; i++) {

//        for (var j = 0; j < 8;  i++){

            // return i * j;
//        }

//    }



//2. Créez un formulaire HTML qui contient
//o Une textbox
//o Un textblock
//o Une checkbox
//o Un bouton submit


//3. Sur le submit du formulaire:
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


    

//o Le paragraphe contiendra aussi un bouton permettant de supprimer ce
//paragraphe

    var createButtonDel = document.createElement('input');
    createButtonDel.setAttribute('type', 'submit');
    createButtonDel.addEventListener('click', deletePara);
    createPara.appendChild(createButtonDel);

    function deletePara() {
        var delPara = document.getElementById('para');
        delPara.remove();
    }


//o Lors de l’ajout et de la suppression du paragraphe il doit y avoir une animation


//o Le paragraphe aura un fond vert si la checkbox est cochée

    if()
//o Lors de l’écriture dans la textbox, forcer l’écriture en majuscule


    document.getElementById('container').appendChild(createPara);
}