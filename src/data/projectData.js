import project1 from './../imgFiles/ZooVio.png';
import project2 from './../imgFiles/Finstagram.png';
import project3 from './../imgFiles/Tastebuds.png';
import pelotonActivityFeed from './../imgFiles/PelotonActivityFeed.png';
import pelotonBodyActivity from './../imgFiles/PelotonBodyActivity.png';
import pelotonStravaConnect from './../imgFiles/PelotonStravaConnect.png';

const mvmntSlides = [
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="text-gray-600 font-normal">
            Mvmnt Collectives is a web application that connects runners with local running clubs and events. Users can discover running clubs in their area, view club information, and stay updated on upcoming running events.
        </p>
        <div className="gap-2 grid-flow-col inline-grid w-full text-center">
            <a href="https://mvmntcollectives.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
        </div>
    </div>,
];

const othelloSlides = [
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I collaborated with a team of engineers during a Hackathon to develop an AI-driven version of the Othello board game, incorporating an AI opponent for single-player mode and AI-generated blockers to enhance the game's difficulty. By blending traditional gameplay with advanced AI features, we created a more engaging and strategic experience for users. Our project secured second place overall and received the "Most Innovative Use of AI" award, demonstrating my expertise in AI integration, teamwork, and delivering innovative solutions under tight deadlines.        </p>
        <div className="gap-2 grid-flow-col inline-grid w-full text-center">
            <a href="https://github.com/dmorocho/othello" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const pelotonSlides = [
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonActivityFeed} 
                alt="Peloton Activity Feed" 
                className="w-full h-full object-cover object-top"
            />
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[1341px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-tight">I worked on the activity feed, user interactions (stack, bookmark, high-five), and notification screen.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonBodyActivity} 
                alt="Peloton Body Activity" 
                className="w-full h-full object-cover object-left"
            />
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[1341px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-tight">I worked on the body activity page, which displays the user's body activity data.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonStravaConnect} 
                alt="Peloton Strava Connect" 
                className="w-full h-full object-cover object-left"
            />
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[1341px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-tight">I worked on the Strava Connect page, which allows users to connect their Strava account to their Peloton account.</p>
        </div>
    </div>,
      <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Spearheaded the development of web features for the company's launch of their at-home row machine, utilizing the Recharts library to design and
            implement the user's post-class details page featuring interactive graphs displaying detailed user output data during rowing exercises. <br/> <br/>
            • Programmed social features on the website, including an activity feed, user interactions (stack, bookmark, high-five), a notification screen, and
            integrated connectivity with user's Strava account, enhancing user engagement and driving increased traffic through social functionality. <br/>
        </p>
      </div>,
      <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Optimized company website by transitioning REST APIs to GraphQL, resulting in improved data fetching capabilities and enhanced performance. <br/> <br/>
            • Implemented a fitness quiz for new users to recommend initial classes based on their preferences, enhancing immediate engagement upon website
            onboarding. <br/>
        </p>
      </div>,
      <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Served as on-call engineer for one week on a rotating schedule, responding to critical incidents such as site outages, troubleshooting urgent technical
            issues, and escalating problems to ensure timely resolution and minimal impact on users. <br/> <br/>
            • Facilitated bi-weekly retrospective meetings for Agile development teams of approximately 15-20 members to reflect on past sprints and identify
            areas for improvement. <br/>
        </p>
      </div>,
    ];


// ZooVio
const zooVioSlides = [
    <div className="image-crop-container flex flex-col items-center gap-4">
        <img src={project1} alt="Project 1" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[1341px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a responsive web application connecting pet owners with veterinarians and streamlining pet care. The app uses Firebase for secure authentication and pet data storage, and the Yelp API for quick vet searches by zip code. It features real-time video consultations via WebRTC, ensuring accessible remote care. Built with React, Redux Toolkit, Node.js, and Axios, and styled with Bootstrap, the app is deployed on Heroku and Netlify for scalability and performance. This project demonstrates my full-stack development expertise and ability to create impactful, user-focused solutions.
        </p>
        <p className="font-normal">
            • Integrated Firebase from Google to authenticate users and store pet's information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display w-full max-[1340px]:hidden">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const zooVioSlidesTablet = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project1} alt="Project 1" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a responsive web application connecting pet owners with veterinarians and streamlining pet care. The app uses Firebase for secure authentication and pet data storage, and the Yelp API for quick vet searches by zip code. It features real-time video consultations via WebRTC, ensuring accessible remote care.
            Built with React, Redux Toolkit, Node.js, and Axios, and styled with Bootstrap, the app is deployed on Heroku and Netlify for scalability and performance. This project demonstrates my full-stack development expertise and ability to create impactful, user-focused solutions.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase from Google to authenticate users and store pet's information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const zooVioSlidesMobile = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-3">
        <img src={project1} alt="Project 1" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a responsive web application connecting pet owners with veterinarians and streamlining pet care. The app uses Firebase for secure authentication and pet data storage, and the Yelp API for quick vet searches by zip code. It features real-time video consultations via WebRTC, ensuring accessible remote care. ...
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            Built with React, Redux Toolkit, Node.js, and Axios, and styled with Bootstrap, the app is deployed on Heroku and Netlify for scalability and performance. This project demonstrates my full-stack development expertise and ability to create impactful, user-focused solutions.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase from Google to authenticate users and store pet's information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
        </p>
    </div>,
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
        </p>
    </div>,
];


//Finstagram
const finstaSlides = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project2} alt="Project 2" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid text-center max-[403px]:grid-flow-row w-full min-[1466px]:hidden">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
        <p className="font-normal">
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
            • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
            • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[1465px]:hidden text-center w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const finstaSlidesTablet = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project2} alt="Project 2" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
            • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
            • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const finstaSlidesMobile = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project2} alt="Project 2" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. ...
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
            • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
            • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const finstaSlidesExtraSmall = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project2} alt="Project 2" className="w-[90%] ml-auto mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. ...
        </p>
    </div>,
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. ...
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
        </p>
    </div>,
        <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Prepared SQL tables, queries, and routes and employed it for the applications Heroku backend. <br/>
            • Heroku, Netlify, React, Node, Axios, PostgreSQL, Firebase.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

