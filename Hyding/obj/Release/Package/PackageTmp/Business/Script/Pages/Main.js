window.onload = function () {
    var Guias = document.getElementsByClassName('Guias_Nav')[0];
    var hamburguer = document.getElementById('HB');
    var Controle = document.getElementsByClassName('Controler_Nav')[0];
    var Icone = document.getElementsByClassName('Icone_Nav')[0];
    var Container = document.getElementsByClassName('Container_Nav')[0];
    var hb = document.querySelectorAll('#HB > span')[0];

    var Controlador = true;

    function Redirecionar() {
        if (Controlador) {
            Controle.style.display = 'flex';
            Guias.style.top = '0px'
            hb.style.color = '#ccfc34'
            Guias.appendChild(Controle);
            Controlador = false;
        } else {
            hb.style.color = '#fff'
            Guias.style.top = '-550px'
            Controle.style.display = 'none';
            Container.insertBefore(Controle, Icone.nextSibling);
            Controlador = true;
        }
    }

    window.addEventListener("resize", function () {
        if (window.innerWidth > 820) 
            Controle.style.display = "flex";
        else
            Controle.style.display = "none";
    })

    hamburguer.addEventListener('click', Redirecionar);
    
    /*Player()*/
}