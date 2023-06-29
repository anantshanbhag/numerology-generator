import React from "react";
import { tableStyle } from "../utils";

const thStyle = { ...tableStyle, textAlign: "initial" };

export const DigitLettersView = ({ nameLetterMap }) => (
  <table>
    <thead>
      <tr>
        <th style={thStyle}>Digit</th>
        <th style={{ ...thStyle, paddingLeft: "10px" }}>Letters</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(nameLetterMap).map((digit) => (
        <tr key={digit}>
          <td style={tableStyle}>{digit}</td>
          <td>
            <tt style={{ ...tableStyle, paddingLeft: "10px" }}>
              {nameLetterMap[digit].join(", ")}
            </tt>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
