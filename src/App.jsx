import Header from "../src/components/Header"
import Sidebar from "../src/components/Sidebar"
import DashboardMainContent from "../src/components/DashboardMainContent"

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-2 sm:p-4 lg:p-6">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="pt-6 sm:pt-8 lg:pt-10">
          <Header />
          <div className="flex flex-col lg:flex-row bg-blue-50">
            <Sidebar />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
