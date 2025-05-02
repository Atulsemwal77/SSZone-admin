import React from "react";
import { MdDashboard, MdMessage, MdRateReview, MdQuiz, MdSettings, MdLogout, MdPerson } from "react-icons/md";
import { BiBookBookmark } from "react-icons/bi";
import Main from "./Overview";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow p-6 ">
        
        <nav className="space-y-4 text-gray-600">
          <div className="flex items-center space-x-2 bg-blue-100 text-blue-600 p-2 rounded">
            <MdDashboard />
            <span>Dashboard</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdPerson />
            <span>My Profile</span>
          </div>
          <div className="flex items-center space-x-2">
            <BiBookBookmark />
            <span>Courses</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdMessage />
            <span>Message</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdRateReview />
            <span>Reviews</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdQuiz />
            <span>Quiz Attempt</span>
          </div>
          <hr className="my-4" />
          <div className="flex items-center space-x-2">
            <MdSettings />
            <span>Setting</span>
          </div>
          <div className="flex items-center space-x-2">
            <MdLogout />
            <span>Logout</span>
          </div>
        </nav>
      </aside>

      
      <main className="flex-1 p-6 w-full  ">
        
        <Main/>
  
      </main>
    </div>
  );
}

