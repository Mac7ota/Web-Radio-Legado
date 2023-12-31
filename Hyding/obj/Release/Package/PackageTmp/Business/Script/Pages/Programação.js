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
                    divCard.classList.add('CarUnic')
                    divCard.id = 'Cards_' + i
                    var CardDiv = document.getElementById('Card_ContainerON')

                    var tagA = document.createElement('a')
                    tagA.setAttribute('href', playlists[i].link)
                    tagA.setAttribute('target', '_blunk')

                    var BackIMG = document.createElement('img')
                    BackIMG.setAttribute('src', playlists[i].foto)

                    var hr = document.createElement('p')
                    hr.innerText = playlists[i].horario;

                    var nome = document.createElement('p')
                    var plataforma = document.createElement('p')


                    nome.innerText = playlists[i].nome

                    tagA.append(BackIMG,hr, nome)
                    divCard.appendChild(tagA)
                    CardDiv.appendChild(divCard)

                }
            }
        }
    };






    var lefton = document.getElementById('Pass_LeftON');
    var righton = document.getElementById('Pass_RightON');
    var playlistContaineron = document.querySelectorAll('.Container_Playlist')[1];

    function PassarProgramacao(number) {
        let currentPosition = playlistContaineron.scrollLeft;
        const scrollStep = 50;
        let destination;

        if (number == 1) {
            destination = 0;
            // Verifica se a posição atual não é menor do que zero
            if (currentPosition < scrollStep) {
                currentPosition = 0;
            }
        } else if (number == 2) {
            destination = playlistContaineron.scrollWidth;
        }

        if (currentPosition < destination) {
            // rolar para a direita
            const scrollRight = setInterval(function () {
                currentPosition += scrollStep;
                if (currentPosition >= destination) {
                    clearInterval(scrollRight);
                }
                playlistContaineron.scrollLeft = currentPosition;
            }, 15);
        } else {
            // rolar para a esquerda
            const scrollLeft = setInterval(function () {
                currentPosition -= scrollStep;
                // Verifica se a posição atual não é menor do que zero
                if (currentPosition < 0) {
                    currentPosition = 0;
                    clearInterval(scrollLeft);
                }
                playlistContaineron.scrollLeft = currentPosition;
            }, 15);
        }
    }

    lefton.addEventListener('click', function () {
        PassarProgramacao(1);
    });

    righton.addEventListener('click', function () {
        PassarProgramacao(2);
    });

}