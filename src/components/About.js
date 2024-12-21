import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="section-title" data-aos="fade-left" data-aos-duration="1500">
                <h2 className="">About</h2>
                <p>Brooklyn-born Afro-Latina. Builder. Creator. Problem Solver.</p>
            </div>
            <div className="row">
                {/* <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right" style={{"height": "30vh", "overflow": "hidden", "marginLeft": "15px", "marginRight": "15px"}}>
                </div> */}
                <div className="col-lg-auto pt-4 pt-lg-0 content aos-init aos-animate">
                    <h3 className="" data-aos="fade-left" data-aos-duration="1000">Welcome to my Portfolio</h3>
                    <p className="fst-italic pt-4" data-aos="fade-left" data-aos-duration="1000">
                        I’m a Full Stack Software Engineer passionate about crafting beautiful, functional applications that make an impact. My coding journey began in 2018, and by 2019, I joined Pursuit, a renowned coding fellowship in Queens, NY, where I turned curiosity into code and ideas into reality.                    
                    </p>
                    <br />
                    {/* <p style={{"fontWeight": "300"}}>
                        I'm a former Secretary of an elementary school in South Williamsburg. I originally went to college for Accounting but decided to take some time to find a career path I was more passionate about. After extensive research I discovered that software engineering was a field that combined the analytical skills I’ve developed so far in my career, with my desire to build and create. Since then I discovered Pursuit, a software engineering fellowship, and have grown to appreciate all things full stack. 
                    </p> */}
                    {/* <p style={{"fontWeight": "300"}} data-aos="fade-left" data-aos-duration="1000">
                        Welcome to my portfolio! 
                    </p> */}
                    <p data-aos="fade-left" data-aos-duration="1000">
                        For over three years, I honed my skills at Peloton, playing a pivotal role in enhancing their membership platform and delivering seamless user experiences to a global audience. Alongside my engineering career, I earned a degree in Business, Management, & Economics from Empire State College, blending technical expertise with business strategy.
                        Now, I’m on a mission to keep building, learning, and collaborating on projects that push boundaries and spark innovation.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        Welcome to my portfolio—explore my work, and let’s connect to create something incredible together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;