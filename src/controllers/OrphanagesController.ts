import { Request, Response } from 'express';

import { getRepository } from 'typeorm';
import Orphanage from '../models/Orphanage'

export default {
  async index(request: Request, response: Response){
    const orphanagesRepository = getRepository(Orphanage);

    const orphanages = await orphanagesRepository.find();
    
    return response.json(orphanages);
  },
  async show(request: Request, response: Response){
    const orphanagesRepository = getRepository(Orphanage);

    const { id } = request.params;

    const orphanage = await orphanagesRepository.findOneOrFail(id);
    
    return response.json(orphanage);
  },
  async create( request: Request, response: Response) {
    const {
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
  
    } = request.body;
  
    const orphanageRepository = getRepository(Orphanage);
  
    const orphanage = orphanageRepository.create({
      name,
      latitude,
      longitude,
      about,
      instructions,
      opening_hours,
      open_on_weekends
    });
    try{
      await orphanageRepository.save(orphanage);
      return response.status(201).json(orphanage);
    }
    catch(e) {
      console.log('Erro> ' + e.message);
    }
  }
};