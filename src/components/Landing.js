import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-end h-screen ml-auto p-0 section">
                <div id="backgroundImg" className="w-full h-screen"></div>
                <div className="hero-container" data-aos="fade-up" data-aos-duration="1500">
                    <h1 className="hero-title">Samantha Jimenez</h1>
                    <p className="inter-main" data-aos="fade-up" data-aos-duration="1000" style={{"display": "inline-flex"}}>I'm a <span style={{"borderBottom": "3px solid var(--button-selected)"}} className="typed inter-main" >
                        <TypeAnimation
                            sequence={[
                                'Full Stack Software Engineer',
                                1000,
                                'Creator',
                                1000,
                                'Web Developer',
                                1000,
                                'Collaborator',
                                1000,
                            ]}
                            repeat={Infinity}
                        />
                    </span></p>
                </div>
            </section>
        </div>
    )
}

export default Landing;