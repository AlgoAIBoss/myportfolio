const emailjs = require('emailjs-com')

const submitForm = (e) => {
    e.preventDefault();
    emailjs.sendForm('abbos_mad', 'template_i2lo0kr', 'contact-form', 'user_a1ekz5n5SDyemRm3JL6jC')
     .then(result => alert('Your message has been sent. I will be in contact with you soon.Thank you!'))
     .catch(err => alert('Oops! Please try again.'))

}

document.querySelector('.submitButton').addEventListener('click', submitForm)