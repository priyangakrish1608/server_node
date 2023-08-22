import React from "react";
import './Aboutemepage.css';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsGithub } from 'react-icons/bs';

const Aboutme = () => {
    return (<div>
        <div class="aboutme">
            <div class="aboutpriyanga">
                
                <h2>Priyanga</h2>
                <h2>Krishnan</h2>
                <p className="line"></p>
                <p className="associate">Associate consultant</p>
                <div className="logos">
                    
                    <a href='https://www.linkedin.com/public-profile/settings?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_contact-info%3BBV0DLGSRQLKZE9%2B2d9fQsA%3D%3D'>
                        <BiLogoLinkedin size={25}  color="black"/>
                    </a>
                    <a href='https://github.com/priyangakrish1608'>
                        <BsGithub size={25}  color="black"/>
                    </a>
                </div>
            </div>
            <div class="datapriyanga" >
                <div className="hello">Hello</div>
                <p className="here">Here's who I am & what I do</p>
                <div className="data" style={{ textAlign: 'justify' }}> This is my portifolio where you can find all the data related to me regarding my Education ,Job Expirience and my React JS projects. Kindly check my projects and my skills in this portifolio in detailed.</div>
            </div>
        </div>
    </div>

    );
};
export default Aboutme;