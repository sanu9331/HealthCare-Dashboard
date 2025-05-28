// import {
//   LayoutDashboard,
//   History,
//   Calendar,
//   Clock,
//   BarChart3,
//   FileText,
//   MessageCircle,
//   HelpCircle,
//   Settings,
// } from "lucide-react"
// import { navigationItems } from "../data/navigationData"

// const iconMap = {
//   LayoutDashboard,
//   History,
//   Calendar,
//   Clock,
//   BarChart3,
//   FileText,
//   MessageCircle,
//   HelpCircle,
//   Settings,
// }

// const Sidebar = () => {
//   return (
//     <aside className="w-64 bg-gray-100 h-full border-r border-gray-100">
//       <div className="p-6">
//         <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">General</h3>

//         <nav className="space-y-1">
//           {navigationItems.map((item) => {
//             const Icon = iconMap[item.icon]
//             return (
//               <a
//                 key={item.id}
//                 href="#"
//                 className={`flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${item.active
//                   ? "bg-blue-50 text-blue-900 font-medium"
//                   : "text-gray-500"
//                   }`}
//               >
//                 <Icon className="w-5 h-5" />
//                 <span>{item.label}</span>
//               </a>
//             )
//           })}
//         </nav>
//       </div>
//     </aside>
//   )
// }

// export default Sidebar

import {
  LayoutDashboard,
  History,
  Calendar,
  Clock,
  BarChart3,
  FileText,
  MessageCircle,
  HelpCircle,
  Settings,
} from "lucide-react"

const Sidebar = () => {
  return (
    <aside className="w-64 bg-blue-50 h-screen border-r border-gray-100 flex flex-col">
      <div className="p-6 flex flex-col justify-between h-full">
        {/* Top section */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-6">General</h3>

          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors bg-blue-50 text-blue-900 font-medium"
            >
              <LayoutDashboard className="w-5 h-5" />
              <span>Dashboard</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <History className="w-5 h-5" />
              <span>History</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <Calendar className="w-5 h-5" />
              <span>Calendar</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <Clock className="w-5 h-5" />
              <span>Appointments</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <BarChart3 className="w-5 h-5" />
              <span>Statistics</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <FileText className="w-5 h-5" />
              <span>Tests</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Chat</span>
            </a>

            <a
              href="#"
              className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
            >
              <HelpCircle className="w-5 h-5" />
              <span>Support</span>
            </a>
          </nav>
        </div>

        {/* Bottom section (Setting) */}
        <div className="pt-6">
          <a
            href="#"
            className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm transition-colors text-gray-500"
          >
            <Settings className="w-5 h-5" />
            <span>Setting</span>
          </a>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar



