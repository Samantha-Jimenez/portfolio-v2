import project1 from './../imgFiles/ZooVio.png';
import project2 from './../imgFiles/Finstagram.png';
import project3 from './../imgFiles/Tastebuds.png';

const mvmntSlides = [
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            Mvmnt Collectives is a web application that connects runners with local running clubs and events. Users can discover running clubs in their area, view club information, and stay updated on upcoming running events.
        </p>
        <div className="gap-2 grid-flow-col inline-grid w-full">
            <a href="https://mvmntcollectives.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full">Live Site</a>
        </div>
    </div>,
];

const othelloSlides = [
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <div className="gap-2 grid-flow-col inline-grid w-full">
            <a href="https://github.com/dmorocho/othello" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full">GitHub</a>
        </div>
    </div>,
];

const pelotonSlides = [
      <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            • Spearheaded the development of web features for the company's launch of their at-home row machine, utilizing the Recharts library to design and
            implement the user’s post-class details page featuring interactive graphs displaying detailed user output data during rowing exercises. <br/> <br/>
            • Programmed social features on the website, including an activity feed, user interactions (stack, bookmark, high-five), a notification screen, and
            integrated connectivity with user’s Strava account, enhancing user engagement and driving increased traffic through social functionality. <br/>
        </p>
      </div>,
      <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            • Optimized company website by transitioning REST APIs to GraphQL, resulting in improved data fetching capabilities and enhanced performance. <br/> <br/>
            • Implemented a fitness quiz for new users to recommend initial classes based on their preferences, enhancing immediate engagement upon website
            onboarding. <br/>
        </p>
      </div>,
      <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            • Served as on-call engineer for one week on a rotating schedule, responding to critical incidents such as site outages, troubleshooting urgent technical
            issues, and escalating problems to ensure timely resolution and minimal impact on users. <br/> <br/>
            • Facilitated bi-weekly retrospective meetings for Agile development teams of approximately 15-20 members to reflect on past sprints and identify
            areas for improvement. <br/>
        </p>
      </div>,
    ];

const zooVioSlides = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project1} alt="Project 1" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            • Integrated Firebase from Google to authenticate users and store pet’s information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full">GitHub</a>
        </div>
    </div>,
    ];
    
const finstaSlides = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project2} alt="Project 2" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
            • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
            • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full">GitHub</a>
        </div>
    </div>,
];

const tastebudsSlides = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project3} alt="Project 3" className="w-[90%] mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[521px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full">
        <p>
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[520px]:hidden text-center w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full">GitHub</a>
        </div>
    </div>,
];

export {
    mvmntSlides,
    othelloSlides,
    pelotonSlides,
    zooVioSlides,
    finstaSlides,
    tastebudsSlides,
};