import React from 'react';
import './AboutSection.css';

function AboutSection() {
    return (
        <div className="about-content">
            <h1>About Us</h1>
            <p>Notegenix isn't your average Task list manager, our mission is to provide you with the tools that you need in order to complete the task you set forth.</p>

            <p>Hey you guys! My name is Louis Maxwell, I created Notegenix, so that individuals who like me, find it difficult to sit down and take the time to organize their thoughts. To provide them with an easier manner in which to do so. With the use of this site, busy individuals can find an easier means to jot down their task, and knock them out in an efficient manner</p>

            <h2>Leave me feedback</h2>
            <div className="iframe-container">
                <iframe title="Suvery for Notegenix"src="https://docs.google.com/forms/d/e/1FAIpQLSerS-bOm8kjk9_HANBh7CztTLil5xxMrTzg0T-CAen3tYVasA/viewform?embedded=true" width="640" height="1429" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">
                </iframe>
            </div>
            
            
        </div>

        
       
    )
}

export default AboutSection
