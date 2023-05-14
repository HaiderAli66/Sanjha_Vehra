import React from 'react'
import "./About_us.css"
import uper_line from "../assets/Arrow_1.png"
import All_heading from '../All_heading/All_heading'
import comity_pic from "../assets/bzmi.jpg"
import Comitee_card from '../Comitee_card/Comitee_card'

function About_us() {
    return (
        <div className='container-fluid mb-5'>
            <div className="row justify-content-center about_back_tone">
                <div className="col-lg-8 col-sm-12 ">

                    <div className='pt-5 pb-4' data-aos="flip-down">
                        <All_heading head="Objectives"  />
                    </div>

                    <div className="intro_outer_layer" data-aos="zoom-in-up">
                        <h4 className='intro_head text-start'>Introduction</h4>
                        <div>
                            <ul className='text-dark text-start'>
                                <li className='point_styl mb-2'>To perform socially meaningful theatre and cultural activities thus contribute to the struggle for a secular and democratic Pakistan.</li>
                                <li className='point_styl mb-2'>To promote cultural awareness in Pakistan through theatre and music.</li>
                                <li className='point_styl'>To promote the cause of harmony and enlightenment in society through creative and enriching for the masses.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='pt-4 pb-4' data-aos="flip-up">
                        <All_heading head="Organization"  />
                    </div>

                    <div className="orgniz_sanjh" data-aos="zoom-in-up">
                        <p className="point_styl">Sanjha vehra is a non-profit voluntary, democratic organization. Its members come from varied class and social backgrounds. It is committed to equal rights for all irrespective of class, gender, ethnic or religious affinities. It actively supports peace and friendship in the world.</p>
                    </div>

                    <div className='pt-4 pb-4' data-aos="flip-up">
                        <All_heading head="Finances" />
                    </div>

                    <div className="orgniz_sanjh" data-aos="zoom-in-up">
                        <p className="point_styl">Sanjha vehra is financially independent and does not accept funds with any conditions or strings attached. It works with like-minded international and national organizations for shared objectives where costs are shared. It also has long-term collaborative relations with arts councils within the country.</p>
                    </div>

                    <div className='pt-4 pb-4' data-aos="flip-up" >
                        <All_heading head="Outreach" />
                    </div>

                    <div className="orgniz_sanjh pb-4" data-aos="zoom-in-up">
                        <p className="point_styl">Sanjha vehra attaches great important to developing close relations with civil society, human rights groups and community organizations. It has collaborated with women’s rights, environmental, workers,children and human rights organizations on issue of common interest. It has also maintained relations with International theatre organizations.</p>
                    </div>

                </div>
            </div>

            <div className="row">

                <div className='py-5' data-aos="flip-up">
                <All_heading head="Executive Committee"  />
                </div>

                <div className="col-lg-12">
                    <div className="row justify-content-center">

                        <div className="col-lg-5">
                            <Comitee_card
                                comity_pic1={comity_pic}
                                comity_prson_name="Nazeer joyia"
                                comity_prson_desig="Chairman"
                                comity_prson_detail="Human rights activist. Formally Amnesty International, Communication Officer, DMD Pakistan Television, Presently Professor of Film at Institute of Art & Culture Lahore"
                            />
                        </div>
                        <div className="col-lg-5 ">
                            <Comitee_card
                                comity_pic1={comity_pic}
                                comity_prson_name="Iqbal Bazmi"
                                comity_prson_desig="General  "
                                comity_prson_detail="Human rights activist. Formally Amnesty International, Communication Officer, DMD Pakistan Television, Presently Professor of Film at Institute of Art & Culture Lahore"
                            />
                        </div>
                        
                        <div className="col-lg-5 bll mt-4">
                            <Comitee_card
                                comity_pic1={comity_pic}
                                comity_prson_name="Iqbal Bazmi"
                                comity_prson_desig="Executive Director"
                                comity_prson_detail="Human rights activist. Formally Amnesty International, Communication Officer, DMD Pakistan Television, Presently Professor of Film at Institute of Art & Culture Lahore"
                            />
                        </div>

                    </div>

                </div>
            </div>

            <div className="row justify-content-center">
                <div className="col-lg-8 col-sm-12">

                    <div className='py-4' data-aos="flip-up">
                    <All_heading head={<span className='fs-1'>Sanjha Vehra Core Members</span>} />
                    </div>

                    <h4 className='core_member'>Haider Ali, Bilal Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, iure? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, quis.</h4>
                </div>
            </div>

        </div>
    )
}

export default About_us
