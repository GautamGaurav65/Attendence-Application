const Attendance = require('../models/Attendance');

const markAttendance = async (req, res) => {
  const { userId, date, status } = req.body;

  try {
    const attendance = new Attendance({ userId, date, status });
    await attendance.save();
    res.status(201).json({ message: 'Attendance marked successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to mark attendance' });
  }
};

const getAttendance = async (req, res) => {
  try {
    const attendanceRecords = await Attendance.find().populate('userId', 'name email');
    res.json(attendanceRecords);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch attendance records' });
  }
};

module.exports = { markAttendance, getAttendance };