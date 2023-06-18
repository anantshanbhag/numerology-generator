import React from "react";

const LuckyNumbersView = ({ luckyNumbersMap }) => (
  <table>
    <thead>
      <tr>
        <th>BN</th>
        <th>DN</th>
        <th>Lucky Numbers</th>
      </tr>
    </thead>
    <tbody>
      {luckyNumbersMap.map((data, index) => (
        <tr key={index}>
          <td>{data.bn}</td>
          <td>{data.dn}</td>
          <td>{data.luckyNumbers}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default LuckyNumbersView;
