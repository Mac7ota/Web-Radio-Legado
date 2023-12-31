var all = document.querySelectorAll('.Explorar_Playlist')


for (i = 0; i < all.length; i++)
    all[i].onclick = Gerar_Items_Playlist;


function Gerar_Items_Playlist() {
    var h3 = this.querySelector('h3');
    var texto = h3 ? h3.textContent || h3.innerText : '';

    var it1 = document.querySelector('.Container_OptionPlay')
    var title = it1.querySelector('.Controller_Playlist > h1')
    var titlettwo = document.querySelector('#Title_Playlist')
    titlettwo.innerHTML = '<strong>' + texto + '</strong>'
    title.innerHTML = '<strong>' + texto + '</strong>'
    it1.style.display = 'flex'


    localStorage.clear();

    var Json = new XMLHttpRequest();   
    Json.open("GET", "https://localhost:44359/BDNORELACIONAL/Playlist/" + texto + ".json", true);
    Json.send();

    Json.onload = function () {
        if (Json.readyState === 4 && Json.status === 200) {
            var playlists = JSON.parse(Json.responseText);
            if (playlists) {
                TotalPlay = playlists.length - 1

                var CardDiv = document.querySelector('.Items_Playlist')
                var CardsItems = CardDiv.querySelectorAll(' * ')
                if (CardsItems) {
                    CardsItems.forEach(function (remove) {
                        remove.remove()
                    })
                }

                for (i = 0; i < playlists.length; i++) {
                    var divCard = document.createElement('div')
                    divCard.classList.add('Car_Generos_')
                    divCard.id = 'Cards_Generos' + i

                    var tagA = document.createElement('a')
                    tagA.setAttribute('href', playlists[i].link)


                    if (texto !== "Artistas")
                    tagA.setAttribute('target', '_blunk')

                    var BackIMG = document.createElement('img')
                    BackIMG.setAttribute('src', playlists[i].foto)


                    var nome = document.createElement('p')
                    var plataforma = document.createElement('p')
                    plataforma.innerHTML = 'Hyding'

                    nome.innerText = playlists[i].nome

                    if (texto == "Artistas") {
                        tagA.onclick = IntesWeb;
                        var divDados = document.createElement('div')
                        divDados.id = "Dados_WebSocket"
                        divDados.style.display = 'none'
                        divDados.classList.add(playlists[i].nome)
                        divDados.innerHTML = 
                            '<p>' + playlists[i].id + '</p>' +
                            '<p>' + playlists[i].nome + '</p>' +
                            '<p>' + playlists[i].sobre + '</p>' +
                            '<p>' + playlists[i].link + '</p>' +
                            '<p>' + playlists[i].programacoes + '</p>' +
                            '<p>' + playlists[i].playlists + '</p>' +
                            '<p>' + playlists[i].musicas + '</p>' +
                            '<p>' + playlists[i].conteudos + '</p>' +
                            '<p>' + playlists[i].agenda + '</p>' +
                            '<p>' + playlists[i].instagram + '</p>' +
                            '<p>' + playlists[i].soundcloud + '</p>' +
                            '<p>' + playlists[i].tiktok + '</p>' +
                            '<p>' + playlists[i].foto + '</p>';

                        localStorage.setItem(playlists[i].nome, divDados.outerHTML)
                    }

                    tagA.append(BackIMG, nome, plataforma)
                    divCard.appendChild(tagA)

                    CardDiv.appendChild(divCard)

                }

                


                function rolarParaClasse(classe) {
                    var el = document.querySelector(classe);
                    var posicao = el.offsetTop;
                    var posicaoAtual = window.pageYOffset;
                    var distancia = posicao - posicaoAtual;
                    var duracao = 500; // duração da animação em milissegundos
                    var inicio;

                    function animarRolagem(timestamp) {
                        if (!inicio) inicio = timestamp;
                        var tempoDecorrido = timestamp - inicio;
                        var porcentagemCompletada = tempoDecorrido / duracao;
                        var incremento = distancia * porcentagemCompletada;
                        window.scrollTo(0, posicaoAtual + incremento);
                        if (porcentagemCompletada < 1) {
                            window.requestAnimationFrame(animarRolagem);
                        }
                    }

                    window.requestAnimationFrame(animarRolagem);
                }

              
                rolarParaClasse('.Rolagem');
            }
        }
    }
}