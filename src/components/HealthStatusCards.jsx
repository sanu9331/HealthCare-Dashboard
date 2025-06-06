import { healthStatusData } from "../data/healthData"

const HealthStatusCards = () => {
  const getIcon = (title) => {
    switch (title) {
      case "Lungs":
        return "🫁"
      case "Teeth":
        return "🦷"
      case "Bone":
        return "🦴"
      default:
        return "❤️"
    }
  }

  return (
    <div className="space-y-3 sm:space-y-4">
      {healthStatusData.map((item) => (
        <div key={item.id} className="bg-gray-100 rounded-2xl p-3 sm:p-4 shadow-sm">
          <div className="flex items-center space-x-2 sm:space-x-3 mb-2 sm:mb-3">
            <div className="text-xl sm:text-2xl">{getIcon(item.title)}</div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 text-sm">{item.title}</h3>
              <p className="text-xs text-gray-500">{item.date}</p>
            </div>
          </div>
          <div className="space-y-2">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="h-2 rounded-full transition-all"
                style={{
                  backgroundColor: item.color,
                  width: `${item.progress}%`,
                }}
              ></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default HealthStatusCards
