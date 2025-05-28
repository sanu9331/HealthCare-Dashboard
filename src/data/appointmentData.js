export const calendarData = {
  month: "October",
  year: "2021",
  currentWeek: [
    { day: "Mon", date: "25", appointments: ["10:00", "11:00", "12:00"] },
    { day: "Tues", date: "26", appointments: ["08:00", "09:00", "10:00"] },
    { day: "Wed", date: "27", appointments: ["12:00", "--", "13:00"] },
    { day: "Thurs", date: "28", appointments: ["10:00", "11:00", "--"] },
    {
      day: "Fri", date: "29", appointments: ['--', "14:00", "16:00"]
    },
    { day: "Sat", date: "30", appointments: ["12:00", "09:00", "15:00"] },
    { day: "Sun", date: "31", appointments: ["10:00", "11:00", "11:00"] },
  ],
}

export const todayAppointments = [
  {
    id: 1,
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr Cameron Williamson",
    icon: "🦷",
    bgColor: "#1e3a8a",
  },
  {
    id: 2,
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr Kevin Djores",
    icon: "🏃‍♂️",
    bgColor: "#b4bfd6",
  },
]

export const upcomingSchedule = [
  {
    day: "Thursday",
    appointments: [
      {
        id: 1,
        title: "Health checkup complete",
        time: "11:00 AM",
        icon: "🩺",
        bgColor: "#f3f4f6",
        level: 1
      },
      {
        id: 2,
        title: "Ophthalmologist",
        time: "14:00 PM",
        icon: "👁️",
        bgColor: "#f3f4f6",
        level: 2

      },
    ],
  },
  {
    day: "Saturday",
    appointments: [
      {
        id: 3,
        title: "Cardiologist",
        time: "12:00 AM",
        icon: "❤️",
        bgColor: "#f3f4f6",
        level: 3
      },
      {
        id: 4,
        title: "Neurologist",
        time: "16:00 PM",
        icon: "🧠",
        bgColor: "#f3f4f6",
        level: 3
      },
    ],
  },
]
