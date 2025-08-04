import exampleImage1 from './assets/sysnova.jpg';
import { FcBriefcase } from "react-icons/fc";
const WorkHistory = () => {
    return (
        <div id="experience">

            <section className="bg-white text-black mt-5">
                <div className="container max-w-5xl px-4 py-12 mx-auto">
                    <div className="grid gap-4 mx-4 sm:grid-cols-12">
                        <div className="col-span-12 sm:col-span-3">
                            <div className="flex flex-col justify-center text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ">
                                <FcBriefcase className="text-7xl"/>
                                <h3 className="text-3xl font-semibold">Work History</h3>
                                
                            </div>
                        </div>
                        <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
                            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-black">
                                    <h3 className="text-xl font-semibold tracking-wide">Software Development Intern</h3>
                                    <time className="text-xs tracking-wide uppercase ">Feb 2025 - May 2025</time>
                                    <p className="mt-3 flex flex-row gap-5 text-xl"> <img src={exampleImage1} alt="" className="w-10 h-10 "/>Sysnova Information Systems Limited</p>
                                    <p><li>  Developed two ReactJS-based web applications: a Digital Asset Management (DAM) system and a Dashboard Template, focusing on reusable components, responsive design, and clean code structure.</li>
<li>   Collaborated on GNU Health (an ERP for healthcare) by tracing bugs, analyzing modules, and reviewing code functionalities.</li>
<li> Technologies used: ReactJS, JavaScript, HTML5, CSS3, Tailwind, Git,Python and Trytond (Python framework of GNU Health).</li></p>
                                </div>
                                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-black">
                                    <h3 className="text-xl font-semibold tracking-wide">Student Tutor</h3>
                                    <time className="text-xs tracking-wide uppercase ">Oct 2022 - Dec 2022</time>
                                    <p className="mt-3 flex flex-row gap-5 text-xl"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-9nh7_7_NzXRJ29p1HHmE8BpI7mt-hIuxA&s" alt="" className="w-10 h-10"/> Brac University</p>
                                    <p>
                                       <li> Tutored students in structured programming languages, facilitating their learning and improving their coding skills.</li>
                                       <li> Evaluated and provided feedback on lab assignments, ensuring students met academic standards and understood key concepts.</li>
                                    </p>
                                </div>
                               
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            
        </div>
    );
};

export default WorkHistory;