import React from 'react'
import "./All_heading.css"
import uper_line from "../assets/Arrow_1.png"
import under_line from "../assets/under.png"

function All_heading(props) {
    return (
        <>
            
                <div className='four_inner_layer ' >
                    {/* <div className="uper_line">
                        <img src={uper_line} alt="" className='line_sty' />
                    </div> */}
                    <h2 className='mv_heading_tone'>{props.head}</h2>
                    <div className="lower_line">
                        <img src={under_line} alt="" className='under_line_sty' />
                    </div>
                </div>
            
        </>
    )
}

export default All_heading
