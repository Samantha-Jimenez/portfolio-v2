
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Landing = () => {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-end h-screen ml-auto bg-[#EFF2F1] p-0">
                <div id="backgroundImg"></div>
                <div className="hero-container aos-init aos-animate" data-aos="fade-left">
                    <h1 className="">Samantha Jimenez</h1>
                    <p className="inter-main" style={{"display": "inline-flex"}}>I'm a <span style={{"borderBottom": "3px solid var(--attention)"}} className="typed inter-main" >
                        <TypeAnimation
                            sequence={[
                                'Full Stack Software Engineer',
                                1800,
                                'Creator',
                                1800,
                                'Web Developer',
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
