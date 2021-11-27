# Gateway Manager (Musala Task)

------------------------

## What it can do?

- Add Gateway
- Edit Gateway
- Delete Gateway
- Add Device to Gateway
- Change Device status
- Delete Device From Gateway

## Technologies Used

- Backend - NodeJS + ExpressJS
- Frontend - Angular v12 + Angular Material + Bootstrap
- Database - MongoDB
- Server for Frontend files - Nginx
- Docker

## How to run the project?

- You have to install Docker
- Inside the project root folder run ```docker-compose build && docker-compose up```
- URL to access the frontend ```_http://localhost:4000_```
- URL to access the backend ```_http://localhost:3000_```
- URL to access the MongoDB using MongoDB Compass ```_mongodb://root:123456@localhost:27017/gateway_manager_db?authSource=admin_```
- After you cannect with the mongodb you can insert the test data in the file ```_gateways.json_```
