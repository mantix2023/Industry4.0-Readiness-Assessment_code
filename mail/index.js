function sendMail() {
    // if (!validateForm()) {
    //     return false;
    // }
    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        tel: document.getElementById("tel").value,
        designation: document.getElementById("designation").value,
        companyName: document.getElementById("companyName").value,
        feedback: document.getElementById("feedback").value,
    };

    const serviceID = "service_p5r3orl";
    const templateID = "template_530fjak";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("tel").value = "";
            document.getElementById("designation").value = "";
            document.getElementById("companyName").value = "";
            document.getElementById("feedback").value = "";
            console.log(res);
            alert("Your message sent successfully!!")

        })
        .catch(err => console.log(err));
    // return false;
} 



// function validateForm() {
//     // Get references to all required form elements
//     const name = document.getElementById('name');
//     const email = document.getElementById('email');
//     const phone = document.getElementById('tel');
//     const feedback = document.getElementById('feedback');
    
//     // Check if all required fields are filled
//     if (name.value === '' || email.value === '' || phone.value === '' || feedback.value === '') {
//         alert('Please fill in all required fields');
//         return false;
//     }
    
//     // If all required fields are filled, allow form submission
//     return true;
// }