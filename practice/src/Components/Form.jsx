import React, { useState } from "react";

const Form = () => {
  const [myInput, updatedInput] = useState("Hello");

  const [formInput, updatedFormInput] = useState({
    firstName: "",
    lastName: "",
  });

  const updateHeading = (event) => {
    updatedInput(event.target.value);
  };

  const myEvent = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    updatedFormInput((previousValue) => {
      if (name === "fName") {
        formInput.firstName = value;
        formInput.lastName = previousValue.lastName;
      }
      if (name === "lName") {
        formInput.lastName = previousValue.firstName;
        formInput.firstName = value;
      }
    });
  };

  return (
    <>
      <div className="screen">
        <h1>{myInput}</h1>
      </div>
      <input type="text" placeholder="Type anything" onChange={updateHeading} />

      <div className="form">
        <h1>
          Hello {formInput.firstName} {formInput.lastName}
        </h1>
        <form className="formFields">
          <input
            type="text"
            placeholder="First Name"
            name="fName"
            onChange={myEvent}
          />
          <input
            type="text"
            placeholder="Last Name"
            name="lName"
            onChange={myEvent}
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
};

export default Form;
