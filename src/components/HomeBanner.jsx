import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function HomeBanner() {
    return (
        <section className='bg-danger text-white'>
            <Container >
                <Row className='p-3 d-flex justify-content-center'>
                    <Col md={4}>
                        <h4>Ask us a query</h4>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-phone fa-xl me-2"></i><br />
                        <h5>+91 9552003353/ 8074971017</h5>
                    </Col>
                    <Col md={4} className='d-flex justify-content-center align-items-center'>
                        <i class="fa-solid fa-envelopes-bulk me-2"></i>
                        <h5>bruhathitraders@gmail.com</h5>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default HomeBanner