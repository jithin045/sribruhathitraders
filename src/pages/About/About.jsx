import React from 'react'
import { Container, Row, Col } from "react-bootstrap";


function About() {
  return (
    <div>
      <section>
        <Container>
          <Row style={{ justifyContent: "center", alignItems: "center", marginTop: 50 }}>
            <Col
              md={5}
              style={{ paddingTop: "30px", paddingBottom: "20px" }}
              className="about-img"
            >
              <img width="1024px" height="650px" src='https://sribruhathitraders.com/wp-content/uploads/2024/03/UA-UNDP-who-we-are-and-waht-we-do-1.jpg' alt="about" className="img-fluid" />
              <h1 style={{ color: "red" }} className='text-center mt-3'>WHO ARE WE?</h1>
            </Col>
            <Col
              md={7}
              style={{
                justifyContent: "center",
                paddingTop: "30px",
                paddingBottom: "50px",
              }}
            >
              <div className="blockquote mb-5 pb-5">
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                  Sri Bruhathi Traders is a dynamic trading company specializing in importing and exporting goods in India and various countries around the world. Our mission is to provide top-quality products to our customers while ensuring their satisfaction and offering the best value in the market.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                  As a trusted importer and exporter, we take pride in our ability to source high-quality products and deliver them efficiently to our clients. Whether it’s raw materials, finished goods, or specialized products, we have the expertise and network to meet our customers’ diverse needs.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                  At Sri Bruhathi Traders, we understand the importance of building long-term relationships with our customers. That’s why we prioritize transparency, reliability, and exceptional service in every transaction. Our team is dedicated to understanding our clients’ requirements and providing personalized solutions to help them achieve their business goals.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                  We are committed to staying ahead of the curve in an ever-changing global market. By continuously monitoring industry trends and expanding our network of suppliers and partners, we ensure that our customers have access to the latest products and innovations.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                  Whether you’re looking to import goods into India or export products to international markets, Sri Bruhathi Traders is your trusted partner for seamless trading solutions. Contact us today to learn more about how we can help your business thrive.
                </p>

              </div>
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "between", marginTop:100 }}>
            <Col
              md={7}
              style={{

              }}
            >
              <div className="blockquote ">
                <p style={{ fontSize: "1.1rem" }} className='text-dark lead'>
                  At our core, we believe in the power of mutual development as the cornerstone of sustainable business growth. We understand that true progress is not achieved in isolation but through collaboration and partnership.<br />

                  From the moment of our inception, we have prioritized building and nurturing relationships with both our customers and vendors.By fostering an environment of trust, respect, and shared value, we have been able to steadily increase our customer base and expand our network of vendors.

                  Our approach to growth is not about short-term gains or maximizing profits at any cost. Instead, we focus on creating win-win situations where all parties involved can thrive and grow together. This means listening to our customers’ needs, providing them with exceptional products and services, and offering fair and transparent terms to our vendors.<br/> 

                  Through this commitment to mutual development, we have been able to achieve sustainable growth that benefits not only our company but also our partners and the communities we serve. As we continue on this journey, we remain dedicated to building lasting relationships and driving positive impact every step of the way.
                </p>


              </div>
            </Col>
            <Col
              md={5}
              style={{}}
              className="about-img"
            >
              <h1 style={{ color: "red" }} className='text-start mb-5 pb-5'>OUR APPROACH</h1>
              <img width="1024px" height="650px" src='https://sribruhathitraders.com/wp-content/uploads/2024/04/Screenshot-2024-04-07-222710.png' alt="about" className="img-fluid" />
            </Col>
          </Row>
          <Row style={{ justifyContent: "center", alignItems: "between", marginTop:100 }}>
            <Col
              md={5}
              style={{}}
              className="about-img"
            >
              <h1 style={{ color: "red" }} className='text-start mb-5 pb-5'>OUR PHILOSOPHY</h1>
              <img width="1024px" height="650px" src='https://sribruhathitraders.com/wp-content/uploads/2024/04/Persona-Of-Indian-Crafts-4.jpg' alt="about" className="img-fluid" />
            </Col>
            <Col
              md={7}
              style={{
              }}
            >
              <div className="blockquote mb-5 pb-5">
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                  Sri Bruhathi Traders is a dynamic trading company specializing in importing and exporting goods in India and various countries around the world. Our mission is to provide top-quality products to our customers while ensuring their satisfaction and offering the best value in the market.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                We specialize in providing unique and highly customized handmade products, ranging from items crafted from brass and mother of pearl to clay and weaving products. Each item is meticulously crafted by skilled artisans, resulting in a one-of-a-kind product that exceeds expectations.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                In addition to our handmade offerings, we also supply a comprehensive range of construction materials to African countries. Whether it’s bricks, cement, steel, or other building essentials, we ensure that our products meet the highest standards of quality and reliability.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                Our reach extends to various countries, including Bahrain, Kuwait, Dubai, the UK, and beyond. No matter where our clients are located, they can trust us to deliver exceptional products that meet their needs and exceed their expectations.
                </p>
                <br />
                <p style={{ textAlign: "justify", fontSize: "1.1rem" }} className='text-dark lead'>
                At our company, we are committed to building long-lasting relationships with our clients by providing superior products, excellent customer service, and a seamless procurement process. We believe in going above and beyond to ensure that every interaction with our company is a positive one, and we look forward to the opportunity to serve you.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default About