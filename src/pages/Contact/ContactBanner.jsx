import React from 'react'
import { Container, Row } from "react-bootstrap";

function ContactBanner() {
    return (

        <section>
            <Container>
                <Row>
                    <div style={{ color: "red" }} className='display-3 ms-5 p-5 text-center '><b>CONTACT US</b></div>
                </Row>
            </Container>
        </section>
    )
}

export default ContactBanner