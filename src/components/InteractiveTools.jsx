import { useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function InteractiveTools() {
  const [imgUrl, setImgUrl] = useState('')
  const [mood, setMood] = useState(null)

  const [chat, setChat] = useState('')
  const [reply, setReply] = useState('')

  const [food, setFood] = useState('')
  const [cal, setCal] = useState(null)

  const analyzeMood = async () => {
    if (!imgUrl) return
    const res = await fetch(`${BACKEND}/api/analyze-mood`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image_url: imgUrl })
    })
    const data = await res.json()
    setMood(data)
  }

  const sendChat = async () => {
    if (!chat) return
    const res = await fetch(`${BACKEND}/api/chat`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: chat })
    })
    const data = await res.json()
    setReply(data.reply)
  }

  const estimateCalories = async () => {
    if (!food) return
    const res = await fetch(`${BACKEND}/api/nutrition`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ text: food })
    })
    const data = await res.json()
    setCal(data)
  }

  return (
    <section id="tools" className="relative py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Try Lumina now</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">Quick demos for image mood, chat, and calorie estimate. No signup.</p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {/* Mood by Image */}
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Mood by Image</h3>
            <input value={imgUrl} onChange={e=>setImgUrl(e.target.value)} placeholder="Paste image URL" className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button onClick={analyzeMood} className="mt-3 w-full rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-semibold hover:opacity-90">Analyze</button>
            {mood && (
              <div className="mt-3 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
                <p><span className="font-semibold">Mood:</span> {mood.mood}</p>
                <p><span className="font-semibold">Confidence:</span> {mood.confidence}</p>
                <ul className="list-disc ml-5 mt-2">
                  {mood.recommendations?.map((r)=> <li key={r}>{r}</li>)}
                </ul>
              </div>
            )}
          </div>

          {/* Health Chat */}
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Health Chat</h3>
            <textarea value={chat} onChange={e=>setChat(e.target.value)} placeholder="Ask about stress, sleep, diet..." rows={4} className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button onClick={sendChat} className="mt-3 w-full rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-semibold hover:opacity-90">Send</button>
            {reply && (<p className="mt-3 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">{reply}</p>)}
          </div>

          {/* Calories */}
          <div className="rounded-2xl border border-slate-200 p-6 bg-white">
            <h3 className="font-semibold text-slate-900">Nutrition Estimate</h3>
            <input value={food} onChange={e=>setFood(e.target.value)} placeholder="e.g., 2 eggs and a banana" className="mt-3 w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button onClick={estimateCalories} className="mt-3 w-full rounded-lg bg-slate-900 text-white px-3 py-2 text-sm font-semibold hover:opacity-90">Estimate</button>
            {cal && (
              <div className="mt-3 text-sm text-slate-700 bg-slate-50 rounded-lg p-3">
                <p><span className="font-semibold">Estimated Calories:</span> {cal.estimated_calories}</p>
                {cal.items?.length > 0 && (
                  <ul className="list-disc ml-5 mt-2">
                    {cal.items.map((i)=> <li key={i.item}>{i.item}: {i.calories}</li>)}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default InteractiveTools
