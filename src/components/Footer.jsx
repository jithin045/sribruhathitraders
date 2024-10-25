import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

function Footer() {
    return (
        <>

                <Row clasName='d-flex justify-content-around' style={{ backgroundColor: "#dbd3bf",paddingTop:"50px",paddingBottom:"50px" }}>

                    <Col className='ms-5 d-flex flex-column justify-content-around'>
                        <h4 className='text-danger'>Quick Links</h4>
                        <Link className='footerlink' to={'/'} >Home</Link><br />
                        <Link className='footerlink' to={'/about'} >About</Link><br />
                        <Link className='footerlink' to={'/products'} >Products</Link><br />
                        <Link className='footerlink' to={'/contact'} >Contact</Link>
                    </Col>

                    <Col className=''>
                        <Link to={'/'} className='text-decoration-none'>
                            <img
                                src="https://sribruhathitraders.com/wp-content/uploads/2024/02/Bruthati-Traders-Logo-Broucher.png"

                                height="100"
                                className="d-inline-block align-top "
                                alt="Sri Bruhathi Traders logo"
                            />
                        </Link>
                    </Col>

                    <Col className='text-center'>
                        <h4 className='text-danger'>Contact</h4>
                        <div ><i class="fa-solid fa-location-dot me-2 text-danger"></i> Tamil Nadu, India</div>
                        <div ><i class="fa-solid fa-phone me-2 text-danger"></i> +91 9552003353</div>
                        <div ><i class="fa-solid fa-envelopes-bulk me-2 text-danger"></i> bruhathitraders@gmail.com</div>

                    </Col>
                </Row>


            <div className='text-center'>
                <p>&copy; Copyrights 2024 All Rights Reserved Sri Bruhathi Traders Pvt Ltd</p>
            </div>
        </>
    )
}

export default Footer