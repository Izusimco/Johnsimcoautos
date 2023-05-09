import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { DefaultButton } from './ProjectButtons';

export const DefaultInput = () => {
  return (
    <div className='InputDetails' >
      <InputGroup className="mb-3 ">
      <Form.Control
          aria-label="Example text with button addon"
          aria-describedby="basic-addon1"
          placeholder='Search for car'
        />
         <DefaultButton/>
      </InputGroup>
     
    </div>
  );
}

