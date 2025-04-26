"use client";
import Link from "next/link"
import { Calendar, Plus } from "lucide-react"
import StatusModal from "../StatusModal"

import React, { useState } from "react";

export default function UpcomingSchedule() {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
  const today = new Date()
  const weekDates = Array.from({ length: 7 }, (_, i) => {
    const date = new Date(today)
    date.setDate(today.getDate() + i)
    return {
      dayName: days[date.getDay()],
      date: date.getDate(),
      isToday: i === 0,
    }
  })

  const events = [
    {
      id: 1,
      title: "Biology Study Session",
      time: "10:00 AM - 12:00 PM",
      type: "study",
      day: 0, // today
      status: "You are well prepared for this study session!"
    },
    {
      id: 2,
      title: "Psychology Quiz",
      time: "2:00 PM - 3:00 PM",
      type: "exam",
      day: 1, // tomorrow
      status: "Quiz is scheduled. Don't forget to review Chapter 5!"
    },
    {
      id: 3,
      title: "Math Group Meeting",
      time: "4:00 PM - 5:30 PM",
      type: "meeting",
      day: 2, // day after tomorrow
      status: "Meeting with your study group to discuss problem sets."
    },
    {
      id: 4,
      title: "Chemistry Lab",
      time: "1:00 PM - 3:00 PM",
      type: "lab",
      day: 3,
      status: "Lab safety equipment is ready. Arrive 10 minutes early."
    },
  ]

  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");

  const handleEventClick = (event: typeof events[0]) => {
    setModalTitle(event.title);
    setModalMessage(event.status);
    setModalOpen(true);
  };

  return (
    <div className="rounded-lg border bg-white dark:bg-gray-900 shadow-sm dark:text-white">
      <StatusModal isOpen={modalOpen} onClose={() => setModalOpen(false)} title={modalTitle} message={modalMessage} />
      <div className="flex items-center justify-between border-b p-4">
        <h2 className="text-lg font-semibold">Upcoming Schedule</h2>
        <Link
          href="/dashboard/calendar"
          className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-500"
        >
          <Plus className="mr-1 h-4 w-4" />
          Add Event
        </Link>
      </div>
      <div className="p-4">
        <div className="mb-4 flex justify-between">
          {weekDates.map((day, index) => (
            <div
              key={index}
              className={`flex flex-1 flex-col items-center rounded-md p-2 ${
                day.isToday ? "bg-blue-100 text-blue-600" : ""
              }`}
            >
              <span className="text-xs font-medium">{day.dayName}</span>
              <span className={`text-lg ${day.isToday ? "font-bold" : ""}`}>{day.date}</span>
            </div>
          ))}
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <div key={event.id} className="rounded-md border p-3 hover:bg-gray-50 cursor-pointer" onClick={() => handleEventClick(event)}>
              <div className="flex items-center">
                <div
                  className={`mr-3 h-10 w-1 rounded-full ${
                    event.type === "exam"
                      ? "bg-red-500"
                      : event.type === "study"
                        ? "bg-blue-500"
                        : event.type === "meeting"
                          ? "bg-green-500"
                          : "bg-purple-500"
                  }`}
                ></div>
                <div>
                  <h3 className="font-medium">{event.title}</h3>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="mr-1 h-3 w-3" />
                    <span>
                      {event.day === 0 ? "Today" : event.day === 1 ? "Tomorrow" : `${weekDates[event.day].dayName}`},{" "}
                      {event.time}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Link href="/dashboard/calendar" className="text-sm font-medium text-blue-600 hover:text-blue-500">
            View full calendar
          </Link>
        </div>
      </div>
    </div>
  )
}
