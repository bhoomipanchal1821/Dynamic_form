import { useState } from "react";
import './Form.css'
const initialUserInput = {
  selling:100,
  buying: 150,
  duration: 1,
};

const UserInput = (props) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    props.onCalculate(userInput);
  };

  const resetHandler = () => {
    setUserInput(initialUserInput);
  };
  
  const inputChangeHandler = (input, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [input]: value,
      };
    });
  };
  return (
    <div>
      <div className=" bg-light w-50 h-50 mx-auto mt-5 p-5 rounded-4 shadow-lg">
      <form onSubmit={submitHandler}>
        <label htmlFor="buying" id="buying" className="form-label">
         Buying
        </label>
        <input
          onChange={(event) =>
            inputChangeHandler("buying", event.target.value)
          }
          value={userInput["buying"]}
          type="text"
          id="number"
          className="form-control"
        />

        <label htmlFor="selling" id="selling" className="form-label">
          Selling
        </label>
        <input
          onChange={(event) => inputChangeHandler("selling", event.target.value)}
          value={userInput["selling"]}
          type="number"
          id="buying"
          className="form-control"
        />
        <label htmlFor="duration" id="duration" className="form-label">
          duration
        </label>
        <input
          onChange={(event) =>
            inputChangeHandler("duration", event.target.value)
          }
          value={userInput["duration"]}
          type="number"
          id="duration"
          className="form-control"
        />

        <button
          onClick={resetHandler}
          type="reset"  
          className="btn btn-lg reset"
        >
          Reset
        </button>
        <button type="submit" className="btn btn-lg calculate">
          Calculate
        </button>
      </form>
    </div>
    </div>
  );
};
export default UserInput;
