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

AOS.init();

function App() {
  const [openGithubMenu, setOpenGithubMenu] = useState(false);

  const [currentTheme, setTheme] = useState("greenTheme");

  //Current Color Scheme
  //header-color: #96B0A3
  //underline-and-button-color: #254D32
  //background-primary: bg-[#EFF2F1]
  //background-secondary: #ffffff
  //menu-text-white: #EFF2F1
  //menu-text-unselected: rgba(178, 204, 62, .5)
  //button-selected: #B2CC3E

  const [currentThemeObj, setThemeObj] = useState({
    "--header-color": "#96B0A3",
    "--underline-and-button-color": "#254D32",
    "--background-and-text-primary": "#EFF2F1",
    "--background-secondary": "#ffffff",
    "--menu-text-unselected": "rgba(178, 204, 62, .5)",
    "--button-selected": "rgb(178, 204, 62)",
    "--shadow": "#2c2f3f",
    "--timeline-header": "#16A34A8C",
    "--highlighted-text": "#65A30D",
    "--highlighted-text-hover": "#84CC16",
    "--year-text": "#059669",
    "--dark-header-color": "#A6C1B1", /* Lighter muted green */
    "--dark-underline-and-button-color": "#A6D4A1", /* Lighter muted green */
    "--dark-background-and-text-primary": "#4C5E54", /* Lighter background */
    "--dark-background-secondary": "#2D3F2E", /* Slightly lighter dark background */
    "--dark-menu-text-unselected": "rgba(178, 204, 62, 1)", /* Brighter unselected text */
    "--dark-button-selected": "rgb(178, 204, 62)", /* Vibrant yellow-green button */
    "--dark-shadow": "#3A4C42", /* Lighter shadow */
    "--dark-timeline-header": "#4DAA6A", /* Muted vivid green */
    "--dark-highlighted-text": "#A7D04C", /* Bright yellow-green */
    "--dark-highlighted-text-hover": "#A0D13A", /* Darker yellow-green hover */
    "--dark-year-text": "#82A57C", /* Lighter dark green */
  });

  // const blueThemeObj = {
  //   "--header-color": "#96A3B0", /* Muted light blue-gray */
  //   "--underline-and-button-color": "#254D7A", /* Deep navy blue */
  //   "--background-and-text-primary": "#EEF3F8", /* Very light bluish-white */
  //   "--background-secondary": "#ffffff", /* White */
  //   "--menu-text-unselected": "rgba(62, 137, 204, 0.5)", /* Soft sky blue */
  //   "--button-selected": "rgb(62, 137, 204)", /* Vibrant sky blue */
  //   "--shadow": "#2C3340", /* Cool dark slate blue */
  //   "--timeline-header": "#1D4ED88C", /* Muted vivid blue */
  //   "--highlighted-text": "#2563EB", /* Strong vivid blue */
  //   "--highlighted-text-hover": "#3B82F6", /* Bright blue hover */
  //   "--year-text": "#1E3A8A", /* Deep dark blue */
  //   "--dark-header-color": "#A7B9C4", /* Lighter muted blue-gray */
  //   "--dark-underline-and-button-color": "#A3C1D9", /* Lighter muted blue */
  //   "--dark-background-and-text-primary": "#4A5661", /* Lighter background */
  //   // "--dark-background-secondary": "#2E3A43", /* Slightly lighter dark background */
  //   "--dark-menu-text-unselected": "rgba(62, 137, 204, 1)", /* Brighter unselected text */
  //   "--dark-button-selected": "rgb(62, 137, 204)", /* Vibrant sky blue button */
  //   "--dark-shadow": "#3A4C57", /* Lighter dark slate blue */
  //   "--dark-timeline-header": "#2B7AB3", /* Muted vivid blue */
  //   "--dark-highlighted-text": "#5E99F8", /* Bright blue */
  //   "--dark-highlighted-text-hover": "#3E7BC5", /* Darker vivid blue hover */
  //   "--dark-year-text": "#5E99F8", /* Brighter blue year text */
  // }

  const blueThemeObj = {
    "--header-color": "#A2B9CA", // Warm soft blue-gray header
    "--underline-and-button-color": "#1E3969", // Deep navy blue
    "--background-and-text-primary": "#F1F6FC", // Light blueish-white background
    "--background-secondary": "#FFFFFF", // Clean white background
    "--menu-text-unselected": "rgba(62, 137, 204, 0.5)", // Soft sky blue
    "--button-selected": "#4F81B3", // Vibrant blue button
    "--shadow": "#2C3340", // Cool dark slate blue shadow
    "--timeline-header": "#1D4ED88C", // Muted vivid blue
    "--highlighted-text": "#1D4ED8", // Electric blue for highlights
    "--highlighted-text-hover": "#3B82F6", // Bright blue hover
    "--year-text": "#1E3A8A", // Deep dark blue year text
    "--dark-header-color": "#3A4C63", // Muted bluish-gray for dark mode header
    "--dark-underline-and-button-color": "#5D7C94", // Darker blue with lighter accents for buttons
    "--dark-background-and-text-primary": "#2A3A4B", // Slate-blue background for dark mode
    "--dark-background-secondary": "#2E3A43", // Slate-blue background for dark mode
    "--dark-menu-text-unselected": "rgba(62, 137, 204, 1)", // Brighter unselected text in dark mode
    "--dark-button-selected": "#5E99F8", // Vibrant blue button for dark mode
    "--dark-shadow": "#4C5B6A", // Lightened dark slate blue shadow
    "--dark-timeline-header": "#2B7AB3", // Muted vivid blue for timeline header
    "--dark-highlighted-text": "#75A8F7", // Glowing bright blue for highlighted text
    "--dark-highlighted-text-hover": "#3E7BC5", // Darker vivid blue hover for dark mode
    "--dark-year-text": "#75A8F7", // Brighter blue year text in dark mode
  };
  

  const tanThemeObj = {
    "--header-color": "#B0A696", /* Muted tan-gray */
    "--underline-and-button-color": "#4D3225", /* Rich dark brown */
    "--background-and-text-primary": "#F5F3EF", /* Very light beige */
    "--background-secondary": "#ffffff", /* White */
    "--menu-text-unselected": "rgba(204, 178, 137, 0.5)", /* Pale tan */
    "--button-selected": "rgb(204, 178, 137)", /* Soft tan */
    "--shadow": "#3F352C", /* Deep brown-gray */
    "--timeline-header": "#A1622E8C", /* Warm muted sienna */
    "--highlighted-text": "#A0522D", /* Rich sienna */
    "--highlighted-text-hover": "#C68C5A", /* Warm light tan */
    "--year-text": "#8B4513", /* Dark saddle brown */
    "--dark-header-color": "#C8B78F", /* Lighter muted tan-gray */
    "--dark-underline-and-button-color": "#D2B59C", /* Softer tan button */
    "--dark-background-and-text-primary": "#5E6A5B", /* Lighter background */
    "--dark-background-secondary": "#3E4A3E", /* Slightly lighter dark background */
    "--dark-menu-text-unselected": "rgba(204, 178, 137, 1)", /* Brighter unselected text */
    "--dark-button-selected": "rgb(204, 178, 137)", /* Soft tan button */
    "--dark-shadow": "#6A5F4A", /* Lighter brown-gray shadow */
    "--dark-timeline-header": "#D59E62", /* Warm muted sienna */
    "--dark-highlighted-text": "#E4C28E", /* Light warm tan */
    "--dark-highlighted-text-hover": "#B38053", /* Darker rich sienna hover */
    "--dark-year-text": "#B4854E", /* Lighter dark brown year text */
  }

  // const greenThemeObj = {
  //   "--header-color": "#96B0A3",
  //   "--underline-and-button-color": "#254D32",
  //   "--background-and-text-primary": "#EFF2F1",
  //   "--background-secondary": "#ffffff",
  //   "--menu-text-unselected": "rgba(178, 204, 62, .5)",
  //   "--button-selected": "rgb(178, 204, 62)",
  //   "--shadow": "#2c2f3f",
  //   "--timeline-header": "#16A34A8C",
  //   "--highlighted-text": "#65A30D",
  //   "--highlighted-text-hover": "#84CC16",
  //   "--year-text": "#059669",
  //   "--dark-header-color": "#A6C1B1", /* Lighter muted green */
  //   "--dark-underline-and-button-color": "#A6D4A1", /* Lighter muted green */
  //   "--dark-background-and-text-primary": "#4C5E54", /* Lighter background */
  //   // "--dark-background-secondary": "#2D3F2E", /* Slightly lighter dark background */
  //   "--dark-menu-text-unselected": "rgba(178, 204, 62, 1)", /* Brighter unselected text */
  //   "--dark-button-selected": "rgb(178, 204, 62)", /* Vibrant yellow-green button */
  //   "--dark-shadow": "#3A4C42", /* Lighter shadow */
  //   "--dark-timeline-header": "#4DAA6A", /* Muted vivid green */
  //   "--dark-highlighted-text": "#A7D04C", /* Bright yellow-green */
  //   "--dark-highlighted-text-hover": "#A0D13A", /* Darker yellow-green hover */
  //   "--dark-year-text": "#82A57C", /* Lighter dark green */
  // }

  const greenThemeObj = {
    "--header-color": "#8D9B8E", // Soft greenish gray
    "--underline-and-button-color": "#317A5C", // Deep green
    "--background-and-text-primary": "#F4F6F2", // Light off-white background
    "--background-secondary": "#FFFFFF", // Clean white secondary background
    "--menu-text-unselected": "rgba(178, 204, 62, .5)", // Muted yellow-green
    "--button-selected": "#99C82F", // Bright yellow-green button
    "--shadow": "#2C2F3F", // Dark shadow
    "--timeline-header": "#16A34A8C", // Lightened green timeline
    "--highlighted-text": "#A7D06C", // Vibrant lime green
    "--highlighted-text-hover": "#84CC16", // Bright green hover
    "--year-text": "#059669", // Teal-like year text
    "--dark-header-color": "#4B5D44", // Muted olive
    "--dark-underline-and-button-color": "#5A7B56", // Muted green for button/underline
    "--dark-background-and-text-primary": "#2A3528", // Charcoal greenish-dark background
    "--dark-background-secondary": "#2D3F2E", // Charcoal greenish-dark background
    "--dark-menu-text-unselected": "rgba(178, 204, 62, 1)", // Bright unselected text
    "--dark-button-selected": "#7FBF49", // Bright green button for dark mode
    "--dark-shadow": "#2C3E29", // Light greenish shadow
    "--dark-timeline-header": "#4DAA6A", // Muted vivid green for dark mode
    "--dark-highlighted-text": "#A1D09E", // Light glowing green
    "--dark-highlighted-text-hover": "#A0D13A", // Darker yellow-green hover
    "--dark-year-text": "#82A57C", // Lighter dark green year text
  };
  

  const changeTheme = (e) => {
    setTheme(e.target.value);
    if(e.target.value === 'blueTheme') {
      setThemeObj(blueThemeObj)
    } else if(e.target.value === 'tanTheme') {
      setThemeObj(tanThemeObj);
    } else if(e.target.value === 'greenTheme') {
      setThemeObj(greenThemeObj);
    }
  }
  
  const [isMenuOpen, setMenuOpen] = useState(false);

  const [isModalOpen, setModalOpen] = useState(true);

  const closeModal = () => {
    setModalOpen(false);
  };

  // Initialize dark mode based on user's system preference
  const [colorMode, setColorMode] = useState(() => {
    // First check localStorage for user preference
    const savedPreference = localStorage.getItem('colorMode');
    if (savedPreference !== null) {
      return savedPreference;
    }
    
    // If no saved preference, use system preference
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const initialMode = darkModeQuery.matches ? 'dark' : 'light';
    console.log('System preference on load:', initialMode);
    return initialMode;
  });

  // Listen for system theme changes
  useEffect(() => {
    const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    // Only update based on system changes if no user preference exists
    const handleChange = (e) => {
      if (!localStorage.getItem('colorMode')) {
        const newMode = e.matches ? 'dark' : 'light';
        console.log('System theme changed to:', newMode);
        setColorMode(newMode);
      }
    };

    darkModeQuery.addEventListener('change', handleChange);
    return () => darkModeQuery.removeEventListener('change', handleChange);
  }, []);

  // Apply theme changes whenever colorMode changes
  useEffect(() => {
    applyTheme();
    if (colorMode === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [colorMode, currentTheme, currentThemeObj]);

  // Handler for manual toggle
  const handleColorModeChange = (mode) => {
    console.log('Manual toggle to:', mode);
    setColorMode(mode);
    localStorage.setItem('colorMode', mode); // Save user preference
  };

  const applyTheme = () => {
    Object.keys(currentThemeObj).map(key => {
      const value = currentThemeObj[key];
      document.documentElement.style.setProperty(key, value);
    });
  }

  const openMenu = (isOpen, setIsOpen) => {
    setIsOpen(!isOpen);
  };  
  
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  // let previousGithubIcon = <span className="icon-[line-md--github-twotone]"></span>

  const menuRef = useRef(null);
  const linkedinRef = useRef(null);
  const gmailRef = useRef(null);
  const portfolioRef = useRef(null);
  const darkModeToggleRef = useRef(null);

  const handleClickOutside = (event) => {
    // Check if click is inside the dark mode toggle
    const isDarkModeToggleClick = event.target.closest('.dark_mode_toggle');
    
    if (menuRef.current && 
        !menuRef.current.contains(event.target) && 
        !isDarkModeToggleClick) {
      setOpenGithubMenu(false);
    }
    // Reset LinkedIn click count if clicked outside the LinkedIn icon
    if (linkedinRef.current && !linkedinRef.current.contains(event.target)) {
      setLinkedinClickCount(0);
    }
    // Reset Gmail click count if clicked outside the Gmail icon
    if (gmailRef.current && !gmailRef.current.contains(event.target)) {
      setGmailClickCount(0);
    }
    // Reset Previous Portfolio click count if clicked outside the icon
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

  // Set offset based on screen width
  const offset = windowWidth <= 768 ? -20 : -50; // Example: -30px for mobile, -50px for desktop

  const [gmailClickCount, setGmailClickCount] = useState(0);
  const [linkedinClickCount, setLinkedinClickCount] = useState(0);
  const [previousPortfolioClickCount, setPreviousPortfolioClickCount] = useState(0);

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
              {/* <!-- Mobile menu button--> */}
              <button type="button" onClick={toggleMenu} className={`absolute top-2.5 right-2.5 rounded-md p-1 text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white ${isMenuOpen ? 'bg-[var(--underline-and-button-color)] dark:bg-[var(--dark-underline-and-button-color)] text-white outline-none ring-2 ring-inset ring-white' : 'bg-[var(--menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]'}`} aria-controls="mobile-menu" aria-expanded="false">
                <span className="absolute -inset-0.5"></span>
                <span className="sr-only">Open main menu</span>
                {/* <!--
                  Icon when menu is closed.

                  Menu open: "hidden", Menu closed: "block"
                --> */}
                <svg className="block size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
                {/* <!--
                  Icon when menu is open.

                  Menu open: "block", Menu closed: "hidden"
                --> */}
                <svg className="hidden size-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true" data-slot="icon">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          <main id="main" className="grid lg:grid-cols-[30vw_70vw] grid-rows-[0.4fr_max-content_max-content_0.75fr_max-content] grid-cols-[0vw_100vw]">
            <header id="header-back" className={`py-8 px-4 min-[1026px]:w-[30vw] w-[290px] h-screen bg-[url('./imgFiles/81563B65-38C8-49D2-98A2-36CD0ADBB84D_1_105_c.jpeg')] bg-cover bg-center fixed grid-area-1/1/2/2 z-10 lg:block ${isMenuOpen ? 'block' : 'hidden'}`}></header>
            <Element id="landing" name="landing"><Landing/></Element>
            <button className="down-arrow hidden lg:block z-30 h-[5vh] white mb-[35%] focus:outline-none">
              <Link to='about' className="linkA" activeClass='activeNav' spy={true} smooth={true} duration={1200} offset={offset}>
                <span className='icon-[line-md--chevron-down] w-[60px] h-[100%] animate-bounce bg-white opacity-[.80]'/>
              </Link>
            </button>
            <div id="header-hover" className={`sticky top-0 bg-[rgb(9,18,14)] opacity-80 py-[48px] px-4 min-[1026px]:w-[30vw] w-[290px] h-screen content-evenly z-20 lg:grid ${isMenuOpen ? 'grid' : 'hidden'}`}>
            <div className="profile">
              <h1 className="header-title leading-[1.1] text-[var(--background-and-text-primary)] dark:text-[var(--dark-background-and-text-primary)]" data-aos={windowWidth > 1023 ? "fade-up" : undefined}>Samantha Jimenez</h1>
              <div className="social-links text-center">
                <div ref={menuRef} className="tooltip" data-tip="github">
                  <div 
                    className={`active:bg-neutral-200 transition-transform duration-200 cursor-pointer w-[104%] hover:z-[12] text-white inline-block text-[18px] leading-[1] py-[8px] mr-[4px] rounded-full text-center w-[36px] h-[36px] transition-all duration-300 ${openGithubMenu ? 'bg-[var(--menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]' : 'bg-[var(--shadow)] dark:bg-[var(--dark-shadow)]'}`} 
                    onClick={() => openMenu(openGithubMenu, setOpenGithubMenu)}
                  >
                  <span className={`icon-[ri--github-line] ${openGithubMenu ? 'scale-[1.35]' : ''} hover:scale-125 transition-transform duration-200 mb-[1px]`}></span>
                  </div>
                {openGithubMenu && (
                  <div className="relative">
                    {/* Tooltip Tail */}
                    <div className="absolute left-[19px] transform -translate-x-1/2 top-[3px] w-0 h-0 border-l-[5px] border-r-[5px] border-b-[5px] border-transparent border-b-[var(--shadow)] dark:border-b-[var(--dark-shadow)]"></div>
                    <ul className={`ml-[-100%] absolute bg-[var(--shadow)] p-2 text-xs w-max rounded-lg top-[8px] z-[12] text-white`}>
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
                        setLinkedinClickCount(0); // Reset the counter
                      }
                    }} 
                    target="_blank" rel="noopener noreferrer" className={`linkedin active:bg-neutral-200 text-lg inline-block text-white leading-1 p-2 mr-1 rounded-full text-center w-9 h-9 transition duration-300 ${linkedinClickCount === 1 ? 'bg-[var(--menu-text-unselected)]' : 'bg-[var(--shadow)]'}`}>
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
                        setGmailClickCount(0); // Reset the counter
                      }
                    }} 
                    className={`google active:bg-neutral-200 text-lg inline-block text-white leading-1 p-2 mr-1 rounded-full text-center w-9 h-9 transition duration-300 ${gmailClickCount === 1 ? 'bg-[var(--menu-text-unselected)] dark:bg-[var(--dark-menu-text-unselected)]' : 'bg-[var(--shadow)] dark:bg-[var(--dark-shadow)]'}`}>
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
                        setPreviousPortfolioClickCount(0); // Reset the counter
                      }
                    }} 
                    className={`portfolio active:bg-neutral-200 text-lg inline-block text-white leading-1 p-2 mr-1 rounded-full text-center w-9 h-9 transition duration-300 ${previousPortfolioClickCount === 1 ? 'bg-[var(--menu-text-unselected)]' : 'bg-[var(--shadow)]'}`}>
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
                 {/* <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                   <a className="menuLink" href="https://drive.google.com/file/d/1mLEMcUxuJGYWjr4ebNv7zvZY6Yo-RS_w/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                     <span className="icon-[tabler--file-text] mr-2"></span>
                     <span style={{"marginLeft": "-4px"}}>Resume</span>
                   </a>
                 </li> */}
                <li data-aos={windowWidth > 1023 ? "fade-up" : undefined}>
                  <a className="menuLink" href="https://www.canva.com/design/DAGdIEMAtNo/9Ogf8MbGWa3s1OrTmh8cqA/view?utm_content=DAGdIEMAtNo&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h856a94e905" target="_blank" rel="noopener noreferrer">
                    <span className="icon-[tabler--file-text] mr-2"></span>
                    <span style={{"marginLeft": "-4px"}}>Resume</span>
                  </a>
                </li>
              </ul>             
            </nav>
              <div className="wrapper">
                <span className='theme_title'>Themes:</span>
                <div className="toggle_radio">
                  <input 
                    type="radio" 
                    className="toggle_option" 
                    id="first_toggle" 
                    name="toggle_option" 
                    value="greenTheme" 
                    onChange={changeTheme}
                    checked={currentTheme === 'greenTheme'}
                  />
                  <input 
                    type="radio" 
                    className="toggle_option" 
                    id="second_toggle" 
                    name="toggle_option" 
                    value="blueTheme" 
                    onChange={changeTheme}
                    checked={currentTheme === 'blueTheme'}
                  />
                  <input 
                    type="radio" 
                    className="toggle_option" 
                    id="third_toggle" 
                    name="toggle_option" 
                    value="tanTheme" 
                    onChange={changeTheme}
                    checked={currentTheme === 'tanTheme'}
                  />
                  <label htmlFor="first_toggle"><p>Green</p></label>
                  <label htmlFor="second_toggle"><p>Blue</p></label>
                  <label htmlFor="third_toggle"><p>Brown</p></label>
                  <div className="toggle_option_slider"></div>
                </div>

                {/* Add dark mode toggle */}
                <div className="mt-4" ref={darkModeToggleRef}>
                  <span className='theme_title'>Mode:</span>
                  <div className="toggle_radio dark_mode_toggle">
                    <input 
                      type="radio" 
                      className="toggle_option" 
                      id="light_toggle" 
                      name="mode_toggle" 
                      value="light"
                      onChange={() => handleColorModeChange('light')}
                      checked={colorMode === 'light'}
                    />
                    <input 
                      type="radio" 
                      className="toggle_option" 
                      id="dark_toggle" 
                      name="mode_toggle" 
                      value="dark"
                      onChange={() => handleColorModeChange('dark')}
                      checked={colorMode === 'dark'}
                    />
                    <label htmlFor="light_toggle"><p>Light</p></label>
                    <label htmlFor="dark_toggle"><p>Dark</p></label>
                    <div className="toggle_option_slider"></div>
                  </div>
                </div>
              </div>
            </div>
            <section id="about" className="about section bg-[var(--background-secondary)] dark:bg-[var(--dark-background-secondary)]">
              <Element name='about'><About/></Element>
            </section>
            <section id="skills" className="skills section section-bg bg-[var(--background-and-text-primary)] dark:bg-[var(--dark-background-and-text-primary)]">
              <Element name='skills'><Skills/></Element>
            </section>
            {/* <section id="portfolio" className="portfolio section section-bg" style={{"height": "max-content"}}>
              <Element name='portfolio'><Portfolio/></Element>
            </section> */}
            <section id="timeline" className="portfolio section section-bg bg-[var(--background-and-text-primary)] dark:bg-[var(--dark-background-and-text-primary)]" style={{"height": "max-content"}}>
              <Element name='portfolio'><Timeline/></Element>
            </section>
            <section id="contact" className="contact content-around section bg-[var(--background-secondary)] dark:bg-[var(--dark-background-secondary)]">
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

      {/* Modal for Under Construction */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-sm w-full text-center mx-2">
            <span className="absolute top-2 right-2 cursor-pointer text-gray-500" onClick={closeModal}>&times;</span>
            <h2 className="text-xl font-semibold">Under Construction</h2>
            <p className="mt-2">This website is currently under construction. <strong>Please enjoy this draft in the meantime. Don't mind the bugs.</strong></p>
            <p>Check back later for the final version!</p>
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
