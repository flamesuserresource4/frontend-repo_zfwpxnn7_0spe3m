import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden bg-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/kow0cKDK6Tap7xO9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 pointer-events-none flex items-center justify-center h-full">
        <div className="text-center px-6">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 drop-shadow-sm">
            Lumina
          </h1>
          <p className="mt-4 text-slate-700 md:text-xl max-w-2xl mx-auto">
            Your intelligent health companion: mood insights, mindful practices, nutrition guidance, and a supportive community.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            <a href="#tools" className="pointer-events-auto inline-flex items-center rounded-full bg-slate-900 text-white px-6 py-3 text-sm font-semibold shadow hover:shadow-lg transition-all">
              Explore Tools
            </a>
            <a href="#features" className="pointer-events-auto inline-flex items-center rounded-full bg-white/90 text-slate-900 px-6 py-3 text-sm font-semibold shadow border border-slate-200 hover:bg-white transition-all">
              See Features
            </a>
          </div>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    </section>
  )
}

export default Hero
