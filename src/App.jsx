import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layouts from "./components/Layouts";
import Home from "./components/Home";
import NewFeatures from "./pages/NewFeatures";
import Pricing from "./pages/Pricing";
import LoginPage from "./app/login/LoginPage";
import GetStartedPage from "./app/GetStarted/GetStartedPage";
import Dashboard from "./pages/Dashboard";
import LiveMeeting from "./pages/LiveMeeting";
import MeetingsHistory from "./pages/MeetingsHistory";
import ChatbotUI from "./pages/ChatbotUI";
import UserProvider from "./context/UserContext";


function App() {
  return (
    <UserProvider>
        {/* Define your routes for public pages */}
        <Routes>
          <Route path="/" element={<Layouts><Home /></Layouts>} />
          <Route path="/features" element={<Layouts><NewFeatures /></Layouts>} />
          <Route path="/pricing" element={<Layouts><Pricing /></Layouts>} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/getstarted" element={<GetStartedPage />} />

        {/* Define routes for authenticated parts of your app */}
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/live-meeting" element={<LiveMeeting />} />
          <Route path="/meetings-history" element={<MeetingsHistory />} />
          <Route path="/debriefing" element={<ChatbotUI />} />
          {/* Remove pet selection related routes if not needed */}
        </Routes>
    </UserProvider>
  );
}

export default App;
