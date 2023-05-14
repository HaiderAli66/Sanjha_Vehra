// import React from 'react'
import "./Event_details.css"
import main_poster from "../assets/kona_kon.jpeg"
import Gallery from "../Gallery/Gallery";
import { Image } from 'antd';


function Event_details() {
  return (
    <div className='bg-light'>
      <div className="container py-4 ">
        <div className="row ">
          <div className="col-lg-12">

            <div className="poster_outer d-flex justify-content-center">
              <div className="poster_inner">
                <Image width={300} src={main_poster} alt="" className='poster'/>
              </div>
            </div>

            <div className="poster_titel mt-5">
              <h1 className="mb-0 event_main_name ">Kona Kon Sanjate</h1>
            </div>

            <div className="publish_page_uper mt-5">
              <h6 className="paper_date text-start">August 27,2022</h6>
              <p className='paper_details'>Ajoka Institute children presented Shahid Nadeem’s Acclaimed play “Border Border” at the Punjabi Institute of Language and Literature (PILAC) on Friday 02 Dec to a packed and appreciative audience. The play was originally performed by children from Amritsar and Lahore 25 years ago, relates the story of two families from India and Pakistan who go to witness the flag ceremony at the Wagha Border. The play addresses the issue of prejudice and propaganda against each side and promotes the ideals of peace and friendship with humour and enjoyable songs. Directed by Nida Sajid, under the mentorship of Ajoka Institute director Nirvaan Nadeem, the cast included children aged 6-10 years. The play was developed during an Ajoka children’s theatre workshop. The cast included: Humayl Mushtaq, Eshan Ahmed, Saania Hasan, Areej Ahmad, Innayah Umer, Zaid Salman, Rimsha Ali Tahir, Ismail Omer, Kashif Khalil, Arham Qazi, Zainab Shehryar, Zahra Shehryar and Hassan Awais. Ajoka Executive Director Shahid Nadeem, who distributed certificates to the participants, appreciated the energetic and entertaining performances of the children.</p>

              <div className="gallary_upper_layer my-5">
                <Gallery/>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Event_details
