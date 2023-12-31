<%@ Page Title="" Language="C#" MasterPageFile="Home.Master" AutoEventWireup="true" CodeBehind="Playlist.aspx.cs" Inherits="Hyding.Business.Pages.Playlist" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<link rel="stylesheet" href="Business/Style/Pages/Playlist.css">
<script src="Business/Script/Pages/Page_Playlist.js" defer></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="Playlist_Title">
        <h1 id="Title_Playlist"><strong>Playlist</strong></h1>
        <p>Reveja nossas programações da rádio Hyding.</p>
    </div>


    <div class="Config_Space">
    <div class="Playlists_Container">
        <div class="Explorar_Playlist"><div></div><div><h3>Gêneros</h3><p>Veja todos os gêneros que te esperam por aqui.</p></div></div>
        <div class="Explorar_Playlist"><div></div><div><h3>Artistas</h3><p>Conheça todos os nossos artistas.</p></div></div>
        <div class="Explorar_Playlist"><div></div><div><h3>Replay Lives</h3><p>Reveja nossas programações da rádio Hyding</p></div></div>
        <div class="Explorar_Playlist"><div></div><div><h3>Recomendados</h3><p>As playlists que foram passadas por uma curadoria de seleção pela comunidade Hyding.</p></div></div>
        <div class="Explorar_Playlist"><div></div><div><h3>O melhor de cada artista</h3><p>Uma curadoria exclusiva da comunidade Hyding, entregando o melhor de cada artista.</p></div></div>
        <div class="Explorar_Playlist"><div></div><div><h3>Lançamentos</h3><p>As tracks que acabaram de sair do forno.</p></div></div>
    </div>
        </div>

    <div class="Rolagem"></div>

    <div class="Container_OptionPlay">
        <div class="Controller_Playlist"><h1></h1></div>
        <div class="Items_Playlist"></div>
    </div>


    <script>
        var base = document.querySelectorAll('.Links_Nav > a')
        for (var i = 0; i < base.length; i++) {

            base[i].style.color = '#fff'

        }

        base[1].style.color = 'rgb(204, 252, 52)'

    </script>


</asp:Content>
