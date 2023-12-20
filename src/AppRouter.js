import React from "react";
import { Routes, Route } from "react-router-dom";
import AppAuth from "./AppAuth";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import Dashboard from "./pages/Dashboard";

function AppRouter({ isUserLoggedIn }) {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/dashboard"
        element={
          <React.Suspense fallback={<>...</>}>
            <AppAuth isUserLoggedIn={isUserLoggedIn}>
              <Dashboard />
            </AppAuth>
          </React.Suspense>
        }
      />
    </Routes>
  );
}

export default AppRouter;
