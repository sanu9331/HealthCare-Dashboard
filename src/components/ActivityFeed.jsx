const ActivityFeed = () => {
  const chartData = [
    { day: "Mon", value: 40, color: "#22d3ee" },
    { day: "Tues", value: 85, color: "#06b6d4" },
    { day: "Wed", value: 60, color: "#0891b2" },
    { day: "Thurs", value: 95, color: "#0e7490" },
    { day: "Fri", value: 45, color: "#155e75" },
    { day: "Sat", value: 70, color: "#164e63" },
    { day: "Sun", value: 55, color: "#083344" },
  ]

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-sm">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 sm:mb-6 gap-2">
        <h2 className="text-base sm:text-lg font-bold text-gray-900">Activity</h2>
        <p className="text-xs sm:text-sm text-gray-500">3 appointment on this week</p>
      </div>
      {/* Bar Chart - matching the exact image */}
      <div className="flex items-end justify-center h-16 sm:h-20 space-x-2 sm:space-x-3 px-2 sm:px-4">
        {chartData.map((item) => (
          <div key={item.day} className="flex flex-col items-center">
            <div
              className="w-2 sm:w-3 rounded-t-sm mb-2"
              style={{
                height: `${(item.value / 100) * 60}px`,
                backgroundColor: item.color,
                minHeight: "8px",
              }}
            ></div>
            <span className="text-xs text-gray-400 font-normal">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
