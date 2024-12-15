const services = [
  {
    id: 1,
    title: "Web Design",
    description: "Creating visually appealing and user-friendly web designs.",
  },
  {
    id: 2,
    title: "Frontend Development",
    description: "Building responsive and interactive user interfaces.",
  },
  {
    id: 3,
    title: "Backend Development",
    description: "Developing and maintaining server-side applications.",
  },
  {
    id: 4,
    title: "Full Stack Development",
    description:
      "Combining frontend and backend development for end-to-end web solutions.",
  },
  {
    id: 5,
    title: "Mentoring",
    description: "Guiding and teaching programming skills to students and professionals.",
  },
  {
    id: 6,
    title: "Flutter Development",
    description:
      "Developing cross-platform applications using Flutter.",
  },
  {
    id: 7,
    title: "Data Analysis",
    description:
      "Analyzing large datasets and providing insights for business decisions.",
  },
];


function Services() {
  return (
    <div className="bg-black text-white py-20" id="services">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="w-full sm:w-[300px] bg-gradient-to-b from-gray-800 to-gray-900 
              p-6 rounded-lg shadow-md hover:shadow-lg transform transition-transform 
              duration-300 hover:-translate-y-2"
            >
              <div className="text-right text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400 mb-2">
                {service.id}
              </div>
              <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
                {service.title}
              </h3>
              <p className="mt-4 text-gray-300 leading-relaxed">
                {service.description}
              </p>
              <a
                href="#"
                className="mt-6 inline-block text-white font-semibold bg-gradient-to-r from-green-400 to-blue-500 px-4 py-2 rounded-full 
                hover:from-blue-500 hover:to-green-400 transition-colors duration-300"
              >
                Read More
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
