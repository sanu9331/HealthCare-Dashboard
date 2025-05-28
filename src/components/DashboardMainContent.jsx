import AnatomySection from "./AnatomySection"
import HealthStatusCards from "./HealthStatusCards"
import CalendarView from "./CalendarView"
import UpcomingSchedule from "./UpcomingSchedule"
import ActivityFeed from "./ActivityFeed"

const DashboardMainContent = () => {
  return (
    <main className="flex-1 pl-0 pt-0 pb-0   bg-blue-50">
      <div className="grid grid-cols-12 gap-0">
        {/* Left Section - Dashboard and Activity Feed */}
        <div className="col-span-6 bg-white p-6">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-bold text-violet-950">Dashboard</h1>
            <span className="text-sm text-gray-500">this week</span>
          </div>
          <div className="space-y-6">
            <div className="grid grid-cols-8 gap-6">
              {/* Dashboard - takes more space */}
              <div className="col-span-5">
                <AnatomySection />
              </div>
              {/* Health Status Cards - narrower width */}
              <div className="col-span-3">
                <HealthStatusCards />
              </div>
            </div>
            {/* Activity Feed - spans full width of this section */}
            <ActivityFeed />
          </div>
        </div>

        {/* Right Section - Calendar and Schedule */}
        <div className="col-span-6 bg-blue-50 p-4 pt-1 pl-0">
          <div className="space-y-6">
            <CalendarView />
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  )
}

export default DashboardMainContent
