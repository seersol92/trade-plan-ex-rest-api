const nodemailer = require('nodemailer'),
    transporter = nodemailer.createTransport({
        host: 'smtp.mailgun.org', // hostname 
        port: 2525, // port for secure SMTP 
        secure: false, // true for 465, false for other ports
        auth: {
            user: "info@mail.mjolnerintegrated.io",
            pass: "Devel0per235"
        }
    }),
    EmailTemplate = require('email-templates').EmailTemplate,
    path = require('path'),
    Promise = require('bluebird');


function sendEmail(obj) {
    return transporter.sendMail(obj);
}

function loadTemplate(templateName, contexts) {
    let template = new EmailTemplate(path.join(__dirname, '..', 'views/templates', templateName));
    return Promise.all(contexts.map((context) => {
        return new Promise((resolve, reject) => {
            template.render(context, (err, result) => {
                if (err) reject(err);
                else resolve({
                    email: result,
                    context,
                });
            });
        });
    }));
}


exports.sendEmail = ( template, users) => {
    loadTemplate(template, users).then((results) => {
    return Promise.all(results.map((result) => {
        sendEmail({
                to: result.context.email,
                from: 'info@mjolnerintegrated.io',
                subject: result.context.subject,
                html: result.email.html,
            });
       }));
    }).then(() => {
        console.log('sent');
    })
}