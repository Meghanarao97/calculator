import React, { useState } from "react";

export default function Calculator() {
  const [result, setResult] = useState("");
  const handleClick = (event) => {
    setResult(result.concat(event.target.value));
  };
  const clearDisplay = (event) => {
    setResult("");
  };
  const calculate = () => {
    // eslint-disable-next-line no-eval
    setResult(eval(result).toString());
  };
  return (
    <div className="calc">
      Calculator
      <input type="text" placeholder="0" id="answer" value={result} />
      <input
        type="button"
        value={"0"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"1"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"2"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"3"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"4"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"5"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"6"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"7"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"8"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"9"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"+"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"-"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"*"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"/"}
        className="button"
        onClick={handleClick}
      />
      <input
        type="button"
        value={"DEL"}
        className="button"
        onClick={clearDisplay}
      />
      <input type="button" value={"="} className="button" onClick={calculate} />
    </div>
  );
}
