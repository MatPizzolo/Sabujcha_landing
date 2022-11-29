import React from 'react';
import './newsletter.css';
import Title from '../constants/Title';

const Newsletter = () => {
    return (
        <div className="image-cont">
        <div className="container">
            <div className="newsletter-container">
                <Title title="Join to our Newsletter" line/>  
                <div className="form">
                    <input className="input" placeholder="Your Email Adress"/>
                    <button className="submit-black">subscribe</button>
                </div>
            </div>
        </div>  
        </div>
        
    )
}

export default Newsletter
