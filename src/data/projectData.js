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
import othelloScreenRecording from './../imgFiles/OthelloRecordingTrim.mov';
import mvmntCollectives from './../imgFiles/MvmntCo.png';
import motevisOne from './../imgFiles/MotevisOne.png';
import motevisTwo from './../imgFiles/MotevisTwo.png';
import motevisThree from './../imgFiles/MotevisThree.png';
import ourRootlineOne from './../imgFiles/OurRootlineOne.png';
import ourRootlineTwo from './../imgFiles/OurRootlineTwo.png';
import ourRootlineThree from './../imgFiles/OurRootlineThree.png';
import ourRootlineFour from './../imgFiles/OurRootlineFour.png';
import ourRootlineFive from './../imgFiles/OurRootlineFive.png';
import ourRootlineSix from './../imgFiles/OurRootlineSix.png';
import ourRootlineSeven from './../imgFiles/OurRootlineSeven.png';
import ourRootlineEight from './../imgFiles/OurRootlineEight.png';

const ourRootlineSlides = [
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineOne} 
                    alt="Our Rootline One" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                Our Rootline is a private family platform designed to preserve memories, relationships, and history in one shared digital space. Built with <span className="font-bold">Next.js and Tailwind</span> on the frontend and powered by <span className="font-bold">Amplify authentication, DynamoDB, and S3-backed media storage</span>, the app allows families to <span className="font-bold">upload and organize photos, tag relatives across generations, and explore a living, interactive family tree</span>. What started as a deeply personal idea became a full-stack product that turns scattered albums and fragmented records into a searchable, connected family archive.
            </p>
            <div className="gap-2 grid-flow-col inline-grid w-full text-center">
                <a href="https://main.d2a1izsfm6wl9b.amplifyapp.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            </div>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineTwo} 
                    alt="Our Rootline Two" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                The dashboard acts as each user's personal home base, combining profile details like identity, family roles, bios, hobbies, and contact links in one view. Built with the <span className="font-bold">Next.js App Router and Tailwind/daisyUI</span>, the page pulls personalized data through <span className="font-bold">Amplify authentication and DynamoDB</span>. Below the profile, users can browse <span className="font-bold">uploaded photos, tagged memories, favorites, and albums</span> stored in <span className="font-bold">S3-backed media storage</span>, while a side panel highlights upcoming family events and birthdays, keeping past milestones visible at a glance.
            </p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineThree} 
                    alt="Our Rootline Three" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                Hobby Hubs create shared spaces where family members can connect around common interests beyond lineage. Each hub  <span className="font-bold">displays participating relatives and includes a comment feed</span> where members can chat, share experiences, and post photos. Built with <span className="font-bold">Next.js client components and DynamoDB-backed threads</span>, this feature uses the same authenticated context as the rest of the app to foster organic, interest-driven family conversations.
            </p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineFour} 
                    alt="Our Rootline Four" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                The notification drawer provides real-time updates for key family activity, including <span className="font-bold">comments, RSVPs, and photo tags</span>. Accessible from a bell icon in the navbar, the slide-out panel supports filtering, batch actions, and saved notification preferences. Implemented with <span className="font-bold">React and Tailwind UI patterns</span> and backed by <span className="font-bold">authenticated API hooks</span>, it keeps users informed while giving them control over how much they see.
            </p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineFive} 
                    alt="Our Rootline Five" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                The photos page brings together every image shared across the family into a single, searchable gallery. Images are stored in <span className="font-bold">S3 with metadata managed in DynamoDB</span>, allowing users to filter memories by <span className="font-bold">location, tagged relatives, and time.</span> Selecting a photo opens a <span className="font-bold">detailed view with metadata and family comments</span>, transforming each image from a static upload into a shared, contextualized story.
            </p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineSix} 
                    alt="Our Rootline Six" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
            The upload page allows users to add photos while enriching them with meaningful context. During upload, family members can <span className="font-bold">tag relatives, specify when the photo was taken, and add detailed location data from country down to neighborhood</span>. Photos are securely uploaded to <span className="font-bold">S3 with structured metadata saved to DynamoDB</span>, ensuring every memory is easy to organize, search, and connect back to people and places over time.            
            </p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineSeven} 
                    alt="Our Rootline Seven" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                The Family Tree visualizes relationships across generations through an animated, expandable layout. Users can <span className="font-bold">navigate the tree by moving, expanding, and collapsing branches</span> to explore lineage over time, with relationship data sourced from DynamoDB. Selecting a family member opens their <span className="font-bold">profile page</span>, seamlessly linking the visual structure of the tree to personal histories and shared media.
            </p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={ourRootlineEight} 
                    alt="Our Rootline Eight" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                The calendar <span className="font-bold">centralizes family events and birthdays in one shared view</span>, with support for month, week, year, and list layouts. Built using <span className="font-bold">FullCalendar with recurring events and RSVP functionality</span>, family members can add events directly from a streamlined modal. Events are persisted via <span className="font-bold">DynamoDB</span> and synced through authenticated actions, keeping gatherings and milestones coordinated across the family.
            </p>
        </div>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <h1 className="text-2xl font-bold mb-4">More Features</h1>
        <p className="font-normal">
        <p className="font-bold">Modern Frontend Architecture</p>
        Built with Next.js 15.3 (App Router) and React 18, written in TypeScript for type safety and maintainability. Styling is handled with Tailwind CSS and daisyUI, including custom themes and subtle UI animations.

        <p className="font-bold mt-2">Amplify Gen 2 Infrastructure</p>
        Uses AWS Amplify Gen 2 to manage backend infrastructure, with Cognito authentication supporting email login and optional MFA, DynamoDB for structured application data, and S3 for scalable photo storage and retrieval.

        <p className="font-bold mt-2">Advanced Calendar Engine</p>
        Calendar functionality is powered by FullCalendar with multiple plugins (day, time, list, multimonth, interaction, Google Calendar, iCalendar, and RRule), enabling recurring events, external calendar imports, and flexible viewing modes. iCal.js handles iCalendar parsing.

        <p className="font-bold mt-2">State Management & Data Access Patterns</p>
        Application state is managed through React Context (Auth, User, Calendar, Toast contexts), paired with custom hooks for DynamoDB reads and writes to keep data access consistent and reusable across features.

        <p className="font-bold mt-2">Image Processing & Optimization Pipeline</p>
        Server-side image optimization uses Sharp, with pngjs for targeted PNG manipulation, ensuring efficient storage, fast loading, and consistent visual quality across devices.

        <p className="font-bold mt-2">Drag-and-Drop & Interaction Enhancements</p>
        Interactive UI behaviors such as drag-and-drop are implemented with @dnd-kit, supporting flexible layouts and future extensibility for features like album organization.

        <p className="font-bold mt-2">Utility Libraries & UX Enhancements</p>
        Uses uuid for ID generation, react-range for time and range-based inputs, and @iconify/react with multiple icon sets for a consistent, scalable icon system.

        <p className="font-bold mt-2">Code Quality & Build Tooling</p>
        The project is configured with ESLint for linting, PostCSS and Autoprefixer for CSS processing, and a clean component architecture to support long-term maintainability and growth.
        </p>
     </div>,
    ];

