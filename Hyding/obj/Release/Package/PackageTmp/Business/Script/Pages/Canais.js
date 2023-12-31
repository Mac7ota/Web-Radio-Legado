function CriarCanais() {

    var Json = new XMLHttpRequest();
    Json.open("GET", "https://localhost:44359/BDNORELACIONAL/Canais.json", true);
    Json.send();

    var TotalPlay = 0

    Json.onload = function () {
        if (Json.readyState === 4 && Json.status === 200) {
            var playlists = JSON.parse(Json.responseText);
            if (playlists) {
                TotalPlay = playlists.length - 1
                for (i = 0; i < playlists.length; i++) {
                    var divCard = document.createElement('div')
                    divCard.style.height = '300px'
                    divCard.style.width = '300px'
                    divCard.classList.add('Car_Playslits_')
                    divCard.id = 'Cards_' + i
                    var CardDiv = document.getElementById('Card_ContainerTWO')

                    var tagA = document.createElement('a')
                    tagA.setAttribute('href', playlists[i].link)
                    tagA.setAttribute('target', '_blunk')

                    var BackIMG = document.createElement('img')
                    BackIMG.setAttribute('src', playlists[i].foto)


                    var nome = document.createElement('p')
                    var plataforma = document.createElement('p')


                    nome.innerText = playlists[i].nome

                    tagA.append(BackIMG, nome)
                    divCard.appendChild(tagA)
                    CardDiv.appendChild(divCard)

                }
            }
        }
    };






    var lefttwo = document.getElementById('Pass_LeftTWO');
    var righttwo = document.getElementById('Pass_RightTWO');
    var playlistContainertwo = document.querySelectorAll('.Container_Playlist')[2];

    function PassarCanais(number) {
        let currentPosition = playlistContainertwo.scrollLeft;
        const scrollStep = 50;
        let destination;

        if (number == 1) {
            destination = 0;
            // Verifica se a posição atual não é menor do que zero
            if (currentPosition < scrollStep) {
                currentPosition = 0;
            }
        } else if (number == 2) {
            destination = playlistContainertwo.scrollWidth;
        }

        if (currentPosition < destination) {
            // rolar para a direita
            const scrollRight = setInterval(function () {
                currentPosition += scrollStep;
                if (currentPosition >= destination) {
                    clearInterval(scrollRight);
                }
                playlistContainertwo.scrollLeft = currentPosition;
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
                playlistContainertwo.scrollLeft = currentPosition;
            }, 15);
        }
    }

    lefttwo.addEventListener('click', function () {
        PassarCanais(1);
    });

    righttwo.addEventListener('click', function () {
        PassarCanais(2);
    });

}