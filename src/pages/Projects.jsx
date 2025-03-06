import { motion } from "framer-motion";

function Projects() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Title Section */}
      <h1 className="text-2xl md:text-4xl font-bold text-primary text-center mb-12">
        General Blogs / Projects
      </h1>

      {/* Blog Post Article */}
      <motion.article
        whileHover={{ scale: 1.02 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="bg-white p-6 md:p-8 rounded-lg shadow-card"
      >
        <h2 className="text-lg md:text-2xl font-bold text-secondary mb-2">
          Mind-Blowing HTML5 Features That Will Level Up Your Website
        </h2>
        <time dateTime="2024-10-28" className="text-gray-600 mb-4 block text-sm md:text-base">
          📅 October 28, 2024
        </time>
        <p className="text-sm md:text-base mb-4">
          HTML5 brings amazing features that most developers don't fully use.
          Here are some of my favorites:
        </p>
        <h4 className="text-base md:text-xl font-semibold mb-2">Forms That Don't Suck</h4>
        <ul className="list-disc list-inside mb-4 space-y-1 text-sm md:text-base">
          <li>📧 Email validation</li>
          <li>🎨 Color pickers</li>
          <li>📱 Smart keyboards for phone numbers</li>
          <li>🔍 Search boxes with instant clear</li>
        </ul>
        <h4 className="text-base md:text-xl font-semibold mb-2">Smart Features That Feel Like Magic</h4>
        <ul className="list-disc list-inside space-y-1 text-sm md:text-base">
          <li>📍 Location detection</li>
          <li>🎤 Voice recognition</li>
          <li>🎥 Built-in video player</li>
          <li>🌐 Offline website support</li>
        </ul>
      </motion.article>

      {/* Project Articles */}
      {[
        {
          title: "Fitness Tracker",
          description:
            "A fitness tracker app where users log their workouts, view their history, and manage their progress.",
          url: "https://github.com/Jehanfernando02/Fitness-Tracker.git",
        },
        {
          title: "Imperial Fit",
          description:
            "A gym-based e-commerce platform with a product catalog, fitness blogs, workout programs, and cash-on-delivery options.",
          url: "https://github.com/Jehanfernando02/Imperial-Fit.git",
        },
      ].map((project, index) => (
        <motion.article
          key={index}
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="bg-white p-6 md:p-8 rounded-lg shadow-card text-center"
        >
          <h2 className="text-lg md:text-2xl font-bold text-secondary mb-4">
            Project - {project.title}
          </h2>
          <p className="text-sm md:text-base mb-6">{project.description}</p>
          <a
            href={project.url}
            className="inline-block bg-primary text-light-text px-4 py-2 rounded-full font-semibold hover:bg-secondary transition transform hover:-translate-y-1 text-sm md:text-base"
            target="_blank"
            rel="noopener noreferrer"
          >
            View on GitHub
          </a>
        </motion.article>
      ))}
    </motion.div>
  );
}

export default Projects;