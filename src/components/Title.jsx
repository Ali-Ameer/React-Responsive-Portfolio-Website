import Title_css from './Title.css';
const Title = (props) => {
    return ( 
        <h1 className='title' style={Title_css}>{props.text}</h1>
     );
}
 
export default Title;