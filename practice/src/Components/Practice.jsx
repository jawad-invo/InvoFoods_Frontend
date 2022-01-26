import React from "react";
var GreetStyle = {};

const Practice = () => {
  var greetings = "";
  const time = new Date().getHours();

  if (time >= 1 && time < 12) {
    greetings = "Good Morning";
    GreetStyle.color = "Yellow";
  } else if (time >= 12 && time < 19) {
    greetings = "Good Afternoon";
    GreetStyle.color = "Blue";
  } else {
    greetings = "Good Night";
    GreetStyle.color = "Black";
  }

  return (
    <>
      <div className="greetContainer">
        <h1 style={GreetStyle}>Hello...{greetings}</h1>
      </div>
    </>
  );
};

const Calculator = (props) => {
  return (
    <ol>
      <li>Sum of two numbers is {Math.round(parseInt(props.n1) + parseInt(props.n2))}</li>
      <li>Difference of two numbers is {Math.round(props.n1 - props.n2)}</li>
      <li>Multiplication of two numbers is {Math.round(props.n1 * props.n2)}</li>
      <li>Division of two numbers is: {Math.round(props.n1 / props.n2)}</li>
    </ol>
  );
};

const GetName = (props) => {
  return <h1>My name is {props.name}</h1>;
};

export default Practice;
export { Calculator, GetName };
