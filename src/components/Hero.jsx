import { motion } from "framer-motion"
import { Typewriter } from "react-simple-typewriter"

function Hero(){

return(

<section className="hero">

<motion.h1
initial={{opacity:0,y:-60}}
animate={{opacity:1,y:0}}
transition={{duration:1}}
>

<Typewriter
words={[
"Hi I'm Aaditya 👋",
"Second Year",
"Computer Science Student"
]}
loop
cursor
cursorStyle="|"
typeSpeed={70}
deleteSpeed={40}
/>

</motion.h1>

<motion.div
className="buttons"
initial={{opacity:0,y:60}}
animate={{opacity:1,y:0}}
transition={{delay:1}}
>

<button className="primary"><a href="#projects">View Projects</a></button>
<button className="secondary"><a href="#contact">Contact</a></button>

</motion.div>

</section>

)

}

export default Hero