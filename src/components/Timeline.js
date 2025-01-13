import React, { useState } from 'react';
import project1 from './../imgFiles/ZooVio.png';
import project2 from './../imgFiles/Finstagram.png';
import project3 from './../imgFiles/Tastebuds.png';

// Component definition
const Timeline = () => {
    // State hooks
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openAccordions, setOpenAccordions] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    // Slide content arrays
    const mvmntSlides = [
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            Mvmnt Collectives is a web application that connects runners with local running clubs and events. Users can discover running clubs in their area, view club information, and stay updated on upcoming running events.
            <br/>
            <div>Live Site: <a href="https://mvmntcollectives.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">mvmntcollectives.com</a></div>
        </div>,
    ];

    const othelloSlides = [
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            <div>
                <p>GitHub: <a href="https://github.com/dmorocho/othello" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/dmorocho/othello</a></p>
            </div>
        </div>,
    ];

    const pelotonSlides = [
          <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            • Spearheaded the development of web features for the company's launch of their at-home row machine, utilizing the Recharts library to design and
            implement the user’s post-class details page featuring interactive graphs displaying detailed user output data during rowing exercises. <br/>
            • Programmed social features on the website, including an activity feed, user interactions (stack, bookmark, high-five), a notification screen, and
            integrated connectivity with user’s Strava account, enhancing user engagement and driving increased traffic through social functionality. <br/>
          </div>,
          <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            • Optimized company website by transitioning REST APIs to GraphQL, resulting in improved data fetching capabilities and enhanced performance. <br/>
            • Implemented a fitness quiz for new users to recommend initial classes based on their preferences, enhancing immediate engagement upon website
            onboarding. <br/>
            <br/>
          </div>,
          <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            • Served as on-call engineer for one week on a rotating schedule, responding to critical incidents such as site outages, troubleshooting urgent technical
            issues, and escalating problems to ensure timely resolution and minimal impact on users. <br/>
            • Facilitated bi-weekly retrospective meetings for Agile development teams of approximately 15-20 members to reflect on past sprints and identify
            areas for improvement. <br/>
          </div>,
        ];

    const zooVioSlides = [
        <img src={project1} alt="Project 1" className="w-full px-7" />,
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            • Integrated Firebase from Google to authenticate users and store pet’s information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
            <div>
                <p>Live Site: <a href="https://zoo-vio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">zoo-vio.netlify.app</a></p>
                <p>GitHub: <a href="https://github.com/dmorocho/zoo-vio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/dmorocho/zoo-vio</a></p>
            </div>
        </div>,
        ];
        
    const finstaSlides = [
        <img src={project2} alt="Project 2" className="w-full px-7" />,
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
            • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
            • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase.
            <div>
                <p>Live Site: <a href="https://zoo-vio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">zoo-vio.netlify.app</a></p>
                <p>GitHub: <a href="https://github.com/dmorocho/zoo-vio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/dmorocho/zoo-vio</a></p>
            </div>
        </div>,
    ];

    const tastebudsSlides = [
        <img src={project3} alt="Project 3" className="w-full px-7" />,
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4">
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
            <div>
                <p>Live Site: <a href="https://zoo-vio.netlify.app/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">zoo-vio.netlify.app</a></p>
                <p>GitHub: <a href="https://github.com/dmorocho/zoo-vio" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">github.com/dmorocho/zoo-vio</a></p>
            </div>
        </div>,
    ];

    // Navigation functions
    const nextPelotonSlide = () => setCurrentIndex((currentIndex + 1) % pelotonSlides.length);
    const prevPelotonSlide = () => setCurrentIndex((currentIndex - 1 + pelotonSlides.length) % pelotonSlides.length);
    const nextZooVioSlide = () => setCurrentIndex((currentIndex + 1) % zooVioSlides.length);
    const prevZooVioSlide = () => setCurrentIndex((currentIndex - 1 + zooVioSlides.length) % zooVioSlides.length);
    const nextFinstaSlide = () => setCurrentIndex((currentIndex + 1) % finstaSlides.length);
    const prevFinstaSlide = () => setCurrentIndex((currentIndex - 1 + finstaSlides.length) % finstaSlides.length);
    const nextTastebudsSlide = () => setCurrentIndex((currentIndex + 1) % tastebudsSlides.length);
    const prevTastebudsSlide = () => setCurrentIndex((currentIndex - 1 + tastebudsSlides.length) % tastebudsSlides.length);

    // Also add the toggleAccordion function
    const toggleAccordion = (id) => {
        setOpenAccordions(prev => ({
            ...prev,
            [id]: !prev[id]
        }));
    };

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-left" data-aos-duration="1500">
                <h2>Portfolio</h2>
                <p>Take a look at some of my work below and check back in for updates and new projects in the future.</p>
            </div>

            {/* Project Sections */}
            <div className="-my-6">
                {/* Mvmnt Collectives */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Mvmnt Collectives</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2024</time>
                        <div className="text-xl font-bold text-[var(--underline-and-button-color)]">Run Club App</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" onClick={() => toggleAccordion('accordion1')} aria-expanded={openAccordions['accordion1']} aria-controls="accordion-flush-body-1">
                                <span>Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion1'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion1'] ? '' : 'hidden'} border-b border-gray-200 dark:border-gray-700`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full max-w-4xl mx-auto h-max py-5 border-b border-gray-200">
                                <div className="flex overflow-hidden">
                                    <div className={`carousel-item w-full flex-shrink-0 ${mvmntSlides[currentIndex]}`}>
                                        {mvmntSlides[currentIndex]}
                                    </div>
                                </div>
                                </div>
                            </div>
                        </div>
                    </div>

                {/* Othello */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Othello</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2024</time>
                        <div className="text-xl font-bold text-[var(--underline-and-button-color)]">Pursuit Hackathon Award-Winning App for Most Innovative Use of AI</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" onClick={() => toggleAccordion('accordion2')} aria-expanded={openAccordions['accordion2']} aria-controls="accordion-flush-body-1">
                                <span>Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion2'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion2'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full max-w-4xl mx-auto min-h-max py-5 border-b border-gray-700">
                                <div className="flex overflow-hidden">
                                    <div className={`carousel-item w-full flex-shrink-0 ${othelloSlides[currentIndex]}`}>
                                        {othelloSlides[currentIndex]}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Peloton */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Peloton Interactive, Inc.</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2021 - '23</time>
                        <div className="text-xl font-bold text-slate-900">Peloton Interactive, Inc.</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" onClick={() => toggleAccordion('accordion3')} aria-expanded={openAccordions['accordion3']} aria-controls="accordion-flush-body-1">
                                <span>Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion3'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion3'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full max-w-4xl mx-auto min-h-max py-5 border-b border-gray-700">
                                <div className="flex overflow-hidden">
                                    <div className={`carousel-item w-full flex-shrink-0 ${pelotonSlides[currentIndex]}`}>
                                        {pelotonSlides[currentIndex]}
                                    </div>
                                </div>
                                {/* Navigation buttons */}
                                <button onClick={prevPelotonSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❮
                                </button>
                                <button onClick={nextPelotonSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ZooVio */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">ZooVio</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2019 - '20</time>
                        <div className="text-xl font-bold text-slate-900">Capstone Project at Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-slate-500">
                       A full stack web application which allow users to keep track of pet information and tasks, search for local veterinarians and schedule appointments, and
                       message or video call with vets via the app
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" onClick={() => toggleAccordion('accordion4')} aria-expanded={openAccordions['accordion4']} aria-controls="accordion-flush-body-1">
                                <span>Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion4'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion4'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full max-w-4xl mx-auto h-max py-5 border-b border-gray-700">
                                <div className="flex overflow-hidden h-full">
                                    <div className={`carousel-item w-full flex-shrink-0 ${zooVioSlides[currentIndex]}`}>
                                        {zooVioSlides[currentIndex]}
                                    </div>
                                </div>
                                {/* Navigation buttons */}
                                <button onClick={prevZooVioSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❮
                                </button>
                                <button onClick={nextZooVioSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Finstagram */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Finstagram</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="text-xl font-bold text-slate-900">Independent Project Built during Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-slate-500">
                        A social media web application which allows users to easily upload photos and share them with friends.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" onClick={() => toggleAccordion('accordion5')} aria-expanded={openAccordions['accordion5']} aria-controls="accordion-flush-body-1">
                                <span>Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion5'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion5'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full max-w-4xl mx-auto h-max py-5 border-b border-gray-700">
                                <div className="flex overflow-hidden">
                                    <div className={`carousel-item w-full flex-shrink-0 ${finstaSlides[currentIndex]}`}>
                                        {finstaSlides[currentIndex]}
                                    </div>
                                </div>
                                {/* Navigation buttons */}
                                <button onClick={prevFinstaSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❮
                                </button>
                                <button onClick={nextFinstaSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tastebuds */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Tastebuds</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="text-xl font-bold text-slate-900">Codecademy Sponsored Hackathon Award-Winning App for Most Creative from Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-slate-500">
                        A frontend web application which allows users to create or join a two-person reservation at a local restaurant in order to pair diners who do not want to
                        eat alone.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-slate-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3" onClick={() => toggleAccordion('accordion6')} aria-expanded={openAccordions['accordion6']} aria-controls="accordion-flush-body-1">
                                <span>Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion6'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion6'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full max-w-4xl mx-auto h-max py-5 border-b border-gray-700">
                                <div className="flex overflow-hidden">
                                    <div className={`carousel-item w-full flex-shrink-0 ${tastebudsSlides[currentIndex]}`}>
                                        {tastebudsSlides[currentIndex]}
                                    </div>
                                </div>
                                {/* Navigation buttons */}
                                <button onClick={prevTastebudsSlide} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❮
                                </button>
                                <button onClick={nextTastebudsSlide} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                ❯
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;