import { restaurant } from '../../../data.js';

export default function handler(req, res){
  const httpMethod = req.method;
  const { title, rating, location, description, image } = req.body;

  switch(httpMethod){
    case 'GET':
      // show all data
      res.status(200).json(restaurant);
      break;
      case 'POST':
      // create new restaurant
      const newRest = { 
        id: restaurant.length + 1,
        title,
        rating,
        location,
        image,
        description
      }
      restaurant.push(newRest)
      res.status(200).json(restaurant);      
    default:
      res.setHeader('allow', ['GET', 'POST']);
      res.status(405).end(`method ${httpMethod} not allowed`);
      break;
  }
}