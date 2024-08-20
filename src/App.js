import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
import './assets/css/style.css';
import './assets/vendor/icofont/icofont.min.css';
import './assets/vendor/aos-master/dist/aos.css';
import './assets/vendor/bootstrap-5.3.3-dist/css/bootstrap.css';
import './assets/vendor/bootstrap-5.3.3-dist/css/bootstrap-reboot.css';
import './assets/vendor/bootstrap-5.3.3-dist/css/bootstrap.rtl.css';
import About from './components/About';
import Skills from './components/Skills';
import Portfolio from './components/Portfolio';
import Landing from './components/Landing';
import Contact from './components/Contact';
import avatar from './imgFiles/avatar.jpeg';
import emailjs from '@emailjs/browser';
import 'boxicons';

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

  useEffect(() => {
    applyTheme();
  }, [currentTheme, currentThemeObj])

  const applyTheme = () => {
    Object.keys(currentThemeObj).map(key => {
      const value = currentThemeObj[key];
      document.documentElement.style.setProperty(key, value);
    });
  }

  return (
    <div className="App">
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"></link>
      <link rel="stylesheet" type='text/css' href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      <link rel="stylesheet" href="myProjects/webProject/icofont/css/icofont.min.css"></link>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossOrigin="anonymous"></link>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossOrigin="anonymous"></script>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
      </style>  
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
          <main id="main">
            <header id="header-back"></header>
            <Element id="landing" name="landing"><Landing/></Element>
            <div id="header-hover" style={{"backgroundColor": "rgba(57, 66, 62, 0.8) !important", "position": "sticky !important"}}>
            <div className="profile">
              <img src={avatar} alt="" className="img-fluid rounded-circle" style={{"height": "100px"}}/>
              <h1 className="text-light"><a href="index.html">Samantha Jimenez</a></h1>
              <div className="social-links mt-3 text-center">
                <a href='https://github.com/SamanthaBJimenez' target="_blank" rel="noopener noreferrer" className="github"><i className="bx bxl-github"></i></a>
                <a href='https://github.com/SamanthaBJimenez' target="_blank" rel="noopener noreferrer" className="github"><i className="bx bxl-github"></i></a>
                <a href='mailto:SamanthaB.Jimenez@gmail.com' target="_blank" rel="noopener noreferrer" className="google"><i className="bx bxl-gmail"></i></a>
                <a href='https://www.linkedin.com/in/samanthabjimenez/' target="_blank" rel="noopener noreferrer" className="linkedin"><i className="bx bxl-linkedin"></i></a>
              </div>
            </div>
            <nav className="nav-menu">
              <ul className="nav-ul">
                <li><a className="menuLink" href=''><span><Link to='landing' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><i className="bx bx-home"></i>Home</Link></span></a></li>
                <li><a className="menuLink" href=''><span><Link to='about' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-30}><i className="bx bx-user"></i>About</Link></span></a></li>
                <li><a className="menuLink" href=''><span><Link to='skills' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-30}><i className='bx bx-list-check' style={{"paddingRight": "0px", "fontSize": "34px"}}></i>Skills</Link></span></a></li>
                <li><a className="menuLink" href=''><span><Link to='portfolio' className="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-30}><i className="bx bx-collection"></i>Portfolio</Link></span></a></li>
                <li><a className="menuLink" href=''><span><Link to='contact' className="linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-77}><i className="bx bx-envelope"></i>Contact</Link></span></a></li>
                <li><a className="menuLink" href="https://drive.google.com/file/d/1mLEMcUxuJGYWjr4ebNv7zvZY6Yo-RS_w/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i className="bx bx-file"></i> <span style={{"marginLeft": "-4px"}}>Resume</span></a></li>
              </ul>             
            </nav>
            <div className="wrapper">
            <h5 className='theme_title'>Themes:</h5>
              <div className="toggle_radio">
                {/* {currentTheme === 'blueTheme' ? <input type="radio" className="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme} checked/> : <input type="radio" className="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme}/>}
                {currentTheme === 'brownTheme' ? <input type="radio" className="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme} checked/> : <input type="radio" className="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme}/>}
                {currentTheme === 'greenTheme' ? <input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme} checked/> : <input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme}/>} */}
                <label htmlFor="first_toggle"><p>Blue</p></label>
                <label htmlFor="second_toggle"><p>Brown</p></label>
                <label htmlFor="third_toggle"><p>Green</p></label>
                <div className="toggle_option_slider"></div>
              </div>
            </div>
            </div>
            <section id="about" className="about">
              <Element name='about'><About/></Element>
            </section>
            <section id="skills" className="skills section-bg">
              <Element name='skills'><Skills/></Element>
            </section>
            <section id="portfolio" className="portfolio section-bg">
              <Element name='portfolio'><Portfolio/></Element>
            </section>
            <section id="contact" className="contact" style={{"paddingTop": "70px"}}>
              <Element name='contact'><Contact/></Element>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
