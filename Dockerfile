FROM php:8.2-cli

WORKDIR /
COPY . .

CMD ["php", "-S", "0.0.0.0:$PORT", "index.php"]
