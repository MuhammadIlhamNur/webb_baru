(function(){
    emailjs.init("ivWtooXwUT6bmPZJq");

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('service_s78onvm', 'template_0vn2fa6', this)
            .then(function(response) {
                // Mengubah pesan sukses menjadi notifikasi di dalam halaman
                document.getElementById('notification').innerHTML = "Email sent successfully!";
                document.getElementById('contact-form').reset();
            }, function(error) {
                // Mengubah pesan gagal menjadi notifikasi di dalam halaman
                document.getElementById('notification').innerHTML = "Email failed to send. Please try again later.";
            });
    });
})();
