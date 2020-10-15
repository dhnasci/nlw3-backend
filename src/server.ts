import express from 'express';
import 'express-async-errors'
import path from 'path';
import cors from 'cors';

import './database/connection'
import routes from './routes'

import errorHandler from './errors/handler'

const app = express();

// allowing other front ends in other url
app.use(cors());

app.use(express.json());

app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')));
app.use(errorHandler);

// Rota /users
// Recurso > users
// Métodos http GET, PUT, DELETE, INPUT
// Parametros ...
// Query: http://localhost:3333/users?search=Dirceu&page=2
// Route: http://localhost:3333/users/1   (usado para identificar um recurso)

// Body:  http://localhost:3333/users


app.listen(3333);