

const Contact = () => {
    return (
        <div id="contact">

<section className="p-15 bg-gray-200 dark:text-gray-900">
	<div className="grid content-center justify-items-center max-w-6xl grid-cols-1 py-6 mx-auto p-8 ">
		<div className="p-20 rounded-2xl  bg-black text-white">
			<h1 className="text-7xl text-center font-bold pb-10">Contact Details</h1>
			
			<div className="space-y-4 flex flex-col justify-center content-center gap-3 justify-items-center text-lg items-center">
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
					</svg>
					<span>44/B Indira Road, Dhaka - 1215</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
					</svg>
					<span>+8801881983108</span>
				</p>
				<p className="flex items-center">
					<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
						<path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
						<path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
					</svg>
					<span>ukashajljl@gmail.com</span>
				</p>
                <button className="btn btn-wide"><a target="_blank"
        rel="noopener noreferrer" href="https://docs.google.com/document/d/1C_sBqAmffK6KNWS0nqv-22ZcwoQNHJdD8EQTrUFVbV0/edit?usp=sharing">View my CV</a></button>
			</div>
		</div>
		
	</div>
</section>
            
        </div>
    );
};

export default Contact;