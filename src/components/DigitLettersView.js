import React from "react";
import { tableStyles } from "../utils";

const DigitLettersView = ({ nameLetterMap }) => (
  <table>
    <thead>
      <tr>
        <th style={tableStyles}>Digit</th>
        <th style={tableStyles}>Letters</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(nameLetterMap).map((digit) => (
        <tr key={digit}>
          <td style={tableStyles}>{digit}</td>
          <td>
            <tt style={tableStyles}>{nameLetterMap[digit].join(", ")}</tt>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DigitLettersView;
