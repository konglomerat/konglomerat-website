FROM docker-hub.sandstorm.de/docker-infrastructure/php-app:7.1-v1
ADD --chown=www-data:www-data /. /app
RUN '/customization/flow-hosting.sh'