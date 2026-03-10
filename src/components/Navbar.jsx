function Navbar() {
  return (
    <nav className="flex justify-between p-5 bg-gray-800">
      <h1 className="text-xl font-bold">Portfolio</h1>

      <ul className="flex gap-6">
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar