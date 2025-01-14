$(document).ready(function () {
    // Inisialisasi EmailJS dengan Public Key Anda
    emailjs.init("AXSu6_t_krnDZj4aF");

    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const serviceID = 'service_x8tj2hp'; // Service ID Anda
        const templateID = 'template_qk9tf1c'; // Template ID Anda

        emailjs.sendForm(serviceID, templateID, this)
            .then(() => {
                alert('Pesan berhasil dikirim!');
                $('#contactForm')[0].reset();
            }, (error) => {
                alert('Gagal mengirim pesan. Silakan coba lagi.');
                console.error('EmailJS Error:', error);
            });
    });
});
