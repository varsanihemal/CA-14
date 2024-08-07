# Portfolio Site

This repository contains the source code for my portfolio website, which showcases the work and skills developed throughout my program.

## Project Overview

The project is a React-based portfolio website. The frontend is built with React, and the site is containerized using Docker for consistent deployment across environments.

## Docker Setup

### Prerequisites

Before you begin, ensure you have the following installed:
- [Docker](https://www.docker.com/get-started) (version 20.10 or later)
- [Node.js](https://nodejs.org/) (version 18 or later)

### Building the Docker Image

To build the Docker image for this portfolio site, follow these steps:

1. **Clone the Repository**

   Clone this repository to your local machine:

   ```sh
   git clone https://github.com/yourusername/your-repository-name.git
   cd your-repository-name

2. **Build the Docker Image**

   Use the following command to build the Docker image. Replace lastName and firstName with your actual last name and first name:

   ```sh
   docker build -t lastName_firstName_coding_assignment14 .

3. **Running the Docker Container**

   Use the following command to start a Docker container from the built image and expose it on port 5575:

   ```sh
   docker run -d -p 5575:80 --name lastName_firstName_coding_assignment14 lastName_firstName_coding_assignment14



### **Explanation**

1. **Project Overview**: Brief introduction to the project.
2. **Docker Setup**: Prerequisites and steps to build and run the Docker image.
3. **Running the Docker Container**: Detailed instructions on running the container and accessing the site.
4. **Stopping and Removing the Docker Container**: Commands for managing the Docker container.
5. **Troubleshooting**: Common issues and solutions.
6. **Additional Notes**: Notes on Dockerfile and Node.js compatibility.

This `README.md` should provide clear and comprehensive instructions for anyone using your Docker setup. Let me know if you need any further adjustments!

