import { motion } from "framer-motion"

function Skills(){

const skills=[
"JavaScript",
"React",
"HTML",
"CSS",
"Git",
"Java",
"Python"
]

return(

<section>

<h2>Skills</h2>

<div className="skills">

{skills.map((skill,index)=>(
<motion.div
key={index}
className="skill-card"
whileHover={{ scale:1.2 }}
whileTap={{ scale:0.9 }}
initial={{ opacity:0, y:40 }}
whileInView={{ opacity:1, y:0 }}
transition={{ duration:0.5 }}
viewport={{ once:true }}
>
{skill}
</motion.div>
))}

</div>

</section>

)

}

export default Skills