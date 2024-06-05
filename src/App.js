import Incrementor from "./incrementor";
import Header from "./components/header";

function App() {
  const name = "George";
  const buttonArray = [{ handleClick: (e) => { alert(e.target) }, text: "Home" },
  { handleClick: (e) => { alert(e.target) }, text: "Contact" }];
  return (
    <div>
      <Header buttonArray={buttonArray} name={name}></Header>
      <Incrementor></Incrementor>
    </div>
  );
}

export default App;

