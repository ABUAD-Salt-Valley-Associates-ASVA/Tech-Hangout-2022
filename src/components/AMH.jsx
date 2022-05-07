import React from 'react'
import './AMH.css'

const AMH = () => {
    return (
        <section className='amh' id='amh'>
            <div className='amh-cont'>
                <h2 className='title'>
                    KING OF CODE
                </h2>
                <div className='about-content'>
                    <div className='text'>
                        ASVA <span className='hang'>Monthly HACKATHON</span>
                    </div>
                    <p>
                        ASVA will be continuing its long standing tradition of crowning the king of code for the session. Showcase your passion for problem solving by writing incredibly dynamic and efficient program to stand a chance to win.
                    </p>
                    <center><a className='btn' href='https://hackathon.asva.tech/#blog'>Register</a></center>
                </div>
            </div>
        </section >
    )
}

export default AMH