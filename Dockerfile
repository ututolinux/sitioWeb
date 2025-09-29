# Use official PHP Apache image
FROM php:8.2-apache

# Set working directory
WORKDIR /var/www/html

# Copy website files
COPY . /var/www/html/

# Set proper permissions for the downloads counter file
RUN chmod 666 downloads_counter.txt

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Configure Apache to serve PHP files
RUN echo '<Directory /var/www/html>' >> /etc/apache2/apache2.conf && \
    echo '    AllowOverride All' >> /etc/apache2/apache2.conf && \
    echo '</Directory>' >> /etc/apache2/apache2.conf

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]