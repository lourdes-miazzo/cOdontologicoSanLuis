import {transport} from "../../shared/transport.js"
import contactTemplate from "../../presentation/templates/contactTemplate.js";
class EmailManager{

    async emailContact(emailString){
        const mailContent = contactTemplate(emailString);
        const mail = {
            from : 'lourdesmiazzo@gmail.com',
            to: 'lourdesmiazzo@gmail.com',
            subject: 'Consulta de Contacto',
            html: mailContent
        };
        await transport.sendMail(mail);
    }
}

export default EmailManager