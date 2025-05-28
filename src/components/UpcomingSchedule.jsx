import { upcomingSchedule } from "../data/appointmentData"

const UpcomingSchedule = () => {
  return (
    <div className="bg-blue-50 p-6">
      <h2 className="text-lg font-bold text-blue-900 mb-6">The Upcoming Schedule</h2>

      <div className="space-y-6">
        {upcomingSchedule.map((dayGroup, index) => (
          <div key={index}>
            <h3 className="text-sm font-medium text-gray-500 mb-3">On {dayGroup.day}</h3>
            <div className="flex flex-wrap gap-3">
              {dayGroup.appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`bg-blue-100 rounded-xl p-4 flex items-center justify-between ${appointment.level === 1
                    ? "flex-1"
                    : appointment.level === 2
                      ? "w-[45%]"
                      : appointment.level === 3
                        ? "w-[35%]"
                        : "flex-1"
                    }`}
                >
                  <div className="flex-1">
                    <h4 className="font-medium text-gray-900 text-sm mb-1">{appointment.title}</h4>
                    <p className="text-xs text-gray-600">{appointment.time}</p>
                  </div>
                  <div className="text-lg ml-3">{appointment.icon}</div>
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

