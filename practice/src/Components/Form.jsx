import React, { useState } from "react";

const Form = () => {
  const [myInput, updatedInput] = useState("Hello");
  const updateHeading = (event) => {
    updatedInput(event.target.value);
  };
  return (
    <>
      <div class="screen">
        <h1>{myInput}</h1>
      </div>
      <input type="text" placeholder="Type anything" onChange={updateHeading} />
    </>
  );
};

export default Form;
