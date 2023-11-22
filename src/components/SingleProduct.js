import React from 'react'
import { Card, Button} from 'react-bootstrap';
import Rating from './Rating';



const SingleProduct = ({ prod}) => {
  console.log(prod.image);
  return (
    
    <div className="product">
        <Card>
          <Card.Img variant='top' src={"http://placeimg.com" +prod.image} alt={prod.name} />
         
          <Card.Body>
          <Card.Title>{prod.name}</Card.Title>
          <Card.Subtitle style={{ paddingBottom: 10 }}>
            <span>₹ {prod.price.split(".")[0]}</span>
            {prod.fastDelivery ? (
              <div>Fast Delivery</div>
            ) : (
              <div>4 days delivery</div>
            )}
            <Rating rating={prod.ratings} />
          </Card.Subtitle>
         <Button variant='danger'>
          Remove From Cart
         </Button>
         <Button disabled={!prod.inStock}>
          {!prod.inStock ? "Out of Stock" : "Add to Cart"}
        
         </Button>
          </Card.Body>

        </Card>
      
    </div>
  )
}

export default SingleProduct

// require(prod.image).default