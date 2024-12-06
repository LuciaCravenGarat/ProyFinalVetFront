import React from 'react';
import Card from 'react-bootstrap/Card';
import "../styles/HomeTeam.css";

const HomeTeam = () => {
  return (
    <>
    <section className='homeTeam-container'>
    <div >
        <h2>Nuestros profesionales</h2>
        <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
      </div>
      <div className="home-team-container">
        <Card className="home-team-card bg-dark text-white">
          <Card.Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2B08zMc0IYJafLczeqtZuUuiCZMTSpMNYXg&s"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="home-team-card bg-dark text-white">
          <Card.Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2B08zMc0IYJafLczeqtZuUuiCZMTSpMNYXg&s"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="home-team-card bg-dark text-white">
          <Card.Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2B08zMc0IYJafLczeqtZuUuiCZMTSpMNYXg&s"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
        <Card className="home-team-card bg-dark text-white">
          <Card.Img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2B08zMc0IYJafLczeqtZuUuiCZMTSpMNYXg&s"
            alt="Card image"
          />
          <Card.ImgOverlay>
            <Card.Title>Card title</Card.Title>
            <Card.Text>
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </Card.Text>
            <Card.Text>Last updated 3 mins ago</Card.Text>
          </Card.ImgOverlay>
        </Card>
      </div>
    </section>
      
    </>
  );
};

export default HomeTeam;