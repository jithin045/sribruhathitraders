import React from 'react'
import { Container, Row, Col } from "react-bootstrap";

function ProductsOverview() {
  return (
    <div>
      <section>
        <Container>

          <Row style={{ justifyContent: "center", alignItems: "center" }}>
            <Col
              md={6}
              style={{

              }}
            >
              <div className="blockquote ">
                <h1 style={{ color: "red" }} className='text-start mb-5 '>BRASS</h1>

                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  Discover timeless elegance with our exquisite brass products, cherished by countless satisfied customers. Crafted with precision and unparalleled quality, our brass collection offers a touch of sophistication to any space. Explore our range of finely crafted home decor and accessories, designed to elevate your style and enhance your surroundings. Shop now and experience the enduring allure of brass craftsmanship
                </p>


              </div>
            </Col>
            <Col
              md={6}
              style={{}}
              className="about-img"
            >
              <img width="1024px" height="861px" src='https://sribruhathitraders.com/wp-content/uploads/2024/04/91sDRURr-L-1536x1291.jpg' alt="about" className="img-fluid" />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "center", marginTop: 100, marginBottom: 50 }}>
            <Col
              md={6}
              style={{}}
              className="about-img"
            >
              <img width="1024px" height="861px" src='https://sribruhathitraders.com/wp-content/uploads/2024/04/WhatsApp-Image-2024-04-08-at-00.56.58_03bd487a.jpg' alt="about" className="img-fluid" />
            </Col>
            <Col
              md={6}
              style={{

              }}
            >
              <div className="blockquote ">
                <h1 style={{ color: "red" }} className='text-start mb-5 '>CONSTRUCTION MATERIALS</h1>

                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  Discover top-quality construction materials for your high-end projects from our store. From premium western commodes and wash basins to durable tiles, brass fittings, silicone, and cement bricks, we offer a comprehensive range of products to meet your needs. With a commitment to excellence and reliability, we’re excited to export these superior materials worldwide. Elevate your construction projects with our trusted solutions.
                </p>
                
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default ProductsOverview