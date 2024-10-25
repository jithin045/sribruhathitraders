import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


function CustomizedProducts() {
    return (
        <div>
            <section>
                <Container>

                    <Row style={{ justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
                        <Col
                            md={12}
                            style={{

                            }}
                        >
                            <div className="blockquote ">
                                <h1 style={{ color: "red" }} className='text-start mb-5 '>Custimized Products</h1>
                                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                                    At our company, we specialize in creating one-of-a-kind handicraft items using materials like brass, clay, rope, mother of pearl, and more.
                                    <br /> Our focus is on understanding every detail of the production process to ensure we deliver high-quality products on time, leaving our customers delighted and satisfied.
                                </p>
                                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                                    Our customer base mainly consists of respected interior designers who require exceptionally unique and customized pieces for their projects. <br /> We work closely with them to bring their vision to life, utilizing our expertise to craft bespoke items that meet their exact specifications and elevate their designs
                                </p>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </div>
    )
}

export default CustomizedProducts