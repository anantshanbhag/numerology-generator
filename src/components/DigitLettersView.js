import React from "react";

const DigitLettersView = ({ nameLetterMap }) => (
  <table>
    <thead>
      <tr>
        <th>Digit</th>
        <th>Letters</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(nameLetterMap).map((digit) => (
        <tr key={digit}>
          <td>{digit}</td>
          <td>
            <tt>
              <big>{nameLetterMap[digit].join(", ")}</big>
            </tt>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default DigitLettersView;
