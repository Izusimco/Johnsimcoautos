import React from 'react';
import Card from 'react-bootstrap/Card';
import { ViewButton } from './ProjectButtons';

function CarCards({
    img,
    title,
    description,
    
}) {
    return (
        <Card
        style={{ width: '18rem', height: '18rem'}}>
          <Card.Img 
          variant="top" 
          src={img}
          style={{ width:250, height: 150}} />
          <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
              {description}
            </Card.Text>
       <ViewButton/>
          </Card.Body>
        </Card>
      );
    }
    

export default CarCards;