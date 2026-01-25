import React, { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const ids = ["home", "about", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.6 },
    );

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const linkClass = (id) =>
    `transition-colors px-1 ${active === id ? "text-blue-400 border-b-2 border-blue-400" : "hover:text-blue-400"}`;

  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-6 bg-transparent border-b">
      <div className="text-xl font-bold text-orange-300">
        Laurence Jade Deocareza
      </div>
      <ul className="flex gap-6 list-none m-0">
        <li>
          <a
            href="#home"
            onClick={() => setActive("home")}
            className={linkClass("home")}
          >
            Home
          </a>
        </li>
        <li>
          <a
            href="#about"
            onClick={() => setActive("about")}
            className={linkClass("about")}
          >
            About
          </a>
        </li>
        <li>
          <a
            href="#projects"
            onClick={() => setActive("projects")}
            className={linkClass("projects")}
          >
            Projects
          </a>
        </li>
        <li>
          <a
            href="#contact"
            onClick={() => setActive("contact")}
            className={linkClass("contact")}
          >
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
