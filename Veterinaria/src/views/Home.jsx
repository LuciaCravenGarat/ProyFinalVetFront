import React from 'react';
import ImgCard from '../components/ImgCard';
import HomePets from '../components/HomePets';
import HomeAbout from '../components/HomeAbout';
import HomeServices from '../components/HomeServices';
import HomeTeam from '../components/HomeTeam';






const Home = () => {
  return (
    <>
    <div>Home</div>
    <section>
      <div><ImgCard/></div>
      <div><HomePets/></div>
      <div><HomeAbout/></div>
      <div><HomeServices/></div>
      <div><HomeTeam/></div>
    </section>
    </>
    
  )
}

export default Home