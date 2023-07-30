import React, { useContext } from "react";
import { TextContext } from "./context/context";

function Text5() {
  const { name, log } = useContext(TextContext);

  return (
    <div>
      My name is {name}
      <button onClick={log}>Click me</button>
    </div>
  );
}

export default Text5;
