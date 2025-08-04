import { Link } from 'react-scroll';

const Navbar = () => {
    return (
   <div className="">
<div className="navbar bg-slate-200">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><Link to="home" smooth={true} duration={500}>Home</Link></li>
        <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
        <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
        <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
        <li><Link to="education" smooth={true} duration={500}>Education</Link></li>
        <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Ukasha</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal text-xl px-1">
      <li><Link to="home" smooth={true} duration={900}>Home</Link></li>
      <li><Link to="experience" smooth={true} duration={500}>Experience</Link></li>
      <li><Link to="projects" smooth={true} duration={900}>Projects</Link></li>
      <li><Link to="skills" smooth={true} duration={900}>Skills</Link></li>
      <li><Link to="education" smooth={true} duration={900}>Education</Link></li>
      <li><Link to="contact" smooth={true} duration={900}>Contact</Link></li>
    </ul>
  </div>
</div>

   </div>
    );
};

export default Navbar;