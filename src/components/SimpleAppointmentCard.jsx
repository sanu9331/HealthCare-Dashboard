import { Activity, Eye, Heart, Brain } from "lucide-react"

const iconMap = {
  Activity,
  Eye,
  Heart,
  Brain,
}

const SimpleAppointmentCard = ({ appointment }) => {
  const Icon = iconMap[appointment.icon] || Activity

  return (
    <div className="bg-blue-50 rounded-lg p-3 flex items-center space-x-3">
      <div className="p-2 rounded-lg" style={{ backgroundColor: `${appointment.color}20`, color: appointment.color }}>
        <Icon className="w-4 h-4" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium text-gray-900 text-sm">{appointment.title}</h4>
        <p className="text-xs text-gray-500">{appointment.time}</p>
      </div>
    </div>
  )
}

export default SimpleAppointmentCard
