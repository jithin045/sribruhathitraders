import React from 'react'
import "./home.css"
import HomeCarousel1 from '../../components/HomeCarousel1'
import HomeBanner from '../../components/HomeBanner'
import { Container, Row, Col } from "react-bootstrap";

function Home() {
  return (
    <div >
      <HomeCarousel1 />
      <HomeBanner />
      <section>
        <Container>

          <Row style={{ justifyContent: "center", alignItems: "center", marginTop: "50px", marginBottom: "50px" }}>
            <Col
              md={5}
              style={{}}
              className="home-text"
            >
              <div className='p-2 text-danger display-6'><b>Sri Bruhathi Traders Your Destination for Artisanal Excellence</b></div>
            </Col>
            <Col
              md={7}
              style={{

              }}
            >
              <div className="blockquote ">
                <h1 style={{ color: "red" }} className='text-start mb-5 '>WHAT WE DO?</h1>

                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  1. Enhance your decor with our exquisite collection of brass items, crafted with precision and elegance
                </p>
                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  2. Discover the natural beauty of clay with our handcrafted pottery and clay decor pieces, perfect for adding a rustic charm to any space
                </p>
                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  3. Add a touch of opulence to your surroundings with our stunning mother of pearl accessories, showcasing timeless elegance and sophistication
                </p>
                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  4. Explore our diverse range of handicraft items, meticulously crafted by skilled artisans to bring unique cultural flair to your home
                </p>
                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  5. Build with confidence using our premium construction materials, designed to meet the highest standards of durability and reliability
                </p>

              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section>
        <Row>
          <div style={{ color: "red" }} className='display-5 ms-5 p-5 '><b>4+ Years in Business</b></div>
        </Row>
      </section>
      <section className='mb-5'>
        <Row style={{ color: "red" }}>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center p-2'>
            <i class="fa-regular fa-money-bill-1 fa-2xl"></i><br />
            <h3>Affordable Price</h3>
          </Col>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center p-2'>
            <i class="fa-solid fa-gift fa-2xl"></i><br />
            <h3>Quality Products</h3>
          </Col>
        </Row>
        <Row style={{ color: "red" }} className='mt-5'>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center p-2'>
            <i class="fa-solid fa-handshake fa-2xl"></i><br />
            <h3>Sustainable Relations</h3>
          </Col>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center p-2'>
            <i class="fa-regular fa-star fa-2xl"></i><br />
            <h3>Win-Win Strategy</h3>
          </Col>
        </Row>
        <Row style={{ color: "red" }} className='mt-5'>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center p-2'>
            <i class="fa-solid fa-box-open fa-2xl"></i><br />
            <h3>Prompt Delivery</h3>
          </Col>
          <Col md={6} className='d-flex flex-column justify-content-center align-items-center p-2'>
            <i class="fa-solid fa-user-check fa-2xl"></i><br />
            <h3>Customer Satisfaction</h3>
          </Col>
        </Row>
      </section>
      <hr />
      <section>
        <Row>
          <div style={{ color: "red" }} className='display-6 ms-5 p-5 '><b>What Our Customers Say</b></div>
        </Row>
        <Row style={{ color: "red" }}>
          <Col md={4} className='d-flex flex-column justify-content-center align-items-center p-5'>
            <i class="fa-solid fa-quote-left fa-2xl"></i><br />
            <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
              Whether you’re looking to import goods into India or export products to international markets, Sri Bruhathi Traders is your trusted partner for seamless trading solutions. Contact us today to learn more about how we can help your business thrive.
            </p>
            <img className='rounded-circle mb-3' src="https://sribruhathitraders.com/wp-content/uploads/2024/02/earth-store-testimonial-avatar-img.jpeg" alt="" />
            <p>Jennifer Lewis</p>
          </Col>
          <Col md={4} className='d-flex flex-column justify-content-center align-items-center p-5'>
            <i class="fa-solid fa-quote-left fa-2xl"></i><br />
            <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
              Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.
            </p>
            <img className='rounded-circle mb-3' src="https://sribruhathitraders.com/wp-content/uploads/2024/02/earth-store-testimonials-avatar-img-2.jpeg" alt="" />
            <p>Alicia Heart</p>
          </Col>
          <Col md={4} className='d-flex flex-column justify-content-center align-items-center p-5'>
            <i class="fa-solid fa-quote-left fa-2xl"></i><br />
            <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
              Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.
            </p>
            <img className='rounded-circle mb-3' src="https://sribruhathitraders.com/wp-content/uploads/2024/02/earth-store-testimonials-avatar-img-1.jpeg" alt="" />
            <p>Juan Carlos</p>
          </Col>
        </Row>
      </section>
      <section>
        <Row>
          <div style={{ color: "red" }} className='display-5 ms-5 p-5 text-center'><b>Membership & Certifications</b></div>
        </Row>
        <marquee width="100%" direction="right" height="300px">
          <img src="https://sribruhathitraders.com/wp-content/uploads/2024/09/msme-300x300.png" alt="" />
          <img src="https://sribruhathitraders.com/wp-content/uploads/2024/09/udyogaadhaar-300x300.png" alt="" />
          <img src="https://sribruhathitraders.com/wp-content/uploads/2024/09/fieo-300x300.jpg" alt="" />
          <img src="https://sribruhathitraders.com/wp-content/uploads/2024/09/gst-300x300.png" alt="" />
          <img src="https://sribruhathitraders.com/wp-content/uploads/2024/09/dgft-300x300.png" alt="" />
        </marquee>
      </section>
    </div >
  )
}

export default Home