const mvmntSlides = [
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={mvmntCollectives} 
                    alt="Mvmnt Collectives" 
                    className="w-full rounded-lg cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <p className="font-normal">
            Mvmnt Collectives is a web application that connects runners with local running clubs and events. Users can discover running clubs in their area, view club information, and find weekly runs.
        </p>
        <div className="gap-2 grid-flow-col inline-grid w-full text-center">
            <a href="https://mvmntcollectives.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
        </div>
    </div>,
];

const motevisSlides = [
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={motevisOne} 
                    alt="Motevis One" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                Motevis (formerly Mvmnt Collectives) is a web app where runners can <span className="font-bold">discover local clubs, view club info, and find weekly runs and race events</span> throughout New York City.
            </p>
            <div className="gap-2 grid-flow-col inline-grid w-full text-center">
                <a href="https://motevis.com/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            </div>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={motevisTwo} 
                    alt="Motevis Two" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                Users can <span className="font-bold">search for clubs, weekly runs, or race events</span> by name, tag, or borough. Weekly runs can also be filtered with <span className="font-bold">time range sliders</span>, making it easy to find runs that fit any schedule.
            </p>
        </div>
    </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={motevisThree} 
                    alt="Motevis Three" 
                    className="w-full cursor-zoom-in rounded-lg"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal px-3 md:px-0">
                Each club page highlights the run club's details, including its <span className="font-bold">email, founding year, social links, description, and hashtags.</span> The page also features a schedule of weekly runs and race events, making it easy for members to stay informed and connected.
            </p>
        </div>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <h1 className="text-2xl font-bold mb-4">Upcoming Features</h1>
        <p className="font-normal">
            • Allow users to <span className="font-bold">sign up and log in</span> and securely access gated pages through authentication. <br/> <span className="hidden md:inline"><br/></span>
            • Provide runners with a <span className="font-bold">personalized dashboard</span> where they can follow and stay updated on their favorite clubs. <br/> <span className="hidden md:inline"><br/></span>
            • Enable run club captains to <span className="font-bold">manage their own club pages</span>, updating descriptions and weekly run information. <br/> <span className="hidden md:inline"><br/></span>
            • Invite users to <span className="font-bold">subscribe by email</span> to our newsletter, featuring updates on new clubs, upcoming events, and platform features. <br/> <span className="hidden md:inline"><br/></span>
            • Expand beyond <span className="font-bold">New York City</span> to connect runners and fitness enthusiasts across the United States. <br/> <span className="hidden md:inline"><br/></span>
            {/* • Broaden our focus from only run clubs to include <span className="font-bold">other fitness communities</span> such as pickleball, rollerblading, and surf clubs. <br/> */}
        </p>
    </div>,
    ];

