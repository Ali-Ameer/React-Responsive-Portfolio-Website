import style from './Button.css';
const Button = (props) => {
    return ( 
        <button href={props.link} style={style} className={props.className}>{props.name}{props.icon}</button>
     );
}
 
export default Button;