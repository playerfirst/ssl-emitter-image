# Emitter.io Docker Configuration

This repository contains the Docker configuration for setting up an Emitter.io server with SSL support. It includes a Dockerfile for building a custom Emitter.io image and a script for generating self-signed SSL certificates.

## Docker Configuration

The Dockerfile in this repository starts from the base Emitter image and includes steps to copy a custom configuration file and SSL certificates into the image. It is configured to expose ports 443 (SSL) and 8080.

## SSL Certificate Generation

A shell script is provided to generate self-signed SSL certificates. This script creates a `certs` directory, then generates a new private key (`key.pem`) and a self-signed certificate (`cert.pem`).

## Getting Started

### Steps to Build and Run

1. **Clone the Repository**:

   ```bash
   git clone [Your Repository URL]
   cd [Your Repository Directory]
   chmod +x generate_certs.sh
   ./generate_certs.sh
   ```
2. **Build the Docker Image:**

    ```bash
        ./build-image.sh
    ```

3. **Run the Docker Container:**

    ```bash
    docker run -d --name emitter -p 443:443 -p 8080:8080 --platform linux/amd64 -e --restart=unless-stopped my-custom-emitter
    ```
## Custom Configuration ##

To use a custom configuration for Emitter.io:

1. Edit the emitter.conf file with your desired settings.
