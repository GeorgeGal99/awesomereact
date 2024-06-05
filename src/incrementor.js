import { useState } from "react";


function Incrementor() {

    const [counter, setCounter] = useState(1);
    const [name, setName] = useState("George");

    function Plus() {
        let newCounter = counter + 1
        setCounter(newCounter)
        if (newCounter >= 10) {
            setName("Gabi")
        }
    }

    function Minus() {
        let newCounter = counter - 1
        setCounter(newCounter)
        if (newCounter < 10) {
            setName("Radu")
        }

    }
    return (

        <>
            <button onClick={Plus}>+</button>
            <p>{counter < 18 ? "Esti prea  tanar" : counter},{name}</p>
            <button onClick={Minus}>-</button>
        </>
    )



}
export default Incrementor