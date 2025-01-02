
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
	 
I’m a quiet, introverted person, and a proud cat lady with a strong passion for software engineering. I love solving problems, have no issue staying focused on my work for hours, and have the patience needed to debug tricky code.
During university, I got pretty good at Python, Java, and some C. I also learned OOP, Data Structures, Algorithms, and other related courses. On top of that, I worked on a few website projects and picked up skills in HTML5, CSS3, JavaScript, a little PHP, and MySQL.
After graduation, I continued learning by joining an online course where I picked up ReactJS, NodeJS,  and MongoDB, and I completed some fun project assignments along the way.
I don’t have any industrial experience yet, but I’m excited to start working on real-world projects and show what I can do😁.

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