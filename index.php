<p>Hello world</p>
<?php

echo 'Hello world';

if (isset($_POST['submit'])) {
    file_get_contents(
        'https://api.telegram.org/bot8684138011:AAEBYIv60HQHhmg7KVMI6JUw1LOidHfax6o/sendMessage' .
        '?' . http_build_query([
            'chat_id' => '8132536867',
            'text' => sprintf(
                "--Kontak Baru\n\nNama: %s\nEmail: %s\nWhatsapp: %s\nPesan: %s",
                htmlspecialchars($_POST['name']),htmlspecialchars($_POST['email']),
                htmlspecialchars($_POST['phone']), htmlspecialchars($_POST['message'])
            )
        ])
    );

    echo '<script type="text/javascript">alert("Pesan Berhasil Dikirim!");history.back();'
    exit;
}

?>
