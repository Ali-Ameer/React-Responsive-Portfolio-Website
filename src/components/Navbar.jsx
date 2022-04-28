import { useState } from "react";
import { RiCloseLine, RiMenu3Line } from "react-icons/ri";

import "./navbar.css";


const MenuItems = () => (
  <>
    <a href="#header">Home</a>
    <a href="#about">About</a>
    <a href="#portfolio">Portfolio</a>
    <a href="#contact">Contact</a>
  </>
);


const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="navbar">
      <div className="container">
        <div className="col">
          <h3>Logo</h3>

          <nav>
            <MenuItems />
          </nav>

          <div className="menu">
          {toggleMenu ? 
            <RiCloseLine
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
           : 
            <RiMenu3Line
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          }
          {toggleMenu && (
            <div className="nav-menu">
              <div className="nav-menu_scale">
                <MenuItems />
              </div>
            </div>)
          }
        </div>
        
        </div>

        
      </div>
    </div>
  );
};

export default Navbar;
