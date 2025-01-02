import { FcGraduationCap } from "react-icons/fc";

const Education = () => {
    return (
        <div id="education">


<section className="bg-black text-white mt-5">
	<div className="container max-w-5xl px-4 py-12 mx-auto">
		<div className="grid gap-4 mx-4 sm:grid-cols-12">
			<div className="col-span-12 sm:col-span-3">
				<div className="flex flex-col justify-center text-center sm:text-left mb-14 before:block before:w-24 before:h-3 before:mb-5 before:rounded-md before:mx-auto sm:before:mx-0 ">
                <FcGraduationCap className="text-7xl"/>
                    <h3 className="text-3xl font-semibold">Educational Background</h3>
					
				</div>
			</div>
			<div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
				<div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-300">
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white">
						<h3 className="text-xl font-semibold tracking-wide">Master of Science in Computer Science and Engineering </h3>
						<time className="text-xs tracking-wide uppercase ">Oct 2024 - Present</time>
						<p className="mt-3 flex flex-row gap-5"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-9nh7_7_NzXRJ29p1HHmE8BpI7mt-hIuxA&s" alt="" className="w-10 h-10"/> Brac University</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white">
						<h3 className="text-xl font-semibold tracking-wide">Bachelor of Science in Computer Science and Engineering</h3>
						<time className="text-xs tracking-wide uppercase ">January 2020 - January 2024</time>
                        <p className="mt-3 flex flex-row gap-5"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTw-9nh7_7_NzXRJ29p1HHmE8BpI7mt-hIuxA&s" alt="" className="w-10 h-10"/> Brac University</p>
					</div>
					<div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white">
						<h3 className="text-xl font-semibold tracking-wide">Higher Secondary School Certificate (HSC)</h3>
						<time className="text-xs tracking-wide uppercase ">July 2019</time>
                        <p className="mt-3 flex flex-row gap-5"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnc6_7SrApJ34Uy-YhugSVOfx4VpTSr2pLvg&s" alt="" className="w-10 h-10"/> YWCA Higher Secondary Girls' School</p>
					</div>
                    <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-white">
						<h3 className="text-xl font-semibold tracking-wide">Secondary School Certificate (SSC)</h3>
						<time className="text-xs tracking-wide uppercase ">May 2017</time>
                        <p className="mt-3 flex flex-row gap-5"> <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVDhKjyi_5OZNf4HEPz7iLZkIr4d97fMvafw&s" alt="" className="w-10 h-10"/> Dhanmondi Kamrunnesa govt girls high school </p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
            
        </div>
    );
};

export default Education;