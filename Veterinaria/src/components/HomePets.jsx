import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "../styles/HomePets.css";

const HomePets = () => {
  return (
    <div>
      <Container>
        <h2>Nuestros pacientes</h2>
        <Row>
          <Col xs={6} md={3}>
            <div className="img-container">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7lkawcqjiHdmN-FquvzilxYI1outSpfO-YA&s"
                alt="Mascota 1"
                className="img-responsive"
              />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="img-container">
              <img
                src="https://images.ctfassets.net/denf86kkcx7r/4IPlg4Qazd4sFRuCUHIJ1T/f6c71da7eec727babcd554d843a528b8/gatocomuneuropeo-97?fm=webp&w=612"
                alt="Mascota 2"
                className="img-responsive"
              />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="img-container">
              <img
                src="https://okdiario.com/img/2021/11/22/-como-cuidar-a-un-loro-en-casa-.jpg"
                alt="Mascota 3"
                className="img-responsive"
              />
            </div>
          </Col>
          <Col xs={6} md={3}>
            <div className="img-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Oryctolagus_cuniculus_Tasmania_2.jpg/1200px-Oryctolagus_cuniculus_Tasmania_2.jpg"
                alt="Mascota 3"
                className="img-responsive"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePets;