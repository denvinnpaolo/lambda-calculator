import React, { useState } from "react";

const OperatorButton = (props) => {

  return (
    <>
      {<button className="button">{props.operator.char}</button>
            // console.log(props.operator.value)

        /* Display a button element rendering the data being passed down from the parent container on props */}
    </>
  );
};

export default OperatorButton;
