const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'saurabhlohiya1234@gmail.com',
    subject: 'This is from you',
    text: `Welcome on board ${name}`
  }).then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
  })
}

const sendWExitEmail = (email, name) => {
  sgMail.send({
    to: email,
    from: 'saurabhlohiya1234@gmail.com',
    subject: 'You\'ll regret it for the rest of your life ',
    text: `Don't do this to yourself ${name}`
  }).then(() => {
    console.log('Message sent')
  }).catch((error) => {
    console.log(error.response.body)
  })
}
module.exports = {
  sendWelcomeEmail,
  sendWExitEmail
}
