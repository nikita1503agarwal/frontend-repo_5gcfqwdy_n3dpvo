import Spline from '@splinetool/react-spline'
import { Flame, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-black text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/8fw9Z-c-rqW3nWBN/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black pointer-events-none" />

      <div className="relative z-10 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs tracking-wide uppercase">
            <Sparkles className="h-3 w-3 text-yellow-300" />
            <span className="text-yellow-300">Limited slots this week</span>
          </div>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold leading-tight">
            ECU Remapping by MFK Autocare
          </h1>
          <p className="mt-4 text-lg text-white/80">
            Unlock hidden performance, sharper throttle response and better efficiency. Safe, dyno-proven maps tailored to your car.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a href="#booking" className="inline-flex items-center justify-center rounded-md bg-red-600 hover:bg-red-700 transition text-white px-6 py-3 font-semibold shadow-lg shadow-red-600/30">
              Book Your Slot Now
            </a>
            <a href="#benefits" className="inline-flex items-center justify-center rounded-md bg-white/10 hover:bg-white/20 transition text-white px-6 py-3 font-semibold">
              See What You Gain
            </a>
          </div>
          <p className="mt-3 text-sm text-white/60">Mon–Fri bookings • Same‑day remaps • Warranty‑friendly approach</p>
        </div>
      </div>
    </section>
  )
}
