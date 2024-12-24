import { Link } from "react-router-dom";
import { useState } from "react";
import navItems from "./navItems.js";
import "../styles/components/Navbar.scss"

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleMouseEnter = (index) => setActiveDropdown(index);
  const handleMouseLeave = () => setActiveDropdown(null);

  return (
    <nav>
      <ul className="nav-list">
        {navItems.map((item, index) => (
          <li
            key={item.title}
            className="nav-item"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <Link to={item.path}>{item.title}</Link>
            {item.subItems && activeDropdown === index && (
              <ul className="dropdown">
                {item.subItems.map((subItem) => (
                  <li key={subItem.title}>
                    <Link to={subItem.path}>{subItem.title}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
