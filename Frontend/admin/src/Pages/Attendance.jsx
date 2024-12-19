import React, { useEffect, useContext } from 'react';
import { AttendanceContext } from '../Contexts/AttendanceContext';
import { getAttendance } from '../Api/AttendanceApi';
import AttendanceTable from '../Components/AttendanceTable';

const Attendance = () => {
  const { attendanceRecords, setAttendanceRecords } = useContext(AttendanceContext);

  useEffect(() => {
    const fetchRecords = async () => {
      const data = await getAttendance();
      setAttendanceRecords(data);
    };
    fetchRecords();
  }, [setAttendanceRecords]);

  return <AttendanceTable records={attendanceRecords} />;
};

export default Attendance;