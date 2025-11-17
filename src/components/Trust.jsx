import { Star, ShieldCheck, Wrench } from 'lucide-react'

export default function Trust() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="flex items-start gap-3">
          <Star className="h-6 w-6 text-yellow-400" />
          <div>
            <p className="font-semibold">Hundreds of happy drivers</p>
            <p className="text-white/70 text-sm">5‑star local service trusted by performance and fleet owners.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <ShieldCheck className="h-6 w-6 text-green-400" />
          <div>
            <p className="font-semibold">Warranty‑friendly approach</p>
            <p className="text-white/70 text-sm">Health checks and safe calibrations that respect factory limits.</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Wrench className="h-6 w-6 text-red-400" />
          <div>
            <p className="font-semibold">Mobile or workshop</p>
            <p className="text-white/70 text-sm">We can come to you or book you into our unit Mon–Fri.</p>
          </div>
        </div>
      </div>
    </section>
  )
}
