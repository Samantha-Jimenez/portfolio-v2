import React from 'react';

const About = () => {
    return (
        <div className="container">
            <div className="section-title" data-aos="fade-left" data-aos-duration="1500">
                <h2 className="">About</h2>
                {/* <p>Brooklyn-born Afro-Latina. Builder. Creator. Problem Solver.</p> */}
                <p>Bridging Technology with Creativity. Turning Ideas into Impactful Applications and Seamless User Experiences.</p>
            </div>
            <div className="row">
                <div className="col-lg-auto pt-4 pt-lg-0 content aos-init aos-animate">
                    <h3 data-aos="fade-left" data-aos-duration="1000">Welcome to my Portfolio</h3>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        I’m a Full Stack Software Engineer driven by a passion for building intuitive, impactful, and visually compelling applications. My coding journey began in 2018 when I decided to teach myself programming, sparking a lifelong love for creating meaningful solutions through technology.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        In 2019, I joined <a className='font-medium text-lime-600 hover:text-lime-500' href="https://www.pursuit.org" target="_blank" rel="noopener noreferrer">Pursuit, an intensive coding fellowship</a> in Queens, NY, where I transformed my curiosity into expertise. The program not only refined my technical skills but also deepened my understanding of collaboration, problem-solving, and the power of community-driven innovation.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        Following Pursuit, <span className='font-medium'>I spent over three years at Peloton,</span> where I made significant contributions to their membership platform, enhancing the user experience for millions of members worldwide. This hands-on experience allowed me to develop a keen eye for detail, a focus on scalability, and a commitment to delivering seamless digital experiences.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        In addition to my engineering work, I earned a <span className='font-medium'>Bachelor of Science in Business, Management, & Economics</span> from Empire State College. This unique blend of technical and business expertise equips me to approach challenges with a well-rounded perspective, bridging the gap between strategy and execution.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        Now, I’m channeling my skills and experience into creating projects that inspire, innovate, and empower others. Whether it's crafting engaging interfaces, optimizing backend systems, or collaborating with diverse teams, I’m always eager to push boundaries and learn something new.
                    </p>
                    <br />
                    <p data-aos="fade-left" data-aos-duration="1000">
                        <span className='font-medium'>Welcome to my portfolio!</span> Explore my projects, browse my skills and resume, or connect with me through the contact form. 
                        <br/> <br/> Let’s create something extraordinary together!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;