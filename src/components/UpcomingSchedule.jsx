import { upcomingSchedule } from "../data/appointmentData"

const UpcomingSchedule = () => {
  return (
    <div className="bg-blue-50 p-4 sm:p-6">
      <h2 className="text-base sm:text-lg font-bold text-blue-900 mb-4 sm:mb-6">The Upcoming Schedule</h2>
      <div className="space-y-4 sm:space-y-6">
        {upcomingSchedule.map((dayGroup, index) => (
          <div key={index}>
            <h3 className="text-xs sm:text-sm font-medium text-gray-500 mb-2 sm:mb-3">On {dayGroup.day}</h3>
            <div className="flex flex-col sm:flex-row flex-wrap gap-2 sm:gap-3">
              {dayGroup.appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`bg-blue-100 rounded-xl p-3 sm:p-4 flex items-center justify-between ${appointment.level === 1
                      ? "flex-1"
                      : appointment.level === 2
                        ? "sm:w-[45%] flex-1"
                        : appointment.level === 3
                          ? "sm:w-[35%] flex-1"
                          : "flex-1"
                    }`}
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-xs sm:text-sm mb-1">{appointment.title}</h4>
                    <p className="text-xs text-gray-600">{appointment.time}</p>
                  </div>
                  <div className="text-base sm:text-lg ml-2 sm:ml-3">{appointment.icon}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default UpcomingSchedule
