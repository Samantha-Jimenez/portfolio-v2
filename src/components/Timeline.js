import React, { useState, useEffect, useRef } from 'react';
import createSlides from './../data/projectData';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const Timeline = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [openAccordions, setOpenAccordions] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [expandedImage, setExpandedImage] = useState(null);
    const [isExpanded, setIsExpanded] = useState(false);
    const imageRef = useRef(null);

    // Update the handleImageClick function
    const handleImageClick = (e, imageSrc) => {
        e.stopPropagation();
        // Check if click is on image or magnify icon
        if (e.target.tagName === 'IMG' || e.target.closest('.magnify-icon')) {
            setExpandedImage(expandedImage === imageSrc ? null : imageSrc);
        }
    };

    // Get all slides with the handleImageClick function
    const {
        ourRootlineSlides,
        ourRootlineSlidesMobile,
        motevisSlides,
        motevisSlidesMobile,
        othelloSlides,
        pelotonSlides,
        zooVioSlides,
        zooVioSlidesTablet,
        zooVioSlidesMobile,
        finstaSlides,
        finstaSlidesMobile,
        finstaSlidesTablet,
        finstaSlidesExtraSmall,
        tastebudsSlides,
        tastebudsSlidesTablet,
        tastebudsSlidesMobile
    } = createSlides(handleImageClick);

    // Move these state initializations after getting the slides
    const [slides, setSlides] = useState(zooVioSlides);
    const [finstagramSlidesState, setFinstagramSlidesState] = useState(finstaSlides);
    const [tastebudsSlidesState, setTastebudsSlidesState] = useState(tastebudsSlides);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        let resizeTimer = null;

        const updateSlides = () => {
            const width = window.innerWidth;
            if (width < 420) {
                setFinstagramSlidesState(finstaSlidesExtraSmall);
                setSlides(zooVioSlidesMobile);
                setTastebudsSlidesState(tastebudsSlidesMobile);
            } else if (width < 460) {
                setSlides(zooVioSlidesMobile);
                setTastebudsSlidesState(tastebudsSlidesMobile);
                setFinstagramSlidesState(finstaSlidesMobile);
            } else if (width < 480) {
                setTastebudsSlidesState(tastebudsSlidesMobile);
                setFinstagramSlidesState(finstaSlidesMobile);
                setSlides(zooVioSlidesTablet);
            } else if (width < 550) {
                setFinstagramSlidesState(finstaSlidesMobile);
                setSlides(zooVioSlidesTablet);
                setTastebudsSlidesState(tastebudsSlidesTablet);
            } else if (width < 850) {
                setSlides(zooVioSlidesTablet);
                setTastebudsSlidesState(tastebudsSlidesTablet);
                setFinstagramSlidesState(finstaSlidesMobile);
            } else if (width < 870) {
                setSlides(zooVioSlidesTablet);
                setTastebudsSlidesState(tastebudsSlides);
                setFinstagramSlidesState(finstaSlidesMobile);
            } else if (width < 1024) {
                setSlides(zooVioSlides);
                setTastebudsSlidesState(tastebudsSlides);
                setFinstagramSlidesState(finstaSlidesMobile);
            } else if (width < 1170) {
                setFinstagramSlidesState(finstaSlidesMobile);
                setTastebudsSlidesState(tastebudsSlidesTablet);
                setSlides(zooVioSlidesTablet);
            } else if(width < 1214) {
                setTastebudsSlidesState(tastebudsSlidesTablet);
                setSlides(zooVioSlidesTablet);
                setFinstagramSlidesState(finstaSlidesTablet);
            } else if(width < 1266) {
                setSlides(zooVioSlidesTablet);
                setFinstagramSlidesState(finstaSlidesTablet);
            } else if (width < 1312) {
                setFinstagramSlidesState(finstaSlidesTablet);
            } else {
                setSlides(zooVioSlides);
                setTastebudsSlidesState(tastebudsSlides);
                setFinstagramSlidesState(finstaSlides);
            }
        };

        const debouncedUpdate = () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(updateSlides, 150);
        };

        updateSlides(); // initial
        window.addEventListener('resize', debouncedUpdate);

        return () => {
            clearTimeout(resizeTimer);
            window.removeEventListener('resize', debouncedUpdate);
        };
    }, []);

    // Add this effect for handling clicks outside expanded image
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (imageRef.current && !imageRef.current.contains(event.target)) {
                setExpandedImage(null);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Navigation function
    const navigateSlide = (direction, slides) => {
        if (direction === 'next') {
            setCurrentIndex((currentIndex + 1) % slides.length);
        } else if (direction === 'prev') {
            setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
        }
    };

    // Add the missing handleIndicatorClick function
    const handleIndicatorClick = (index) => {
        setCurrentIndex(index);
    };

    // Add the toggleAccordion function
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
                <h2 className=''>Portfolio</h2>
                <p data-aos="fade-left" data-aos-duration="1000">Take a look at some of my work below and check back for updates and new projects in the future.</p>
            </div>
            {/* Project Sections */}
            <div className="-my-6">
                {/* Our Rootline */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="timeline-header font-medium text-2xl mb-1 sm:mb-0 flex items-center gap-2" data-aos="fade-left" data-aos-duration="1500">
                        Our Rootline
                        <span className="in-dev-badge inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full bg-orange-300/20 text-orange-600 dark:text-orange-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                            In Development
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2025 - '26</time>
                        <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Family Tree & Photo Album App</div>
                    </div>
                    <div className="text-neutral-500" data-aos="fade-left" data-aos-duration="1500">
                        Web app for managing family tree and photo albums.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion1')} aria-expanded={openAccordions['accordion1']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion1'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ${openAccordions['accordion1'] ? 'h-max opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <Slider 
                                    dots={true} 
                                    infinite={true} 
                                    speed={500} 
                                    slidesToShow={1} 
                                    slidesToScroll={1}
                                >
                                    {window.innerWidth < 515 ? ourRootlineSlidesMobile.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    )) : ourRootlineSlides.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Motevis */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="timeline-header font-medium text-2xl mb-1 sm:mb-0 flex items-center gap-2" data-aos="fade-left" data-aos-duration="1500">
                        Motevis
                        <span className="in-dev-badge inline-flex items-center gap-1.5 px-2 py-0.5 text-xs font-medium rounded-full bg-orange-300/20 text-orange-600 dark:text-orange-400">
                            <span className="w-1.5 h-1.5 rounded-full bg-orange-600 animate-pulse" />
                            In Development
                        </span>
                    </div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2024 - '26</time>
                        <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Running Club App</div>
                    </div>
                    <div className="text-neutral-500" data-aos="fade-left" data-aos-duration="1500">
                        Web app connecting runners to local clubs, weekly runs, and race events.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion2')} aria-expanded={openAccordions['accordion2']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion2'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ${openAccordions['accordion2'] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <Slider 
                                    dots={true} 
                                    infinite={true} 
                                    speed={500} 
                                    slidesToShow={1} 
                                    slidesToScroll={1}
                                >
                                    {window.innerWidth < 495 ? motevisSlidesMobile.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    )) : motevisSlides.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Othello */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="timeline-header font-medium text-2xl mb-1 sm:mb-0" data-aos="fade-left" data-aos-duration="1500">Othello</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2024</time>
                        <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Pursuit Hackathon Award-Winning App for Most Innovative Use of AI</div>
                    </div>
                    <div className="text-neutral-500" data-aos="fade-left" data-aos-duration="1500">
                        AI-driven Othello game with dynamic opponents and blockers, built with AI-assisted coding tools.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion3')} aria-expanded={openAccordions['accordion3']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion3'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ease-out-in ${openAccordions['accordion3'] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
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
                                                className={`w-2 h-2 mx-1 rounded-full ${currentIndex === index ? 'bg-[rgb(178,204,62)] dark:bg-[rgb(178,204,62)]' : 'bg-gray-300 dark:bg-gray-600'}`}
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
                    <div className="timeline-header font-medium text-2xl mb-1 sm:mb-0" data-aos="fade-left" data-aos-duration="1500">Peloton Interactive, Inc.</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2021 - '24</time>
                        <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Peloton Interactive, Inc.</div>
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion4')} aria-expanded={openAccordions['accordion4']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion4'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ${openAccordions['accordion4'] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <Slider 
                                    dots={true} 
                                    infinite={true} 
                                    speed={500} 
                                    slidesToShow={1} 
                                    slidesToScroll={1}
                                >
                                    {pelotonSlides.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ZooVio */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="timeline-header font-medium text-2xl mb-1 sm:mb-0" data-aos="fade-left" data-aos-duration="1500">ZooVio</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2019 - '20</time>
                        <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Capstone Project at Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-neutral-500" data-aos="fade-left" data-aos-duration="1500">
                        Full-stack app for managing pet info, finding local vets, and scheduling video calls.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion5')} aria-expanded={openAccordions['accordion5']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion5'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ${openAccordions['accordion5'] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <Slider 
                                    dots={true} 
                                    infinite={true} 
                                    speed={500} 
                                    slidesToShow={1} 
                                    slidesToScroll={1}
                                >
                                    {slides.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Finstagram */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="timeline-header font-medium text-2xl mb-1 sm:mb-0" data-aos="fade-left" data-aos-duration="1500">Finstagram</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                       <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2019 - '20</time>
                       <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Independent Project at Pursuit Coding Fellowship</div>
                    </div>
                    <div className="text-neutral-500" data-aos="fade-left" data-aos-duration="1500">
                        Social media app for sharing photos effortlessly with friends.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion6')} aria-expanded={openAccordions['accordion6']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion6'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ${openAccordions['accordion6'] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <Slider 
                                    dots={true} 
                                    infinite={true} 
                                    speed={500} 
                                    slidesToShow={1} 
                                    slidesToScroll={1}
                                >
                                    {finstagramSlidesState.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Tastebuds */}
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="timeline-header font-caveat font-medium text-2xl mb-1 sm:mb-0" data-aos="fade-left" data-aos-duration="1500">Tastebuds</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[rgb(178,204,62)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="timeline-pill sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full shadow-lg" data-aos="fade-right" data-aos-duration="1500">2019 - '20</time>
                        <div className="timeline-subheader text-xl font-bold" data-aos="fade-left" data-aos-duration="1500">Codecademy Sponsored Pursuit Hackathon Award-Winning App for Most Creative</div>
                    </div>
                    <div className="text-neutral-500" data-aos="fade-left" data-aos-duration="1500">
                        Frontend app pairing solo diners for two-person restaurant reservations.
                    </div>
                    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-gray-900 text-white" data-inactive-classes="text-gray-400">
                        <h2 id="accordion-flush-heading-1">
                            <button type="button" className="subtext flex items-center justify-between w-full py-5 font-medium rtl:text-right border-b border-gray-300 gap-3 focus:outline-none" onClick={() => toggleAccordion('accordion7')} aria-expanded={openAccordions['accordion7']} aria-controls="accordion-flush-body-1">
                                <span data-aos="fade-left" data-aos-duration="1500">Learn more</span>
                                <svg data-accordion-icon className={`w-3 h-3 ${openAccordions['accordion7'] ? 'rotate-180' : ''} shrink-0`} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5 5 1 1 5"/>
                                </svg>
                            </button>
                        </h2>
                        <div id="accordion-flush-body-1" className={`accordion-content transition-all duration-[500ms] ease-in-out ${openAccordions['accordion7'] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`} aria-labelledby="accordion-flush-heading-1">
                            <div className="relative w-full h-max py-5 border-b border-gray-300">
                                <Slider 
                                    dots={true} 
                                    infinite={true} 
                                    speed={500} 
                                    slidesToShow={1} 
                                    slidesToScroll={1}
                                >
                                    {tastebudsSlidesState.map((slide, index) => (
                                        <div key={index} className="carousel-item relative">
                                            {React.cloneElement(slide, {
                                                onClick: (e) => {
                                                    const imgElement = e.target;
                                                    if (imgElement.tagName === 'IMG' || imgElement.closest('.magnify-icon')) {
                                                        handleImageClick(e, imgElement.tagName === 'IMG' ? imgElement.src : imgElement.closest('.group').querySelector('img').src);
                                                    }
                                                }
                                            })}
                                        </div>
                                    ))}
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {expandedImage && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75"
                    onClick={() => setExpandedImage(null)}
                >
                    <img
                        ref={imageRef}
                        src={expandedImage}
                        alt="Expanded view"
                        className="max-h-[90vh] max-w-[90vw] object-contain cursor-zoom-out"
                        onClick={() => setExpandedImage(null)}
                    />
                </div>
            )}
        </div>
    );
}

export default Timeline;
