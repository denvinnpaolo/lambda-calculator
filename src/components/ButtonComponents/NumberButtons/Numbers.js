import React, { useState } from "react";
import NumberButton from "./NumberButton";

//import any components needed

//Import your array data to from the provided data file

const Numbers = (props) => {
  // STEP 2 - add the imported data to state
  const numbersData=props.numbers;
  let [numberState, setNumberState] = useState(numbersData.numbers); 
  // console.log(numberState);
    return (
      /* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       numbersData.numbers.map(number=>{
          return (<NumberButton className="num" number={number} />)
        })
  
  );
};
// Numbers(numbersData);
export default Numbers;