import axios from 'axios';

const API_URL = 'http://localhost:5000/api/attendance';

export const markAttendance = async (attendanceData) => {
  const response = await axios.post(API_URL, attendanceData);
  return response.data;
};

export const getAttendance = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};