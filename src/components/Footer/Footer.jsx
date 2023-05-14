import React from 'react'
import "./Footer.css"
import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineInstagram } from "react-icons/ai";

function Footer() {
  return (
    <div className='container-fluid copy_back_varient'>
      <div className="row justify-content-center">
        <div className="col-lg-5 col-sm-12 rite">

            <div className="copyright">
                <h3 className='rigth_tone'>© 2023 Sanjha Vehra. All Rights Reserved.</h3>
            </div>

            <div className="social">
                <li>
                <a href=""><BsWhatsapp className='action_icon lst_ic' /></a>
                </li>

                <li>
                <a href=""><FaFacebookF className='action_icon lst_ic' /></a>
                </li>

                <li>
                <a href=""><AiOutlineInstagram className='action_icon lst_ico' /></a>
                </li>
            </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
