
import React from 'react';
import './content.css';
import { Card  } from '../../components'
import cardData from '../../data'
 
export default function Content() {
    const cardItem = cardData.map(card => {
        return(<Card
                key={card.id}
                {...card}
        />)
    
      })

  return (
    <div>
    {cardItem}
    </div>

  )
}