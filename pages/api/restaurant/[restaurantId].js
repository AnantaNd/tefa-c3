import {restaurant} from '../../../data.js';

export default function handler(req, res){
  const httpMethod = req.method;
  const { title, rating, location, description, image } = req.body;

  const id = req.query.restaurantId;
  const results = restaurant.filter((restaurant) => restaurant.id === parseInt(id));

  switch (httpMethod) {
    // method get, show by id
    case 'GET':
      if(results.length > 0){
        res.status(200).json(results[0]);
      }else{
        res.status(404).json({massage: `restaurant with id ${id} not found`});
      }
      break;
    //method put, update by id
    case 'PUT':
      if(results.length > 0){
        res.status(200).json({
          id: results.id,
          title,
          rating,
          location,
          description,
          image,
        })
      }else{
        res.status(404).json(
          {massage: `restaurant with id ${id} not found`}
        );
      }
      break;
    //method delete, delete by id
    case 'DELETE':
      if(results.length > 0){
        restaurant.splice(restaurant.indexOf(results[0]),1);
        res.status(200).json({
          massage: `restaurant with id ${id} is deleted`
        })
      }else{
        res.status(404).json(
          {massage: `restaurant with id ${id} not found`}
        );
      }
      break;
    default:
      res.setHeader('allow', ['GET', 'PUT', 'DELETE']);
      res.status(405).end(`method ${httpMethod} not allowed`);
  }
}