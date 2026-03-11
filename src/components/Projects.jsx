import { motion } from "framer-motion"

function Projects(){

const projects=[
{
title:"Stock Predict",
desc:"You can predict the price of a stock and win prizes."
},
{
title:"DistraX",
desc:"A distraction-blocking app to help you stay focused."
},
{
title:"Flappy Modi",
desc:"A fun twist on the classic Flappy Bird game."
},
]

return(

<section id="projects">

<h2>Projects</h2>

<div className="projects">

{projects.map((project,index)=>(

<motion.div
key={index}
className="project-card"
initial={{opacity:0,y:60}}
whileInView={{opacity:1,y:0}}
whileHover={{
rotateX:10,
rotateY:10,
scale:1.05
}}
transition={{duration:0.4}}
>

<h3>{project.title}</h3>
<p>{project.desc}</p>

</motion.div>

))}

</div>

</section>

)

}

export default Projects