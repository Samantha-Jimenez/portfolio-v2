import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './css/style.css';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';
import Contact from './components/Contact';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

function App() {

  const [currentTheme, setTheme] = useState("greenTheme");

  const [currentThemeObj, setThemeObj] = useState({
    "--shadow": "#2c2f3f",
    // "--header": "#01200F",
    "--title-text": "#96B0A3",
    "--highlight": "#254D32",
    // "--highlight": "#B2CC3E", this is the bright neon green
    "--lowlight": "#582630",
    // lowlight is hover
    // "--shadow": "#45503B",
    // what is shadow?
    "--unselected-dark": "rgba(178, 204, 62, .5)",
    // "--unselected-dark": "rgba(141, 160, 126, .9)",
    "--unselected-light": "rgba(141, 160, 126, .8)",
    "--shadow-background": "#EFF2F1",
  });

  const greenThemeObj = {
    // "--header": "#01200F",
    "--title-text": "#96B0A3",
    "--highlight": "#254D32",
    // "--highlight": "#B2CC3E", this is the bright neon green
    "--lowlight": "#582630",
    // lowlight is hover
    // "--shadow": "#45503B",
    // what is shadow?
    "--unselected-dark": "rgba(178, 204, 62, .5)",
    // "--unselected-dark": "rgba(141, 160, 126, .9)",
    "--unselected-light": "rgba(141, 160, 126, .8)",
    "--shadow-background": "#EFF2F1",
  }

  // const changeTheme = (e) => {
  //   setTheme(e.target.value);
  //   // e.target.checked = true;
  //   if(e.target.value === 'blueTheme') {
  //     setThemeObj(blueThemeObj)
  //   } else if(e.target.value === 'brownTheme') {
  //     setThemeObj(brownThemeObj);
  //   } else if(e.target.value === 'greenTheme') {
  //     setThemeObj(greenThemeObj);
  //   }
  // }
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  useEffect(() => {
    applyTheme();
  }, [currentTheme, currentThemeObj]);

  const applyTheme = () => {
    Object.keys(currentThemeObj).map(key => {
      const value = currentThemeObj[key];
      document.documentElement.style.setProperty(key, value);
    });
  }

  
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // let previousGithubIcon = <span className="icon-[line-md--github-twotone]"></span>

  
  return (
    <div className="App">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
      <link href="https://fonts.googleapis.com/css2?family=Bungee+Hairline&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Sora:wght@100..800&family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
      </style>  
      <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
      <script>
        AOS.init();
      </script>
      <script type="text/javascript"
        src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js">
      </script>
      <script type="text/javascript">
        (function(){
            emailjs.init({
              publicKey: "lYPDqWbwbsFTQDuJz",
            })
        })();
      </script>
      <div className="vsc-initialized" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0" data-spy="scroll" data-target="#header" data-offset="50">
        <div className="show" id="navbarSupportedContent">
            <div className="flex lg:hidden sticky top-0 z-10 place-self-end">
              {/* <!-- Mobile menu button--> */}
              <button type="button" onClick={toggleMenu} className={`absolute top-2.5 right-2.5 rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${isMenuOpen ? 'bg-gray-700 text-white outline-none ring-2 ring-inset ring-white' : ''}`} aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg class="block size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          <main id="main" className="grid lg:grid-cols-[30vw_70vw] lg:grid-rows-[0.6fr_0.75fr_0.6fr_0.75fr_0.5fr] grid-cols-[0vw_100vw]">
            <header id="header-back" className={`py-8 px-4 lg:w-[30vw] w-[307px] h-screen bg-[url('./imgFiles/avatar.jpeg')] bg-cover bg-center fixed grid-area-1/1/2/2 z-10 lg:block ${isMenuOpen ? 'block' : 'hidden'}`}></header>
            <Element id="landing" name="landing"><Landing/></Element>
            <button className="down-arrow hidden lg:block z-30 h-[5vh] whit mb-[35%]">
              <Link to='about' className="linkA" activeClass='activeNav' spy={true} smooth={true} duration={1200} offset={-90}>
                <span className='icon-[line-md--chevron-down] w-[20%] h-[100%] animate-bounce bg-white opacity-[.80]'/>
              </Link>
            </button>
            <div id="header-hover" className={`sticky top-0 bg-[rgb(9,18,14)] opacity-80 py-[48px] px-4 lg:w-[30vw] w-[307px] h-screen rounded-[5px] content-evenly z-20 lg:grid ${isMenuOpen ? 'grid' : 'hidden'}`}>
            <div className="profile">
              <h1 className="header-title" data-aos="fade-up">Samantha Jimenez</h1>
              <div className="social-links mt-3 text-center">
                <div className="tooltip tooltip-bottom" data-tip="current github">
                  <a href='https://github.com/Samantha-Jimenez' target="_blank" rel="noopener noreferrer" className="github">
                    <span className={`icon-[line-md--github]`}></span>
                  </a>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="previous github">
                  <a href='https://github.com/SamanthaBJimenez' target="_blank" rel="noopener noreferrer" className="github">
                    <span className="icon-[line-md--github-twotone]"></span>
                  </a>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="gmail"> 
                  <a href='mailto:SamanthaB.Jimenez@gmail.com' target="_blank" rel="noopener noreferrer" className="google">
                    <span className="icon-[line-md--email]"></span>
                  </a>
                </div>
                <div className="tooltip tooltip-bottom" data-tip="linkedin">
                  <a href='https://www.linkedin.com/in/samanthabjimenez/' target="_blank" rel="noopener noreferrer" className="linkedin">
                    <span className="icon-[line-md--linkedin]"></span>
                  </a>
                </div>
              </div>
            </div>
            <nav className="nav-menu">
              <ul className="nav-ul">
                <li data-aos="fade-up"><a className="menuLink" href=''><span><Link to='landing' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><span className="icon-[bx--home] mr-2"></span>Home</Link></span></a></li>
                <li data-aos="fade-up"><a className="menuLink" href=''><span><Link to='about' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-90}><span className="icon-[tabler--user-square-rounded] mr-2"></span>About</Link></span></a></li>
                <li data-aos="fade-up"><a className="menuLink" href=''><span><Link to='skills' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-90}><span className="icon-[tabler--list-check] mr-2"></span>Skills</Link></span></a></li>
                <li data-aos="fade-up"><a className="menuLink" href=''><span><Link to='portfolio' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-90}><span className="icon-[bx--collection] mr-2"></span>Portfolio</Link></span></a></li>
                <li data-aos="fade-up"><a className="menuLink" href=''><span><Link to='contact' className="linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-90}><span className="icon-[bx--mail-send] mr-2"></span>Contact</Link></span></a></li>
                <li data-aos="fade-up"><a className="menuLink" href="https://drive.google.com/file/d/1mLEMcUxuJGYWjr4ebNv7zvZY6Yo-RS_w/view?usp=sharing" target="_blank" rel="noopener noreferrer"><span className="icon-[tabler--file-text] mr-2"></span> <span style={{"marginLeft": "-4px"}}>Resume</span></a></li>
              </ul>             
            </nav>
            {/* <div className="wrapper"> */}
            {/* <h5 className='theme_title'>Themes:</h5> */}
              {/* <div className="toggle_radio"> */}
                {/* {currentTheme === 'blueTheme' ? <input type="radio" className="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme} checked/> : <input type="radio" className="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme}/>}
                {currentTheme === 'brownTheme' ? <input type="radio" className="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme} checked/> : <input type="radio" className="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme}/>}
                {currentTheme === 'greenTheme' ? <input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme} checked/> : <input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme}/>} */}
                {/* <label htmlFor="first_toggle"><p>Blue</p></label>
                <label htmlFor="second_toggle"><p>Brown</p></label>
                <label htmlFor="third_toggle"><p>Green</p></label>
                <div className="toggle_option_slider"></div> */}
              {/* </div> */}
            {/* </div> */}
            </div>
            <section id="about" className="about">
              <Element name='about'><About/></Element>
            </section>
            <section id="skills" className="skills section-bg">
              <Element name='skills'><Skills/></Element>
            </section>
            <section id="portfolio" className="portfolio section-bg" style={{"height": "max-content"}}>
              <Element name='portfolio'><Portfolio/></Element>
            </section>
            <section id="contact" className="contact pt-20">
              <Element name='contact'><Contact/></Element>
              <footer id='footer' data-aos="fade-up">
                <p className='credits pt-5'>
                Thanks for visiting my corner of the web! 
                <br></br>
                Keep exploring, keep creating, and remember — every line of code brings you closer to your next big idea. 🚀
                </p>
              </footer>
            </section>
          </main>
        </div>
      </div>

      {/* Modal for Under Construction */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-sm w-full text-center">
            <span className="absolute top-2 right-2 cursor-pointer text-gray-500" onClick={closeModal}>&times;</span>
            <h2 className="text-xl font-semibold">Under Construction</h2>
            <p className="mt-2">This website is currently under construction. <strong>Please enjoy the current version in the meantime.</strong></p>
            <p>Check back later for updates!</p>
            <button 
              className="mt-4 bg-[#254D32] text-white font-bold py-2 px-4 rounded hover:bg-[#2A6A3D]"
              onClick={closeModal}
            >
              Continue
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
