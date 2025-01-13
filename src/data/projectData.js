import project1 from './../imgFiles/ZooVio.png';
import project2 from './../imgFiles/Finstagram.png';
import project3 from './../imgFiles/Tastebuds.png';

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

export {
    mvmntSlides,
    othelloSlides,
    pelotonSlides,
    zooVioSlides,
    finstaSlides,
    tastebudsSlides,
};