import "./portfolioCSS.css";
import Title from "./Title"
import Button from "./Button"
import image1 from '../images/projects/image-1.jpg';
import image3 from '../images/projects/image-3.jpg';
import image4 from '../images/projects/image-4.jpg';
import image5 from '../images/projects/image-5.jpg';



const Portfolio = () => {
    return ( 
        <div className="portfolio" id="portfolio">
            <div className="container">
                <Title text="Portfolio"/>
                <div className="cards">
                    <div className="card">
                        <div className="containers">
                        <span>
                        <img src={image1} alt="" />
                        </span>
                        <div className="info">
                            <h3>First Project</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo nesciunt.</p>
                        </div>
                        </div>
                        <div className="btn">
                        <Button className="primary" name="githup"/>
                        <Button className="secondary" name="live demo"/>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="containers">
                        <span>
                        <img src={image3} alt="" />
                        </span>
                        <div className="info">
                            <h3>First Project</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo nesciunt.</p>
                        </div>
                        </div>
                        <div className="btn">
                        <Button className="primary" name="githup"/>
                        <Button className="secondary" name="live demo"/>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="containers">
                        <span>
                        <img src={image4} alt="" />
                        </span>
                        <div className="info">
                            <h3>First Project</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo nesciunt.</p>
                        </div>
                        </div>
                        <div className="btn">
                        <Button className="primary" name="githup"/>
                        <Button className="secondary" name="live demo"/>
                        </div>
                    </div>
                   
                    <div className="card">
                        <div className="containers">
                        <span>
                        <img src={image5} alt="" />
                        </span>
                        <div className="info">
                            <h3>First Project</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum quo nesciunt.</p>
                        </div>
                        </div>
                        <div className="btn">
                        <Button className="primary" name="githup"/>
                        <Button className="secondary" name="live demo"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Portfolio;