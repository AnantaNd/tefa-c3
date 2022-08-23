import {restaurant} from '../../../data.js'

export default function handler(req, res){
  const httpMethod = req.method
  const { title, rating, location, description, image } = req.body;

  switch(httpMethod){
    // show all data
    case 'GET':
      res.status(200).json(restaurant);
      break;
    // create new restaurant
    case 'POST':
      res.status(200).json({
        id: restaurant.length+1,
        title,
        rating,
        location,
        description,
        image,
      });
      break;
    default:
      res.setHeader('allow', ['GET', 'POST']);
      res.status(405).end(`method ${httpMethod} not allowed`);
  }
}