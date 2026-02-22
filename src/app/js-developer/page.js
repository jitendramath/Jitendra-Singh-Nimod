export const metadata = {
  title: "JS Developer | Jitendra Singh Nimod | Full Stack Developer Rajasthan",
  description:
    "JS Developer also known as Jitendra Singh Nimod is a Full Stack Web Developer from Rajasthan, India building modern websites and SEO optimized platforms.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Developer Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              JS <span className="text-blue-600">Developer</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              JS Developer is the professional identity of <b>Jitendra Singh Nimod</b>,
              a Full Stack Web Developer from Rajasthan, India. He builds modern
              websites, web applications and SEO optimized digital identity
              platforms using modern technologies.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                Developer Profile
              </a>

              <a
                href="/official-website-jitendra-singh-nimod"
                className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
              >
                Official Website
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="JS Developer"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>

        </div>
      </section>

      {/* SKILLS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Frontend</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Next.js</li>
              <li>React</li>
              <li>Tailwind CSS</li>
              <li>Modern UI Design</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">⚙️ Backend</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Node.js</li>
              <li>API Development</li>
              <li>Dynamic Web Apps</li>
              <li>SEO Systems</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">🚀 Focus</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Portfolio Websites</li>
              <li>Personal Brand Sites</li>
              <li>Modern Web Projects</li>
              <li>SEO Websites</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About JS Developer
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            JS Developer refers to Jitendra Singh Nimod, a Full Stack Web
            Developer from Rajasthan, India. He is known for building modern
            websites, developer portfolios and SEO optimized digital identity
            platforms.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He uses modern technologies like Next.js, React and JavaScript to
            create fast and modern web experiences. He is also the founder of
            JSS Originals digital brand.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search terms like JS Developer, Jitendra Singh
            Nimod and Full Stack Developer Rajasthan so search engines can
            understand the connection between these keywords and identity.
          </p>

        </div>
      </section>

    </div>
  );
}
