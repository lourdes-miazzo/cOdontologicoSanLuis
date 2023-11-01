const contactTemplate = (emailString) =>
{
const mailTemplate =  `<html>
                            <head>
                                <style>
                                    pre {
                                    padding: 5px;
                                    color: rgb(195, 195,195)
                                    font-family 'Roboto', sans-serif;
                                    }
                                </style>
                            </head>
                            <body>
                                <pre>
                                    <div>
                                        <h1>Nuevo mensaje de contacto</h1>
                                        <h2>${emailString}</h2>
                                    </div>
                                </pre>
                            </body>
                        </html>`;

    return mailTemplate;
};

export default contactTemplate;