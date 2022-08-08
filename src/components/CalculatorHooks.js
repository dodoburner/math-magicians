import React, { useEffect, useState } from "react";
import RowHooks from "./RowHooks";
import calculate from "../logic/calculate";
import "../styles/calculator.css";

export default function CalculatorHook() {
  const [dataObj, setDataObj] = useState({
    total: null,
    next: null,
    operation: null,
  });

  function updateDataObj(event) {
    const value = event.target.textContent;
    setDataObj((prevDataObj) => calculate(prevDataObj, value));
  }

  function updateScreen() {
    const screen = document.querySelector(".screen");
    if (dataObj.next && !dataObj.total) {
      screen.textContent = dataObj.next;
    } else if (!dataObj.next && dataObj.total) {
      screen.innerHTML = dataObj.operation
        ? `${dataObj.total} <br> ${dataObj.operation}`
        : dataObj.total;
    } else if (!dataObj.total && !dataObj.next) {
      screen.innerHTML = "";
    } else {
      screen.innerHTML = `
        ${dataObj.total} <br>
         ${
           dataObj.operation
             ? `${dataObj.operation} ${dataObj.next}`
             : dataObj.next
         }`;
    }
  }

  useEffect(() => {
    updateScreen();
  }, [dataObj]);

  return (
    <div id="calculator">
      <div className="screen" />
      <div className="buttons">
        <RowHooks
          updateDataObj={updateDataObj}
          first="AC"
          second="+/-"
          third="%"
          fourth="÷"
        />
        <RowHooks
          updateDataObj={updateDataObj}
          first="7"
          second="8"
          third="9"
          fourth="x"
        />
        <RowHooks
          updateDataObj={updateDataObj}
          first="4"
          second="5"
          third="6"
          fourth="-"
        />
        <RowHooks
          updateDataObj={updateDataObj}
          first="1"
          second="2"
          third="3"
          fourth="+"
        />
        <RowHooks
          updateDataObj={updateDataObj}
          first="0"
          second="."
          third="="
        />
      </div>
    </div>
  );
}
