import React, { useEffect, useState } from 'react'
import './ScrollUp.css'

import { FaAngleUp } from 'react-icons/fa'

const ScrollUp = () => {


    const [moved, setMoved] = useState(false)

    useEffect(() => {
        document.addEventListener("scroll", e => {
            let scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 500) {
                setMoved(true)
            } else {
                setMoved(false)
            }
        })
    }, [])

    const ScrollUp = () => {


        document.querySelector('html').scrollTo(0, 0)


    }

    return (

        <div className={`scroll-up-btn ${moved ? 'show' : ''}`} onClick={ScrollUp} >
            <FaAngleUp />
        </div>
    )
}

export default ScrollUp
