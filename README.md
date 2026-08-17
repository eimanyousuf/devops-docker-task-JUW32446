# DevOps Docker Task

## Student Information

**Name:** Eiman Yousuf  
**Student ID:** JUW32446  
**Course:** DevOps  

## Application Description

This is a simple web application developed as part of the DevOps Docker task. The application displays student information and a message confirming that it is running inside a Docker container.

## Technologies Used

- Node.js
- Express.js
- Git
- GitHub
- Docker
- Docker Hub

## GitHub Repository

**GitHub Repository:**  
[https://github.com/eimanyousuf/devops-docker-task-JUW32446.git]

## Docker Hub

**Docker Hub Repository:**  
[https://hub.docker.com/r/eimanyousuf/devops-task]

## How to Run

```bash
docker pull eimanyousuf/devops-task:v1
docker run -d -p 3000:3000 --name devops-task eimanyousuf/devops-task:v1