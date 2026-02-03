import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Landing = ({ isMenuOpen }) => {
    const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let resizeTimer = null;
        const handleResize = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => setWindowWidth(window.innerWidth), 150);
        };
    
        window.addEventListener('resize', handleResize);
    
        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', handleResize);
        };
      }, []);

    const offset = windowWidth <= 768 ? -20 : -50;

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
            { !isMenuOpen && (
              <button className="down-arrow lg:hidden block z-30 h-[5vh] mb-[5vh] focus:outline-none w-[100vw]" aria-label="Scroll down to About section">
                <Link to='about' className="linkA" activeClass='activeNav' spy={true} smooth={true} duration={1200} offset={offset}>
                  <span className='icon-[line-md--chevron-down] w-[60px] h-[100%] animate-bounce bg-[var(--p-text)] opacity-[.30]' aria-hidden="true"/>
                </Link>
              </button>
            )}
        </div>
    )
}

export default Landing;
