# Emitter.io Docker Configuration

This repository contains the Docker configuration for setting up an Emitter.io server with SSL support. It includes a Dockerfile for building a custom Emitter.io image and a script for generating self-signed SSL certificates.

## Docker Configuration

The Dockerfile in this repository starts from the base Emitter image and includes steps to copy a custom configuration file and SSL certificates into the image. It is configured to expose ports 443 (SSL) and 8080 (http).

## SSL Certificate Generation

A shell script is provided to generate self-signed SSL certificates. This script creates a `certs` directory, then generates a new private key (`key.pem`) and a self-signed certificate (`cert.pem`).


## Productionalization Adjustments in SMP_Solution 
In production you can amend this to replace the self signed certs with certs for the `App Service Url` and adjust `MqttNetworkChannel.cs` file on line 268-271 disabling the self-signed validation on `line 271` and enabling the production validation on `line 268`

## Steps to Build and Run

1. **Clone the Repository**:

   ```bash
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
## Editing Configuration

To use a custom configuration for Emitter.io:

1. Edit the emitter.conf file with your desired settings.

2. Generating a new license value

    a. Run 
    
    ```bash
    docker run -d --name emitter -p 8080:8080 --restart=unless-stopped emitter/server
    ```

    b. Look at the logs for `generated new license:` and `generated new secret key:` values. You will need both these values.

    c. edit emitter.conf and update the `license` value
   
4. Generating a new channel key

    a. head to https://127.0.0.1/keygen and plug in the `secret key` to get a new `channel key` 

    b. update your code with the new `channel` and `channel key` 

## Publishing to Azure Container Registry 

todo : 
