import { motion } from "framer-motion"

function Hero() {
  return (
    <section className="hero">

      <motion.h1
        initial={{ opacity: 0, y: -60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Hi I'm <span>Aadi</span> 👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Computer Science Student | React Developer
      </motion.p>

      <motion.div
        className="buttons"
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <button className="primary">View Projects</button>
        <button className="secondary">Contact</button>
      </motion.div>

    </section>
  )
}

export default Hero