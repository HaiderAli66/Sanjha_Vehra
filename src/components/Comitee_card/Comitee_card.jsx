import React from 'react'
import "./Comitee.css"

function Comitee_card(props) {
    return (
        <>
            <div className="row">
                <div className="col-lg-4 p-0">
                    <img src={props.comity_pic1} className="cmty_pic" alt="" />
                </div>
                <div className="col-lg-8">
                    <div className="card-body text-start">
                        <h5 className="card-title nam_comti">{props.comity_prson_name}</h5>
                        <p className="text_detail">{props.comity_prson_desig}</p>
                        <hr />
                        <p className="text_detail">{props.comity_prson_detail}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Comitee_card
