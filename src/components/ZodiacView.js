import React from "react";
import { tableStyle } from "../utils";
import { zodiacMap } from "../constants";

const tdStyle = { ...tableStyle, paddingLeft: "15px" };
const thStyle = { ...tdStyle, textAlign: "initial", fontWeight: 350 };

export const ZodiacView = () => {
  return (
    <table>
      <thead>
        <tr>
          <th style={thStyle}>Zodiac</th>
          <th style={thStyle}>Duration</th>
          <th style={thStyle}>Number</th>
        </tr>
      </thead>
      <tbody>
        {zodiacMap.map((item, index) => (
          <tr key={index}>
            <td style={tdStyle}>{item.zodiac}</td>
            <td style={tdStyle}>{`${item.startDate} to ${item.endDate}`}</td>
            <td style={tdStyle}>{item.number}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
