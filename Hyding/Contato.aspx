<%@ Page Title="" Language="C#" MasterPageFile="Home.Master" AutoEventWireup="true" CodeBehind="Contato.aspx.cs" Inherits="Hyding.Business.Pages.Contato" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <link rel="stylesheet" href="Business/Style/Pages/Contato.css" />
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <div class="Formulario">
        <div class="Container_Form">
                <h1>Envie uma mensagem!</h1>

                <div class="NomeF">
                    <asp:TextBox ID="txtNome" runat="server" CssClass="a" placeholder="Nome completo"></asp:TextBox>
                </div>

                <div class="EmailF">
                    <asp:TextBox ID="txtEmail" runat="server" CssClass="a" placeholder="E-mail"></asp:TextBox>
                </div>
                <div class="MensagemF">
                    <asp:TextBox ID="txtMensagem" runat="server" TextMode="MultiLine" Rows="5" placeholder="Escreva sua mensagem"></asp:TextBox>
                </div>
                <div class="buttonEnviar">
                    <asp:Button ID="btnEnviar" CssClass="botaoForm" runat="server" Text="Enviar" OnClick="btnEnviar_Click" Style="color: white;" />
                </div>
            </div>
            </div>
</asp:Content>
