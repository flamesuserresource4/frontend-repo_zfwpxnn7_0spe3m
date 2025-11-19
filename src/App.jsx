import Hero from './components/Hero'
import FeatureGrid from './components/FeatureGrid'
import InteractiveTools from './components/InteractiveTools'
import YouTubeRecs from './components/YouTubeRecs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Hero />
      <FeatureGrid />
      <InteractiveTools />
      <YouTubeRecs />
      <Footer />
    </div>
  )
}

export default App
