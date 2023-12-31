<%@ Page Title="" Language="C#" MasterPageFile="Home.Master" AutoEventWireup="true" CodeBehind="Artista.aspx.cs" Inherits="Hyding.Business.Pages.Artista" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="Business/Style/Pages/Artistas.css">
    
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="Background_Artista">
        <div class="Nome_Artista">
            <h1></h1>
        </div>
    </div>
    <div class="Opcoes_Items">
        <p onclick="Sobre()">Sobre</p>
        <p style="display:none;">Programações</p>
        <p style="display:none;">Playlists</p>
        <p style="display:none;">Músicas</p>
        <p style="display:none;">Conteúdos</p>
        <p style="display:none;">Agenda</p>
    </div>

    <div id="Items_Artista">
        <div id="Sobre" ></div>
        <div id="Programações"></div>
        <div id="Playlists"></div>
        <div id="Músicas"></div>
        <div id="Conteúdos"></div>
        <div id="Agenda"></div>
    </div>


    <script defer>

        ItemsArtistas()
        
        var base = document.querySelectorAll('.Links_Nav > a')
        for (var i = 0; i < base.length; i++) {

            base[i].style.color = '#fff'

        }

        

    </script>

</asp:Content>