//Tastebuds
const tastebudsSlides = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project3} alt="Project 3" className="w-[90%] mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[1355px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I collaborated with two engineers to develop a frontend web application designed to pair solo diners for two-person restaurant reservations, creating meaningful dining experiences. Built within 48 hours, the app utilizes PostgreSQL to securely store and manage reservation data. The user interface incorporates Bootstrap's JavaScript modal plugin, providing an intuitive dialog box for users to input their information effortlessly. The app is powered by React, Node.js, and Axios, ensuring a responsive and seamless experience. This project demonstrates my ability to work under tight deadlines, contribute to team efforts, and deliver functional and user-focused applications.
        </p>
        <p className="font-normal">
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[1354px]:hidden text-center w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const tastebudsSlidesTablet = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <img src={project3} alt="Project 3" className="w-[90%] mb-[10px] rounded-lg mx-auto" />
        <div className="gap-2 grid-flow-col inline-grid min-[521px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I collaborated with two engineers to develop a frontend web application designed to pair solo diners for two-person restaurant reservations, creating meaningful dining experiences. Built within 48 hours, the app utilizes PostgreSQL to securely store and manage reservation data. The user interface incorporates Bootstrap's JavaScript modal plugin, providing an intuitive dialog box for users to input their information effortlessly. The app is powered by React, Node.js, and Axios, ensuring a responsive and seamless experience. This project demonstrates my ability to work under tight deadlines, contribute to team efforts, and deliver functional and user-focused applications.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[520px]:hidden text-center w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const tastebudsSlidesMobile = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-3">
        <img src={project3} alt="Project 3" className="w-[90%] mb-[10px] rounded-lg mx-auto mt-[30px]" />
        <div className="gap-2 grid-flow-col inline-grid min-[521px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I collaborated with two engineers to develop a frontend web application designed to pair solo diners for two-person restaurant reservations, creating meaningful dining experiences. Built within 48 hours, the app utilizes PostgreSQL to securely store and manage reservation data. ...
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            The user interface incorporates Bootstrap's JavaScript modal plugin, providing an intuitive dialog box for users to input their information effortlessly. The app is powered by React, Node.js, and Axios, ensuring a responsive and seamless experience. This project demonstrates my ability to work under tight deadlines, contribute to team efforts, and deliver functional and user-focused applications.
        </p>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
        </p>
    </div>,
];

export {
    mvmntSlides,
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
    tastebudsSlidesMobile,
    tastebudsSlidesTablet,
};
