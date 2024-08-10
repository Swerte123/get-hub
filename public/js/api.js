function SendMail() {
    var param = {
        from_name: document.getElementById("name").value,
        subject: document.getElementById("subject").value,  
        email_id: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send("service_79eo6kj", "template_iyqmcuo", param)
        .then(function (res) {
            Swal.fire({
                icon: 'success',
                title: 'Email Sent!',
                text: 'Your message has been successfully sent.',
                confirmButtonColor: '#3085d6',
                confirmButtonText: 'OK'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.location.reload(); // Reload the page when OK is clicked
                }
            });
        })
        .catch(function (error) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
                footer: 'Please try again later.'
            });
        });
}
// service_79eo6kj
// template_iyqmcuo