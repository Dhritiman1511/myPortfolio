import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-black text-white px-6 py-4 fixed w-full z-10 shadow-md">
      <div className="flex justify-between items-center container mx-auto">
        <div className="text-2xl font-bold">Dhritiman</div>

        <button
          className="md:hidden text-2xl focus:outline-none z-20"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <ul
          className={`fixed top-0 left-0 w-full h-screen bg-black flex flex-col items-center justify-center 
          space-y-8 text-xl transition-transform transform ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } md:static md:h-auto md:flex md:flex-row md:space-y-0 md:space-x-6 md:translate-x-0 md:bg-transparent`}
        >
          <li>
            <a
              href="#home"
              className="hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              About Me
            </a>
          </li>
          <li>
            <a
              href="#services"
              className="hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-green-400"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
          </li>
          <li className="md:hidden">
            <button
              className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              onClick={() => {
                setIsMenuOpen(false);
                window.open(
                  "https://www.linkedin.com/in/dhritiman-roy",
                  "_blank"
                );
              }}
            >
              Connect Me
            </button>
          </li>
        </ul>

        <button
          className="hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white px-6 py-2 rounded-full whitespace-nowrap text-sm md:text-base"
          onClick={() =>
            window.open("https://www.linkedin.com/in/dhritiman-roy", "_blank")
          }
        >
          Connect Me
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
