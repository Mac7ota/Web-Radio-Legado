function CriarPlaylist() {

    var Json = new XMLHttpRequest();
    Json.open("GET", "https://localhost:44359/BDNORELACIONAL/Playlists.json", true);
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
                    var CardDiv = document.getElementById('Card_Container')

                    var tagA = document.createElement('a')
                    tagA.setAttribute('href', playlists[i].link)
                    tagA.setAttribute('target', '_blunk')

                    var BackIMG = document.createElement('img')
                    BackIMG.setAttribute('src', playlists[i].foto)


                    var nome = document.createElement('p')
                    var plataforma = document.createElement('img')
                    plataforma.classList.add('iconePL')
                    plataforma.setAttribute('src', playlists[i].icone)
                    
                   
                    nome.innerText = playlists[i].nome

                    tagA.append(BackIMG,plataforma,nome)
                    divCard.appendChild(tagA)
                    CardDiv.appendChild(divCard)

                }
            }
        }
    };






    var left = document.getElementById('Pass_Left');
    var right = document.getElementById('Pass_Right');
    var playlistContainer = document.querySelectorAll('.Container_Playlist')[0];

    function Passar(number) {
        let currentPosition = playlistContainer.scrollLeft;
        const scrollStep = 50;
        let destination;

        if (number == 1) {
            destination = 0;
            // Verifica se a posição atual não é menor do que zero
            if (currentPosition < scrollStep) {
                currentPosition = 0;
            }
        } else if (number == 2) {
            destination = playlistContainer.scrollWidth;
        }

        if (currentPosition < destination) {
            // rolar para a direita
            const scrollRight = setInterval(function () {
                currentPosition += scrollStep;
                if (currentPosition >= destination) {
                    clearInterval(scrollRight);
                }
                playlistContainer.scrollLeft = currentPosition;
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
                playlistContainer.scrollLeft = currentPosition;
            }, 15);
        }
    }

    left.addEventListener('click', function () {
        Passar(1);
    });

    right.addEventListener('click', function () {
        Passar(2);
    });

}