import React, {useState} from "react";
import OperatorButton from "./OperatorButton";

//import any components needed

//Import your array data to from the provided data file

 const Operators = (props) => {
  // STEP 2 - add the imported data to state
  const operatorsData=props.operators;
  let [operatorState, setOperatorState]=useState(operatorsData);
  
  return (

       operatorsData.operators.map(operator=>{
         return (<OperatorButton operator={operator}/>);
       })

  );
};

export default Operators;