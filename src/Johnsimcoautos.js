import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DefaultInput } from "./components/Input.js";
import CarCards from "./components/Cards";
import { Cararrays } from "./components/Cararrays.js";

function Johnsimcoautos() {
  const [cars, setCars] = useState(Cararrays);
  console.log(cars);

  return (
    <div>
      <h1 className="ProjectName"> John Simco Autos</h1>
      <div className="SearchBarDetails">
        <DefaultInput />
      </div>
      <div>
      <Container>
        <Row>
          {cars.map((motor) => (
            <Col xs={12} md={6} lg={4}>
              <CarCards
                title={motor.title}
                description={motor.description}
                img={motor.img}
              />
            </Col>
          ))}
        </Row>
      </Container>
      </div>  
    </div>
  );
}

export default Johnsimcoautos;
