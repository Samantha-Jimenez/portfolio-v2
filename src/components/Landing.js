import React from 'react';
// import Typing from 'react-typing-animation'; // Changed import

const Landing = () => {
    return (
        <div>
            <section id="hero" className="d-flex flex-column justify-content-end h-screen ml-auto bg-[#EFF2F1] p-0">
                <div id="backgroundImg"></div>
                <div className="hero-container aos-init aos-animate" data-aos="fade-left">
                    <h1 className="">Samantha Jimenez</h1>
                    <p className="inter-main" style={{"display": "inline-flex"}}>I'm a <span style={{"borderBottom": "3px solid var(--attention)"}} className="typed inter-main" >
                        {/* <Typing>
                            <span>Full Stack Software Engineer</span>
                            <Typing.Backspace count={30} delay={1800} />
                            <span>Creator</span>
                            <Typing.Backspace count={7} delay={1800} />
                            <span>Web Developer</span>
                            <Typing.Backspace count={15} delay={1800} />
                            <span>Collaborator</span>
                            <Typing.Backspace count={12} delay={1800} />
                        </Typing> */}
                    </span></p>
                </div>
            </section>
        </div>
    )
}

export default Landing;