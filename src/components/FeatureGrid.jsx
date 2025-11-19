import { Heart, Brain, Camera, MessageCircle, Salad, Stethoscope, Gauge, Gamepad2, Dumbbell, Pill, Youtube, Users } from 'lucide-react'

const features = [
  { icon: Brain, title: 'Mood by Image', desc: 'Upload a photo to get a quick, privacy-first mood insight powered by on-device analysis.' },
  { icon: MessageCircle, title: 'Health Chat', desc: 'Ask anything about sleep, stress, or routines. Get kind, actionable guidance.' },
  { icon: Camera, title: 'Image Diagnosis', desc: 'Educational image screening to flag potential concerns. Not a medical diagnosis.' },
  { icon: Heart, title: 'Mind Companion', desc: 'Daily reflections and grounding prompts to support mental wellbeing.' },
  { icon: Salad, title: 'Calories & Nutrition', desc: 'Type what you ate; get estimated calories and balance tips.' },
  { icon: Stethoscope, title: 'Doctor Portal', desc: 'A space for clinicians to review cases and share guidance.' },
  { icon: Gauge, title: 'Smart Dashboard', desc: 'Trends across mood, sleep, and routines to spot patterns.' },
  { icon: Gamepad2, title: 'Mental Health Games', desc: 'Gentle, focus-building mini games to unwind and reset.' },
  { icon: Dumbbell, title: 'Breath & Meditation', desc: 'Short guided breathing and meditation sessions, anytime.' },
  { icon: Pill, title: 'AI Medications', desc: 'Medication reminders and safety info at a glance.' },
  { icon: Youtube, title: 'YouTube Sessions', desc: 'Curated sessions for breathing, meditation, and stretching.' },
  { icon: Users, title: 'Community Space', desc: 'A safe space to share progress and uplift each other.' },
]

function FeatureGrid() {
  return (
    <section id="features" className="relative py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Everything in one calm place</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">Lumina blends guidance, gentle accountability, and community with a minimalist design that stays out of your way.</p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-slate-200 p-6 hover:shadow-lg transition-all bg-white">
              <div className="w-12 h-12 rounded-xl bg-slate-900 text-white flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform">
                <Icon size={22} />
              </div>
              <h3 className="mt-4 font-semibold text-slate-900 text-lg">{title}</h3>
              <p className="mt-2 text-slate-600 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FeatureGrid
