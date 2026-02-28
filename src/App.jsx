import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, motion } from "framer-motion"
import Landing from "./pages/Landing"
import Sort from "./pages/Sort"
import Searching from "./pages/Searching"

function App() {
  const location = useLocation()

  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-950">

      {/* 🌌 Animated Background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-blue-900 via-gray-950 to-purple-900"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />

      {/* 🌫 Floating glow */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{ x: [0, -40, 0] }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        style={{
          background:
            "radial-gradient(circle at 30% 30%, #3b82f6 0%, transparent 50%)"
        }}
      />

      {/* 📄 Page Content */}
      <div className="relative z-10">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>

            <Route
              path="/"
              element={
                <PageTransition>
                  <Landing />
                </PageTransition>
              }
            />

            <Route
              path="/sort"
              element={
                <PageTransition>
                  <Sort />
                </PageTransition>
              }
            />

            <Route
              path="/search"
              element={
                <PageTransition>
                  <Searching />
                </PageTransition>
              }
            />

          </Routes>
        </AnimatePresence>
      </div>
    </div>
  )
}

function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      exit={{ opacity: 0, y: -40, filter: "blur(8px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  )
}

export default App