
import './button.scss';

const Button = (props) => (
        <button className={`button-container ${props.className}`} onClick={props.onClick}>{props.name}</button>
)

export default Button;