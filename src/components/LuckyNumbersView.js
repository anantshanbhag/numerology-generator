import React from "react";
import { tableStyle } from "../utils";

export const LuckyNumbersView = ({ luckyNumbersMap }) => (
  <table>
    <thead>
      <tr>
        <th style={tableStyle}>BN</th>
        <th style={tableStyle}>DN</th>
        <th style={tableStyle}>Lucky Numbers</th>
      </tr>
    </thead>
    <tbody>
      {luckyNumbersMap.map((data, index) => (
        <tr key={index}>
          <td style={tableStyle}>{data.bn}</td>
          <td style={tableStyle}>{data.dn}</td>
          <td style={tableStyle}>{data.luckyNumbers}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
