import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function Products() {
  return (
    <div>
      <section>
        <Container>

          <Row style={{ justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
            <Col
              md={6}
              style={{

              }}
            >
              <div className="blockquote ">
                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  Welcome to Sri Bruhathi, where sophistication meets style in our stunning collection of mother of pearl products and many more. From intricately designed home decor to chic accessories, each piece is meticulously crafted to add an elegant touch to any setting. Explore our range and converting your space with the timeless beauty of mother of pearl.
                </p>
              </div>
            </Col>
            <Col
              md={6}
              style={{}}
              className="about-img"
            >
              <img src='https://sribruhathitraders.com/wp-content/uploads/2024/04/HANDMADE1.jpeg' alt="about" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default Products