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
import emailjs from 'emailjs/browser';


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
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous"></link>
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
      <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
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
      <body class="vsc-initialized" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0" data-spy="scroll" data-target="#header" data-offset="50">
        <div class="show" id="navbarSupportedContent">
          <main id="main">
            <header id="header-back"></header>
            <Element id="landing" name="landing"><Landing/></Element>
            <div id="header-hover" style={{"background-color": "rgba(57, 66, 62, 0.8) !important", "position": "sticky !important"}}>
            <div class="profile">
              <img src={avatar} alt="" class="img-fluid rounded-circle" style={{"height": "100px"}}/>
              <h1 class="text-light"><a href="index.html">Samantha Jimenez</a></h1>
              <div class="social-links mt-3 text-center">
                <a href='https://github.com/SamanthaBJimenez' target="_blank" rel="noopener noreferrer" class="github"><i class="bx bxl-github"></i></a>
                <a href='mailto:SamanthaB.Jimenez@gmail.com' target="_blank" rel="noopener noreferrer" class="google"><i class="bx bxl-google"></i></a>
                <a href='https://www.linkedin.com/in/samanthabjimenez/' target="_blank" rel="noopener noreferrer" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                <a href='https://twitter.com/MannyJimenez_' target="_blank" rel="noopener noreferrer" class="twitter"><i class="bx bxl-twitter"></i></a>
              </div>
            </div>
            <nav class="nav-menu">
              <ul className="nav-ul">
                <li><a class="menuLink"><span><Link to='landing' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500}><i class="bx bx-home"></i>Home</Link></span></a></li>
                <li><a class="menuLink"><span><Link to='about' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-30}><i class="bx bx-user"></i>About</Link></span></a></li>
                <li><a class="menuLink"><span><Link to='skills' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-30}><i class="bx bx-slider"></i>Skills</Link></span></a></li>
                <li><a class="menuLink"><span><Link to='portfolio' class="linkA"  activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-30}><i class="bx bx-collection"></i>Portfolio</Link></span></a></li>
                <li><a class="menuLink" ><span><Link to='contact' class="linkA" activeClass='activeNav' spy={true} smooth={true} duration={500} offset={-77}><i class="bx bx-envelope"></i>Contact</Link></span></a></li>
                <li><a class="menuLink" href="https://drive.google.com/file/d/1dKcerB4hXPDHNRWJkuQWhaG3kHSb5TM9/view?usp=sharing" target="_blank" rel="noopener noreferrer"><i class="bx bx-file"></i> <span style={{"margin-left": "-4px"}}>Resume</span></a></li>
              </ul>             
            </nav>
            <div class="wrapper">
            <h8 className='theme_title'>Themes:</h8>
              <div class="toggle_radio">
                {/* {currentTheme === 'blueTheme' ? <input type="radio" class="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme} checked/> : <input type="radio" class="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme}/>}
                {currentTheme === 'brownTheme' ? <input type="radio" class="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme} checked/> : <input type="radio" class="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme}/>}
                {currentTheme === 'greenTheme' ? <input type="radio" class="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme} checked/> : <input type="radio" class="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme}/>} */}
                <label for="first_toggle"><p>Blue</p></label>
                <label for="second_toggle"><p>Brown</p></label>
                <label for="third_toggle"><p>Green</p></label>
                <div class="toggle_option_slider"></div>
              </div>
            </div>
            </div>
            <section id="about" class="about">
              <Element name='about'><About/></Element>
            </section>
            <section id="skills" class="skills section-bg">
              <Element name='skills'><Skills/></Element>
            </section>
            <section id="portfolio" class="portfolio section-bg">
              <Element name='portfolio'><Portfolio/></Element>
            </section>
            <section id="contact" class="contact" style={{"padding-top": "70px"}}>
              <Element name='contact'><Contact/></Element>
            </section>
          </main>
        </div>
      </body>
    </div>
  );
}

export default App;
