import { useState } from "react";
import context from "./Context";
const State = (props) => {
  const [menuOn, setMenuOn] = useState(false);
  return (
    <context.Provider value={{ menuOn, setMenuOn }}>
      {props.children}
    </context.Provider>
  );
};

export default State;
