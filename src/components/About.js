import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="section-title" data-aos="fade-left" data-aos-duration="1500">
                <h2 className=''>About</h2>
                {/* <p>Brooklyn-born Afro-Latina. Builder. Creator. Problem Solver.</p> */}
                <p data-aos="fade-left" data-aos-duration="1000">Bridging Technology with Creativity. Turning Ideas into Impactful Applications and Seamless User Experiences.</p>
            </div>
            <div className="row">
                <div className="col-lg-auto pt-4 pt-lg-0 content aos-init aos-animate">
                    <h3 className='' data-aos="fade-left" data-aos-duration="1000">Welcome to my Portfolio</h3>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        I’m a Full Stack Software Engineer driven by a passion for building intuitive, impactful, and visually compelling applications. My coding journey began in 2018 when I decided to teach myself programming, sparking a lifelong love for creating meaningful solutions through technology.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        In 2019, I joined <a className='highlighted-text font-medium' href="https://www.pursuit.org" target="_blank" rel="noopener noreferrer">Pursuit, an intensive coding fellowship</a> in Queens, NY, where I transformed my curiosity into expertise. The program not only refined my technical skills but also deepened my understanding of collaboration, problem-solving, and the power of community-driven innovation.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        Following Pursuit, <span className='font-medium'>I spent over three years at Peloton,</span> where I made significant contributions to their membership platform, enhancing the user experience for millions of members worldwide. This experience strengthened my ability to build scalable applications, collaborate across teams, and deliver polished, high-quality user experiences at scale.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        In addition to my engineering work, I earned a <span className='font-medium'>Bachelor of Science in Business, Management, & Economics</span> from Empire State College. This blend of technical and business expertise allows me to approach product development holistically, connecting user needs, technical implementation, and long-term strategy.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        Today, I'm focused on designing and building products that combine technology, community, and storytelling. I'm currently developing <a href="#timeline" className="highlighted-text font-medium underline decoration-2 underline-offset-2 hover:opacity-90 transition-opacity cursor-pointer">Motevis</a>, a platform that helps people discover run clubs and fitness communities, making movement more accessible and social. I'm also building <a href="#timeline" className="highlighted-text font-medium underline decoration-2 underline-offset-2 hover:opacity-90 transition-opacity cursor-pointer">Our Rootline</a>, a private family platform designed to preserve memories, share photos, and visualize family history across generations. These projects reflect my passion for creating meaningful tools that connect people and bring ideas to life.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        <span className='font-medium'>Welcome to my portfolio!</span> Explore my projects, browse my skills and resume, or connect with me through the contact form. 
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        Let’s create something extraordinary together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;