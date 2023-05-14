import React from 'react'
import All_heading from '../All_heading/All_heading'
import Event_card from '../Event_card/Event_card'
import "./Latest_event.css"
import title_pic1 from "../assets/natak.jpeg"

function Latest_event() {
  return (
    <div className='bg-light'>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-12">
            
            <div className='pb-5'>
              <All_heading head="Up Coming Event" />
            </div>

            <>
              <Event_card
                title_picc={title_pic1}
                post_titel="Heer (Natak)"
                event_date="Friday 2 Feb"
                event_vanue="Alhumra Haal 3"
                event_details="Get ready for a revolution in entertainment! As Pakistan’s first regular entertainment spectacle, the 3rd Ajoka Nights is ready to mesmerize you with the hottest EDM beats, breathtaking theatre performances, rib-tickling stand-up comedy and mouth-watering food."
              />
            </>
            <div className='mt-5'>
              <Event_card
                title_picc={title_pic1}
                post_titel="Heer (Natak)"
                event_date="Friday 2 Feb"
                event_vanue="Alhumra Haal 3"
                event_details="Get ready for a revolution in entertainment! As Pakistan’s first regular entertainment spectacle, the 3rd Ajoka Nights is ready to mesmerize you with the hottest EDM beats, breathtaking theatre performances, rib-tickling stand-up comedy and mouth-watering food."
              />
            </div>

          </div>
        </div>
        <div className="row mt-5">
          <div className="col-lg-12">
            <All_heading head="Latest Events" />

            <div className='mt-5'>
              <Event_card
                title_picc={title_pic1}
                post_titel="Heer (Natak)"
                event_date="Friday 2 Feb"
                event_vanue="Alhumra Haal 3"
                event_details="Get ready for a revolution in entertainment! As Pakistan’s first regular entertainment spectacle, the 3rd Ajoka Nights is ready to mesmerize you with the hottest EDM beats, breathtaking theatre performances, rib-tickling stand-up comedy and mouth-watering food."
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Latest_event
