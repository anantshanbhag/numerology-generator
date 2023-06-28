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
      <div
        style={{
          flex: 1,
          border: "1px solid black",
          padding: "5px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-start",
          alignItems: "flex-start",
        }}
      >
        <label
          style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "bold" }}
        >
          Enter Name:
        </label>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder={"name"}
          style={{
            marginBottom: "5px",
            padding: "5px",
            fontSize: "14px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label
          style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "bold" }}
        >
          Digits: {nameToDigits}
        </label>
        <label
          style={{ marginBottom: "10px", fontSize: "16px", fontWeight: "bold" }}
        >
          Total: {totalOfDigits > 0 && totalOfDigits}
        </label>
        <label
          style={{
            marginTop: "20px",
            marginBottom: "5px",
            fontSize: "16px",
            fontWeight: "bold",
          }}
        >
          Select birthdate:
        </label>
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          style={{
            marginBottom: "5px",
            padding: "5px",
            fontSize: "14px",
            borderRadius: "5px",
            border: "1px solid #ccc",
          }}
        />
        <label
          style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "bold" }}
        >
          Birth Number: {bn > 0 && bn}
        </label>
        <label
          style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "bold" }}
        >
          Destiny Number: {dn > 0 && dn}
        </label>
        <label
          style={{ marginBottom: "5px", fontSize: "16px", fontWeight: "bold" }}
        >
          Lucky Numbers: {luckyNumbers.join(", ")}
        </label>
      </div>
      <div
        style={{
          border: "1px solid black",
          overflowY: "auto",
          padding: "10px",
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
