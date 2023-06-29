import React from "react";
import { tableStyle } from "../utils";

const tdStyle = { ...tableStyle, paddingLeft: "15px" };
const thStyle = { ...tdStyle, textAlign: "initial" };

export const NumberTypeView = ({ numberTypeMap }) => (
  <table style={{ width: "100%", borderCollapse: "collapse" }}>
    <thead>
      <tr>
        <th style={thStyle}>Num</th>
        <th style={thStyle}>Lucky</th>
        <th style={thStyle}>Neutral</th>
        <th style={thStyle}>Unlucky</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(numberTypeMap).map((digit) => (
        <tr key={digit}>
          <td style={tdStyle}>{digit}</td>
          <td style={tdStyle}>{numberTypeMap[digit].luckyNumbers}</td>
          <td style={tdStyle}>{numberTypeMap[digit].neutralNumbers}</td>
          <td style={tdStyle}>{numberTypeMap[digit].unluckyNumbers}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
