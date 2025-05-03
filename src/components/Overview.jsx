import React from "react";
import img1 from "../assets/img.jpg";
import { FaStar, FaArrowRight } from "react-icons/fa";
import { FaBook, FaUserGraduate, FaMoneyBillWave } from "react-icons/fa";
import {LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid} from 'recharts';

const data = [
  { month: 'Jan', students: 100 },
  { month: 'Feb', students: 250 },
  { month: 'Mar', students: 300 },
  { month: 'Apr', students: 640 },
  { month: 'May', students: 1200 },
  { month: 'Jun', students: 900 },
  { month: 'Jul', students: 600 },
  { month: 'Aug', students: 700 },
  { month: 'Sept', students: 800 },
  { month: 'Oct', students: 900 },
  { month: 'Nov', students: 850 },
  { month: 'Dec', students: 780 },
];

function EnrolledCoursesChart() {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md w-full">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-700">Courses Enrolled Status</h2>
        <select className="border text-sm rounded px-2 py-1">
          <option>HTML</option>
          <option>React</option>
          <option>JS</option>
        </select>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="students" stroke="#3b82f6" strokeWidth={3} dot={{ r: 4 }} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

const Main = () => {
  return (
    <>
    {/* <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-10 rounded-xl flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <img
            src={img1}
            alt=""
            className="rounded-full w-20 border-4 border-white"
          />
          <div>
            <p className="text-sm">Hello</p>
            <h2 className="text-xl ">Michele Obema</h2>
          </div>
        </div>
        <div className="flex items-center gap-2 mt-1 text-lg">
          <FaStar className="text-yellow-300" />
          4.0 (120 Reviews)
        </div>

        <button className=" text-white px-4 py-2 rounded-lg shadow flex items-center gap-2 border border-white">
          Create a New Course <FaArrowRight />
        </button>
    </div> */}

      <p className="font-semibold text-lg mb-2">Summary</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
        <div className="border w-10 h-10 rounded-full flex items-center justify-center bg-[#296AD2]"><FaBook className="text-white text-2xl" /></div>
          <div>
            <h3 className="text-lg font-bold">27</h3>
            <p className="text-gray-500 text-sm">Total Courses</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
          <div className="border w-10 h-10 rounded-full flex items-center justify-center bg-[#296AD2]"><FaUserGraduate className="text-white text-2xl" /></div>
          <div>
            <h3 className="text-lg font-bold">08</h3>
            <p className="text-gray-500 text-sm">Total Students</p>
          </div>
        </div>
        <div className="bg-white p-4 rounded shadow flex items-center space-x-4">
        <div className="border w-10 h-10 rounded-full flex items-center justify-center bg-[#296AD2]"><FaMoneyBillWave className="text-white text-2xl" /></div>
          <div>
            <h3 className="text-lg font-bold">12</h3>
            <p className="text-gray-500 text-sm">Total Earning</p>
          </div>
        </div>
      </div>

      {/* Courses Enrolled Status (Placeholder) */}

        <div className="bg-gray-100 rounded flex items-center justify-center text-gray-400">
          <EnrolledCoursesChart/>
        </div>
    </>
  );
};

export default Main;
