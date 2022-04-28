import Button from ".//Button";
import meIMG from "../images/man1.jpg";
import "./about.css"
const About = () => {
    return (
      <div className="about" id="about">
        <div className="container">

          <div className="about-card">
            <div className="left">
              <img src={meIMG} alt="" />
            </div>

            <div className="right">
              <h2>Why Choose me?</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Perspiciatis mollitia magnam earum animi tempore ea iusto
                tempora cupiditate? Expedita harum vero nostrum. Dignissimos
                Perspiciatis mollitia magnam earum animi tempore ea iusto
                maiores beatae corporis autem nulla illo hic?
              </p>

              <h4>Here is a Few Features</h4>
              <ul>
                <li>full stack developer</li>
                <li>back end developer</li>
                <li>ui ux designer</li>
                <li>inerction design</li>
                <li>supper support</li>
              </ul>
              <div className="btn">
              <Button className="primary" name="Hire me" />
              <Button className="secondary" name="Get CV" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}
 
export default About;