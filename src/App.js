import './App.css';
import React, { useState, useEffect, useRef } from 'react';
import { Link, Element } from 'react-scroll';
import './css/style.css';
import About from './components/About';
import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
import Timeline from './components/Timeline';
import Landing from './components/Landing';
import Contact from './components/Contact';
import emailjs from '@emailjs/browser';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Toggle from 'react-toggle';
import "react-toggle/style.css";

AOS.init();

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return true;
    }
    return false;
  });

  const [currentTheme, setTheme] = useState("greenTheme");

  const [currentThemeObj, setThemeObj] = useState({
    "--light-header-color": "#96B0A3",
    "--light-underline-and-button-color": "#254D32",
    "--light-background-and-text-primary": "#EFF2F1",
    "--light-background-secondary": "#ffffff",
    "--light-menu-text-unselected": "rgba(178, 204, 62, .5)",
    "--light-button-selected": "rgb(178, 204, 62)",
    "--light-shadow": "#2c2f3f",
    "--light-timeline-header": "#16A34A8C",
    "--light-highlighted-text": "#65A30D",
    "--light-highlighted-text-hover": "#84CC16",
    "--light-year-text": "#059669",
    "--dark-header-color": "#A6C1B1", /* Lighter muted green */
    "--dark-underline-and-button-color": "#A6D4A1", /* Lighter muted green */
    // "--dark-background-and-text-primary": "#4C5E54", /* Lighter background */
    "--dark-background-and-text-primary": "#171717",
    // "--dark-background-secondary": "#2D3F2E", /* Slightly lighter dark background */
    "--dark-background-secondary": "#262626",
    "--dark-menu-text-unselected": "rgba(178, 204, 62, 1)", /* Brighter unselected text */
    "--dark-button-selected": "rgb(178, 204, 62)", /* Vibrant yellow-green button */
    "--dark-shadow": "#3A4C42", /* Lighter shadow */
    "--dark-timeline-header": "#4DAA6A", /* Muted vivid green */
    "--dark-highlighted-text": "#A7D04C", /* Bright yellow-green */
    "--dark-highlighted-text-hover": "#A0D13A", /* Darker yellow-green hover */
    "--dark-year-text": "#82A57C", /* Lighter dark green */
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuRef = useRef(null);
  const linkedinRef = useRef(null);
  const gmailRef = useRef(null);
  const portfolioRef = useRef(null);

  const handleClickOutside = (event) => {
    if (menuRef.current && 
        !menuRef.current.contains(event.target)) {
      setOpenGithubMenu(false);
    }
    if (linkedinRef.current && !linkedinRef.current.contains(event.target)) {
      setLinkedinClickCount(0);
    }
    if (gmailRef.current && !gmailRef.current.contains(event.target)) {
      setGmailClickCount(0);
    }
    if (portfolioRef.current && !portfolioRef.current.contains(event.target)) {
      setPreviousPortfolioClickCount(0);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const offset = windowWidth <= 768 ? -20 : -50;

  const [gmailClickCount, setGmailClickCount] = useState(0);
  const [linkedinClickCount, setLinkedinClickCount] = useState(0);
  const [previousPortfolioClickCount, setPreviousPortfolioClickCount] = useState(0);

  const [openGithubMenu, setOpenGithubMenu] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      Object.keys(currentThemeObj).forEach(key => {
        if (key.startsWith('--dark-')) {
          const baseKey = key.replace('--dark-', '--');
          document.documentElement.style.setProperty(baseKey, currentThemeObj[key]);
        }
      });
    } else {
      document.documentElement.classList.remove('dark');
      Object.keys(currentThemeObj).forEach(key => {
        if (key.startsWith('--light-')) {
          const baseKey = key.replace('--light-', '--');
          document.documentElement.style.setProperty(baseKey, currentThemeObj[key]);
        }
      });
    }
  }, [darkMode, currentThemeObj]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handleChange = (e) => {
      setDarkMode(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);

    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(prev => !prev);
  };

  return (
    <div className="App">
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <link rel="preconnect" href="https://fonts.googleapis.com"/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous"/>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&family=Oswald:wght@200..700&display=swap" rel="stylesheet"/>      <link rel="icon" href="favicon_io/android-chrome-192x192.png" sizes="192x192"/>
      <link rel="icon" href="favicon_io/android-chrome-512x512.png" sizes="512x512"/>
      <link rel="apple-touch-icon" href="favicon_io/apple-touch-icon.png" sizes="180x180"/>
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
              <button type="button" onClick={toggleMenu} className={`absolute top-2.5 right-2.5 rounded-md p-1 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${isMenuOpen ? 'bg-[var(--light-underline-and-button-color)] dark:bg-[var(--dark-underline-and-button-color)] text-white outline-none ring-2 ring-inset ring-white' : 'bg-[var(--light-menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]'}`} aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {isMenuOpen ? (
                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                  </svg>
                ) : (
                  <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                  </svg>
                )}
              </button>
            </div>
          <main id="main" className="grid lg:grid-cols-[30vw_70vw] grid-rows-[0.4fr_max-content_max-content_0.75fr_max-content] grid-cols-[0vw_100vw]">
            <header id="header-back" className={`py-8 px-4 min-[1026px]:w-[30vw] w-[290px] h-screen bg-[url('./imgFiles/81563B65-38C8-49D2-98A2-36CD0ADBB84D_1_105_c.jpeg')] bg-cover bg-center fixed grid-area-1/1/2/2 z-10 lg:block ${isMenuOpen ? 'block' : 'hidden'}`}></header>
            <Element id="landing" name="landing"><Landing isMenuOpen={isMenuOpen} /></Element>
            <button className="down-arrow hidden lg:block z-30 h-[5vh] white mb-[35%] focus:outline-none w-[30vw]">
              <Link to='about' className="linkA" activeClass='activeNav' spy={true} smooth={true} duration={1200} offset={offset}>
                <span className='icon-[line-md--chevron-down] w-[60px] h-[100%] animate-bounce bg-white opacity-[.80]'/>
              </Link>
            </button>
            <div id="header-hover" className={`sticky top-0 bg-[rgb(9,18,14)] opacity-80 py-[48px] px-4 min-[1026px]:w-[30vw] w-[290px] h-screen content-evenly z-20 lg:grid ${isMenuOpen ? 'grid' : 'hidden'}`}>
            <div className="profile">
              <h1 className="header-title leading-[1.1] text-[var(--light-background-and-text-primary)]" data-aos={windowWidth > 1023 ? "fade-up" : undefined}>Samantha Jimenez</h1>
              <div className="social-links text-center">
                <div ref={menuRef} className="tooltip" data-tip="github">
                  <div 
                    className={`active:bg-neutral-200 transition-transform duration-200 cursor-pointer w-[104%] hover:z-[12] text-white inline-block text-[18px] leading-[1] py-[8px] mr-[4px] rounded-full text-center w-[36px] h-[36px] transition-all duration-300 ${openGithubMenu ? 'bg-[var(--light-menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]' : 'bg-[var(--light-shadow)] dark:bg-[var(--dark-shadow)]'}`} 
                    onClick={() => openMenu(openGithubMenu, setOpenGithubMenu)}
                  >
                  <span className={`icon-[ri--github-line] ${openGithubMenu ? 'scale-[1.35]' : ''} hover:scale-125 transition-transform duration-200 mb-[1px]`}></span>
                  </div>
                {openGithubMenu && (
                  <div className="relative">
                    <div className="absolute left-[19px] transform -translate-x-1/2 top-[3px] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-transparent border-b-[var(--light-shadow)] dark:border-b-[var(--dark-shadow)]"></div>
                    <ul className={`github-menu ml-[-100%] absolute p-2 text-xs w-max rounded-lg top-[8px] z-[12] text-white`}>
                      <li className="hover:bg-gray-400/60 rounded p-1"><a href="https://github.com/samantha-jimenez" target="_blank" rel="noopener noreferrer">Current Account</a></li>
                      <li className="hover:bg-gray-400/60 rounded p-1"><a href="https://github.com/samanthabjimenez" target="_blank" rel="noopener noreferrer">Previous Account</a></li>
                    </ul>
                  </div>
                )}
                </div>
                <div className="tooltip" data-tip="linkedin">
                  <a ref={linkedinRef} onClick={() => {
                      setLinkedinClickCount(linkedinClickCount + 1);
                      if (linkedinClickCount + 1 === 2) {
                        window.open('https://www.linkedin.com/in/samanthabjimenez/', '_blank');
                        setLinkedinClickCount(0);
                      }
                    }} 
                    target="_blank" rel="noopener noreferrer" className={`linkedin active:bg-neutral-200 text-lg inline-block text-white leading-1 p-2 mr-1 rounded-full text-center w-9 h-9 transition duration-300 ${linkedinClickCount === 1 ? 'bg-[var(--light-menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]' : 'bg-[var(--light-shadow)] dark:bg-[var(--dark-shadow)]'}`}>
                    <div 
                      className={`hover:scale-125 hover:bg-transparent transition-transform duration-200 cursor-pointer w-[104%] hover:z-[12] ${linkedinClickCount === 1 ? 'scale-[1.35]' : ''}`} 
                    >
                      <span className="icon-[ri--linkedin-line] mb-[1px]"></span>
                    </div>
                  </a>
                </div>
                <div className="tooltip" data-tip="gmail"> 
                  <a ref={gmailRef} onClick={() => {
                      setGmailClickCount(gmailClickCount + 1);
                      if (gmailClickCount + 1 === 2) {
                        window.open('mailto:SamanthaB.Jimenez@gmail.com', '_blank');
                        setGmailClickCount(0);
                      }
                    }} 
                    className={`active:bg-neutral-200 text-lg inline-block text-white leading-1 p-2 mr-1 rounded-full text-center w-9 h-9 transition duration-300 ${gmailClickCount === 1 ? 'bg-[var(--menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]' : 'bg-[var(--light-shadow)] dark:bg-[var(--dark-shadow)]'}`}>
                    <div 
                      className={`hover:scale-125 hover:bg-transparent transition-transform duration-200 cursor-pointer w-[104%] hover:z-[12] ${gmailClickCount === 1 ? 'scale-[1.35]' : ''}`} 
                    >
                      <span className="icon-[material-symbols--mail-outline] mb-[1px]"></span>
                    </div>
                  </a>
                </div>
                <div className="tooltip" data-tip="previous portfolio">
                  <a ref={portfolioRef} onClick={() => {
                      setPreviousPortfolioClickCount(previousPortfolioClickCount + 1);
                      if (previousPortfolioClickCount + 1 === 2) {
                        window.open('https://samantha-jimenez.netlify.app/', '_blank');
                        setPreviousPortfolioClickCount(0);
                      }
                    }} 
                    className={`active:bg-neutral-200 text-lg inline-block text-white leading-1 p-2 mr-1 rounded-full text-center w-9 h-9 transition duration-300 ${previousPortfolioClickCount === 1 ? 'bg-[var(--light-menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]' : 'bg-[var(--light-shadow)] dark:bg-[var(--dark-shadow)]'}`}>
                    <div 
                      className={`hover:scale-125 hover:bg-transparent transition-transform duration-200 cursor-pointer w-[104%] hover:z-[12] ${previousPortfolioClickCount === 1 ? 'scale-[1.35]' : ''}`} 
                    >
                      <span className="icon-[material-symbols--folder-supervised-outline-rounded] mb-[1px]"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <nav className="nav-menu">
              <ul className="nav-ul">
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <Link to='landing' className="menuLink linkA" activeClass='activeNav' spy={true} smooth={true} duration={500}>
                    <span className="icon-[bx--home] mr-2"></span>Home
                  </Link>
                </li>
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <Link to='about' className="menuLink linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={offset}>
                    <span className="icon-[tabler--user-square-rounded] mr-2"></span>About
                  </Link>
                </li>
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <Link to='skills' className="menuLink linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={offset}>
                    <span className="icon-[tabler--list-check] mr-2"></span>Skills
                  </Link>
                </li>
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <Link to='portfolio' className="menuLink linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={offset}>
                    <span className="icon-[bx--collection] mr-2"></span>Portfolio
                  </Link>
                </li>
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <Link to='contact' className="menuLink linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={offset}>
                    <span className="icon-[bx--mail-send] mr-2"></span>Contact
                  </Link>
                </li>
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <a className="menuLink" href="https://www.canva.com/design/DAGdIEMAtNo/9Ogf8MbGWa3s1OrTmh8cqA/view?utm_content=DAGdIEMAtNo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h856a94e905" target="_blank" rel="noopener noreferrer">
                    <span className="icon-[tabler--file-text] mr-2"></span>
                    <span style={{"marginLeft": "-4px"}}>Resume</span>
                  </a>
                </li>
              </ul>             
            </nav>
              <div className="wrapper">
                <label className="flex items-center py-2 sticky top-0 z-[11] rounded-lg mx-4 backdrop-blur-sm">
                  {darkMode ?
                  <span className="text-sm pl-2 text-neutral-200 font-medium pr-2">
                    Light
                  </span>
                  :
                  <span className="text-sm pl-2 text-neutral-700 font-medium pr-2">
                    Light
                  </span>
                  }
                  <Toggle
                    icons={{
                      checked: <span className="icon-[ph--sun-bold] text-amber-300 group-hover:text-[#4D4D4D]"/>,
                      unchecked: <span className="icon-[ph--moon-stars-bold] text-sky-400 group-hover:text-white"/>
                    }}
                    checked={darkMode}
                    onChange={toggleDarkMode}
                    className='custom-toggle group'
                  />
                    {darkMode ? 
                  <span className="text-sm pl-2 text-neutral-700 font-medium">
                  Dark
                  </span>
                    : 
                    <span className="text-sm pl-2 text-neutral-200 font-medium">
                  Dark
                  </span>
                  }
                </label>
              </div>
            </div>
            <section id="about" className="about section bg-white dark:bg-neutral-800">
              <Element name='about'><About/></Element>
            </section>
            <section id="skills" className="skills section section-bg bg-gray-100 dark:bg-neutral-900">
              <Element name='skills'><Skills/></Element>
            </section>
            <section id="timeline" className="portfolio section section-bg bg-gray-100 dark:bg-neutral-900" style={{"height": "max-content"}}>
              <Element name='portfolio'><Timeline/></Element>
            </section>
            <section id="contact" className="contact content-around section">
              <Element name='contact'><Contact/></Element>
              <footer id='footer' data-aos="fade-up">
                <p className='credits pt-10'>
                Thanks for visiting my corner of the web! 
                <br></br>
                Keep exploring, keep creating, and remember — every line of code brings you closer to your next big idea. 🚀
                </p>
              </footer>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
