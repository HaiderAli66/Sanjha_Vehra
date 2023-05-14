import React from 'react'
import './Theatre_poster.css'
import Card from 'react-bootstrap/Card';
// import natak_poster from "../assets/"

function Theatre_poster(props) {
  return (
    <div>
      <Card style={{ width: '100%' }} className='uper_theatre_poster' >
        <Card.Img variant="top" src={props.natak_poster} className='performance_poster_pics' />
        <Card.Title className='play_name_core'>{props.play_name}</Card.Title>
    </Card>
    </div>
  )
}

export default Theatre_poster
