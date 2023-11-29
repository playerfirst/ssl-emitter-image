# Start from the base emitter image
FROM emitter/server:latest

# Copy your custom configuration file (if needed)
COPY emitter.conf /root/emitter.conf

# Add your SSL certificates
COPY certs/cert.pem /root/cert.pem
COPY certs/key.pem /root/key.pem

# Expose necessary ports (such as for SSL)
EXPOSE 443

