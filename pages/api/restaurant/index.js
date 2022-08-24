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
      restaurant.push({
        id: restaurant.length+1,
        title: title,
        rating: rating,
        location: location,
        description: description,
        image: image
      })
      res.status(200).json({restaurant});
      break;
    default:
      res.setHeader('allow', ['GET', 'POST']);
      res.status(405).end(`method ${httpMethod} not allowed`);
  }
}