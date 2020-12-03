#!/bin/bash
if [ "$1" = "nginx" ]; then	
  # nginx and php-fpm
  service nginx start
  service php7.3-fpm start
  /bin/bash
else
  if [ "$1" = "php" ]; then
    server = "server:8000"
    if [ "$2" != "" ]; then
      server = "$2"
    fi
    cd /var/www/html && php -S "$server" -t public
    /bin/bash
  else
    exec "$@"
  fi
fi
