import React from 'react'
import Button from 'react-bootstrap/Button';

export const DefaultButton = () => {
  return (
    <div>
   <Button variant="dark" className="border border-warning">
          Search
        </Button>
    </div>
    
  );
};

export  const ViewButton = () =>{
    return (
        <div>
   <Button variant="dark" className="border border-warning ">
         View More
        </Button>
    </div>
    );
;}
export  const LogInButton = () =>{
    return (
        <div>
   <Button variant="info" id="button-addon2">
          Button
        </Button>
    </div>
    );
;}

export  const signUpButton = () =>{
    return (
        <div>
   <Button variant="danger" id="button-addon2">
          Button
        </Button>
    </div>
    );
;}


