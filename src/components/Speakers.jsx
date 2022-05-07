import React from 'react'
import './Speakers.css'

const Speakers = () => {
    return (
        <section className='speakers' id='speakers'>
            <div className='speakers__container'>
                <h2 className='speakers__title'>Speakers</h2>
                <div className='speakers__list'>
                    <div className='speakers__item'>
                        <div className='speakers__item-img'>
                            {/* <img src={require('../../assets/images/speakers/speaker-1.jpg')} alt='speaker' /> */}
                        </div>
                        <div className='speakers__item-info'>
                            <h3 className='speakers__item-name'>John Doe</h3>
                            <p className='speakers__item-title'>Web Developer</p>
                            <p className='speakers__item-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</p>
                        </div>
                    </div>
                    <div className='speakers__item'>
                        <div className='speakers__item-img'>
                            {/* <img src={require('../../assets/images/speakers/speaker-2.jpg')} alt='speaker' /> */}
                        </div>
                        <div className='speakers__item-info'>
                            <h3 className='speakers__item-name'>John Doe</h3>
                            <p className='speakers__item-title'>Web Developer</p>
                            <p className='speakers__item-desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis lorem ut libero malesuada feugiat.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Speakers