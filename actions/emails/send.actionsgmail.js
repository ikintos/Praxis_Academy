const nodemailer = require("nodemailer")
// const sendgridTransport = require("nodemailer-sendgrid-transport")

/**send mail using sendgrid
 * 
 * @param params - ['to','object','text','html']
 */

 class Sendmail {
    constructor(req) {
        this.to = req.body.to.toString(),
        this.from = req.body.from,
        this.subject = req.body.subject,
        this.text = req.body.text,
        this.html = req.body.html
    }

    async exec() {
        try {
            const transporter = await nodemailer.createTransport({      
                host: "smtp.gmail.com",
                port: 587,
                secure: false,
                auth: {
                    user: process.env.EMAIL_USERNAME,
                    pass: process.env.EMAIL_PASSWORD
                }
            })
            const data = {
                to: this.to,
                from: 'tosikin2@gmail.com',
                subject: this.subject,
                text: this.text,
                html: this.html
            }

            setTimeout(async() => {
                //send mail
                return await transporter.sendMail(data, (error,resp) => {
                    if(error) {
                        console.log(error)
                    }
                })
                
            }, 600)
        } catch(err){
            throw err
        }
    }
 }

 module.exports = Sendmail