import React from 'react';

const AttendanceTable = ({ records }) => (
  <table>
    <thead>
      <tr>
        <th>Date</th>
        <th>Status</th>
      </tr>
    </thead>
    <tbody>
      {records.map((record, index) => (
        <tr key={index}>
          <td>{record.date}</td>
          <td>{record.status}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default AttendanceTable;