import { useEffect, useMemo, useState } from 'react'

const API_BASE = import.meta.env.VITE_BACKEND_URL || ''

export default function Booking() {
  const [date, setDate] = useState(() => new Date().toISOString().slice(0,10))
  const [available, setAvailable] = useState([])
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    name: '', email: '', phone: '', vehicle: '', registration: '', time: '', notes: ''
  })
  const [status, setStatus] = useState(null)

  const isWeekday = (d) => {
    const wd = new Date(d).getDay() // 0 Sun - 6 Sat
    return wd >= 1 && wd <= 5
  }

  useEffect(() => {
    if (!isWeekday(date)) {
      setAvailable([])
      return
    }
    setLoading(true)
    fetch(`${API_BASE}/api/availability/${date}`)
      .then(r => r.json())
      .then(data => setAvailable(data.available || []))
      .catch(() => setAvailable([]))
      .finally(() => setLoading(false))
  }, [date])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus(null)
    if (!form.time) {
      setStatus({ type: 'error', message: 'Please select a time slot' })
      return
    }
    const payload = { ...form, date }
    try {
      const res = await fetch(`${API_BASE}/api/book`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      if (!res.ok) {
        const err = await res.json()
        throw new Error(err.detail || 'Booking failed')
      }
      const data = await res.json()
      setStatus({ type: 'success', message: `Confirmed! Ref ${data.id.slice(-6).toUpperCase()}` })
      setForm({ name: '', email: '', phone: '', vehicle: '', registration: '', time: '', notes: '' })
      // refresh avail
      const r = await fetch(`${API_BASE}/api/availability/${date}`)
      const a = await r.json()
      setAvailable(a.available || [])
    } catch (e) {
      setStatus({ type: 'error', message: e.message })
    }
  }

  return (
    <section id="booking" className="relative bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Book your ECU remap</h2>
            <p className="mt-3 text-gray-600">Mon–Fri appointments. Choose a day, pick a slot, and we’ll confirm instantly.</p>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700">Select date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="mt-2 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600"
              />
              {!isWeekday(date) && (
                <p className="mt-2 text-sm text-red-600">We operate Monday to Friday only. Please choose a weekday.</p>
              )}

              <div className="mt-4">
                <p className="text-sm font-medium text-gray-700">Available time slots</p>
                {loading ? (
                  <p className="mt-2 text-gray-500">Loading…</p>
                ) : (
                  <div className="mt-2 flex flex-wrap gap-2">
                    {available.length === 0 && isWeekday(date) && (
                      <span className="text-sm text-gray-500">No slots left for this day.</span>
                    )}
                    {available.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setForm((f) => ({ ...f, time: t }))}
                        className={`px-3 py-2 rounded-md text-sm border ${form.time === t ? 'bg-red-600 text-white border-red-600' : 'bg-white hover:bg-gray-50 border-gray-200'}`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white p-6 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700">Full name</label>
                  <input value={form.name} onChange={(e)=>setForm({...form, name:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="email" value={form.email} onChange={(e)=>setForm({...form, email:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Phone</label>
                  <input value={form.phone} onChange={(e)=>setForm({...form, phone:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Vehicle</label>
                  <input value={form.vehicle} onChange={(e)=>setForm({...form, vehicle:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Registration</label>
                  <input value={form.registration} onChange={(e)=>setForm({...form, registration:e.target.value})} required className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700">Chosen time</label>
                  <input value={form.time} readOnly placeholder="Pick a slot above" className="mt-1 w-full rounded-md border-gray-300 bg-gray-50" />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">Notes (optional)</label>
                <textarea value={form.notes} onChange={(e)=>setForm({...form, notes:e.target.value})} rows="3" className="mt-1 w-full rounded-md border-gray-300 focus:border-red-600 focus:ring-red-600" />
              </div>

              {status && (
                <div className={`mt-4 rounded-md p-3 text-sm ${status.type === 'success' ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                  {status.message}
                </div>
              )}

              <button type="submit" className="mt-6 w-full rounded-md bg-red-600 hover:bg-red-700 text-white font-semibold py-3">Confirm Booking</button>
              <p className="mt-3 text-xs text-gray-500 text-center">No payment taken online. We’ll confirm details by email.</p>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
