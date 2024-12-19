import React from "react";
import { Link } from "react-router-dom";
import routes from "../reutes";

function Header() {
  return (
    <header>
      <nav>
        <ul>
          {routes.map(({ path, component: Component, name }, index) => (
            <li key={index}>
              <Link to={path} component={<Component />} className="link">
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
