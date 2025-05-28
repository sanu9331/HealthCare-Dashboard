// const ActivityFeed = () => {
//   const chartData = [
//     { day: "Mon", value: 20, color: "#22d3ee" },
//     { day: "Tue", value: 45, color: "#06b6d4" },
//     { day: "Wed", value: 30, color: "#0891b2" },
//     { day: "Thu", value: 70, color: "#0e7490" },
//     { day: "Fri", value: 25, color: "#155e75" },
//     { day: "Sat", value: 55, color: "#164e63" },
//     { day: "Sun", value: 40, color: "#083344" },
//   ]

//   return (
//     <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-lg font-bold text-gray-900">Activity</h2>
//         <p className="text-sm text-gray-500">3 appointments on this week</p>
//       </div>

//       {/* Bar Chart */}
//       <div className="flex items-end justify-between h-32 space-x-3 px-2">
//         {chartData.map((item) => (
//           <div key={item.day} className="flex flex-col items-center flex-1">
//             <div
//               className="w-3 rounded-t-md mb-2 transition-all duration-300 hover:opacity-80"
//               style={{
//                 height: `${(item.value / 100) * 80}px`,
//                 backgroundColor: item.color,
//                 minHeight: "12px",
//               }}
//             ></div>
//             <span className="text-xs text-gray-500 font-medium">{item.day}</span>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default ActivityFeed

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
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-gray-900">Activity</h2>
        <p className="text-sm text-gray-500">3 appointment on this week</p>
      </div>

      {/* Bar Chart - matching the exact image */}
      <div className="flex items-end justify-center h-20 space-x-3 px-4">
        {chartData.map((item) => (
          <div key={item.day} className="flex flex-col items-center">
            <div
              className="w-3 rounded-t-sm mb-2"
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
