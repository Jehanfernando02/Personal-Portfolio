import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-16"
    >
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-primary to-secondary text-light-text rounded-lg">
        <motion.h2
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold mb-4"
        >
          Welcome to My Portfolio
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-xl md:text-2xl max-w-2xl mx-auto"
        >
          I'm a passionate web developer creating stunning and functional websites.
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Skills</h2>
        <ul className="flex flex-wrap justify-center gap-4">
          {[
            "HTML5 & CSS3",
            "JavaScript & React",
            "Node.js & Express",
            "Python & Django",
            "Git & GitHub",
          ].map((skill) => (
            <motion.li
              key={skill}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white text-primary px-6 py-3 rounded-full font-semibold shadow-card hover:shadow-lg transition transform hover:-translate-y-1"
            >
              {skill}
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Recent Projects Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
          Recent Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white p-6 rounded-lg shadow-card hover:shadow-lg transition"
            >
              <h3 className="text-xl md:text-2xl font-semibold text-secondary mb-3">
                Project Name {project}
              </h3>
              <p className="text-sm md:text-base">
                A brief description of the project, highlighting its purpose and technologies used.
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Connect With Me Section */}
      <section className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">
          Connect With Me
        </h2>
        <div className="flex justify-center space-x-4">
          {[
            {
              name: "LinkedIn",
              url: "https://www.linkedin.com/in/jehan-fernando-/",
            },
            {
              name: "GitHub",
              url: "https://github.com/Jehanfernando02",
            },
          ].map((social) => (
            <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-primary text-light-text px-6 py-3 rounded-full font-semibold hover:bg-secondary transition transform hover:-translate-y-1"
            >
              {social.name}
            </motion.a>
          ))}
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="text-center py-16 bg-primary text-light-text rounded-lg">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Let's Work Together
        </h2>
        <p className="text-xl md:text-2xl mb-8">
          I'm always open to new opportunities and collaborations.
        </p>
        <Link
          to="/contact"
          className="bg-accent text-light-text px-8 py-3 rounded-full font-semibold hover:bg-secondary transition transform hover:-translate-y-1 inline-block"
        >
          Get in Touch
        </Link>
      </section>
    </motion.div>
  );
}

export default Home;