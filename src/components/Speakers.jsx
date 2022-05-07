import React from 'react'
import './Speakers.css'
import Card from './Card'

const Speakers = () => {
    return (
        <section className='speakers' id='speakers'>
            <div className='speakers__container'>
                <h2 className='speakers__title'>Speakers</h2>
                <div className='speakers__list'>
                    <Card />
                </div>
            </div>
        </section>
    )
}

export default Speakers