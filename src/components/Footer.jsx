function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="text-xl font-bold">Lumina</h3>
          <p className="text-slate-300 text-sm mt-1">Designed for calm, built for care.</p>
        </div>
        <nav className="flex gap-6 text-sm text-slate-300">
          <a href="#tools" className="hover:text-white">Tools</a>
          <a href="#features" className="hover:text-white">Features</a>
          <a href="/test" className="hover:text-white">System Check</a>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
