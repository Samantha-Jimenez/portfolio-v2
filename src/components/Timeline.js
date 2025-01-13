import React, { useState } from 'react';
import { mvmntSlides, othelloSlides, pelotonSlides, zooVioSlides, finstaSlides, tastebudsSlides } from './../data/projectData';

// Component definition
const Timeline = () => {
    // State hooks
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openAccordions, setOpenAccordions] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);

    // Navigation function
    const navigateSlide = (direction, slides) => {
        if (direction === 'next') {
            setCurrentIndex((currentIndex + 1) % slides.length);
        } else if (direction === 'prev') {
            setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
        }
    };

    // Also add the toggleAccordion function
    const toggleAccordion = (id) => {
        setOpenAccordions(prev => {
            // Close all accordions except the one clicked
            const newAccordions = {};
            newAccordions[id] = !prev[id]; // Toggle the clicked accordion
            if (!prev[id]) { // If the accordion is being opened
                setCurrentIndex(0); // Reset currentIndex to 0
            }
            return newAccordions; // Return only the clicked accordion's state
        });
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
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']" data-aos="fade-left" data-aos-duration="1500">Mvmnt Collectives</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2024</time>
                        <div className="text-xl font-bold text-[var(--underline-and-button-color)]" data-aos="fade-left" data-aos-duration="1500">Run Club App</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-300 dark:text-gray-600 gap-3" onClick={() => toggleAccordion('accordion1')} aria-expanded={openAccordions['accordion1']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion1'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion1'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <div className="carousel w-full">
                                    {mvmntSlides.map((slide, index) => (
                                        <div key={index} className={`carousel-item w-full flex-shrink-0 ${index === currentIndex ? 'block' : 'hidden'}`}>
                                            {slide}
                                        </div>
                                    ))}
                                </div>
                                {/* Indicators for the carousel */}
                                {mvmntSlides.length > 1 && (
                                    <div className="flex justify-center mt-2">
                                        {mvmntSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[var(--button-selected)]' : 'bg-gray-300'}`}
                                                onClick={() => handleIndicatorClick(index)}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {/* Navigation buttons */}
                                {mvmntSlides.length > 1 && (
                                    <>
                                        <button onClick={() => navigateSlide('prev', mvmntSlides)} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❮
                                        </button>
                                        <button onClick={() => navigateSlide('next', mvmntSlides)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❯
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Othello */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']" data-aos="fade-left" data-aos-duration="1500">Othello</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2024</time>
                        <div className="text-xl font-bold text-[var(--underline-and-button-color)]" data-aos="fade-left" data-aos-duration="1500">Pursuit Hackathon Award-Winning App for Most Innovative Use of AI</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-300 dark:text-gray-600 gap-3" onClick={() => toggleAccordion('accordion2')} aria-expanded={openAccordions['accordion2']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion2'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion2'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <div className="carousel w-full">
                                    {othelloSlides.map((slide, index) => (
                                        <div key={index} className={`carousel-item w-full flex-shrink-0 ${index === currentIndex ? 'block' : 'hidden'}`}>
                                            {slide}
                                        </div>
                                    ))}
                                </div>
                                {/* Indicators for the carousel */}
                                {othelloSlides.length > 1 && (
                                    <div className="flex justify-center mt-2">
                                        {othelloSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[var(--button-selected)]' : 'bg-gray-300'}`}
                                                onClick={() => handleIndicatorClick(index)}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {/* Navigation buttons */}
                                {othelloSlides.length > 1 && (
                                    <>
                                        <button onClick={() => navigateSlide('prev', othelloSlides)} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❮
                                        </button>
                                        <button onClick={() => navigateSlide('next', othelloSlides)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❯
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Peloton */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']" data-aos="fade-left" data-aos-duration="1500">Peloton Interactive, Inc.</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2021 - '23</time>
                        <div className="text-xl font-bold text-slate-900" data-aos="fade-left" data-aos-duration="1500">Peloton Interactive, Inc.</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-300 dark:text-gray-600 gap-3" onClick={() => toggleAccordion('accordion3')} aria-expanded={openAccordions['accordion3']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion3'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion3'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <div className="carousel w-full">
                                    {pelotonSlides.map((slide, index) => (
                                        <div key={index} className={`carousel-item w-full flex-shrink-0 ${index === currentIndex ? 'block' : 'hidden'}`}>
                                            {slide}
                                        </div>
                                    ))}
                                </div>
                                {/* Indicators for the carousel */}
                                {pelotonSlides.length > 1 && (
                                    <div className="flex justify-center mt-2">
                                        {pelotonSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[var(--button-selected)]' : 'bg-gray-300'}`}
                                                onClick={() => handleIndicatorClick(index)}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {/* Navigation buttons */}
                                {pelotonSlides.length > 1 && (
                                    <>
                                        <button onClick={() => navigateSlide('prev', pelotonSlides)} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❮
                                        </button>
                                        <button onClick={() => navigateSlide('next', pelotonSlides)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❯
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* ZooVio */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']" data-aos="fade-left" data-aos-duration="1500">ZooVio</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2019 - '20</time>
                        <div className="text-xl font-bold text-slate-900" data-aos="fade-left" data-aos-duration="1500">Capstone Project at Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-slate-500" data-aos="fade-left" data-aos-duration="1500">
                       A full stack web application which allow users to keep track of pet information and tasks, search for local veterinarians and schedule appointments, and
                       message or video call with vets via the app
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-300 dark:text-gray-600 gap-3" onClick={() => toggleAccordion('accordion4')} aria-expanded={openAccordions['accordion4']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion4'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion4'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <div className="carousel w-full">
                                    {zooVioSlides.map((slide, index) => (
                                        <div key={index} className={`carousel-item w-full flex-shrink-0 ${index === currentIndex ? 'block' : 'hidden'}`}>
                                            {slide}
                                        </div>
                                    ))}
                                </div>
                                {/* Indicators for the carousel */}
                                {zooVioSlides.length > 1 && (
                                    <div className="flex justify-center mt-2">
                                        {zooVioSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[var(--button-selected)]' : 'bg-gray-300'}`}
                                                onClick={() => handleIndicatorClick(index)}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {/* Navigation buttons */}
                                {zooVioSlides.length > 1 && (
                                    <>
                                        <button onClick={() => navigateSlide('prev', zooVioSlides)} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❮
                                        </button>
                                        <button onClick={() => navigateSlide('next', zooVioSlides)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❯
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Finstagram */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']" data-aos="fade-left" data-aos-duration="1500">Finstagram</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="text-xl font-bold text-slate-900" data-aos="fade-left" data-aos-duration="1500">Independent Project Built during Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-slate-500" data-aos="fade-left" data-aos-duration="1500">
                        A social media web application which allows users to easily upload photos and share them with friends.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-300 dark:text-gray-600 gap-3" onClick={() => toggleAccordion('accordion5')} aria-expanded={openAccordions['accordion5']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion5'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion5'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <div className="carousel w-full">
                                    {finstaSlides.map((slide, index) => (
                                        <div key={index} className={`carousel-item w-full flex-shrink-0 ${index === currentIndex ? 'block' : 'hidden'}`}>
                                            {slide}
                                        </div>
                                    ))}
                                </div>
                                {/* Indicators for the carousel */}
                                {finstaSlides.length > 1 && (
                                    <div className="flex justify-center mt-2">
                                        {finstaSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[var(--button-selected)]' : 'bg-gray-300'}`}
                                                onClick={() => handleIndicatorClick(index)}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {/* Navigation buttons */}
                                {finstaSlides.length > 1 && (
                                    <>
                                        <button onClick={() => navigateSlide('prev', finstaSlides)} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❮
                                        </button>
                                        <button onClick={() => navigateSlide('next', finstaSlides)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❯
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tastebuds */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']" data-aos="fade-left" data-aos-duration="1500">Tastebuds</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="text-xl font-bold text-slate-900" data-aos="fade-left" data-aos-duration="1500">Codecademy Sponsored Hackathon Award-Winning App for Most Creative from Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-slate-500" data-aos="fade-left" data-aos-duration="1500">
                        A frontend web application which allows users to create or join a two-person reservation at a local restaurant in order to pair diners who do not want to
                        eat alone.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-slate-500 border-b border-gray-300 dark:text-gray-600 gap-3" onClick={() => toggleAccordion('accordion6')} aria-expanded={openAccordions['accordion6']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion6'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`${openAccordions['accordion6'] ? '' : 'hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <div className="carousel w-full">
                                    {tastebudsSlides.map((slide, index) => (
                                        <div key={index} className={`carousel-item w-full flex-shrink-0 ${index === currentIndex ? 'block' : 'hidden'}`}>
                                            {slide}
                                        </div>
                                    ))}
                                </div>
                                {/* Indicators for the carousel */}
                                {tastebudsSlides.length > 1 && (
                                    <div className="flex justify-center mt-2">
                                        {tastebudsSlides.map((_, index) => (
                                            <button
                                                key={index}
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[var(--button-selected)]' : 'bg-gray-300'}`}
                                                onClick={() => handleIndicatorClick(index)}
                                                aria-label={`Slide ${index + 1}`}
                                            />
                                        ))}
                                    </div>
                                )}
                                {/* Navigation buttons */}
                                {tastebudsSlides.length > 1 && (
                                    <>
                                        <button onClick={() => navigateSlide('prev', tastebudsSlides)} className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❮
                                        </button>
                                        <button onClick={() => navigateSlide('next', tastebudsSlides)} className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 rounded-full">
                                            ❯
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;