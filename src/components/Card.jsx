import React from 'react'
import { speakers } from './Constants'

import "./Card.css"

const Card = () => {
    return (
        <div className='gridcontainer'>
            {speakers.map((p, i) => {
                return (
                    <div key={i} className="speaker__card">
                        <div className="speaker_img__container">
                            <img src={p.image} />
                        </div>
                        <div className="speaker__content">
                            <div className='speaker_name'>
                                <div className='name'>{p.name}</div>
                            </div>
                            <div className="card-info">{p.topic}</div>
                            <div>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}

export default Card