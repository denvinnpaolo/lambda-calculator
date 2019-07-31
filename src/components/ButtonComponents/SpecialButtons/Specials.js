import React, {useState} from "react";
import SpecialButton from "./SpecialButton";

//import any components needed

//Import your array data to from the provided data file

const Specials = (props) => {
  // STEP 2 - add the imported data to state
  const specialsData=props.specials;
  let [specialState, setSpecialState]=useState(specialsData);

  return (
    <div>
      {/* STEP 3 - Use .map() to iterate over your array data and return a button
       component matching the name on the provided file. Pass
       it any props needed by the child component*/
       
       specialsData.specials.map(special=>{
        return <SpecialButton special={special} onClick={()=>setSpecialState(specialsData.special.value)}/>;
       })
      }
    </div>
  );
};
export default Specials;
