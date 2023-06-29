import React, { useState } from "react";
import {
  DigitLettersView,
  LuckyNumbersView,
  NumberTypeView,
} from "./components";
import { nameLetterMap, luckyNumbersMap, numberTypeMap } from "./constants";
import {
  calculateDigitTotal,
  convertNameToDigits,
  getLuckyNumbers,
  labelStyle,
  resultStyle,
  inputStyle,
} from "./utils";

function NameForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const fullNameArray = name.split(" ");
  const firstName = fullNameArray?.[0] || "";
  const lastName = fullNameArray?.[1] || "";
  const firstNameDigits = convertNameToDigits(firstName);
  const firstNameTotal = calculateDigitTotal(firstNameDigits);
  const lastNameDigits = convertNameToDigits(lastName);
  const lastNameTotal = calculateDigitTotal(lastNameDigits);
  const grandTotal = firstNameTotal + lastNameTotal;

  const { bn, dn, luckyNumbers } = (() => {
    const bn = calculateDigitTotal(new Date(date).getDate());
    const dn = calculateDigitTotal(date.replaceAll("-", ""));
    const luckyNumbers = getLuckyNumbers(bn, dn);
    return { bn, dn, luckyNumbers };
  })();

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "56vh",
          border: "1px solid #ccc",
          borderRadius: "5px",
          borderBottomLeftRadius: "0px",
          borderBottomRightRadius: "0px",
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
          <label style={labelStyle}>Enter Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder={"Hritvik"}
            style={inputStyle}
          />
          <label style={labelStyle}>
            {lastName ? "First:" : "Digits:"}
            <span style={resultStyle}>{firstNameDigits}</span>
          </label>
          <label style={{ ...labelStyle, marginBottom: "10px" }}>
            {lastName ? "First name total:" : "Total:"}
            <span style={resultStyle}>
              {firstNameTotal > 0 && firstNameTotal}
            </span>
          </label>
          {lastName && (
            <>
              <label style={labelStyle}>
                Last:
                <span style={resultStyle}>{lastNameDigits}</span>
              </label>
              <label style={{ ...labelStyle, marginBottom: "10px" }}>
                Last name total:
                <span style={resultStyle}>
                  {lastNameTotal > 0 && lastNameTotal}
                </span>
              </label>
              <label style={labelStyle}>
                Grand total:
                <span style={resultStyle}>{grandTotal}</span>
              </label>
            </>
          )}
          <label style={{ ...labelStyle, marginTop: "20px" }}>
            Select birthdate:
          </label>
          <input
            type="date"
            value={date}
            onChange={handleDateChange}
            style={inputStyle}
          />
          <label style={labelStyle}>
            Birth number: <span style={resultStyle}>{bn > 0 && bn}</span>
          </label>
          <label style={labelStyle}>
            Destiny number:
            <span style={resultStyle}>{dn > 0 && dn}</span>
          </label>
          <label style={labelStyle}>Lucky numbers:</label>
          <label style={{ ...labelStyle, ...resultStyle }}>
            {luckyNumbers.join(", ")}
          </label>
        </div>
        <div style={{ padding: "10px", overflowY: "auto" }}>
          <DigitLettersView nameLetterMap={nameLetterMap} />
          <br />
          <LuckyNumbersView luckyNumbersMap={luckyNumbersMap} />
        </div>
      </div>
      <div
        style={{
          padding: "10px",
          border: "1px solid #ccc",
          borderTop: "0px",
          borderRadius: "5px",
          borderTopLeftRadius: "0px",
          borderTopRightRadius: "0px",
          height: "24vh",
        }}
      >
        <NumberTypeView numberTypeMap={numberTypeMap} />
      </div>
    </>
  );
}

export default NameForm;
