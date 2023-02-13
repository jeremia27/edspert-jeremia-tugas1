import React from 'react'
import { Col, Container, Row, ProgressBar } from 'react-bootstrap';


export default function Content() {
  return (
    <>
      <Container style={{ marginTop: '50px', textAlign: 'center' }}>
        <Row>
          <Col xs={12}>
            <h1>Welcome to Our Blog</h1>
            <p>This is my first react blog.</p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <div style={{marginTop : 70}}>
              <h2>My Progress</h2>
              <ProgressBar variant="success" now={40} label={`${40}%`}/>
              <ProgressBar variant="info" now={20}  label={`${20}%`}/>
              <ProgressBar variant="warning" now={60} label={`${60}%`}/>
              <ProgressBar variant="danger" now={80} label={`${80}%`}/>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  )
}
