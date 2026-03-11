import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import { motion, useScroll } from "framer-motion"

function App() {

const {scrollYProgress} = useScroll()

return (
<>

<motion.div
className="scroll-bar"
style={{scaleY:scrollYProgress}}
/>

<Navbar/>
<Hero/>
<About/>
<Skills/>
<Projects/>
<Contact/>

</>
)

}

export default App