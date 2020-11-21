# Strawhats Chat

A nodejs chat application using :
  
  - socket.io
  - jQuery
  - express
  - mustache.js
  - Moment.js

## Configuration 

This application requires [Node.js](https://nodejs.org/) to run.

Install nodejs

https://doc.ubuntu-fr.org/nodejs


Install the dependencies and clone the application.

```sh
$ npm install socket.io
$ npm install jquery
$ npm install express
$ npm install mustache.js
$ npm install moment --save
```

Install Docker

https://doc.ubuntu-fr.org/docker


## Building container images for each service

```sh
$ cd strawhats_chat/ && docker build -f Dockerfile -t "$USERNAME"/strawhats_chat .
```

## Deploying the Microservices based application into a Kubernetes Managed Cluster.


```sh
docker push "$USERNAME"/strawhats_chat .
```

and you can run the application from the Docker CE desktop or using the command 

```sh
docker run -it --rm "$USERNAME"/strawhats_chat .
```
