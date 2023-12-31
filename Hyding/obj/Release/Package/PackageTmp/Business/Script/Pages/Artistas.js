



function IntesWeb() {
    var name = this.querySelector('p').textContent
    var pname = document.createElement('p')
    pname.innerHTML = name
    localStorage.setItem("NameArtista", pname.outerHTML)  
}

function ItemsArtistas() {
    var DivWeb = localStorage.getItem("NameArtista");


    var divTemp = document.createElement('div');
    divTemp.innerHTML = DivWeb;
    var text = divTemp.textContent;


    var DivDados = localStorage.getItem(text);

    var itemsDados = document.createElement('div')
    itemsDados.innerHTML = DivDados

    document.body.appendChild(itemsDados)

    var DivBack = document.querySelector(".Background_Artista")
    var imagemUrl = document.querySelector('#Dados_WebSocket > p:nth-child(13)').textContent;
    DivBack.style.backgroundImage = 'url(' + imagemUrl + ')';

    var DivNome = document.querySelector(".Nome_Artista > h1")
    var NomeArtista = document.querySelector('#Dados_WebSocket > p:nth-child(2)').textContent;
    DivNome.innerHTML ='<strong>' + NomeArtista + '</strong>';

}


function Sobre() {
    var elementoClicado = event.target;
    
    var opItems = document.querySelectorAll('.Opcoes_Items > p')
    opItems.forEach(function (todos) {
        todos.style.backgroundColor = '#000'
        todos.style.color = 'rgb(204, 252, 52)'
    })

    elementoClicado.style.backgroundColor = 'rgb(204, 252, 52)'
    elementoClicado.style.color = '#000'


    var GetSobre = document.querySelector('#Dados_WebSocket > p:nth-child(3)')
    var clone = GetSobre.cloneNode(true);
    var GetDivSobre = document.querySelector('#Sobre')

    var Clean = GetDivSobre.querySelectorAll('*')
    if (Clean) {
        Clean.forEach(function (Limpar) {
            Limpar.remove()
        })
    }

    GetDivSobre.appendChild(clone)

}

function Programacoes() {
    var GetProgramacoes = document.querySelector('#Dados_WebSocket > p:nth-child(4)')
    var clone = GetSobre.cloneNode(true);
    var GetProgramacoes = document.querySelector('#Programações')

    var Clean = GetProgramacoes.querySelectorAll('*')
    if (Clean) {
        Clean.forEach(function (Limpar) {
            Limpar.remove()
        })
    }
}

