import React from 'react';
import project1 from './../imgFiles/ZooVio.png';
import project2 from './../imgFiles/Finstagram.png';
import project3 from './../imgFiles/Tastebuds.png';

const Projects = () => {
    return (
        <div className="container">
          <div className="section-title">
            <h2>Portfolio</h2>
            <p>Take a look at some of my work below and check back in for updates and new projects in the future.</p>
          </div>
          <div className="row portfolio-container aos-init aos-animate" data-aos="fade-up" data-aos-delay="100" >
            <div className="col-lg-4 col-md-6 portfolio-item filter-app" >
              <div className="portfolio-wrap">
                <img src={project1} className="img-fluid" alt=""/>
                <div className="portfolio-links">
                  <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" data-gall="portfolioGallery" className="venobox vbox-item" title="App 1"><i className="bx bxl-github"></i><p className='github-name'>github</p></a>
                  <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" title="More Details" className='liveA'><i className="bx bx-window-alt"></i><p className="live-site">live site</p></a>
                </div>
                <div>
                  <p className='project-header'>ZooVio</p>
                </div>
              </div>
            </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-web" >
            <div className="portfolio-wrap">
              <img src={project2} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" data-gall="portfolioGallery" className="venobox vbox-item" title="Web 3"><i className="bx bxl-github"></i><p className='github-name'>github</p></a>
                <a href="https://my-ig.netlify.app/" target="_blank" rel="noopener noreferrer" title="More Details" className='liveA'><i className="bx bx-window-alt"></i><p className='live-site'>live site</p></a>
              </div>
              <div>
                <p className='project-header'>Finstagram</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 portfolio-item filter-app" >
            <div className="portfolio-wrap">
              <img src={project3} className="img-fluid" alt=""/>
              <div className="portfolio-links">
                <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" data-gall="portfolioGallery" className="venobox vbox-item" title="App 2"><i className="bx bxl-github"></i><p className='github-name'>github</p></a>
                <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" title="More Details" className='liveA'><i className="bx bx-window-alt"></i><p className='live-site'>live site</p></a>
              </div>
              <div>
                <p className='project-header'>Tastebuds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Projects;