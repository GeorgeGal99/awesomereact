import Button from "./button";
import Message from "./message";


function Navbar(props) {
    let buttonArray = [];
    buttonArray = props.buttonArray;
    return (
        <div>
            <Message name={props.name}></Message>
            {buttonArray.map((btn) => {
                return (<Button handleClick={btn.handleClick} text={btn.text} ></Button>)
            })}
        </div>
    )
}

export default Navbar