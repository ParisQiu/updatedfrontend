import DashboardLayout from "@/components/dashboard/dashboard-layout"
import StudyRooms from "@/components/dashboard/study-rooms"
import StudyPlan from "@/components/dashboard/study-plan"

import UpcomingSchedule from "@/components/dashboard/upcoming-schedule"
import TodoReminders from "@/components/dashboard/todo-reminders"

import RecentActivity from "@/components/dashboard/recent-activity"

import Community from "@/components/dashboard/community"


export default function DashboardPage() {
  return (
    <DashboardLayout>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* First column - Priority items */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <StudyPlan />
          <TodoReminders />

        </div>

        {/* Second column - Main content */}
        <div className="flex flex-col gap-6 lg:col-span-1">

          <StudyRooms />
          <RecentActivity />
        </div>

        {/* Third column - Additional content */}
        <div className="flex flex-col gap-6 lg:col-span-1">
          <UpcomingSchedule />


          <Community />
        </div>
      </div>
    </DashboardLayout>
  )
}
