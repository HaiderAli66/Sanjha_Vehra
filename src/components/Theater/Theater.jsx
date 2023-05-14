import React from 'react'
import './Theater.css'
import All_heading from '../All_heading/All_heading'
import Theatre_gallery from '../Theatre_gallery/Theatre_gallery'

function Theater() {
    return (
        <div className='main_aal_theattre py-4'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">

                        <div className='my-5 '>
                            <All_heading head={ <span className=''>Sanjha Vehra Theatre</span>} />
                        </div>

                        <div className="performing_main ">
                            <Theatre_gallery/>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Theater
