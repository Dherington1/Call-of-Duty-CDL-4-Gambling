import React from 'react'

// Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

// styling
import styled from "styled-components";

const Soon = styled.h3`
  line-height: 200px;
  height: 200px;
  text-align: center;
`;


const MW2022PlayerSelection = () => {
  return (
    <Container>
        <Row xs={12}>
            <Col xs={12}>
                <Soon>Coming soon in 2023</Soon>
            </Col>
        </Row>
    </Container>
  )
}

export default MW2022PlayerSelection