import React from 'react';
import { Form } from 'react-bootstrap';






const Navbarr = () => {
 
  return (
    <>
    <Form.Control
      type="text"
      placeholder="Disabled input"
      aria-label="Disabled input example"
      disabled
      readOnly
    />
    <br />
    <Form.Control
      type="text"
      placeholder="Disabled readonly input"
      aria-label="Disabled input example"
      readOnly
    />
  </>
);
}
 
      

   


export default Navbarr;
