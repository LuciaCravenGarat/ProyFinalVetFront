import React, { useState } from 'react'
import PetCard from '../components/PetCard';
import { set } from 'react-hook-form';


const Pets = ({pets}) => {
    const [Pets, setPets] = useState([]);
    pets().then(data=>setPets(data));
    
    
  return (
    <>
    <h1>Pets</h1>
<main className='d-flex justify-content-between align-items-center flex-wrap'>
        
        {Pets.map(pet=><PetCard key={`PetCard ${pet.id}`} pet={pet}/>)}
    </main>
    </>
    
  )
}

export default Pets