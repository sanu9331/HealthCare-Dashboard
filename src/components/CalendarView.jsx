import { ChevronLeft, ChevronRight } from "lucide-react"
import { calendarData, todayAppointments } from "../data/appointmentData"

const CalendarView = () => {
  return (
    <div className="bg-blue-50 p-6 ">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-base font-bold text-violet-950">
            {calendarData.month} {calendarData.year}
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronLeft className="w-4 h-4 text-gray-600" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <ChevronRight className="w-4 h-4 text-gray-600" />
          </button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="grid grid-cols-7 gap-4 mb-6">
        {calendarData.currentWeek.map((day, index) => (
          <div key={day.date} className={`text-center ${day.date === "26" ? "bg-slate-200 p-3 rounded-xl" : ""}`}>
            <div className="text-xs text-gray-500 mb-2 font-medium">{day.day}</div>
            <div className="text-lg font-bold text-gray-900 mb-3">{day.date}</div>
            <div className="space-y-1">
              {day.appointments.map((time, timeIndex) => {
                if (time === "--") {
                  return (
                    <div key={timeIndex} className="text-xs px-2 py-1 text-gray-300">
                      {time}
                    </div>
                  )
                }

                // Tuesday (26th) - only middle appointment colored
                if (day.date === "26" && timeIndex === 1) {
                  return (
                    <div
                      key={timeIndex}
                      className="text-xs py-1 rounded-md text-white bg-blue-900 flex items-center justify-center"
                    >
                      {time}
                    </div>
                  )
                }

                // Thursday (28th) - 2nd appointment with dim blue
                if (day.date === "28" && timeIndex === 1) {
                  return (
                    <div key={timeIndex} className="text-xs px-2 py-1 rounded-md text-white font-medium bg-slate-300">
                      {time}
                    </div>
                  )
                }

                // Saturday (30th) - 1st appointment with slight dim blue
                if (day.date === "30" && timeIndex === 0) {
                  return (
                    <div
                      key={timeIndex}
                      className="text-xs pl-2 pr-0 py-1 rounded-l-md text-white font-medium bg-slate-300 -mr-4"
                    >
                      {time}
                    </div>
                  )
                }

                // Sunday (31st) - 1st appointment with slight dim blue
                if (day.date === "31" && timeIndex === 0) {
                  return (
                    <div
                      key={timeIndex}
                      className="text-xs pl-0 pr-2 py-1 rounded-r-md text-white font-medium bg-slate-300 -ml-4"
                    >
                      {time}
                    </div>
                  )
                }

                // For all other appointments, just show the time without a box
                return (
                  <div key={timeIndex} className="text-xs px-2 py-1">
                    {time}
                  </div>
                )
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Today's Appointments */}
      <div className="flex gap-2">
        <div className="flex-[0.4]">
          <div className="p-4 rounded-xl text-white w-full" style={{ backgroundColor: todayAppointments[0].bgColor }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">{todayAppointments[0].title}</h3>
              <span className="text-xl">{todayAppointments[0].icon}</span>
            </div>
            <p className="text-sm opacity-90 mb-1">{todayAppointments[0].time}</p>
            <p className="text-xs opacity-75">{todayAppointments[0].doctor}</p>
          </div>
        </div>
        <div className="flex-[0.6]">
          <div className="p-4 rounded-xl text-white w-full" style={{ backgroundColor: todayAppointments[1].bgColor }}>
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold text-sm">{todayAppointments[1].title}</h3>
              <span className="text-xl">{todayAppointments[1].icon}</span>
            </div>
            <p className="text-sm opacity-90 mb-1">{todayAppointments[1].time}</p>
            <p className="text-xs opacity-75">{todayAppointments[1].doctor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalendarView

