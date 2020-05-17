// JavaScript source code

window.addEventListener('load', function (e) {
    maj();
//    createArticle(e);
});

    function maj() {

        document.getElementById('title').addEventListener('keyup', function () {
            this.value = this.value.toUpperCase();
        });
    };



    function createArticle(e) {


    //document.getElementById('button').addEventListener('submit', function () {
        //console.log('Hello');

            var reception = document.getElementById('container');

            var bloc = document.createElement('div');
            bloc.setAttribute('class', 'border border-info rounded');
            bloc.style.padding = '10px';
            bloc.style.margin = '10px';

            var createPara = document.createElement('p');
            createPara.setAttribute('id', 'para');
            

           
            //o Le titre aura le contenu de la textbox

            var createTitle = document.createElement('h3');
            createTitle.innerText = document.getElementById('title').value;
            bloc.appendChild(createTitle);

            //o Le contenu aura le contenu de la textblock

            var createContent = document.createElement('span');
            createContent.innerText = document.getElementById('content').value;
        bloc.appendChild(createContent);

        //o Le paragraphe aura un fond vert si la checkbox est cochée
        
        //   if (document.getElementsById('check').checked == true) {
        //    createContent.style.backgroundColor = 'green';
        //};

            var returnLign = document.createElement('br');
            bloc.appendChild(returnLign);
            


            //o Le paragraphe contiendra aussi un bouton permettant de supprimer ce
            //paragraphe

            var createButtonDel = document.createElement('input');
            createButtonDel.setAttribute('type', 'submit');
            createButtonDel.setAttribute('value', 'Supprimer');
            createButtonDel.addEventListener('click', function () {
               bloc.remove();
                
            });

            bloc.appendChild(createButtonDel);

            reception.appendChild(bloc);
            

            

        //});

        e.preventDefault();

    };




