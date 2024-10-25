import React from 'react'
import Carousel from 'react-bootstrap/Carousel';


function HomeCarousel1() {
    return (
        <div>
            <Carousel data-bs-theme="dark" >
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sribruhathitraders.com/wp-content/uploads/slider/cache/b69fbce3f467ce44e2d1cf3690eb10d0/Clay-Product.jpg"
                        alt="First slide"
                        style={{height:"600px"}}
                        
                    />
                    <Carousel.Caption>
                        <div>
                            
                        </div>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sribruhathitraders.com/wp-content/uploads/slider/cache/71d716a2fb1a6afe3b7d31675e4269b9/Handicraft-Items.jpg"
                        alt="Second slide"
                        style={{height:"600px"}}
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sribruhathitraders.com/wp-content/uploads/slider/cache/b03276435c7de697bda6d6cebef6d415/what-is-mother-of-pearl-hero.jpg"
                        alt="Third slide"
                        style={{height:"600px"}}
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://sribruhathitraders.com/wp-content/uploads/slider/cache/2da938b80a0860b2ee92accc3cb5e7bb/On-Time-Deliveries.jpg"
                        alt="Fourth slide"
                        style={{height:"600px"}}
                    />
                    <Carousel.Caption>
                        
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default HomeCarousel1