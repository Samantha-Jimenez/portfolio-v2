import './App.css';
import React, { useState, useEffect } from 'react';
import { Link, Element } from 'react-scroll';
// import './assets/css/style.css';
// import './assets/vendor/boxicons/css/boxicons.css'
// import './assets/vendor/boxicons/css/boxicons.min.css'
// import './assets/vendor/aos/aos.css'
// import './assets/vendor/bootstrap/css/bootstrap.css'
// import './assets/vendor/bootstrap/css/bootstrap-reboot.css'
// import './assets/vendor/icofont/icofont.min.css';
// import About from './components/About';
// import Skills from './components/Skills';
// import Portfolio from './components/Portfolio';
// import Landing from './components/Landing';
// import Contact from './components/Contact';
// import avatar from './ImgFiles/avatar.jpeg';

function App() {

  const [currentTheme, setTheme] = useState("blueTheme");
  const [currentThemeObj, setThemeObj] = useState({
    "--header": "#040b14",
    "--title-text": "#173b6c",
    "--highlight": "#149ddd",
    "--shadow": "#2c2f3f",
    "--unselected-dark": "#6f7180",
    "--unselected-light": "#a8a9b4",
    "--shadow-background": "#f5f8fd",
  });

  const collapse = () => {
    let header = document.getElementById("header");
    let navIcon = document.getElementById("nav-collapse-icon");
    if (header.style.display !== "block") {
      header.style.display = "block";
      navIcon.className = "icofont-close";
      navIcon.style["font-size"] = "37px";
    } else {
      header.style.display = "";
      navIcon.className = "icofont-navigation-menu";
      navIcon.style["font-size"] = "33px";
    }
  }

  const blueThemeObj = {
    "--header": "#040b14",
    "--title-text": "#173b6c",
    "--highlight": "#149ddd",
    "--lowlight": "rgba(20, 157, 221, 0.75)",
    "--shadow": "#2c2f3f",
    "--unselected-dark": "#6f7180",
    "--unselected-light": "#a8a9b4",
    "--shadow-background": "#f5f8fd",
  }

  const brownThemeObj = {
    "--header": "#1F160A",
    "--title-text": "#5C401E",
    // "--highlight": "#e3c567",
    // "--highlight": "#CFA526",
    "--highlight": "#D9AF30",
    "--lowlight" : "rgba(227, 197, 103, 0.75)",
    // "--shadow": "#c8963e",
    "--shadow": "#4D3719",
    "--unselected-dark": "#7A5E3E",
    "--unselected-light": "rgba(247, 237, 222, .5)",
    "--shadow-background": "rgb(251, 248, 245)",
  }

  const greenThemeObj = {
    "--header": "#01200F",
    "--title-text": "#023C1C",
    "--highlight": "#B2CC3E",
    "--lowlight": "rgba(178, 204, 62, 0.75)",
    "--shadow": "#45503B",
    "--unselected-dark": "rgba(141, 160, 126, .9)",
    "--unselected-light": "rgba(141, 160, 126, .8)",
    "--shadow-background": "#F7F7F2",
  }

  const changeTheme = (e) => {
    setTheme(e.target.value);
    // e.target.checked = true;
    if(e.target.value === 'blueTheme') {
      setThemeObj(blueThemeObj)
    } else if(e.target.value === 'brownTheme') {
      setThemeObj(brownThemeObj);
    } else if(e.target.value === 'greenTheme') {
      setThemeObj(greenThemeObj);
    }
  }

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
      <script src="https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/"></script>
      <script src='./assets/js/main'></script>
      <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
      <script src="https://code.jquery.com/jquery-3.5.1.js"></script>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/style.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/fontello.css"></link>
      <link rel="stylesheet" href="https://bootstrapmade.com/demo/assets/css/normalize.css"></link>
      <link rel='stylesheet' href='https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css'/>
      <style>
        @import url('https://fonts.googleapis.com/css?family=Maven+Pro&display=swap');
      </style>  
      <body class="vsc-initialized" data-aos-easing="ease-in-out-back" data-aos-duration="1000" data-aos-delay="0" data-spy="scroll" data-target="#header" data-offset="50">
        {/* <button
          class="mobile-nav-toggle d-xl-none"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={collapse}
        >
          <span class="navbar-toggler-icon"><i id="nav-collapse-icon" class="icofont-navigation-menu"></i></span>
        </button> */}
        <div class="show collapse mobile-nav-active" id="navbarSupportedContent">
          <header id="header">
            <div class="d-flex-i flex-column">
              <div class="profile">
                {/* <img src={avatar} alt="" class="img-fluid rounded-circle"/> */}
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
                 {currentTheme === 'blueTheme' ? <input type="radio" class="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme} checked/> : <input type="radio" class="toggle_option" id="first_toggle" name="toggle_option" value="blueTheme" onClick={changeTheme}/>}
                 {currentTheme === 'brownTheme' ? <input type="radio" class="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme} checked/> : <input type="radio" class="toggle_option" id="second_toggle" name="toggle_option" value="brownTheme" onClick={changeTheme}/>}
                 {currentTheme === 'greenTheme' ? <input type="radio" class="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme} checked/> : <input type="radio" class="toggle_option" id="third_toggle" name="toggle_option" value="greenTheme" onClick={changeTheme}/>}
                  <label for="first_toggle"><p>Blue</p></label>
                  <label for="second_toggle"><p>Brown</p></label>
                  <label for="third_toggle"><p>Green</p></label>
                  <div class="toggle_option_slider"></div>
                </div>
              </div>
            </div>
          </header>
        </div>
        {/* <Element name="landing"><Landing/></Element>
        <main id="main">
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
        </main> */}
      </body>
    </div>
  );
}

export default App;
