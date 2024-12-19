import React, { createContext, useState } from 'react';

export const AttendanceContext = createContext();

export const AttendanceProvider = ({ children }) => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);

  return (
    <AttendanceContext.Provider value={{ attendanceRecords, setAttendanceRecords }}>
      {children}
    </AttendanceContext.Provider>
  );
};