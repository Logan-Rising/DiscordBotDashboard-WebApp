import React from 'react';

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Command</th>
          <th>Syntax</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <tr key={index}>
            <td>{row.column1}</td>
            <td>{row.column2}</td>
            <td>{row.column3}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;