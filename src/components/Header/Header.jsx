// import React from 'react'
import "./Header.css"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaPhone } from "react-icons/fa";
import { GoMail } from "react-icons/go";
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import vehra_logo from '../assets/sanja_logo.png'

function Header() {

  return (
    <div className=" " >
      <div className="container_fluid all ">
        <div className="row">
          <div className="col-lg-12 col-sm-12 p-0">
            <div className="action_bar">

              <ul className='fst_ulist list-unstyled mb-0'>
                <li className='slogan'>جدوجہد ، امن ، خوشحالی</li>
                <li><FaPhone className="phone_icon me-2" /><a href="tel:+923104224223" className='text-decoration-none text-white'>+92 3104224223</a></li>
                <li className="mail"><GoMail className="phone_icon me-2"/>sanjhavehra@gmail.com</li>
              </ul>

              <ul className='snd_ulist cont_icon list-unstyled mb-0'>
                <li><a href=""><BsWhatsapp className='action_icon' /></a></li>
                <li><a href="https://www.facebook.com/sanjhaverrha"><FaFacebookF className='action_icon' /></a></li>
                <li><a href=""><AiOutlineInstagram className='action_icon' /></a></li>
              </ul>

            </div>
          </div>
        </div>
      </div>

      <div>
        <Navbar collapseOnSelect expand="lg" className="nav_variant">
          <Container>
            <>
              <img src={vehra_logo} alt="Sanjha Vehra" className="sanjh_logo_main" />
            </>

            <Navbar.Toggle aria-controls="responsive-navbar-nav"  />
            <Navbar.Collapse id="responsive-navbar-nav" className=" justify-content-center">
              < >
                <Nav className="fst_layer">
                  <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                        <Link to="/"><div class="btn btn-one">
                          <span className='items_veriant'>< >Home</></span>
                        </div></Link>
                      </div>
                    </div>
                  </Nav.Link>

                  <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                        <Link to="/About_us"><div class="btn btn-one">
                          <span className='items_veriant'>< >About Us</></span>
                        </div></Link>
                      </div>
                    </div>
                  </Nav.Link>

                  <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                        <Link to="Latest_event"><div class="btn btn-one">
                          <span className='items_veriant'>< >Events</></span>
                        </div></Link>
                      </div>
                    </div>
                  </Nav.Link>

                  <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                       <Link to="Theater"> <div class="btn btn-one">
                          <span className='items_veriant'>< >Theater</></span>
                        </div></Link>
                      </div>
                    </div>
                  </Nav.Link>
                  
                  <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                       <Link to="Theater"> <div class="btn btn-one">
                          <span className='items_veriant'>< >Books</></span>
                        </div></Link>
                      </div>
                    </div>
                  </Nav.Link>

                  {/* <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                        <div class="btn btn-one">
                          <span className='items_veriant'><>NewsPapaer</></span>
                        </div>
                      </div>
                    </div>
                  </Nav.Link> */}

                  <Nav.Link className="pado">
                    <div>
                      <div class="box_lr_1">
                        <Link to="/Donation"><div class="btn btn-one">
                          <span className='items_veriant'>< >Donate</></span>
                        </div></Link>
                      </div>
                    </div>
                  </Nav.Link>

                  <Nav.Link>
                    <Link to="/Admin_main"> <button className="btn admin_hand btn-lg">Admin</button></Link>
                  </Nav.Link>

                </Nav>
              </>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </div>
  )
}

export default Header