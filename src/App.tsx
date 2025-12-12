import './App.css'
import { BackgroundRenderer } from './components/background/BackgroundRenderer'
import { PreviewResetButton } from './components/shared/PreviewResetButton'
import { PatternDialog } from './components/patterns/PatternDialog'
import { Toaster } from './components/ui/sonner'
import { Outlet } from "react-router-dom"
import { Navbar } from './components/shared/Navbar'

function App() {
  return (
    <BackgroundRenderer>

      {/* GLOBAL NAVBAR */}
      <Navbar />

      {/* PAGE CONTENT */}
      <main className="container mx-auto px-6 py-8">
        <Outlet />
      </main>

      {/* FLOATING PREVIEW RESET BUTTON */}
      <PreviewResetButton />

      {/* GLOBAL TOASTER */}
      <Toaster />

      {/* PATTERN DIALOG (GLOBAL) */}
      <PatternDialog />

    </BackgroundRenderer>
  )
}

export default App;
