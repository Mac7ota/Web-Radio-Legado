<%@ Page Title="" Language="C#" MasterPageFile="Home.Master" AutoEventWireup="true" CodeBehind="index.aspx.cs" Inherits="Hyding.Business.Pages.Home1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="Business/Style/Pages/Home.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.7.2/font/bootstrap-icons.css">
    <script src="Business/Script/Pages/Playlist.js"></script>
    <script src="Business/Script/Pages/Programação.js"></script>
    <script src="Business/Script/Pages/Canais.js"></script>
    <script src="Business/Script/Pages/Player.js?v=1.1"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">

    <div class="container-fluid" style="padding: 0;">
        <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="5000">
            <div class="carousel-inner">
                <div class="carousel-item active" style="height:500px" >
                    <img style="height:100%; object-fit:cover;" class="d-block w-100" src="Business/Picture/Pages/BackGround/IMG_4928.jpg" alt="Primeiro slide">
                </div>
                <div class="carousel-item" style="height:500px">
                    <img style="height:100%; object-fit:cover;"  class="d-block w-100" src="Business/Picture/Pages/BackGround/IMG_4954.jpg" alt="Segundo slide">
                </div>
                <div class="carousel-item" style="height:500px">
                    <img style="height:100%; object-fit:cover;" class="d-block w-100" src="Business/Picture/Pages/BackGround/IMG_4957.jpg" alt="Terceiro slide">
                </div>
            </div>
            <a class="carousel-control-prev SetLeft" href="#carouselExampleSlidesOnly" role="button" data-slide="prev" style="justify-content: flex-start;">
                <span class="carousel-control-prev-icon" style="display:none;" aria-hidden="true"></span>
                <span class="sr-only">Anterior</span>
            </a>
            <a class="carousel-control-next SetRight" href="#carouselExampleSlidesOnly" role="button" data-slide="next" style="justify-content: flex-end;">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Próximo</span>
            </a>
        </div>
    </div>
    <!---------------------------------------------------------------------------------->
    <%--<asp:ScriptManager ID="ScriptManager1" runat="server"></asp:ScriptManager>
    <asp:UpdatePanel ID="UpdatePanel1" runat="server" UpdateMode="Conditional" ChildrenAsTriggers="false">
        <ContentTemplate>
            <div class="Container_Player">
                <div class="Items_Player">
                    <div class="IMG_Player">
                        <img src="https://www.ufmg.br/espacodoconhecimento/wp-content/uploads/2022/06/capa-blog.png" />
                        <p class="Status_Player">Offline</p>
                    </div>
                    <div class="Play_Player">
                        <img id="Player_Music" src="../Picture/Pages/botao-play.png" />
                    </div>
                    <div class="Volume_Player">
                        
                    </div>
                </div>
            </div>
        </ContentTemplate>
        <Triggers>
            
        </Triggers>
    </asp:UpdatePanel>--%>
    <!---------------------------------------------------------------------------------->
    <div class="Controller_Playlist">
        <div class="Nav_Playlist">
            <a href="Playlist.aspx"><h1><strong>Playlist</strong></h1></a>
            <p>ver mais</p>
        </div>
        <div class="Arrow_Playlist">
            <span class="bi bi-chevron-left text-dark" id="Pass_Left"></span>
            <span class="bi bi-chevron-right text-dark" id="Pass_Right"></span>
        </div>
    </div>
    <div class="Container_Playlist">
        <div id="Card_Container" class="Cards_Playlist">
        </div>
    </div>
    <!---------------------------------------------------------------------------------->
    <div style="background-color: rgb(204, 252, 52);">
        <div class="Controller_Playlist" style="border: 0px; margin-bottom: 0px; background-color: rgb(204, 252, 52);">
            <div class="Nav_Playlist" style="width: 25%;">
                <a href="Programação.aspx"><h1><strong>Programação</strong></h1></a>
            </div>
            <div class="DayWeek" style="width: 65%;">
                <span class="SpanLit" id="Segunda">Segunda</span>
                <span class="SpanLit" id="Terça">Terça</span>
                <span class="SpanLit" id="Quarta">Quarta</span>
                <span class="SpanLit" id="Quinta">Quinta</span>
                <span class="SpanLit" id="Sexta">Sexta</span>
                <span class="SpanLit" id="Sabado">Sabado</span>
                <span class="SpanLit" id="Domingo">Domingo</span>
            </div>
            <div class="Arrow_Playlist" style="width: 10%;">
                <span class="bi bi-chevron-left text-dark" id="Pass_LeftON"></span>
                <span class="bi bi-chevron-right text-dark" id="Pass_RightON"></span>
            </div>
        </div>
    </div>
    <div style="background-color: #000;">
        <div class="Container_Playlist" style="background-color: #000; padding: 70px 0px 70px 0px;">
            <div id="Card_ContainerON" class="Cards_Playlist">
            </div>
        </div>
    </div>
    <!---------------------------------------------------------------------------------->

    <div class="Controller_Playlist">
        <div class="Nav_Playlist">
            <h1><strong>Canais</strong></h1>
            <p>ver mais</p>
        </div>
        <div class="Arrow_Playlist">
            <span class="bi bi-chevron-left text-dark" id="Pass_LeftTWO"></span>
            <span class="bi bi-chevron-right text-dark" id="Pass_RightTWO"></span>
        </div>
    </div>
    <div class="Container_Playlist">
        <div id="Card_ContainerTWO" class="Cards_Playlist">
        </div>
    </div>

    <script defer>

        CriarPlaylist()
        CriarProgramacao()
        CriarCanais()


        var base = document.querySelectorAll('.Links_Nav > a')
        for (var i = 0; i < base.length; i++) {

            base[i].style.color = '#fff'

        }

        base[0].style.color = 'rgb(204, 252, 52)'

    </script>

</asp:Content>
