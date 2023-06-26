import React, { useState } from "react";
import DigitLettersView from "./components/DigitLettersView";
import LuckyNumbersView from "./components/LuckyNumbersView";
import { nameLetterMap, luckyNumbersMap } from "./constants";
import {
  calculateDigitTotal,
  convertNameToDigits,
  getLuckyNumbers,
} from "./utils";

function NameForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const calculateLuckyNumbers = () => {
    const nameToDigits = convertNameToDigits(name);
    const totalOfDigits = calculateDigitTotal(nameToDigits);

    const bn = calculateDigitTotal(new Date(date).getDate());
    const dn = calculateDigitTotal(date.replaceAll("-", ""));
    const luckyNumbers = getLuckyNumbers(bn, dn);

    return { nameToDigits, totalOfDigits, bn, dn, luckyNumbers };
  };

  const { nameToDigits, totalOfDigits, bn, dn, luckyNumbers } =
    calculateLuckyNumbers();

  return (
    <div style={{ display: "flex", height: "80vh" }}>
      <div style={{ flex: 1, border: "1px solid black", paddingLeft: "5px" }}>
        <label>Enter Name: </label>
        <input type="text" value={name} onChange={handleNameChange} />
        <br />
        <label>Digits: {nameToDigits}</label>
        <br />
        <label>Total: {totalOfDigits > 0 && totalOfDigits}</label>
        <br />
        <br />
        <label>Select birthdate: </label>
        <input type="date" value={date} onChange={handleDateChange} />
        <br />
        <label>Birth Number: {bn > 0 && bn}</label>
        <br />
        <label>Destiny Number: {dn > 0 && dn}</label>
        <br />
        <label>Lucky Numbers: {luckyNumbers.join(", ")}</label>
      </div>
      <div
        style={{
          border: "1px solid black",
          overflowY: "auto",
        }}
      >
        <DigitLettersView nameLetterMap={nameLetterMap} />
        <br />
        <LuckyNumbersView luckyNumbersMap={luckyNumbersMap} />
      </div>
    </div>
  );
}

export default NameForm;
