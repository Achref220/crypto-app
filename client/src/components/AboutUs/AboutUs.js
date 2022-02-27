import React from 'react'
import './AboutUs.css'


const AboutUs = () => {
    return (
        <div className='main-con'>
            <div className='para'>
                <h1>About <span>Us</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ex necessitatibus eligendi non. Quis ex aperiam laboriosam
                    repellendus impedit rem provident,
                    similique dolorem esse omnis facere atque at, quas odit qui!
                </p>
            </div>
            <div className="iconCards">
                <div className="iconCardsContent">
                    <div className="iconCardsItem"></div>
                    <div className="iconCardsItem"></div>
                    <div className="iconCardsItem"></div>
                    <div className="iconCardsItem"></div>
                    <div className="iconCardsItem"></div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs
