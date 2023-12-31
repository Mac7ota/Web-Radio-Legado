var Corret = true
var elementClicado = null
var span = null
function CriarProgramacao(day) {

    if (Corret) {
        const diasDaSemana = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sabado'];
        var diaDaSemana = diasDaSemana[new Date().getDay()];
        span = document.getElementById(diaDaSemana)
        span.style.top = '0px'
        span.classList.toggle('Ativado');
        day = diaDaSemana;
    }

    function AlterarDia() {
        if (Corret) {
            span.classList.remove('Ativado');
            span.style.top = '5px'
        }
        if (Corret != true) {
            elementClicado.style.top = '5px'
            elementClicado.classList.remove('Ativado');
        }
        elementClicado = event.target;
        elementClicado.classList.toggle('Ativado');
        elementClicado.style.top = '0px'
        diaDaSemana = elementClicado.innerText;
        Corret = false
        var divsCard = document.querySelectorAll('#Card_ContainerON > .Car_Playslits_')
        divsCard.forEach(function (cards) {
            cards.remove()
        })
        CriarProgramacao(diaDaSemana)
    }

    var Days = document.querySelectorAll('.DayWeek > span')
    Days.forEach(function (dia) {
        dia.onclick = AlterarDia;
    })

    var Json = new XMLHttpRequest();
    Json.open("GET", "https://localhost:44359/BDNORELACIONAL/Programacao/" + day + ".json", true);
    Json.send();

    var TotalPlay = 0

    Json.onload = function () {
        if (Json.readyState === 4 && Json.status === 200) {
            var playlists = JSON.parse(Json.responseText);
            if (playlists) {
                TotalPlay = playlists.length - 1
                for (i = 0; i < playlists.length; i++) {
                    var divCard = document.createElement('div')
                    divCard.classList.add('Car_Playslits_')
                    divCard.id = 'Cards_' + i
                    var CardDiv = document.getElementById('Card_ContainerON')

                    var tagA = document.createElement('a')
                    tagA.setAttribute('href', playlists[i].link)
                    tagA.setAttribute('target', '_blunk')

                    var BackIMG = document.createElement('img')
                    BackIMG.setAttribute('src', playlists[i].foto)


                    var nome = document.createElement('p')
                    var genero = document.createElement('p')
                    var plataforma = document.createElement('p')


                    var divI = document.createElement('div')
                    var divII = document.createElement('div')
                    

                    plataforma.innerHTML = "HYDING"
                    genero.innerHTML = "<p style='color: grey;'>" + playlists[i].genero + "</p>"
                    nome.innerHTML = "<strong style='font-weight: 900; font-size: 20px;'>" + playlists[i].nome + "  |  </strong> " +  playlists[i].horario

                    divI.append(nome, plataforma, genero)
                    divII.appendChild(BackIMG)
                    //tagA.append(BackIMG, nome)
                    divCard.append(divII, divI)
                    CardDiv.appendChild(divCard)

                    var imgBack = document.querySelectorAll('#ImageBack')[i]
                    
                }
            }
        }
    };
}