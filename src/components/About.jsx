import { motion } from "framer-motion"

function About(){

return(

<section id="about">

<motion.h2
initial={{opacity:0}}
whileInView={{opacity:1}}
transition={{duration:0.8}}
>
About Me
</motion.h2>

<motion.p
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.8}}
>

I am a Computer Science student passionate about building web
applications and solving algorithmic problems. I enjoy working
with React, JavaScript and exploring new technologies.

</motion.p>

</section>

)

}

export default About