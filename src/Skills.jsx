const skills = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/HTML5_logo_black.svg/1024px-HTML5_logo_black.svg.png", alt: "HTML" },
  { src: "https://cdn.freebiesupply.com/logos/large/2x/css3-logo-svg-vector.svg", alt: "CSS" },
  { src: "https://static.vecteezy.com/system/resources/previews/027/127/463/non_2x/javascript-logo-javascript-icon-transparent-free-png.png", alt: "JavaScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1150px-React-icon.svg.png", alt: "React" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/3/31/Python-logo.png", alt: "Python" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNhoXisDruJMDAq3Ltd-wuaMW2lGxck9wAKw&s", alt: "Tailwind" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png", alt: "Node" },
  { src: "https://www.logo.wine/a/logo/MySQL/MySQL-Logo.wine.svg", alt: "MySQL" },
  { src: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png", alt: "MongoDB" },
  { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRS1AMpf4IHh1P1pyz5PitfljeW07RzJbp_-g&s", alt: "PostgreSql" },
  { src: "https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png", alt: "FireBase" },
  { src: "https://images.seeklogo.com/logo-png/42/2/jwt-logo-png_seeklogo-428033.png", alt: "JWT" },
];

const Skills = () => {
  return (
    <section id="skills" className="text-black py-10">
      <div className="container mx-auto text-center">
        <h2 className="text-5xl font-bold mb-8">Technical Skills</h2>
        <div className="overflow-hidden whitespace-nowrap">
          <div className="inline-block animate-marquee">
            {skills.concat(skills).map((skill, index) => ( // duplicate for smooth loop
              <img
                key={index}
                src={skill.src}
                alt={skill.alt}
                className="w-20 h-20 mx-6 inline-block"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
