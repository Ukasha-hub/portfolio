
import exampleImage from './assets/image.jpg';
import exampleImage2 from './assets/black.jpg';
const Banner = () => {
    return (
        <div id='home'>

<div className="hero bg-white  min-h-screen" style={{backgroundImage:`url(${exampleImage2})`}}>
  <div className="hero-content  flex-col gap-10 lg:flex-row" >
    
    <div className='text-white'>
		<p className='font-semibold'>Hey there, I'm</p>
      <h1 className="text-5xl font-bold">Mehvish Rahman Ukasha</h1>
      <p className="py-6">
	 
I’m a quiet, introverted person and a proud cat lady with a deep passion for software engineering. I love tackling complex problems, can stay focused on my work for hours, and have the patience to debug even the trickiest code.

During university, I built a solid foundation in Python, Java, and some C, along with strong knowledge of OOP, Data Structures, Algorithms, and related subjects. I also worked on several web projects, gaining hands-on experience with HTML5, CSS3, JavaScript, PHP, and MySQL.

After graduation, I continued to grow my skills by completing an online course in the MERN stack (ReactJS, NodeJS, MongoDB) and developed multiple project assignments that helped me sharpen my full-stack development abilities.

I also completed a Software Developer Internship, where I gained practical experience working on real-world projects, applying my technical skills in a collaborative environment, and enhancing my understanding of software development processes.

Now, I’m eager to take on new challenges, contribute to impactful projects, and continue learning and growing as a software engineer.😁.

      </p>
      
    </div>
	<img
      src={exampleImage}
      className="w-full h-50 rounded-lg shadow-2xl" />
  </div>
</div>

            
        </div>
    );
};

export default Banner;