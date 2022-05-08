import React from 'react'
import { sponsors } from './Constants'
import './Sponsors.css'


const Sponsors = () => {
    return (
        <section id='sponsors' className='sponsors'>
            <h2 className='title'>
                BROUGHT TO YOU BY
            </h2>
            <div className='gridcontainer'>
                {sponsors.map((p, i) => {
                    return (
                        <div key={i} className="sponsor__card">
                            <div className="sponsor_img__container">
                                <img src={p.logo} alt='img' />
                            </div>
                            <div className="sponsor__content">
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    )
}

export default Sponsors