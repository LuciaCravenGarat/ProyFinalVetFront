import React from 'react';
import { Button } from "react-bootstrap";
import "../styles/HomeAbout.css";

const HomeAbout = () => {
  return (
    <div className="home-about-container">
      <div>
        <img
          src="https://cdn.pixabay.com/photo/2020/06/08/22/50/dog-5276317_960_720.png"
          alt="Perro"
        />
      </div>
      
      
      
      <div>
      <h2>Acerca de nosotros</h2>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. A tenetur
        blanditiis alias. Quaerat, quasi non? Labore, facere aliquid provident
        nemo dolores mollitia est minima. Sit temporibus maiores aliquid quae!
        Distinctio.
      </div>
      
      <div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPKZDv9920OmoTKOPooiMo24kfzM5wrgmNXg&s"
          alt="Perro y gato"
        />
      </div>
<Button>Nosotros</Button>
    </div>
  );
};

export default HomeAbout;