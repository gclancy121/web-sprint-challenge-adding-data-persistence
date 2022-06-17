// build your server here and require it from index.js
const express = require('express');
const projectRouter = require("./project/router");
const taskRouter = require('./task/router');
const resourceRouter = require('./resource/router');



const server = express();
server.use(express.json());
server.use('/api/projects', projectRouter);
server.use('/api/tasks', taskRouter);
server.use('/api/resources', resourceRouter);

module.exports = server;