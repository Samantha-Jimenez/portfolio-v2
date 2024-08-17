import React from 'react';
// import aboutImg from './../ImgFiles/about.jpeg';

const About = () => {
    return (
        <div class="container">
            <div class="section-title">
                <h2>About</h2>
                <p>Brooklyn-born afro-latina with a passion for building and creating beautiful and functional applications.</p>
            </div>
            <div class="row">
                <div class="col-lg-4 aos-init aos-animate" data-aos="fade-right" style={{"height": "30vh", "overflow": "hidden", "margin-left": "15px", "margin-right": "15px"}}>
                    {/* <img src={aboutImg} class="about_img" alt=""></img> */}
                </div>
                <div class="col-lg-8 pt-4 pt-lg-0 content aos-init aos-animate" data-aos="fade-left">
                    <h3>Full Stack Software Engineer.</h3>
                    <p class="font-italic">
                        I aspired to have a career I was passionate about and never looked back.
                    </p>
                    <p style={{"font-weight": "300"}}>
                        I'm a former Secretary of an elementary school in South Williamsburg. I originally went to college for Accounting but decided to take some time to find a career path I was more passionate about. After extensive research I discovered that software engineering was a field that combined the analytical skills I’ve developed so far in my career, with my desire to build and create. Since then I discovered Pursuit, a software engineering fellowship, and have grown to appreciate all things full stack. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;