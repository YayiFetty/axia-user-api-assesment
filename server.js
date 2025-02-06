const express = require('express');
const mongoose = require('mongoose');
const app = express();
const routerUser = require('./routes/userRoutes');

app.use(express.json());

app.use('/api', routerUser);



const Port = 5000;

app.listen(Port, () => console.log("server start"));
