import { FaBehance, FaDribbble, FaInstagram } from 'react-icons/fa';
import { IconContext } from "react-icons";

// eslint-disable-next-line no-unused-vars
import socialCSS from "./Social.css"

const Social = () => {
    return ( 
        

            <IconContext.Provider value={{ className: "myIcon"}}>
                
            <div className="links">

                <a href='#behance'>
                <FaBehance/>
                </a>
                <a href='#dribbble'>
                <FaDribbble/>
                </a>
                <a href='#insta'>
                <FaInstagram/>
                </a>
            </div>
            </IconContext.Provider>

            
     );
}
 
export default Social;