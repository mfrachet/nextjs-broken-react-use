import React, { useState, useEffect } from "react";
import { useCookie } from "react-use";

const Demo = () => {
  const [value, updateCookie, deleteCookie] = useCookie("my-cookie");
  const counterNumber = Number(value?.substring(18)) || 0;
  const [counter, setCounter] = useState(counterNumber);

  const updateCookieHandler = () => {
    setCounter((c) => c + 1);
    updateCookie(`my-awesome-cookie-${counter+1}`);
  };

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={updateCookieHandler}>Update Cookie</button>
      <br />
      <button onClick={deleteCookie}>Delete Cookie</button>
    </div>
  );
};

export default Demo;
