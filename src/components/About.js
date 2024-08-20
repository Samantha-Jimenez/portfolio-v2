import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="section-title">
                <h2>About</h2>
                <p>Brooklyn-born afro-latina with a passion for building and creating beautiful and functional applications.</p>
            </div>
            <div className="row">
                {/* <div className="col-lg-4 aos-init aos-animate" data-aos="fade-right" style={{"height": "30vh", "overflow": "hidden", "marginLeft": "15px", "marginRight": "15px"}}>
                </div> */}
                <div className="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                    <h3>Full Stack Software Engineer.</h3>
                    <p className="fst-italic">
                        I aspired to have a career I was passionate about and never looked back.
                    </p>
                    {/* <p style={{"fontWeight": "300"}}>
                        I'm a former Secretary of an elementary school in South Williamsburg. I originally went to college for Accounting but decided to take some time to find a career path I was more passionate about. After extensive research I discovered that software engineering was a field that combined the analytical skills I’ve developed so far in my career, with my desire to build and create. Since then I discovered Pursuit, a software engineering fellowship, and have grown to appreciate all things full stack. 
                    </p> */}
                    <p style={{"fontWeight": "300"}}>
                        Welcome to my portfolio! 
                        <br></br> 
                        I’m a passionate Full Stack Software Engineer with a strong foundation built at Pursuit, a coding fellowship in Queens, New York. Over the past three years, I’ve been honing my skills at Peloton, where I’ve played a key role in developing and enhancing their membership website, contributing to a seamless user experience for countless members.
                        In addition to my hands-on experience, I’ve pursued academic growth by completing my degree in Business, Management, & Economics at Empire State College in New York City. This blend of practical engineering expertise and business acumen equips me to tackle complex challenges with a holistic perspective.
                        <br></br>
                        <br></br>
                        Feel free to explore my work and connect with me to discuss how we can collaborate on innovative projects!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;