export default function Header() {
  return (
    <header className="w-full border-b bg-white/80 backdrop-blur sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

        {/* Logo */}
        <a href="/" className="text-xl font-bold tracking-tight">
          Jitendra<span className="text-blue-600">.</span>
        </a>

        {/* Nav */}
        <nav className="hidden md:flex gap-8 text-sm font-medium">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/about" className="hover:text-blue-600">About</a>
          <a href="/developer-profile" className="hover:text-blue-600">Developer</a>
          <a href="/student-profile" className="hover:text-blue-600">Student</a>
          <a href="/blog" className="hover:text-blue-600">Blog</a>
          <a href="/contact" className="hover:text-blue-600">Contact</a>
        </nav>

      </div>
    </header>
  );
}