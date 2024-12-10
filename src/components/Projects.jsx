import RecipU from "../assets/RecipU.png";
import Admin from "../assets/Admin.png";
import Todo from "../assets/ToDo.png";

const projects = [
  {
    id: 1,
    name: "RecipU",
    technology: "React JS + Node.js + PostgreSQL",
    image: RecipU,
    githubLink: "https://github.com/Dhritiman1511/Yupcha-Project",
  },
  {
    id: 2,
    name: "UserAdminPanel",
    technology: "Node.js + Express + MongoDB",
    image: Admin,
    githubLink: "https://github.com/Dhritiman1511/UserAdminPanel",
  },
  {
    id: 3,
    name: "TodoApp",
    technology: "React JS + Context Api",
    image: Todo,
    githubLink: "https://github.com/Dhritiman1511/Todo",
  }
];
function Projects() {
  return (
    <div className="bg-black text-white py-20" id="projects">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technology}</p>
              <a
                href={project.githubLink}
                className="hover:text-blue-500 inline-block bg-gradient-to-r from-green-400 to to-blue-500 text-white px-4 py-2 rounded-full"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
