import React from 'react';
import Card from 'react-bootstrap/Card';
import "../styles/Home.css";;

const ImgCard = () => {
  return (
    <Card className="text-black card-full-width">
      <Card.Img src="https://www.purina.es/sites/default/files/styles/ttt_image_510/public/2022-05/gato_pastilla_HERO.png?itok=mrTfaDBI" alt="Card image" className='card-height'/>
      <Card.ImgOverlay className=''>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This is a wider card with supporting text below as a natural lead-in
          to additional content. This content is a little bit longer.
        </Card.Text>
        <Card.Text>Last updated 3 mins ago</Card.Text>
      </Card.ImgOverlay>
    </Card>
  )
}

export default ImgCard