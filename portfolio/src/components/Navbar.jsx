import React from "react";

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-10 bg-transparent border-b">
      <div className="text-xl font-bold text-orange-300">
        Laurence Jade Deocareza
      </div>
      <ul className="flex gap-6 list-none m-0">
        <li>
          <a href="#about" className="hover:text-blue-400 transition-colors">
            About
          </a>
        </li>
        <li>
          <a href="#projects" className="hover:text-blue-400 transition-colors">
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" className="hover:text-blue-400 transition-colors">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
