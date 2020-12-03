FROM debian
RUN apt-get update -yy
RUN apt-get install -yy nginx
RUN apt-get install -yy php-fpm
RUN apt-get install -yy php-soap
RUN apt-get install -yy php-mysql
RUN apt-get install -yy php-mbstring
RUN apt-get install -yy php-ctype
RUN apt-get install -yy php-tokenizer
RUN apt-get install -yy php-json
RUN apt-get install -yy php-bcmath
RUN apt-get install -yy curl
RUN apt-get install -yy unzip

# Instala composer
RUN curl -sS https://getcomposer.org/installer -o composer-setup.php
RUN php -r "if (hash_file('SHA384', 'composer-setup.php') === '$(curl -sS https://composer.github.io/installer.sig)') { echo 'Installer verified'; } else { echo 'Installer corrupt'; unlink('composer-setup.php'); } echo PHP_EOL;"
RUN php composer-setup.php --install-dir=/usr/local/bin --filename=composer

# Configura nginx
COPY default /etc/nginx/sites-available
COPY phpinfo.php /var/www/html/public/

EXPOSE 80
#EXPOSE 8000

# Entrypoint admite 2 opciones: nginx o php nombre_host
COPY docker-entrypoint.sh /
RUN chmod 755 /docker-entrypoint.sh
ENTRYPOINT ["/docker-entrypoint.sh"]
CMD ["nginx"]
