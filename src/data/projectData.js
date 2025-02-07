import project1 from './../imgFiles/ZooVio.png';
import project2 from './../imgFiles/Finstagram.png';
import project3 from './../imgFiles/Tastebuds.png';
import pelotonActivityFeed from './../imgFiles/PelotonActivityFeed.png';
import pelotonBodyActivity from './../imgFiles/PelotonBodyActivity.png';
import pelotonStravaConnect from './../imgFiles/PelotonStravaConnect.png';
import pelotonClassPlan from './../imgFiles/PelotonClassPlan.png';
import pelotonNotifications from './../imgFiles/PelotonNotifications.png';
import pelotonRowOne from './../imgFiles/PelotonRowOne.png';
import pelotonRowTwo from './../imgFiles/PelotonRowTwo.png';

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
                src={pelotonRowOne} 
                alt="Peloton Row One" 
                className="w-full h-full object-cover object-center"
            />
        </div>
        <div className="gap-2 inline-grid text-center grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">As the <span className="font-bold">lead web engineer for Peloton’s rowing machine launch,</span> I was responsible for building key web features to enhance the user experience on the Peloton website. I led the development of the post-class details page, where I implemented the <span className="font-bold">Form Breakdown</span> section, displaying data for the key phases of the rowing stroke: <span className="font-bold">Catch, Drive, Finish, and Recovery.</span> I also integrated a <span className="font-bold">Form Score Percent</span> to help users assess their form accuracy and performance.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonRowTwo} 
                alt="Peloton Row Two" 
                className="w-full h-full object-cover object-center"
            />
        </div>
        <div className="gap-2 inline-grid text-center grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">Additionally, I developed <span className="font-bold">interactive graphs using the Recharts library</span> to visualize detailed user output data. These charts provided users with valuable insights into their performance, including metrics like <span className="font-bold">stroke output, stroke rate, and pace</span>, allowing them to track and analyze their rowing exercises. This work was <span className="font-bold">crucial in delivering an informative and engaging post-class experience</span>, empowering users to better understand their progress and refine their technique.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonActivityFeed} 
                alt="Peloton Activity Feed" 
                className="w-full h-full object-cover object-top"
            />
        </div>
        <div className="gap-2 grid-flow-col inline-grid text-center max-[403px]:grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I spearheaded the development of the <span className="font-bold">social activity feed</span>, which was pivotal in enhancing user engagement. I implemented key features such as <span className="font-bold">workout stacking, bookmarking, and high-fiving</span>—giving users a dynamic way to interact with each other’s fitness journeys. Additionally, I led the creation of a <span className="font-bold">personalized notification drawer</span> that kept users up to date with their social interactions. By bringing social functionality to the platform, I helped drive higher user engagement and increased website traffic, fostering a more connected and active Peloton community.</p>
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
        <div className="gap-2 inline-grid text-center grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I assisted in the development of the <span className="font-bold">Body Activity</span> card, a feature that provides users with insights into their workout history across various body regions. This card displays data on the <span className="font-bold">percentage of body activity for each muscle group worked</span> during the past 7 and 30 days, giving users a clear, visual breakdown of their fitness progress using the human body graphic. I helped implement the functionality of this feature, contributing to an enhanced user experience. This feature <span className="font-bold">enabled users to better track and understand the effectiveness of their workouts</span>, promoting more informed fitness decisions.</p>
            <a href="https://www.pelobuddy.com/class-plan-body-activity-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonClassPlan} 
                alt="Peloton Class Plan" 
                className="w-full h-full object-cover object-center"
            />
        </div>
        <div className="gap-2 inline-grid text-center grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I contributed to the development of the <span className="font-bold">Class Plan</span> feature on Peloton's platform, which provides users with a detailed breakdown of the exercises included in a class. When users click on a class and scroll down to the Class Plan section, they can see a <span className="font-bold">list of exercises along with their durations</span>. Additionally, I helped build the interactive chevron dropdowns that allow users to click on an exercise name to reveal <span className="font-bold">a video of the trainer demonstrating the move, as well as a list of targeted muscles</span>. This feature enhances the user experience by offering clear, easy-to-follow workout details and giving users a deeper understanding of the exercises in each class.</p>
            <a href="https://www.pelobuddy.com/class-plan-body-activity-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="h-[400px] w-[90%] overflow-hidden rounded-lg">
            <img 
                src={pelotonNotifications} 
                alt="Peloton Notifications" 
                className="w-full h-full object-cover object-right"
            />
        </div>
        <div className="gap-2 inline-grid text-center grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I contributed to the development of the <span className="font-bold">notifications feature</span> on the Peloton website, adding a notification bell icon to the navigation bar. When clicked, the bell opens a drawer on the right side of the screen, displaying a list of social notifications, such as <span className="font-bold">likes and high-fives from other users</span>. This feature was designed to <span className="font-bold">foster social engagement</span> on the platform, allowing users to easily connect with others and stay updated on interactions related to their activity and progress.</p>
            <a href="https://www.pelobuddy.com/activity-feed-notifications/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Read More on PeloBuddy.com</a>
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
        <div className="gap-2 inline-grid text-center grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I assisted in the development of the <span className="font-bold">Strava integration</span> feature within Peloton's settings page, enabling users to easily connect their Strava accounts to their Peloton profiles. This integration allowed for <span className="font-bold">seamless synchronization of workout data</span>, providing users with a <span className="font-bold">comprehensive view of their fitness activities across both platforms</span>. Collaborating closely with the lead engineer, I helped implement the functionality, ensuring smooth and secure account linking for users. This feature not only enhanced the user experience by centralizing workout data but also contributed to greater engagement across the Peloton community by supporting cross-platform connectivity.</p>
            <a href="https://www.pelobuddy.com/sync-peloton-strava-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-base shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="flex justify-center h-full text-gray-600 px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Implemented a <span className="font-bold">fitness quiz</span> for new users to recommend initial classes based on their preferences, <span className="font-bold">enhancing immediate engagement</span> upon website onboarding. <br/> <br/>
            • Optimized company website by <span className="font-bold">transitioning REST APIs to GraphQL</span>, resulting in improved data fetching capabilities and enhanced performance. <br/> <br/>
            • Served as <span className="font-bold">on-call engineer</span> for one week on a rotating schedule, responding to critical incidents such as <span className="font-bold">site outages, troubleshooting urgent technical
            issues, and escalating problems</span> to ensure timely resolution and minimal impact on users. <br/> <br/>
            • <span className="font-bold">Facilitated bi-weekly retrospective meetings</span> for Agile development teams of approximately <span className="font-bold">15-20 members</span> to reflect on past sprints and identify
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
