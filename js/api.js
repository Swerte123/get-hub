
// service_79eo6kj
// template_iyqmcuo

// Initialize EmailJS with your public key
emailjs.init("GWTFCee4-FUkcB0sC");

async function SendMail() {
    // Get input values
    const name = document.getElementById("name").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Input validation
    if (!name || !subject || !email || !message) {
        Swal.fire({
            icon: 'warning',
            title: 'Missing Fields',
            text: 'Please fill in all fields before submitting.',
        });
        return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'warning',
            title: 'Invalid Email',
            text: 'Please enter a valid email address.',
        });
        return;
    }

    // Parameters for EmailJS
    const params = {
        from_name: name,
        subject: subject,
        email_id: email,
        message: message,
    };

    try {
        // Send the email
        const res = await emailjs.send("service_h9ajp2m", "template_5age3x2", params);
        Swal.fire({
            icon: 'success',
            title: 'Email Sent!',
            text: 'Your message has been successfully sent.',
            confirmButtonColor: '#3085d6',
            confirmButtonText: 'OK',
        }).then((result) => {
            if (result.isConfirmed) {
                window.location.reload(); // Reload the page when OK is clicked
            }
        });
    } catch (error) {
        // Handle errors
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: 'Please try again later.',
        });
    }
}
