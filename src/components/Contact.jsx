import { motion } from "framer-motion"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"

function Contact(){

return(

<section id="contact">

<h2>Contact</h2>

<motion.div
className="contact-card"
initial={{opacity:0,y:50}}
whileInView={{opacity:1,y:0}}
transition={{duration:0.6}}
whileHover={{scale:1.05}}
>

<div className="contact-icon">
<FaEnvelope/>
</div>

<h3>Aadi</h3>

<p>Second Year Computer Science Student </p>

<div className="contact-links">

<a href="mailto:aadi@email.com">
<FaEnvelope/> Email
</a>

<a href="https://github.com">
<FaGithub/> GitHub
</a>

<a href="https://linkedin.com">
<FaLinkedin/> LinkedIn
</a>

</div>

</motion.div>

</section>

)

}

export default Contact