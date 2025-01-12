import React, { useState } from 'react';
// import project1 from './../imgFiles/ZooVio.png';
// import project2 from './../imgFiles/Finstagram.png';
// import project3 from './../imgFiles/Tastebuds.png';

const Timeline = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <div className="container">
            <div className="section-title" data-aos="fade-left" data-aos-duration="1500">
                <h2>Portfolio</h2>
                <p>Take a look at some of my work below and check back in for updates and new projects in the future.</p>
            </div>
            <div className="-my-6">
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Mvmnt Collectives</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2024</time>
                        <div className="text-xl font-bold text-[var(--underline-and-button-color)]">Run Club App</div>
                    </div>
                    <div className="text-slate-500">Mvmnt Collectives is a web application that connects runners with local running clubs and events. Users can discover running clubs in their area, view club information, and stay updated on upcoming running events.</div>
                    <a onClick={() => toggleDropdown('mvmnt')} id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" className={`inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-inner focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ${openDropdown === 'mvmnt' ? 'shadow-inner bg-gray-200' : ''}`} type="button">
                        Learn more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        {openDropdown === 'mvmnt' && (
                            <div id="dropdownRightEnd" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute sm:left-[270px] left-[170px] max-[327px]:left-[164px]">
                                <ul className="flex text-sm text-gray-700 h-[36px]" aria-labelledby="dropdownRightEndButton">
                                    <li>
                                        <a href="https://mvmntcollectives.com/" target="_blank" rel="noopener noreferrer" className="block hover:rounded-lg sm:px-4 px-3 py-2 hover:bg-gray-100 w-max">Live Site</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </a>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Othello</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2024</time>
                        <div className="text-xl font-bold text-[var(--underline-and-button-color)]">Pursuit Hackathon Award-Winning App for Most Innovative Use of AI</div>
                    </div>
                    <a onClick={() => toggleDropdown('othello')} id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" className={`inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-inner focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ${openDropdown === 'othello' ? 'shadow-inner bg-gray-200' : ''}`} type="button">
                        Learn more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        {openDropdown === 'othello' && (
                            <div id="dropdownRightEnd" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute sm:left-[270px] left-[170px] max-[327px]:left-[164px]">
                                <ul className="flex text-sm text-gray-700 h-[36px]" aria-labelledby="dropdownRightEndButton">
                                    <li className="">
                                        <a href="https://github.com/dmorocho/othello" target="_blank" rel="noopener noreferrer" className="block hover:rounded-lg sm:px-4 px-3 py-2 hover:bg-gray-100 w-max">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </a>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">[Feature_Name]</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2021 - '23</time>
                        <div className="text-xl font-bold text-slate-900">Peloton Interactive, Inc.</div>
                    </div>
                    <div className="text-slate-500">
                        • Spearheaded the development of web features for the company's launch of their at-home row machine, utilizing the Recharts library to design and
                        implement the user’s post-class details page featuring interactive graphs displaying detailed user output data during rowing exercises. <br/>
                        • Programmed social features on the website, including an activity feed, user interactions (stack, bookmark, high-five), a notification screen, and
                        integrated connectivity with user’s Strava account, enhancing user engagement and driving increased traffic through social functionality. <br/>
                        • Optimized company website by transitioning REST APIs to GraphQL, resulting in improved data fetching capabilities and enhanced performance. <br/>
                        • Implemented a fitness quiz for new users to recommend initial classes based on their preferences, enhancing immediate engagement upon website
                        onboarding. <br/>
                        • Served as on-call engineer for one week on a rotating schedule, responding to critical incidents such as site outages, troubleshooting urgent technical
                        issues, and escalating problems to ensure timely resolution and minimal impact on users. <br/>
                        • Facilitated bi-weekly retrospective meetings for Agile development teams of approximately 15-20 members to reflect on past sprints and identify
                        areas for improvement. <br/>
                    </div>
                    {/* <a onClick={toggleDropdown} id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" className="inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg hover:bg-gray-200 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700" type="button">
                        Learn more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        {isDropdownOpen && (
                            <div id="dropdownRightEnd" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute sm:left-[270px] left-[170px] max-[327px]:left-[164px]">
                                <ul className="flex text-sm text-gray-700 h-[36px]" aria-labelledby="dropdownRightEndButton">
                                    <li className="">
                                        <a href="#" className="block hover:rounded-lg px-4 py-2 hover:bg-gray-100">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="#" className="block hover:rounded-lg px-4 py-2 hover:bg-gray-100">Live Site</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </a> */}
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">ZooVio</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-[var(--background-secondary)] rounded-full shadow-lg">2019 - '20</time>
                        <div className="text-xl font-bold text-slate-900">A full stack web application which allow users to keep track of pet information and tasks, search for local veterinarians and schedule appointments, and
                        message or video call with vets via the app.</div>
                    </div>
                    <div className="text-slate-500">
                        • Integrated Firebase from Google to authenticate users and store pet’s information. <br/>
                        • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
                        • Applied Bootstrap for CSS to create a responsive web application. <br/>
                        • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
                        • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.<br/>
                    </div>
                    <a onClick={() => toggleDropdown('zooVio')} id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" className={`inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-inner focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ${openDropdown === 'zooVio' ? 'shadow-inner bg-gray-200' : ''}`} type="button">
                        Learn more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        {openDropdown === 'zooVio' && (
                            <div id="dropdownRightEnd" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute sm:left-[270px] left-[170px] max-[327px]:left-[164px]">
                                <ul className="flex text-sm text-gray-700 h-[36px]" aria-labelledby="dropdownRightEndButton">
                                    <li className="">
                                        <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="block hover:rounded-lg py-2 hover:bg-gray-100 w-max pl-2 pr-1 min-[370px]:px-4 min-[345px]:pl-3 min-[345px]:pr-2">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="block hover:rounded-lg py-2 hover:bg-gray-100 w-max pl-1 pr-2 min-[370px]:px-4 min-[345px]:pl-2 min-[345px]:pr-3">Live Site</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </a>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Finstagram</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="text-xl font-bold text-slate-900">A social media web application which allows users to easily upload photos and share them with friends.</div>
                    </div>
                    <div className="text-slate-500">
                        • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
                        • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
                        • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
                        • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase. <br/>
                    </div>
                    <a onClick={() => toggleDropdown('finsta')} id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" className={`inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-inner focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ${openDropdown === 'finsta' ? 'shadow-inner bg-gray-200' : ''}`} type="button">
                        Learn more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        {openDropdown === 'finsta' && (
                            <div id="dropdownRightEnd" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute sm:left-[270px] left-[170px] max-[327px]:left-[164px]">
                                <ul className="flex text-sm text-gray-700 h-[36px]" aria-labelledby="dropdownRightEndButton">
                                    <li className="">
                                        <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer"className="block hover:rounded-lg sm:px-4 px-3 py-2 hover:bg-gray-100 w-max">GitHub</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </a>
                </div>
                <div className="relative pl-8 sm:pl-32 py-6 group">
                    <div className="font-caveat font-medium text-2xl text-green-600/55 mb-1 sm:mb-0 font-['Sora']">Tastebuds</div>
                    <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[var(--button-selected)] after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                        <div className="text-xl font-bold text-slate-900">Codecademy Sponsored Hackathon Award-Winning App for Most Creative <br/> A frontend web application which allows users to create or join a two-person reservation at a local restaurant in order to pair diners who do not want to
                        eat alone.</div>
                    </div>
                    <div className="text-slate-500">
                        • Collaborated with two engineers to create and build an application within 48 hours. <br/>
                        • Used PostgreSQL to store reservation data. <br/>
                        • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
                        • React, Node, Axios, Bootstrap, PostgreSQL. <br/>
                    </div>
                    <a onClick={() => toggleDropdown('tastebuds')} id="dropdownRightEndButton" data-dropdown-toggle="dropdownRightEnd" data-dropdown-placement="right-end" className={`inline-flex items-center mt-2 px-4 py-2 text-sm font-medium text-gray-900 bg-white rounded-lg shadow-lg hover:bg-gray-200 hover:shadow-inner focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 ${openDropdown === 'tastebuds' ? 'shadow-inner bg-gray-200' : ''}`} type="button">
                        Learn more 
                        <svg className="w-3 h-3 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                        </svg>
                        {openDropdown === 'tastebuds' && (
                            <div id="dropdownRightEnd" className="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow absolute sm:left-[270px] left-[170px] max-[327px]:left-[164px]">
                                <ul className="flex text-sm text-gray-700 h-[36px]" aria-labelledby="dropdownRightEndButton">
                                    <li>
                                        <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="block hover:rounded-lg py-2 hover:bg-gray-100 w-max pl-2 pr-1 min-[370px]:px-4 min-[345px]:pl-3 min-[345px]:pr-2">GitHub</a>
                                    </li>
                                    <li>
                                        <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="block hover:rounded-lg py-2 hover:bg-gray-100 w-max pl-1 pr-2 min-[370px]:px-4 min-[345px]:pl-2 min-[345px]:pr-3">Live Site</a>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Timeline;