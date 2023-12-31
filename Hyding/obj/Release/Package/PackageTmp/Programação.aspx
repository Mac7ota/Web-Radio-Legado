<%@ Page Title="" Language="C#" MasterPageFile="Home.Master" AutoEventWireup="true" CodeBehind="Programação.aspx.cs" Inherits="Hyding.Business.Pages.WebForm1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="Business/Style/Pages/Programacao.css">
    <script src="Business/Script/Pages/Page_Programação.js" async></script>

</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div <%--style="background-color: rgb(204, 252, 52);"--%>>
        <div class="Controller_Playlist" <%--style="border: 0px; margin-bottom: 0px; background-color: rgb(204, 252, 52);"--%>>
            <div class="Nav_Playlist" style="width: 25%;">
                <h1><strong>Programação</strong></h1>
            </div>
            <div><p style="color:grey;">Confira nossa programação semanal e não perca nada!</p></div>
            <div class="DayWeek" <%--style="width: 65%;"--%>>
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
    <div style="/*background-color: #000;*/">
        <div class="Container_Playlist" style="/*background-color: #000;*/ padding: 20px 0px 70px 0px;">
            <div id="Card_ContainerON" class="Cards_Playlist">
            </div>
        </div>
    </div>

    <script defer>
        CriarProgramacao()

        var base = document.querySelectorAll('.Links_Nav > a')
        for (var i = 0; i < base.length; i++) {

            base[i].style.color = '#fff'

        }

        base[2].style.color = 'rgb(204, 252, 52)'


    </script>
</asp:Content>
