<%@ Page Title="" Language="C#" MasterPageFile="Home.Master" AutoEventWireup="true" CodeBehind="Canais.aspx.cs" Inherits="Hyding.Business.Pages.WebForm2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">






    <script defer>

        var base = document.querySelectorAll('.Links_Nav > a')
        for (var i = 0; i < base.length; i++) {

            base[i].style.color = '#fff'

        }

        base[3].style.color = 'rgb(204, 252, 52)'

    </script>

</asp:Content>
