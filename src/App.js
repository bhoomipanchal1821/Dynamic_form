import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import UserInput from "./Components/Form/Form";
import Table from "./Components/Table/Table";
import { useState } from "react";
function App() {
  const [userInput, setUserInput] = useState(null);

  
  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };
  const pricing = [];
  if (userInput) {
    let selling = userInput["selling"];
    const buying = userInput["buying"];
    const duration = userInput["duration"];

    for (let i = 0; i < duration; i++) {
      const totalprice = buying-selling;
      pricing.push({
        totalprice:totalprice
      })
    }
  }
  return (
    <div className="App">
      <UserInput onCalculate={calculateHandler} />
      {!userInput && (
        <p className="text-center fs-2 text-light mt-5">
          No Investment calculated Yet
        </p>
      )}
      {userInput && (
        <Table data={pricing} initialInvestment={userInput["totalprice"]} />
      )}
    </div>
  );
}

export default App;
