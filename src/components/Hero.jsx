import { useState, useEffect } from "react";
import image from "../assets/image.png";

function Hero() {
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const titles = [
    "Web Designer",
    "Frontend Developer",
    "Backend Developer",
    "Full-Stack Developer",
    "Flutter Developer",
    "Data Analyst",
  ];

  const [currentTitle, setCurrentTitle] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [typingIndex, setTypingIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 100; // Typing and deleting speeds
    const timeout = setTimeout(() => {
      if (!isDeleting && typingIndex < titles[titleIndex].length) {
        setTypingIndex((prev) => prev + 1); // Typing letters
      } else if (isDeleting && typingIndex > 0) {
        setTypingIndex((prev) => prev - 1); // Deleting letters
      } else if (!isDeleting && typingIndex === titles[titleIndex].length) {
        setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
      } else if (isDeleting && typingIndex === 0) {
        setIsDeleting(false); // Switch to the next title
        setTitleIndex((prev) => (prev + 1) % titles.length); // Loop titles
      }
    }, typingSpeed);

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [typingIndex, isDeleting, titleIndex, titles]);

  useEffect(() => {
    setCurrentTitle(titles[titleIndex].slice(0, typingIndex)); // Update displayed text
  }, [titles, titleIndex, typingIndex]);

  return (
    <div className="bg-black text-white text-center py-16 px-4">
      <img
        src={image}
        alt="Profile"
        className="mx-auto mt-10 mb-8 w-48 h-48 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        I&apos;m a{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          {currentTitle}
        </span>
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-200 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() => {
            document
              .getElementById("contact")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        >
          Contact With Me
        </button>

        <button
          className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white transform transition-transform duration-200 hover:scale-105 px-4 py-2 rounded-full"
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1vEDjlnszpVly9NZjkkUp03akeivsr5pk/view?usp=sharing",
              "_blank"
            )
          }
        >
          Resume
        </button>
      </div>
    </div>
  );
}

export default Hero;
