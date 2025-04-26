import Link from "next/link"
import { Plus, Users } from "lucide-react"

export default function StudyRooms() {
  const studyRooms = [
    {
      id: 1,
      name: "Biology 101 Finals Prep",
      subject: "Biology",
      participants: 8,
      maxParticipants: 10,
      schedule: "Fri, 10:00 AM - 12:00 PM",
      venue: "Room 201, Science Building",
      mode: "In Person"
    },
    {
      id: 2,
      name: "Calculus II Problem Solving",
      subject: "Mathematics",
      participants: 5,
      maxParticipants: 8,
      schedule: "Sun, 4:00 PM - 5:30 PM",
      venue: "Online (Zoom)",
      mode: "Online"
    },
    {
      id: 3,
      name: "Psychology Research Methods",
      subject: "Psychology",
      participants: 4,
      maxParticipants: 6,
      schedule: "Mon, 1:00 PM - 3:00 PM",
      venue: "Room 105, Psychology Dept.",
      mode: "In Person"
    },
  ]

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-900 shadow-sm dark:text-white mb-6">
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold dark:text-white">Join a Study Room</h2>
        <Link
          href="/dashboard/study-rooms/create"
          className="flex items-center rounded-md bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-700"
        >
          <Plus className="mr-1 h-4 w-4" />
          Create Room
        </Link>
      </div>
      <div className="p-4">
        <div className="space-y-3">
          {studyRooms.map((room) => (
            <div key={room.id} className="rounded-md border p-3 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{room.name}</h3>
                  <p className="text-sm text-gray-500">{room.subject}</p>
                </div>
                <Link
                  href={`/dashboard/study-rooms/${room.id}`}
                  className="rounded-md bg-blue-100 px-3 py-1 text-sm font-medium text-blue-600 hover:bg-blue-200"
                >
                  Join
                </Link>
              </div>
              <div className="mt-2 flex items-center text-sm text-gray-500">
                <Users className="mr-1 h-4 w-4" />
                <span>
                  {room.participants}/{room.maxParticipants} participants
                </span>
              </div>
              <div className="mt-1 text-xs text-gray-600">
                <div><span className="font-medium">Schedule:</span> {room.schedule}</div>
                <div><span className="font-medium">Venue:</span> {room.venue}</div>
                <div><span className="font-medium">Mode:</span> {room.mode}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-4 text-center">
          <Link href="/dashboard/study-rooms" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            View all study rooms
          </Link>
        </div>
      </div>
    </div>
  )
}
