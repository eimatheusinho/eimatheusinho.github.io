function sendEmail() {
    var destinatario = "mthsesantos@gmail.com";
    var assunto = "Assunto do E-mail";
    var corpo = "Olá,\n\nEsta é a mensagem do e-mail.\n\nAtenciosamente,";

    var mailtoLink = "mailto:" + destinatario + 
                     "?subject=" + encodeURIComponent(assunto) + 
                     "&body=" + encodeURIComponent(corpo);

    window.location.href = mailtoLink;
}