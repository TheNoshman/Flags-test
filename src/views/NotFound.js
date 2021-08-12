import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const NotFound = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Page not found</h1>
          <hr />
          <Button>Home</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default NotFound;
