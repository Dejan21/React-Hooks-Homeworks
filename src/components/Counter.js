
import React, {useState} from "react";

const Counter = (props) => {

     // let counter = 0;
  const [counter, setCounter] = useState(0);

  const increment = () => {
   //  counter = counter +1;
   //  console.log(counter)

   setCounter(counter + 1);
  };
    return (
        <div className="Counter">
            <h1>{counter}</h1>
          <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;