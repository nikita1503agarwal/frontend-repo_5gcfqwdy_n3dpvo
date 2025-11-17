import { Gauge, Rocket, Fuel, Shield } from 'lucide-react'

export default function Benefits() {
  const items = [
    { icon: Gauge, title: 'More Power & Torque', desc: 'Up to +25% bhp and torque on many models with smooth delivery.' },
    { icon: Fuel, title: 'Better Efficiency', desc: 'Optimised fuel mapping can improve MPG under normal driving.' },
    { icon: Rocket, title: 'Sharper Response', desc: 'Crisper throttle and smoother gear shifts for a more responsive drive.' },
    { icon: Shield, title: 'Safe & Reversible', desc: 'OEM‑level safeguards, diagnostic checks and the ability to revert.' },
  ]

  return (
    <section id="benefits" className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Why choose our ECU remap?</h2>
        <p className="mt-3 text-gray-600 max-w-2xl">Real performance you can feel on the road, engineered for reliability and everyday usability.</p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm hover:shadow-md transition">
              <Icon className="h-6 w-6 text-red-600" />
              <h3 className="mt-4 font-semibold text-gray-900">{title}</h3>
              <p className="mt-2 text-sm text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
