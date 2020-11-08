import React from 'react';
import '../../App.css'
import HeroSection from '../HeroSection/HeroSection'
import InfoSection from '../InfoSection/InfoSection';
import './Home.css';

function Home (){
    return (
        <>
            <div>
                <HeroSection/>
                <InfoSection/>
            </div>
            
        </>
    )
}

export default Home