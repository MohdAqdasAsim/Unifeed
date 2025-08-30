import { Route, Routes } from "react-router-dom";
import { ProtectedRoute } from "./components";
import {
  Landing,
  About,
  Docs,
  Pricing,
  Login,
  Signup,
  Dashboard,
  Features,
  NotFound,
  Feedbacks,
} from "./pages";

function App() {
  return (
    <section className="flex flex-col w-screen min-h-screen bg-gray-900">
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/docs" element={<Docs />} />
        <Route path="/features" element={<Features />} />
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
          path="/feedbacks"
          element={
            <ProtectedRoute>
              <Feedbacks />
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
