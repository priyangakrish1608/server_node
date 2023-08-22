
import React, { useState } from "react";
import './Welcomepage.css';
import Aboutme from './Aboutmepage';
import Resume from './Resume/Resume';
import Projects from './Resume/Project';
import Contactme from './Resume/Contact';

const Portifolio = () => {
    const [selectedContent, setSelectedContent] = useState('about');

    const handleButtonClick = (content) => {
        setSelectedContent(content);
    };

    let contentToDisplay;
    if (selectedContent === 'about') {
        contentToDisplay = <Aboutme />;
    } else if (selectedContent === 'resume') {
        contentToDisplay = <Resume />;
    } else if (selectedContent === 'projects') {
        contentToDisplay = <Projects />;
    } else if (selectedContent === 'contact') {
        contentToDisplay = <Contactme />;
    }

    return (
        <div className="container">
            <div className="meninblack">
                <div className="menuitems">
                    <div className="name">
                        <div className="bluebox"></div>
                        <div className="myname"><b>Priyanga Krishnan</b>/Associate Consultant</div>
                    </div>
                    <div className="items">
                        <button className={`items-menu ${selectedContent === 'about' ? 'active' : ''}`} onClick={() => handleButtonClick('about')}>ABOUT ME</button>
                        <button className={`items-menu ${selectedContent === 'resume' ? 'active' : ''}`} onClick={() => handleButtonClick('resume')}>RESUME</button>
                        <button className={`items-menu ${selectedContent === 'projects' ? 'active' : ''}`} onClick={() => handleButtonClick('projects')}>PROJECTS</button>
                        <button className={`items-menu ${selectedContent === 'contact' ? 'active' : ''}`} onClick={() => handleButtonClick('contact')}>CONTACT</button>
                    </div>
                </div>
                {contentToDisplay}
            </div>
            <footer className="footer">
                <div style={{ paddingTop: '20px' }}>
                    <div>Contact:</div>
                    <div>7639276595</div>
                </div>
                <div style={{ paddingTop: '20px' }}>
                    <div >E-mail:</div>
                    <div>priyangakrish16081@gmail.com</div>
                </div>
                {/* <div style={{ paddingTop: '20px' }}>Help</div>
                <div style={{ paddingTop: '20px' }}>About</div> */}
            </footer>
        </div>
    );
}

export default Portifolio;