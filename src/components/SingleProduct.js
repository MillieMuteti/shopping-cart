import React from 'react'
import { Card} from 'react-bootstrap'

const SingleProduct = ({ prod}) => {
  return (
    <div className="product">
        <Card>
          <Card.Img variant='top' src={ prod.image } alt={prod.name} />

        </Card>
      
    </div>
  )
}

export default SingleProduct

// require(prod.image).default