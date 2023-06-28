import React, { useState } from "react";
import DigitLettersView from "./components/DigitLettersView";
import LuckyNumbersView from "./components/LuckyNumbersView";
import { nameLetterMap, luckyNumbersMap } from "./constants";
import {
  calculateDigitTotal,
  convertNameToDigits,
  getLuckyNumbers,
  labelStyles,
  inputStyles,
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
    <div
      style={{
        display: "flex",
        height: "80vh",
        border: "1px solid #ccc",
        borderRadius: "5px",
        overflow: "hidden",
        fontFamily: "Raleway, sans-serif",
      }}
    >
      <div
        style={{
          flex: 1,
          borderRight: "1px solid #ccc",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <label style={labelStyles}>Enter Name:</label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={"Hritvik"}
          style={inputStyles}
        />
        <label style={labelStyles}>Digits: {nameToDigits}</label>
        <label style={{ ...labelStyles, marginBottom: "10px" }}>
          Total: {totalOfDigits > 0 && totalOfDigits}
        </label>
        <label style={{ ...labelStyles, marginTop: "20px" }}>
          Select birthdate:
        </label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          style={inputStyles}
        />
        <label style={labelStyles}>Birth Number: {bn > 0 && bn}</label>
        <label style={labelStyles}>Destiny Number: {dn > 0 && dn}</label>
        <label style={labelStyles}>Lucky Numbers:</label>
        <label style={labelStyles}>{luckyNumbers.join(", ")}</label>
      </div>
      <div
        style={{
          padding: "10px",
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
