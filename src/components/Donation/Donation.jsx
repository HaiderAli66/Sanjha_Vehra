import React from 'react'
import All_heading from '../All_heading/All_heading'
import "./Donation.css"

function Donation() {
    return (
        <div className='about_back_tone'>
            <div className="container py-5">
                <div className='pt-4'>
                <All_heading head="Donate" />
                </div>

                <div className="row justify-content-evenly mt-5 ">
                    <div className="col-lg-5 text-start">
                        <div className="ft_count p-4">
                            <div className="bnk_acunt_uper">
                                <h3 className='account_title'>Bank Account</h3>
                                <ul className='list-unstyled'>
                                    <li className='acount_details_titl'>Bank Title: Sanjha Vehara</li>
                                    <li className='acount_details_titl'>Account Title:</li>
                                    <li className='acount_details_titl'>Branch:</li>
                                    <li className='acount_details_titl'>Bank Account:</li>
                                    <li className='acount_details_titl'>IBAN:</li>
                                    <li className='acount_details_titl'>Swift Code:</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 text-start mt-md-0 mt-5 jazz ">
                        <div className="ft_count p-4">
                            <div className="jazz_cash_uper">
                                <h3 className='account_title'>Jazz Cash Account</h3>
                                <ul className='list-unstyled'>
                                    <li className='acount_details_titl number_vc'>03044794800</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Donation
