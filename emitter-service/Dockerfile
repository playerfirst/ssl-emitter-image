# Use an official Node.js runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /root

# Copy package.json and package-lock.json
COPY package*.json ./

# Install any needed packages
RUN npm install

# Bundle app source
COPY . .

# Make port 3000 available to the world outside this container
EXPOSE 3000

# Define environment variable for Emitter.io key
ENV EMITTER_KEY your_emitter_key_here

# Run the app when the container launches
CMD ["node", "publish.js"]

