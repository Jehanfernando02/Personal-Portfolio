import { motion } from "framer-motion";

function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-12"
    >
      {/* Profile Section */}
      <section className="flex flex-col md:flex-row items-center gap-8 bg-white p-6 md:p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <img
          src="/assets/jehan.jpg"
          alt="Jehan Fernando's profile picture"
          className="w-24 h-24 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary shadow-md"
        />
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Jehan Fernando</h2>
          <p className="text-sm md:text-base">
            I am a second-year undergraduate at the Informatics Institute of Technology, affiliated with the University
            of Westminster, UK. Passionate about Full Stack Development, I'm constantly expanding my knowledge in modern
            programming languages and frameworks.
          </p>
          <p className="text-sm md:text-base mt-4">
            With a strong foundation in web technologies and version control using Git, I am driven by a desire to build
            efficient, scalable, and user-centric applications. My goal is to contribute to the tech industry by
            developing innovative solutions that solve real-world problems, while continuously evolving my skills in
            back-end and front-end development.
          </p>
          <p className="text-sm md:text-base mt-4">
            I am eager to work on projects that challenge my creativity and technical abilities, and I look forward to
            collaborating with like-minded professionals in the field.
          </p>
        </div>
      </section>

      {/* Recent Events Section */}
      <section>
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-8 text-center">
          Recent Events
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "AWS User Group Colombo Workshop",
              image: "/assets/jehanfdo.jpg",
              description:
                "I attended an AWS User Group Colombo workshop at Virtusa Sri Lanka, where Donnie Prakoso delivered an insightful session on Generative AI. His session sparked my interest in exploring AI technologies further.",
            },
            {
              title: "Sri Lanka Developer Forum Meetup",
              image: "/assets/jehan-virtusa.jpg",
              description:
                "Recently, I participated in the Sri Lanka Developer Forum May meetup at Microsoft Sri Lanka. This event emphasized mastering C#/.NET and the importance of continuous learning, marking a key moment in my development as a Software Engineer.",
            },
          ].map((event, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100 hover:border-primary/20 transition-colors duration-300"
            >
              <div className="relative w-full h-40 md:h-52 p-4 bg-gray-50">
                <img
                  src={event.image || "/placeholder.svg"}
                  alt={`Event: ${event.title}`}
                  className="w-full h-full object-contain rounded-md"
                />
              </div>
              <div className="p-4 md:p-6">
                <h3 className="text-lg md:text-xl font-semibold text-secondary mb-3">{event.title}</h3>
                <p className="text-sm md:text-base">{event.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}

export default About;