const othelloSlides = [
    <div className="flex justify-center h-full py-4 flex-col gap-4 w-full text-[15px]">
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <video 
                        src={othelloScreenRecording} 
                        alt="Othello Game Demo" 
                        className="w-full h-full object-cover object-center cursor-zoom-in rounded-lg"
                        controls
                        autoPlay
                        muted
                        loop
                    />
                </div>
            </div>
        </div>
        <p className="font-normal">
            I collaborated with a team of engineers during a Hackathon to develop an AI-driven version of the Othello board game, incorporating an AI opponent for single-player mode and AI-generated blockers to enhance the game's difficulty. By blending traditional gameplay with advanced AI features, we created a more engaging and strategic experience for users. Our project secured second place overall and received the "Most Innovative Use of AI" award, demonstrating my expertise in AI integration, teamwork, and delivering innovative solutions under tight deadlines.
        </p>
        <div className="gap-2 grid-flow-col inline-grid w-full text-center">
            <a href="https://github.com/dmorocho/othello" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const pelotonSlides = [
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonRowOne} 
                    alt="Peloton Row One" 
                    className="w-full h-full object-cover object-center cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">As the <span className="font-bold">lead web engineer for Peloton's rowing machine launch,</span> I was responsible for building key web features to enhance the user experience on the Peloton website. I led the development of the post-class details page, where I implemented the <span className="font-bold">Form Breakdown</span> section, displaying data for the key phases of the rowing stroke: <span className="font-bold">Catch, Drive, Finish, and Recovery.</span> I also integrated a <span className="font-bold">Form Score Percent</span> to help users assess their form accuracy and performance.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonRowTwo} 
                    alt="Peloton Row Two" 
                    className="w-full h-full object-cover object-center cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">Additionally, I developed <span className="font-bold">interactive graphs using the Recharts library</span> to visualize detailed user output data. These charts provided users with valuable insights into their performance, including metrics like <span className="font-bold">stroke output, stroke rate, and pace</span>, allowing them to track and analyze their rowing exercises. This work was <span className="font-bold">crucial in delivering an informative and engaging post-class experience</span>, empowering users to better understand their progress and refine their technique.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonActivityFeed} 
                    alt="Peloton Activity Feed" 
                    className="w-full h-full object-cover object-top cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid max-[403px]:grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I spearheaded the development of the <span className="font-bold">social activity feed</span>, which was pivotal in enhancing user engagement. I implemented key features such as <span className="font-bold">workout stacking, bookmarking, and high-fiving</span>—giving users a dynamic way to interact with each other's fitness journeys. Additionally, I led the creation of a <span className="font-bold">personalized notification drawer</span> that kept users up to date with their social interactions. By bringing social functionality to the platform, I helped drive higher user engagement and increased website traffic, fostering a more connected and active Peloton community.</p>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonBodyActivity} 
                    alt="Peloton Body Activity" 
                    className="w-full h-full object-cover object-left cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I assisted in the development of the <span className="font-bold">Body Activity</span> card, a feature that provides users with insights into their workout history across various body regions. This card displays data on the <span className="font-bold">percentage of body activity for each muscle group worked</span> during the past 7 and 30 days, giving users a clear, visual breakdown of their fitness progress using the human body graphic. I helped implement the functionality of this feature, contributing to an enhanced user experience. This feature <span className="font-bold">enabled users to better track and understand the effectiveness of their workouts</span>, promoting more informed fitness decisions.</p>
            <a href="https://www.pelobuddy.com/class-plan-body-activity-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] whitespace-nowrap">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonClassPlan} 
                    alt="Peloton Class Plan" 
                    className="w-full h-full object-cover object-center cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I contributed to the development of the <span className="font-bold">Class Plan</span> feature on Peloton's platform, which provides users with a detailed breakdown of the exercises included in a class. When users click on a class and scroll down to the Class Plan section, they can see a <span className="font-bold">list of exercises along with their durations</span>. Additionally, I helped build the interactive chevron dropdowns that allow users to click on an exercise name to reveal <span className="font-bold">a video of the trainer demonstrating the move, as well as a list of targeted muscles</span>. This feature enhances the user experience by offering clear, easy-to-follow workout details and giving users a deeper understanding of the exercises in each class.</p>
            <a href="https://www.pelobuddy.com/class-plan-body-activity-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] whitespace-nowrap">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonNotifications} 
                    alt="Peloton Notifications" 
                    className="w-full h-full object-cover object-right cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I contributed to the development of the <span className="font-bold">notifications feature</span> on the Peloton website, adding a notification bell icon to the navigation bar. When clicked, the bell opens a drawer on the right side of the screen, displaying a list of social notifications, such as <span className="font-bold">likes and high-fives from other users</span>. This feature was designed to <span className="font-bold">foster social engagement</span> on the platform, allowing users to easily connect with others and stay updated on interactions related to their activity and progress.</p>
            <a href="https://www.pelobuddy.com/activity-feed-notifications/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] whitespace-nowrap">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="image-crop-container flex flex-col items-center gap-4">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={pelotonStravaConnect} 
                    alt="Peloton Strava Connect" 
                    className="w-full h-full object-cover object-left cursor-zoom-in"
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 inline-grid grid-flow-row w-full">
            <p className="font-normal text-[15px] leading-snug">I assisted in the development of the <span className="font-bold">Strava integration</span> feature within Peloton's settings page, enabling users to easily connect their Strava accounts to their Peloton profiles. This integration allowed for <span className="font-bold">seamless synchronization of workout data</span>, providing users with a <span className="font-bold">comprehensive view of their fitness activities across both platforms</span>. Collaborating closely with the lead engineer, I helped implement the functionality, ensuring smooth and secure account linking for users. This feature not only enhanced the user experience by centralizing workout data but also contributed to greater engagement across the Peloton community by supporting cross-platform connectivity.</p>
            <a href="https://www.pelobuddy.com/sync-peloton-strava-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] whitespace-nowrap">Read More on PeloBuddy.com</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
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
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project1} 
                    alt="Project 1" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[1341px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
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
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const zooVioSlidesTablet = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project1} 
                    alt="Project 1" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a responsive web application connecting pet owners with veterinarians and streamlining pet care. The app uses Firebase for secure authentication and pet data storage, and the Yelp API for quick vet searches by zip code. It features real-time video consultations via WebRTC, ensuring accessible remote care.
            Built with React, Redux Toolkit, Node.js, and Axios, and styled with Bootstrap, the app is deployed on Heroku and Netlify for scalability and performance. This project demonstrates my full-stack development expertise and ability to create impactful, user-focused solutions.
        </p>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase from Google to authenticate users and store pet's information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[510px]:hidden text-center w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const zooVioSlidesMobile = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-3">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project1} 
                    alt="Project 1" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://zoovio.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">Live Site</a>
            <a href="https://github.com/Zoovio-app/zoovio" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a responsive web application connecting pet owners with veterinarians and streamlining pet care. The app uses Firebase for secure authentication and pet data storage, and the Yelp API for quick vet searches by zip code. It features real-time video consultations via WebRTC, ensuring accessible remote care. ...
        </p>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            Built with React, Redux Toolkit, Node.js, and Axios, and styled with Bootstrap, the app is deployed on Heroku and Netlify for scalability and performance. This project demonstrates my full-stack development expertise and ability to create impactful, user-focused solutions.
        </p>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase from Google to authenticate users and store pet's information. <br/>
            • Utilized Yelp API to allow users to easily search for veterinarians via zip code. <br/>
            • Applied Bootstrap for CSS to create a responsive web application. <br/>
        </p>
    </div>,
        <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Used WebRTC API to allow for video consultations between users and veterinarians. <br/>
            • Heroku, Netlify, React, Redux Toolkit, Node, Axios, Firebase, Bootstrap.
        </p>
    </div>,
];


