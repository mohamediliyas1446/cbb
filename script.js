function sendMail() {
    var firstname = document.getElementById("firstname").value.trim();
    var lastname = document.getElementById("lastname").value.trim();
    var email = document.getElementById("email").value.trim();
    var iti = window.intlTelInput(document.getElementById("phone"), {
        utilsScript: "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.8/js/utils.js",
    });
    var phone = iti.getNumber();
    var message = document.getElementById("message").value.trim();

    if (firstname === '' || lastname === '' || email === '' || phone === '' || message === '') {
        alert("Please fill in all required fields");
        return;
    }

    
    var countryCode = iti.getSelectedCountryData().dialCode;

    var params = {
        firstname: firstname,
        lastname: lastname,
        email: email,
        phone: phone,
        message: message,
        countryCode: countryCode,  
    };

    const serviceID = "service_4ezafmc";
    const templateID = "template_jgn3oso";

    emailjs
        .send(serviceID, templateID, params)
        .then((res) => {
            document.getElementById("firstname").value = "";
            document.getElementById("lastname").value = "";
            document.getElementById("email").value = "";
            document.getElementById("phone").value = "";
            document.getElementById("message").value = "";
            console.log(res);
            alert("Your message sent successfully");
        })
        .catch((err) => console.log(err));
}
