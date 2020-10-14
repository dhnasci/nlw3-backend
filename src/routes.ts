import { Router } from 'express'
import multer from 'multer';

import uploadConfig from './config/upload';
import orphanagesController from './controllers/OrphanagesController';

const routes = Router();
const upload = multer(uploadConfig);

routes.get('/users', (request, response) => {
  /*
  console.log( request.query)
  console.log('Testando...')
  console.log(request.params)
  console.log('Body...' + request.body) */
  return response.json({message: 'Hello World!'})
})

// In register we can upload serveral images
routes.post('/orphanages', upload.array('images'), orphanagesController.create);
routes.get('/orphanages', orphanagesController.index);
routes.get('/orphanages/:id', orphanagesController.show);

export default routes;
