import React from 'react';
import './card.css'
import Pin from '../../assets/pin.png';


export default function Card(props){
    console.log(props)
  return (
    <section className='card_wrapper'>
            <div className='card__image'>
            <img src={`src/assets/${props.coverImg}`} alt=""  className=''/> 

            </div>
        <div className='card__rightcontent'>
            <div className='card__location'>
                <img src={Pin} alt=""   />
                <p class="card__country">{props.country}</p>
                <p><a href="" className='card__map'>View on Google Maps</a></p>
            </div>
            <div className='card__details'>
                <h1>{props.title}</h1>
                <p className='card__date'><strong> {props.travelDate}</strong></p>
                <p>{props.description}</p>
            </div>
        </div>
       
    </section>
  )
}
