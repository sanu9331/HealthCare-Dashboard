import { LayoutDashboard, History, Calendar, Clock, BarChart3, FileText, MessageCircle, HelpCircle, Settings } from 'lucide-react'

const Sidebar = () => {
  return (
    <aside className="w-full lg:w-64 bg-blue-50 lg:h-screen border-r border-gray-100 flex flex-col">
      <div className="p-4 sm:p-6 flex flex-col justify-between h-full">
        {/* Top section */}
        <div>
          <h3 className="text-xs font-medium text-gray-400 uppercase tracking-wider mb-4 sm:mb-6">General</h3>
          <nav className="space-y-1">
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors bg-blue-50 text-blue-900 font-medium"
            >
              <LayoutDashboard className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Dashboard</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <History className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>History</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <Calendar className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Calendar</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <Clock className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Appointments</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <BarChart3 className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Statistics</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <FileText className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Tests</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <MessageCircle className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Chat</span>
            </a>
            <a
              href="#"
              className="flex items-center space-x-2 lg:space-x-3 px-2 lg:px-3 py-2 lg:py-2.5 rounded-lg text-xs sm:text-sm transition-colors text-gray-500"
            >
              <HelpCircle className="w-4 lg:w-5 h-4 lg:h-5" />
              <span>Support</span>
            </a>
          </nav>
        </div>
        {/* Bottom section (Setting) */}
        <div className="pt-4 lg:pt-6 hidden lg:block">
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
