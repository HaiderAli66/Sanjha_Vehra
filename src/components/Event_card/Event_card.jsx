import React from 'react'
import "./Event_card.css"
// import title_picc from "../assets/natak.jpeg"
import { RxReader } from "react-icons/rx";
import { Link } from 'react-router-dom';


function Event_card(props) {
    return (
        <div>
            <div className="container">
                <div className="row justify-content-center for_dow">
                    <div className="col-lg-4 up_diss text-md-end text-center">
                        <Link to="/Event_details">
                            <div className='display'>
                                <img src={props.title_picc} alt="" className='main_diss' />
                            </div>
                        </Link>
                    </div>

                    <div className="col-lg-8 text-start mt-md-0 mt-4">
                        <div className="card_detail_uper_layer">
                            <Link to="/Event_details" className='text-decoration-none'><h2 className='post_titel'>{props.post_titel}</h2></Link>
                            <h5 className='text-muted paly_dat_vani'> {props.event_date}</h5>
                            <h5 className='text-muted paly_dat_vani'> {props.event_vanue}</h5>
                            <p className='post_detail'>{props.event_details}</p>
                            <div className="more_detail text-end">
                            <Link to="/Event_details" className='text-decoration-none'> <button className='bbtn read_wala'><RxReader className="mb-1" /> Read more</button> </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Event_card
