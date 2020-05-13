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

//function multiGenerate(a,b) {

//    for (var i = 0; i < 8; i++) {

//        var a = 
//    }
//}

//2. Créez un formulaire HTML qui contient
//o Une textbox
//o Un textblock
//o Une checkbox
//o Un bouton submit


//3. Sur le submit du formulaire:
//o Ajouter un paragraphe dans un div externe au formulaire(on peut avoir
//plusieurs paragraphes)

function submitForm() {
    var para = document.createElement('p');
    para.innerText = 'test';
    document.getElementById('container').appendChild(para);
//o Le titre aura le contenu de la textbox

    var title = document.createElement('h3');
    
//o Le contenu aura le contenu de la textblock
//o Le paragraphe contiendra aussi un bouton permettant de supprimer ce
//paragraphe
//o Lors de l’ajout et de la suppression du paragraphe il doit y avoir une animation
//o Le paragraphe aura un fond vert si la checkbox est cochée
//o Lors de l’écriture dans la textbox, forcer l’écriture en majuscule

}