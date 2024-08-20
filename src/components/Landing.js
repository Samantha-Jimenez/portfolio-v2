
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-end" style={{"padding": "0"}}>
                <div id="backgroundImg"></div>
                <div className="hero-container aos-init aos-animate" data-aos="fade-in">
                    <h1>Samantha Jimenez</h1>
                    <p style={{"display": "inline-flex"}}>I'm a <span style={{"borderBottom": "3px solid var(--highlight)"}} className="typed" >
                        <TypeAnimation
                            sequence={[
                                'Web Developer',
                                1800,
                                'Designer',
                                1800,
                                'Creator',
                                1800,
                                'Collaborator',
                                1800,
                            ]}
                            wrapper="span"
                            cursor={true}
                            repeat={Infinity}
                            style={{ display: 'inline-block', height: '40px' }}
                        />
                    </span></p>
                </div>
            </section>
        </div>
    )
}

export default Landing;
