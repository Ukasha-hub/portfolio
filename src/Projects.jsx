
import { CgWebsite } from "react-icons/cg";
import { TfiWorld } from "react-icons/tfi";
import { FaGithub } from "react-icons/fa";

import exampleImage2 from './assets/jobhunt.png';
import exampleImage3 from './assets/eurotrip.png';
import exampleImage4 from './assets/cascade.png';
import exampleImage5 from './assets/paribahan.png';
import exampleImage6 from './assets/dam.png';
import exampleImage7 from './assets/dashboard.png';
const Projects = () => {
    return (
        <div className="bg-black p-5" id="projects">

            <h1 className="text-center pt-7 text-7xl text-white">Projects</h1>

            <div className="m-10 grid grid-rows-1 justify-center lg:grid-cols-3  justify-items-center content-center items-center lg:flex-row md:grid-cols-2 gap-3">
           




<div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
    <CgWebsite className="text-7xl" />
		<div className="flex flex-col space-y-1">
			<a  href="" className="text-lg font-semibold">Website Project</a>
            <p className="text-sm "> <span className="text-sm font-semibold">Technologies used:</span> React, Tailwind, Nodejs,
            expressJS, mongoDB, firebase, jwt.</p>
		</div>
	</div>
	<div>
		<img src={exampleImage2} alt="" className="object-cover border-2 w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">Job Hunt</h2>
		<p className="text-sm dark:text-gray-600">A job searching website where registered
 employees can apply for jobs as well as employers
 can advertise jobs.</p>
 <p className="py-2 font-bold text-lg">Features:</p>
 <ul className="list-disc px-5 text-sm">
    <li>Users can login and register</li>
    <li>Users can view jobs and their details</li>
    <li>users can apply for jobs</li>
    <li>user can post job if he/she is an employer</li>
    <li>user can change their profile</li>
    <li>employers can update their job details, they also can delete their posted job</li>
 </ul>
 <p className="font-bold">N.B.: Security alert/ Danger flag may show while visiting the website in chrome browser. Try using other browsers or disable danger flag warning of your chrome.</p>
	</div>
    <button className="btn btn-outline text-black"><TfiWorld /><a  href="https://vocal-platypus-b1b07b.netlify.app/" target="_blank"
        rel="noopener noreferrer">Visit Website</a></button>
	<div className="flex flex-wrap justify-center gap-3">
   
    <button className="btn border-black btn-sm"><FaGithub /><a href="https://github.com/Ukasha-hub/job-hunt" target="_blank"
        rel="noopener noreferrer">Frontend Github </a></button>
    <button className="btn border-black btn-sm"><FaGithub /><a href="https://github.com/Ukasha-hub/job-hunt-server-side" target="_blank"
        rel="noopener noreferrer">Backend Github </a></button>
	</div>
</div>



<div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
    <CgWebsite className="text-7xl" />
		<div className="flex flex-col space-y-1">
			<a  href="" className="text-lg font-semibold">Website Project</a>
            <p className="text-sm "> <span className="text-sm font-semibold">Technologies used:</span> React, Tailwind, Nodejs,
            expressJS, mongoDB, firebase.</p>
		</div>
	</div>
	<div>
		<img src={exampleImage3} alt="" className="object-cover border-2 w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">Eurotrip</h2>
		<p className="text-sm dark:text-gray-600">The website is about giving information about
 European tourist spots. Registered users can add
 and update information about tourist spots.</p>
 <p className="py-2 font-bold text-lg">Features:</p>
 <ul className="list-disc px-5 text-sm">
    <li>User can see the details of every tourist spots which were added by logged in users</li>
    <li>Users can also see tourist spots countrywise</li>
    <li>users can log in to this website, and they can add new spot. They also can update and delete there own added spot</li>
    <li>Every error is handled by giving suitable alerts</li>
    <li>npm packages used: Lottie react, react typewritter, helmet, toastify, sweet alert, react icons.</li>
    
 </ul>
 <p className="font-bold">N.B.: Refresh the website multiple times if the first web page shows not found. Page not found may show due to API fetching delays</p>
	</div>
    <button className="btn btn-outline text-black"><TfiWorld /><a target="_blank"
        rel="noopener noreferrer" href="https://project-10-e71d8.web.app/">Visit Website</a></button>
	<div className="flex flex-wrap justify-center gap-3">
   
    <button className="btn border-black btn-sm"><FaGithub /><a target="_blank"
        rel="noopener noreferrer" href="https://github.com/Ukasha-hub/eurotrip-client">Frontend Github </a></button>
    <button className="btn border-black btn-sm"><FaGithub /><a target="_blank"
        rel="noopener noreferrer" href="https://github.com/Ukasha-hub/eurotrip-server">Backend Github </a></button>
	</div>
</div>

<div className="flex flex-col max-w-lg p-6 space-y-6 h-400 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
    <CgWebsite className="text-7xl" />
		<div className="flex flex-col space-y-1">
			<a  href="" className="text-lg font-semibold">Website Project</a>
            <p className="text-sm "> <span className="text-sm font-semibold">Technologies used:</span> React, Tailwind</p>
		</div>
	</div>
	<div>
		<img src={exampleImage6} alt="" className="object-cover border-2 w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">Digital Asset Management</h2>
		<p className="text-sm dark:text-gray-600">This project developed during my internship at Sysnova Information Systems Ltd. It is a digital asset management system site where users can upload and store digital medias. Only frontend functionalities and design is implemented in this project.</p>
 <p className="py-2 font-bold text-lg">Features:</p>
 <ul className="list-disc px-5 text-sm">
    <li>Users can move, copy/paste, delete and rename multiple folders and files at a time. They can enter into file/folders by double clicking</li>
    <li>Users can add new folder.</li>
    <li>Users can see the details and metadata of a video file by double clicking into it. They also can preview the video.</li>
    <li>Pagination and Sorting by name are also implemented</li>
    <li>Video file uploading page is designed, but functionaliies are not yet implemented</li>
    <li>A sign in page is also designed, but authentication is not implemented yet.</li>
    <li>Users can also select multiple files/folders. There is a Select All button.</li>
    <li>Responsive in all devices</li>
    
 </ul>
	</div>
    <button className="btn btn-outline text-black"><TfiWorld /><a target="_blank"
        rel="noopener noreferrer" href=" https://dam-sysnova.netlify.app/">Visit Website</a></button>
	<div className="flex flex-wrap justify-center gap-3">
   
    <button className="btn border-black btn-sm"><FaGithub /><a target="_blank"
        rel="noopener noreferrer" href="https://github.com/Ukasha-hub/DAM">Frontend Github </a></button>
    
	</div>
</div>



<div className="flex flex-col max-w-lg p-6 space-y-6 h-400 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
    <CgWebsite className="text-7xl" />
		<div className="flex flex-col space-y-1">
			<a  href="" className="text-lg font-semibold">Website Project</a>
            <p className="text-sm "> <span className="text-sm font-semibold">Technologies used:</span> React, Tailwind, Firebase</p>
		</div>
	</div>
	<div>
		<img src={exampleImage4} alt="" className="object-cover border-2 w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">Cascade Realty</h2>
		<p className="text-sm dark:text-gray-600">The website is about residential real estate
 where users can get information about residents
 which are currently for sale or rent.</p>
 <p className="py-2 font-bold text-lg">Features:</p>
 <ul className="list-disc px-5 text-sm">
    <li>The website is about residential real estate where users can get information about residents which are currently for sale or rent</li>
    <li>Users can login and register in this website</li>
    <li>After logging in, Users can see the details of the real estates, view and update their profile, and view the informations of the services</li>
    <li>In this website some of npm's is used, which are swiper slider, AOS package, and Animate.css</li>
    
 </ul>
	</div>
    <button className="btn btn-outline text-black"><TfiWorld /><a target="_blank"
        rel="noopener noreferrer" href="https://th-project-133df.web.app/">Visit Website</a></button>
	<div className="flex flex-wrap justify-center gap-3">
   
    <button className="btn border-black btn-sm"><FaGithub /><a target="_blank"
        rel="noopener noreferrer" href="https://github.com/Ukasha-hub/cascade-realty">Frontend Github </a></button>
    
	</div>
</div>

<div className="flex flex-col  max-w-lg p-6 h-400 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
    <CgWebsite className="text-7xl" />
		<div className="flex flex-col space-y-1">
			<a  href="" className="text-lg font-semibold">Website Project</a>
            <p className="text-sm "> <span className="text-sm font-semibold">Technologies used:</span> React, Tailwind</p>
		</div>
	</div>
	<div>
		<img src={exampleImage7} alt="" className="object-cover border-2 w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">Dashboard Template</h2>
		<p className="text-sm dark:text-gray-600"> A reusable template of the admin dashboard.</p>
 <p className="py-2 font-bold text-lg">Features:</p>
 <ul className="list-disc px-5 text-sm">
    <li>Responsive dashboard with light and dark mode changer</li>
    <li>Table of users, and the table is downloadable either pdf or csv format</li>
    <li>Search functionality and pagination of table is present</li>
    <li>New data/user can be added</li>
    <li>Existing data can be edited, deleted, and details can be viewed.</li>
    
 </ul>
	</div>
    <button className="btn btn-outline text-black"><TfiWorld /><a target="_blank"
        rel="noopener noreferrer" href="https://dashboard-template-sysnova.netlify.app/">Visit Website</a></button>
	<div className="flex flex-wrap justify-center gap-3">
   
    <button className="btn border-black btn-sm"><FaGithub /><a target="_blank"
        rel="noopener noreferrer" href="https://github.com/Ukasha-hub/reuseable-dashboard">Frontend Github </a></button>
    
	</div>
</div>

<div className="flex flex-col  max-w-lg p-6 h-400 space-y-6 overflow-hidden rounded-lg shadow-md dark:bg-gray-50 dark:text-gray-800">
	<div className="flex space-x-4">
    <CgWebsite className="text-7xl" />
		<div className="flex flex-col space-y-1">
			<a  href="" className="text-lg font-semibold">Website Project</a>
            <p className="text-sm "> <span className="text-sm font-semibold">Technologies used:</span> HTML5, CSS3, Javascript</p>
		</div>
	</div>
	<div>
		<img src={exampleImage5} alt="" className="object-cover border-2 w-full mb-4 h-60 sm:h-96 dark:bg-gray-500" />
		<h2 className="mb-1 text-2xl font-semibold">P-Paribahar</h2>
		<p className="text-sm dark:text-gray-600">An online bus ticket booking site</p>
 <p className="py-2 font-bold text-lg">Features:</p>
 <ul className="list-disc px-5 text-sm">
    <li>Users can choose any seat by clicking on any seat</li>
    <li>Users can undo choosing seat by clicking again</li>
    <li>users can not choose more than 4 seats to avoid black marketing</li>
    <li>Total cost of the booked seat will be shown</li>
    <li>users can get discount by giving promo code adverdised in the website</li>
    
 </ul>
	</div>
    <button className="btn btn-outline text-black"><TfiWorld /><a target="_blank"
        rel="noopener noreferrer" href="https://ukasha-hub.github.io/smart-ticket/">Visit Website</a></button>
	<div className="flex flex-wrap justify-center gap-3">
   
    <button className="btn border-black btn-sm"><FaGithub /><a target="_blank"
        rel="noopener noreferrer" href="https://github.com/Ukasha-hub/smart-ticket">Frontend Github </a></button>
    
	</div>
</div>









            </div>
            
        </div>
    );
};

export default Projects;