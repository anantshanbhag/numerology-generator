import React from "react";
import { tableStyles } from "../utils";

const LuckyNumbersView = ({ luckyNumbersMap }) => (
  <table>
    <thead>
      <tr>
        <th style={tableStyles}>BN</th>
        <th style={tableStyles}>DN</th>
        <th style={tableStyles}>Lucky Numbers</th>
      </tr>
    </thead>
    <tbody>
      {luckyNumbersMap.map((data, index) => (
        <tr key={index}>
          <td style={tableStyles}>{data.bn}</td>
          <td style={tableStyles}>{data.dn}</td>
          <td style={tableStyles}>{data.luckyNumbers}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LuckyNumbersView;
