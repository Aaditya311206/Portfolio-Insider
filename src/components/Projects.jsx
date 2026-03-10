import { motion } from "framer-motion"

function Projects(){

const projects=[
{
title:"Dynamic Island Android",
desc:"Android app inspired by iPhone Dynamic Island UI."
},
{
title:"Sorting Visualizer",
desc:"Visualizes sorting algorithms like Quick Sort."
},
{
title:"Bookstore Database",
desc:"Database system for online bookstore."
}
]

return(

<section>

<h2>Projects</h2>

<div className="projects">

{projects.map((project,index)=>(
<motion.div
key={index}
className="project-card"
initial={{ opacity:0, y:60 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.6 }}
viewport={{ once:true }}
whileHover={{ scale:1.05 }}
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