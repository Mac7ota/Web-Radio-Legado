using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace Hyding.Business.Pages
{
    public partial class Contato : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {

        }


        private static bool ValidateServerCertificate(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            // Sempre retorna true para desativar a verificação de SSL
            return true;
        }


        protected void btnEnviar_Click(object sender, EventArgs e)
        {
            string nome = txtNome.Text;
            string email = txtEmail.Text;
            string mensagem = txtMensagem.Text;

            MailMessage mail = new MailMessage();
            mail.From = new MailAddress("suporte@comparabrasil.com");
            mail.To.Add("suporte@comparabrasil.com");
            mail.Subject = "Formulário enviado";
            mail.Body = "Nome: " + nome + "<br/>" +
                        "E-mail: " + email + "<br/>" +
                        "Mensagem: " + mensagem;

            mail.IsBodyHtml = true;

            ServicePointManager.ServerCertificateValidationCallback = new RemoteCertificateValidationCallback(ValidateServerCertificate);

            SmtpClient smtp = new SmtpClient("smtp.financasdosmunicipios.com.br", 587);
            smtp.EnableSsl = true;
            smtp.Credentials = new NetworkCredential("suporte@comparabrasil.com", "1234aequus");

            smtp.Send(mail);

            txtNome.Text = "";
            txtEmail.Text = "";
            txtMensagem.Text = "";

        }
    }
}