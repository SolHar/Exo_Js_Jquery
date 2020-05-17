// JavaScript source code

window.addEventListener('load', function (e) {
    //maj();

    //function paragraphe() {

    document.getElementById('title').addEventListener('keyup', function () {
        this.value = this.value.toUpperCase();
    //});

     document.getElementById('button').addEventListener('submit', function (e) {

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

            if (document.getElementsById('check').checked)
                createPara.style.backgroundColor = 'green';


            //o Le paragraphe contiendra aussi un bouton permettant de supprimer ce
            //paragraphe

            var createButtonDel = document.createElement('input');
            createButtonDel.setAttribute('type', 'submit');
            createButtonDel.setAttribute('value', 'Supprimer');
            createButtonDel.addEventListener('click', deletePara);
            createPara.appendChild(createButtonDel);


            var delPara = document.getElementById('para');
            delPara.remove();

            document.getElementById('container').appendChild(createPara);

        });

        e.preventDefault();

    });
});


