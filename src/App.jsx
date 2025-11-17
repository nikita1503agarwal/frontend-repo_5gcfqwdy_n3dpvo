import Hero from './components/Hero'
import Benefits from './components/Benefits'
import Pricing from './components/Pricing'
import Booking from './components/Booking'
import Trust from './components/Trust'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Hero />
      <Benefits />
      <Trust />
      <Pricing />
      <Booking />
      <footer className="bg-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-10 text-sm text-white/60 flex flex-col sm:flex-row justify-between gap-4">
          <p>© {new Date().getFullYear()} MFK Autocare. All rights reserved.</p>
          <p>ECU Remapping • DPF/EGR solutions • Diagnostics</p>
        </div>
      </footer>
    </div>
  )
}

export default App
