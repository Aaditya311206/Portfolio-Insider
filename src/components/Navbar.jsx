import { FaUser, FaBriefcase, FaEnvelope } from "react-icons/fa"
import { AiOutlineHome } from "react-icons/ai"

function Navbar() {
  return (

    <div className="floating-navbar">

      <a href="#home" className="nav-circle">
        <AiOutlineHome />
        <span>Home</span>
      </a>

      <a href="#about" className="nav-circle">
        <FaUser />
        <span>About</span>
      </a>

      <a href="#projects" className="nav-circle">
        <FaBriefcase />
        <span>Projects</span>
      </a>

      <a href="#contact" className="nav-circle">
        <FaEnvelope />
        <span>Contact</span>
      </a>

    </div>

  )
}

export default Navbar