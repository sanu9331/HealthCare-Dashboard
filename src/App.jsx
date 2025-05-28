import Header from "./components/Header"
import Sidebar from "./components/Sidebar"
import DashboardMainContent from "./components/DashboardMainContent"

function App() {
  return (
    <div className="min-h-screen bg-gray-200 p-6">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
        <div className="pt-10">
          <Header />
          <div className="flex bg-blue-50">
            <Sidebar />
            <DashboardMainContent />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App

