import { Router } from 'express'
import orphanagesController from './controllers/OrphanagesController';

const routes = Router();

routes.get('/users', (request, response) => {
  /*
  console.log( request.query)
  console.log('Testando...')
  console.log(request.params)
  console.log('Body...' + request.body) */
  return response.json({message: 'Hello World!'})
})

routes.post('/orphanages', orphanagesController.create);
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);

export default routes;
