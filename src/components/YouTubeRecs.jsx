import { useEffect, useState } from 'react'

const BACKEND = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

function YouTubeRecs() {
  const [videos, setVideos] = useState([])

  useEffect(() => {
    fetch(`${BACKEND}/api/youtube-recs`).then(r=>r.json()).then(d=> setVideos(d.videos || [])).catch(()=>{})
  }, [])

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 text-center">Guided sessions</h2>
        <p className="text-slate-600 text-center mt-3 max-w-2xl mx-auto">Short, uplifting sessions to help you reset.</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {videos.map(v => (
            <div key={v.youtube_id} className="rounded-2xl overflow-hidden border border-slate-200 bg-white shadow-sm">
              <div className="aspect-video">
                <iframe className="w-full h-full" src={`https://www.youtube.com/embed/${v.youtube_id}`} title={v.title} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-slate-900">{v.title}</h3>
                <p className="text-xs text-slate-500 mt-1 capitalize">{v.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default YouTubeRecs
