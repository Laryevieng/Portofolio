$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();
        
        $.ajax({
            type: 'POST',
            url: 'php/send_email.php',
            data: $(this).serialize(),
            dataType: 'json',
            success: function(response) {
                if(response.status === 'success') {
                    alert('Pesan berhasil dikirim!');
                    $('#contactForm')[0].reset();
                } else {
                    alert('Gagal mengirim pesan. Silakan coba lagi.');
                }
            },
            error: function() {
                alert('Terjadi kesalahan. Silakan coba lagi.');
            }
        });
    });
});