import React, { useMemo } from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { getHeroesById } from '../helpers/getHeroesById'


export const HeroPage = () => {
  const {id} =useParams()
  const navigate =useNavigate()
  const goback =() =>{
    navigate(-1)

  }
  const hero =useMemo(() => getHeroesById(id), [id])

 const  {alter_ego, characters,first_appearance, publisher, superhero }=hero
 const  image=`/src/assets/${id}.jpg`

  return (
    <div class='container mt-5'>
    <div class='row justify-content-center'>
      <div class='col-md-4'>
        <h1 class='active'>{superhero}</h1>
        <ul class='list-group'>
          <li class='list-group-item list-group-item-primary'>Alter Ego: {alter_ego}</li>
          <li class='list-group-item list-group-item-success'>Characters: {characters}</li>
          <li class='list-group-item list-group-item-primary'>First Appearance: {first_appearance}</li>
          <li class='list-group-item list-group-item-success'>Publisher: {publisher}</li>
          <li class='list-group-item list-group-item-primary'>Super Hero: {superhero}</li>                  
        </ul>   
        <button  className="btn btn-primary mt-2" onClick={goback}> Go back</button>     
      </div>
      <div class='col-md-3 mt-md-4'>
        <img src={image} alt={id} class='img-fluid' />
      </div>
    </div>
  </div>
  

  )
}
