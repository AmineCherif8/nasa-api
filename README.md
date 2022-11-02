# Nasa API for ADW Project

- Docker used for redis server & web view of the cache
- REST API with [NestJs]
- Swagger documentation
- Folder structure and best practices

## 1. Getting started

### 1.1 Requirements

Before starting, make sure you have at least those components on your workstation:

- An up-to-date release of [NodeJS](https://nodejs.org/) and NPM
- [Docker](https://www.docker.com/) 
### 1.2 Project configuration

Start by cloning this project on your workstation.

```sh
git clone https://github.com/AmineCherif8/nasa-api.git
```

First you have to start the docker file , it start the redis cache

```sh
cd ./nasa-api/
docker compose up -d


```
The next thing will be to install all the dependencies of the project.
```sh
cd ./nasa-api/backend
npm install
```

```sh
cd ./nasa-api/frontend
npm install
```

> You have to create your token on https://api.nasa.gov/

Once the dependencies are installed, you can now configure your project by creating a new `.env` file in the backend folder containing your environment variables used for development in our case TOKEN and REDIS CONFIG

```
cp  .sample-env
vi .env
```

### 1.3 Launch and discover

You are now ready to launch the NestJS application using the command below.

```sh

# Launch the development server with TSNode
npm run dev
```
(Don't forget to change the port you choose on the url)

You can now head to `http://localhost:3003/api` and see your API Swagger docs. The example rovers API is located at the `http://localhost:3003/api/v1/rovers/Curiosity/sol/3000/camera/mast` endpoint.

## 2. Project structure

This template was made with a well-defined directory structure.

```sh
src/
├── mars-rover
|   ├── controller/
|   |   ├── mars-rover.controller.spec.ts
|   |   └── mars-rover.controller.ts
|   ├── entity/
|   |  └──mars-rover.entity.ts
|   ├── module/
|   |  └── mars-rover.module.ts
|   └── service/
|       ├── mars-rover.service.port.ts
|       └── mars-rover.service.ts
├── app.module.ts
├── app.service.ts
├── app.controller.ts
└── index.ts
```

## 3. Default NPM commands

The NPM commands below are already included with this template and can be used to quickly run, build and test your project.

```sh
# Start the application using the transpiled NodeJS
npm run start

# Run the application using nodemon
npm run start dev

# Transpile the TypeScript files
npm run build

# Run the project' functional tests
npm run test

# Lint the project files using TSLint
npm run lint

```

## 4. Project goals

The goal of this project is to display data from an NASA API on the react frontend , we're using Nest.js for the backend.

## 5. Roadmap

- [x] backend api to process data from the nasa's api
- [x] frontend react to display data
- [x] Project structure documentation
- [x] Docker file to start redis
- [x] Caching the data from the backend with redis
- [x] Better logging configuration with environment variables
- [x] Add a test case
