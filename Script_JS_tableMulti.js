// JavaScript source code


window.addEventListener('load', function (e) {


    document.getElementById('button').addEventListener('click', function () {

       
        var container = document.getElementById('multitable');
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

        multitable.appendChild(newTable);
    });

});