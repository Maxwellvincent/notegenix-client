import React from 'react'
import Button from '../Button/Button';
import '../HeroSection/HeroSection.css'

function HeroSection() {
    return (
        <div className="hero-container">
            <video src='https://player.vimeo.com/external/371837723.sd.mp4?s=7a4920e3315f22617298c9f072d1f11f03843be2&profile_id=139&oauth2_token_id=57447761' autoPlay loop muted />

            
                <h1>Task yourself</h1>
                <p>What are you waiting for?</p>
            
            <div className="hero-btns">

                <Button className='btns' 
                    buttonStyle='btn--outline' 
                    buttonSize='btn--large'
                >
                    Get Started    
                </Button>
                
                <Button
                    className='btns' 
                    buttonStyle='btn--primary' 
                    buttonSize='btn--large'
                >
                More info    
                </Button>
            
            </div>
        </div>
    )
}

export default HeroSection
