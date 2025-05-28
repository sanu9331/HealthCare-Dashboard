import { Search, Bell, Plus, User } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex flex-col lg:flex-row w-full">
      {/* Part 1 - Logo section (sidebar width) */}
      <div className="w-full lg:w-64 bg-blue-50 px-4 sm:px-6 py-4 lg:py-6 lg:-mt-10 lg:pt-16 flex items-center justify-center">
        <span className="text-xl sm:text-2xl font-bold text-cyan-400">Health</span>
        <span className="text-xl sm:text-2xl font-bold text-violet-950">care.</span>
      </div>
      {/* Part 2 - Search section (left main content area) */}
      <div className="flex-1 lg:flex-[1.03] bg-white px-4 sm:px-6 lg:px-9 py-3 lg:py-4 flex items-center">
        <div className="relative w-full max-w2xl">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-violet-900 w-4 h-4" />
          <input
            type="text"
            placeholder="Search"
            className="w-full pl-10 pr-12 py-2.5 bg-gray-50 border border-gray-100 rounded-lg text-sm text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          />
          <Bell className="absolute right-3 top-1/2 transform -translate-y-1/2 text-violet-900 w-4 h-4 fill-violet-900" />
        </div>
      </div>
      {/* Part 3 - Profile/Actions section (right content area) */}
      <div className="w-full lg:flex-1 bg-blue-50 px-4 sm:px-6 py-3 lg:py-4 flex items-center justify-center lg:justify-end lg:pr-16 lg:-mt-10 lg:pt-16">
        <div className="flex items-center space-x-3">
          <div className="p-2.5 bg-cyan-400 rounded-lg flex items-center justify-center">
            <User className="text-white w-4 h-4" />
          </div>
          <button className="bg-violet-900 text-white p-2.5 rounded-lg hover:bg-violet-950 transition-colors">
            <Plus className="w-4 h-4" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
