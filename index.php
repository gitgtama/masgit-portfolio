<?php

date_default_timezone_set("Asia/Jakarta");

if (isset($_POST['submit'])) {
    file_get_contents(
        'https://api.telegram.org/bot8684138011:AAEBYIv60HQHhmg7KVMI6JUw1LOidHfax6o/sendMessage' .
        '?' . http_build_query([
            'chat_id' => '8132536867',
            'text' => sprintf(
                "--%s\n\nNama: %s\nEmail: %s\nWhatsapp: %s\n\n%s", date('d M Y H:i:s'),
                htmlspecialchars($_POST['name']),htmlspecialchars($_POST['email']),
                htmlspecialchars($_POST['phone']), htmlspecialchars($_POST['message'])
            )
        ])
    );

    echo '<html><body><script type="text/javascript">alert("Pesan Berhasil Dikirim!");history.back();</script></body></html>';
    exit();
}

?>
