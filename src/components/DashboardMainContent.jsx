import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"

const DashboardMainContent = () => {
  return (
    <main className="flex-1 pl-0 pt-0 pb-0 bg-blue-50">
      <div className="grid grid-cols-1 xl:grid-cols-12 gap-0">
        {/* Left Section - Dashboard and Activity Feed */}
        <div className="xl:col-span-6 bg-white p-4 sm:p-6">
          <div className="mb-4 sm:mb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
            <h1 className="text-xl sm:text-2xl font-bold text-violet-950">Dashboard</h1>
            <span className="text-sm text-gray-500">this week</span>
          </div>
          <div className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-8 gap-4 sm:gap-6">
              {/* Dashboard - takes more space */}
              <div className="lg:col-span-5">
                <AnatomySection />
              </div>
              {/* Health Status Cards - narrower width */}
              <div className="lg:col-span-3">
                <HealthStatusCards />
              </div>
            </div>
            {/* Activity Feed - spans full width of this section */}
            <ActivityFeed />
          </div>
        </div>
        {/* Right Section - Calendar and Schedule */}
        <div className="xl:col-span-6 bg-blue-50 p-2 sm:p-4 xl:pt-1 xl:pl-0">
          <div className="space-y-4 sm:space-y-6">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardMainContent
