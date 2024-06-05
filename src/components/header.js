import Navbar from "./navbar";

function Header(props) {
    return (
        <>
            <Navbar buttonArray={props.buttonArray} name={props.name}></Navbar>
        </>
    )

}

export default Header