<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];
    
    $to = "hariinakahermawan@gmail.com";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";
    
    $email_content = "
        <h2>Pesan Kontak Baru</h2>
        <p><strong>Nama:</strong> $name</p>
        <p><strong>Email:</strong> $email</p>
        <p><strong>Subjek:</strong> $subject</p>
        <p><strong>Pesan:</strong></p>
        <p>$message</p>
    ";
    
    $mail_sent = mail($to, $subject, $email_content, $headers);
    
    if ($mail_sent) {
        echo json_encode(["status" => "success", "message" => "Pesan berhasil dikirim!"]);
    } else {
        echo json_encode(["status" => "error", "message" => "Gagal mengirim pesan."]);
    }
    exit;
}
?>