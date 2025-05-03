import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"; 
import Main from './components/Overview.jsx';
import MyProfile from './components/MyProfile.jsx';
import Courses from './components/Courses.jsx';
import Reviews from './components/Reviews.jsx';
import QuizAttempt from './components/QuizAttempt.jsx';
import Message from './components/Message.jsx';
import Setting from './components/Setting.jsx';
import Logout from './components/Logout.jsx';
import Category from './components/Category.jsx';
import Payment from './components/Payment.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/", element : <Main/>,
      },
     { path: "/profile", element : <MyProfile/>},
     { path: "/enrollCourse", element : <Courses/>},
     { path: "/message" , element :  <Message/>},
     
     { path: "/review" , element :  <Reviews/>},
     { path: "/quizAttempt" , element :  <QuizAttempt/>},
     {path : "/category", element:<Category/>},
     { path: "/payment" , element :  <Payment/>},
     { path: "/setting" , element :  <Setting/>},
     { path: "/logout" , element :  <Logout/>},
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
  
);

