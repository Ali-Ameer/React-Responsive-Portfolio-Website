import headerIMG from "../images/heroIMG.svg";
import Button from "./Button";
import MyWork from "./MyWork";
import Social from "./Social";

import { FaAngleDown } from 'react-icons/fa';

import "./header.css"
const Header = () => {
  return (
    <header id="header">
      <div className="container">
        <div className="left">
          <h1>Hi, I'M Ali Ameer</h1>
          <p>
            Full stack Developer, Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Id magni itaque quidem facere tempore perferendis
            aspernatur quisquam, eius ea libero rerum ullam doloremque modi Id
            magni itaque quidem facere enim.
          </p>
          <div className="header-btn">
          <Button className="primary" name="Hire me" />
          <Button className="secondary" link="#about" name={<span>more  <FaAngleDown/></span>} />
          
          </div>
          <MyWork/>
        </div>
        <div className="right">
          <img src={headerIMG} alt="" height="500" />
          <Social />
        </div>
      </div>
    </header>
  );
};

export default Header;