//Finstagram
const finstaSlides = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project2} 
                    alt="Project 2" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid text-center max-[403px]:grid-flow-row w-full min-[1466px]:hidden">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
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
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project2} 
                    alt="Project 2" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
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
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project2} 
                    alt="Project 2" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. ...
        </p>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
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
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project2} 
                    alt="Project 2" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[511px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://github.com/SamanthaBJimenez/my-ig" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner text-center w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I developed a dynamic social media web application enabling users to seamlessly upload and share photos with friends. The app leverages Firebase Storage for secure handling of uploaded photos and avatars, ensuring a reliable and efficient media experience. ...
        </p>
    </div>,
        <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            User privacy and content security are maintained through Firebase Authentication, allowing only registered users to view photos, upload content, and engage by leaving comments. On the backend, I designed and implemented SQL tables, queries, and routes, utilizing PostgreSQL to manage data effectively. ...
        </p>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            The application, built with React, Node.js, and Axios, is hosted on Heroku and Netlify to ensure scalability, accessibility, and optimized performance. This project highlights my full-stack development skills and my commitment to creating user-centered, functional applications.
        </p>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Integrated Firebase Storage to store uploaded photos and avatars. <br/>
            • Implemented Firebase authentication that allows only logged in users to view photos, upload content, and leave comments. <br/>
        </p>
    </div>,
        <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
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
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project3} 
                    alt="Project 3" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[1355px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
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
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const tastebudsSlidesTablet = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-5">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project3} 
                    alt="Project 3" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[521px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I collaborated with two engineers to develop a frontend web application designed to pair solo diners for two-person restaurant reservations, creating meaningful dining experiences. Built within 48 hours, the app utilizes PostgreSQL to securely store and manage reservation data. The user interface incorporates Bootstrap's JavaScript modal plugin, providing an intuitive dialog box for users to input their information effortlessly. The app is powered by React, Node.js, and Axios, ensuring a responsive and seamless experience. This project demonstrates my ability to work under tight deadlines, contribute to team efforts, and deliver functional and user-focused applications.
        </p>
    </div>,
    <div className="flex justify-center h-full px-7 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
        </p>
        <div className="gap-2 grid-flow-col inline-grid display max-[520px]:hidden text-center w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
];

const tastebudsSlidesMobile = [
    <div className="image-crop-container flex flex-col items-center max-[365px]:gap-3">
        <div className="relative w-[90%] mx-auto mb-[10px]">
            <div className="relative w-full h-full group">
                <img 
                    src={project3} 
                    alt="Project 3" 
                    className="w-full rounded-lg cursor-zoom-in" 
                />
                <div 
                    className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                    onClick={(e) => {
                        e.stopPropagation();
                        const imgElement = e.currentTarget.parentElement.querySelector('img');
                        if (imgElement) {
                            handleImageClick(e, imgElement.src);
                        }
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                    </svg>
                </div>
            </div>
        </div>
        <div className="gap-2 grid-flow-col inline-grid min-[521px]:hidden text-center max-[403px]:grid-flow-row w-full">
            <a href="https://tastebuds.netlify.app/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">Live Site</a>
            <a href="https://github.com/SamanthaBJimenez/tastebuds" target="_blank" rel="noopener noreferrer" className="bg-gray-500 text-white shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px]">GitHub</a>
        </div>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            I collaborated with two engineers to develop a frontend web application designed to pair solo diners for two-person restaurant reservations, creating meaningful dining experiences. Built within 48 hours, the app utilizes PostgreSQL to securely store and manage reservation data. ...
        </p>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            The user interface incorporates Bootstrap's JavaScript modal plugin, providing an intuitive dialog box for users to input their information effortlessly. The app is powered by React, Node.js, and Axios, ensuring a responsive and seamless experience. This project demonstrates my ability to work under tight deadlines, contribute to team efforts, and deliver functional and user-focused applications.
        </p>
    </div>,
    <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
        <p className="font-normal">
            • Collaborated with two engineers to create and build an application within 48 hours. <br/>
            • Used PostgreSQL to store reservation data. <br/>
            • Applied Bootstraps JavaScript modal plugin to allow users to input information through dialog box. <br/>
            • React, Node, Axios, Bootstrap, PostgreSQL.
        </p>
    </div>,
];

// Instead of directly using handleImageClick, create a function that will receive the handler
const createSlides = (handleImageClick) => {
    const pelotonSlides = [
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonRowOne} 
                        alt="Peloton Row One" 
                        className="w-full h-full object-cover object-center cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 inline-grid grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">As the <span className="font-bold">lead web engineer for Peloton's rowing machine launch,</span> I was responsible for building key web features to enhance the user experience on the Peloton website. I led the development of the post-class details page, where I implemented the <span className="font-bold">Form Breakdown</span> section, displaying data for the key phases of the rowing stroke: <span className="font-bold">Catch, Drive, Finish, and Recovery.</span> I also integrated a <span className="font-bold">Form Score Percent</span> to help users assess their form accuracy and performance.</p>
            </div>
        </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonRowTwo} 
                        alt="Peloton Row Two" 
                        className="w-full h-full object-cover object-center cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 inline-grid grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">Additionally, I developed <span className="font-bold">interactive graphs using the Recharts library</span> to visualize detailed user output data. These charts provided users with valuable insights into their performance, including metrics like <span className="font-bold">stroke output, stroke rate, and pace</span>, allowing them to track and analyze their rowing exercises. This work was <span className="font-bold">crucial in delivering an informative and engaging post-class experience</span>, empowering users to better understand their progress and refine their technique.</p>
            </div>
        </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonActivityFeed} 
                        alt="Peloton Activity Feed" 
                        className="w-full h-full object-cover object-top cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 grid-flow-col inline-grid max-[403px]:grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">I spearheaded the development of the <span className="font-bold">social activity feed</span>, which was pivotal in enhancing user engagement. I implemented key features such as <span className="font-bold">workout stacking, bookmarking, and high-fiving</span>—giving users a dynamic way to interact with each other's fitness journeys. Additionally, I led the creation of a <span className="font-bold">personalized notification drawer</span> that kept users up to date with their social interactions. By bringing social functionality to the platform, I helped drive higher user engagement and increased website traffic, fostering a more connected and active Peloton community.</p>
            </div>
        </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonBodyActivity} 
                        alt="Peloton Body Activity" 
                        className="w-full h-full object-cover object-left cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 inline-grid grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">I assisted in the development of the <span className="font-bold">Body Activity</span> card, a feature that provides users with insights into their workout history across various body regions. This card displays data on the <span className="font-bold">percentage of body activity for each muscle group worked</span> during the past 7 and 30 days, giving users a clear, visual breakdown of their fitness progress using the human body graphic. I helped implement the functionality of this feature, contributing to an enhanced user experience. This feature <span className="font-bold">enabled users to better track and understand the effectiveness of their workouts</span>, promoting more informed fitness decisions.</p>
                <a href="https://www.pelobuddy.com/class-plan-body-activity-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] text-center whitespace-nowrap">Read More on PeloBuddy.com</a>
            </div>
        </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonClassPlan} 
                        alt="Peloton Class Plan" 
                        className="w-full h-full object-cover object-center cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 inline-grid grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">I contributed to the development of the <span className="font-bold">Class Plan</span> feature on Peloton's platform, which provides users with a detailed breakdown of the exercises included in a class. When users click on a class and scroll down to the Class Plan section, they can see a <span className="font-bold">list of exercises along with their durations</span>. Additionally, I helped build the interactive chevron dropdowns that allow users to click on an exercise name to reveal <span className="font-bold">a video of the trainer demonstrating the move, as well as a list of targeted muscles</span>. This feature enhances the user experience by offering clear, easy-to-follow workout details and giving users a deeper understanding of the exercises in each class.</p>
                <a href="https://www.pelobuddy.com/class-plan-body-activity-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] text-center whitespace-nowrap">Read More on PeloBuddy.com</a>
            </div>
        </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonNotifications} 
                        alt="Peloton Notifications" 
                        className="w-full h-full object-cover object-right cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 inline-grid grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">I contributed to the development of the <span className="font-bold">notifications feature</span> on the Peloton website, adding a notification bell icon to the navigation bar. When clicked, the bell opens a drawer on the right side of the screen, displaying a list of social notifications, such as <span className="font-bold">likes and high-fives from other users</span>. This feature was designed to <span className="font-bold">foster social engagement</span> on the platform, allowing users to easily connect with others and stay updated on interactions related to their activity and progress.</p>
                <a href="https://www.pelobuddy.com/activity-feed-notifications/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] text-center whitespace-nowrap">Read More on PeloBuddy.com</a>
            </div>
        </div>,
        <div className="image-crop-container flex flex-col items-center gap-4">
            <div className="relative w-[90%] mx-auto mb-[10px]">
                <div className="relative w-full h-full group">
                    <img 
                        src={pelotonStravaConnect} 
                        alt="Peloton Strava Connect" 
                        className="w-full h-full object-cover object-left cursor-zoom-in rounded-lg"
                    />
                    <div 
                        className="absolute bottom-3 right-3 bg-black bg-opacity-50 p-2 rounded-full text-white transition-opacity duration-300 cursor-pointer md:hidden magnify-icon"
                        onClick={(e) => {
                            e.stopPropagation();
                            const imgElement = e.currentTarget.parentElement.querySelector('img');
                            if (imgElement) {
                                handleImageClick(e, imgElement.src);
                            }
                        }}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7" />
                        </svg>
                    </div>
                </div>
            </div>
            <div className="gap-2 inline-grid grid-flow-row w-full px-3 md:px-0">
                <p className="font-normal text-[15px] leading-snug">I assisted in the development of the <span className="font-bold">Strava integration</span> feature within Peloton's settings page, enabling users to easily connect their Strava accounts to their Peloton profiles. This integration allowed for <span className="font-bold">seamless synchronization of workout data</span>, providing users with a <span className="font-bold">comprehensive view of their fitness activities across both platforms</span>. Collaborating closely with the lead engineer, I helped implement the functionality, ensuring smooth and secure account linking for users. This feature not only enhanced the user experience by centralizing workout data but also contributed to greater engagement across the Peloton community by supporting cross-platform connectivity.</p>
                <a href="https://www.pelobuddy.com/sync-peloton-strava-web/" target="_blank" rel="noopener noreferrer" className="bg-white text-black shadow-lg px-4 py-2 inline-grid rounded-lg hover:shadow-inner w-full text-[15px] text-center whitespace-nowrap">Read More on PeloBuddy.com</a>
            </div>
        </div>,
        <div className="flex justify-center h-full px-3 py-4 flex-col gap-4 w-full text-[15px]">
            <p className="font-normal">
                • Implemented a <span className="font-bold">fitness quiz</span> for new users to recommend initial classes based on their preferences, <span className="font-bold">enhancing immediate engagement</span> upon website onboarding. <br/> <span className="hidden md:inline"> <br/></span>
                • Optimized company website by <span className="font-bold">transitioning REST APIs to GraphQL</span>, resulting in improved data fetching capabilities and enhanced performance. <br/> <span className="hidden md:inline"> <br/></span>
                • Served as <span className="font-bold">on-call engineer</span> for one week on a rotating schedule, responding to critical incidents such as <span className="font-bold">site outages, troubleshooting urgent technical
                issues, and escalating problems</span> to ensure timely resolution and minimal impact on users. <br/> <span className="hidden md:inline"> <br/></span>
                • <span className="font-bold">Facilitated bi-weekly retrospective meetings</span> for Agile development teams of approximately <span className="font-bold">15-20 members</span> to reflect on past sprints and identify
                areas for improvement.<span className="hidden md:inline"> <br/></span>
            </p>
        </div>,
    ];

    return {
        ourRootlineSlides,
        motevisSlides,
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
    };
};

export default createSlides;
