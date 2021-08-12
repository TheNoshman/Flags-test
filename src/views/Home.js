import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  return (
    <Container>
      <Row>
        <Col>
          <h1>React Interview Project</h1>
          <hr />
          <Button>TEST</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
