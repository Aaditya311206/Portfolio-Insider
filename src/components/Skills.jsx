import { motion } from "framer-motion"
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaJava, FaPython } from "react-icons/fa"

function Skills(){

const skills=[
{icon:<FaReact/>,name:"React"},
{icon:<FaJs/>,name:"JavaScript"},
{icon:<FaHtml5/>,name:"HTML"},
{icon:<FaCss3Alt/>,name:"CSS"},
{icon:<FaJava/>,name:"Java"},
{icon:<FaPython/>,name:"Python"}
]

return(

<section id="skills">

<h2>Skills</h2>

<div className="skills">

{skills.map((skill,index)=>(

<motion.div
key={index}
className="skill-card"
initial={{opacity:0,y:40}}
whileInView={{opacity:1,y:0}}
whileHover={{scale:1.2}}
transition={{duration:0.5}}
>

<div className="icon">{skill.icon}</div>

<p>{skill.name}</p>

</motion.div>

))}

</div>

</section>

)

}

export default Skills