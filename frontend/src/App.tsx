import { Route, Routes } from "react-router-dom";
import {
  About,
  Collaboration,
  Dashboard,
  FeedbackHub,
  Help,
  Landing,
  Login,
  NotFound,
  Pricing,
  Profile,
  Settings,
  Signup,
  Team,
} from "./pages";
import { ProtectedRoute } from "./components";

function App() {
  return (
    <section className="w-screen min-h-screen bg-amber-400">
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/feedback-hub"
          element={
            <ProtectedRoute>
              <FeedbackHub />
            </ProtectedRoute>
          }
        />
        <Route
          path="/collaboration"
          element={
            <ProtectedRoute>
              <Collaboration />
            </ProtectedRoute>
          }
        />
        <Route
          path="/team"
          element={
            <ProtectedRoute>
              <Team />
            </ProtectedRoute>
          }
        />
        <Route
          path="/settings"
          element={
            <ProtectedRoute>
              <Settings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/help"
          element={
            <ProtectedRoute>
              <Help />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />

        {/* Catch-all route for undefined paths */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default App;
