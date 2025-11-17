export default function Pricing() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Transparent pricing</h2>
          <p className="mt-3 text-gray-600">Fixed pricing for popular services. Performance packs available on request.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Stage 1 Remap</h3>
            <p className="mt-1 text-sm text-gray-500">Safe gains on stock vehicles</p>
            <p className="mt-6 text-4xl font-extrabold">£249</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Diagnostics and health check</li>
              <li>Custom calibration for your ECU</li>
              <li>Before/after data logs</li>
            </ul>
          </div>

          <div className="rounded-2xl border-2 border-red-600 bg-white p-8 shadow-md relative">
            <span className="absolute -top-3 right-6 rounded-full bg-red-600 text-white text-xs px-3 py-1">Most Popular</span>
            <h3 className="text-lg font-semibold">Stage 1+ Remap</h3>
            <p className="mt-1 text-sm text-gray-500">Optimised for lightly‑modded cars</p>
            <p className="mt-6 text-4xl font-extrabold">£299</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>All Stage 1 features</li>
              <li>Enhanced boost and timing maps</li>
              <li>Launch control (where supported)</li>
            </ul>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-sm">
            <h3 className="text-lg font-semibold">Economy Remap</h3>
            <p className="mt-1 text-sm text-gray-500">For maximum MPG and drivability</p>
            <p className="mt-6 text-4xl font-extrabold">£219</p>
            <ul className="mt-6 space-y-2 text-sm text-gray-600">
              <li>Throttle smoothing</li>
              <li>Gearshift optimisation</li>
              <li>Eco‑focused mapping</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
