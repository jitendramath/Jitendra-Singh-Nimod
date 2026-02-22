export const metadata = {
  title: "Jitendra Singh Rajput | Jitendra Singh Nimod | JS Rajput",
  description:
    "Jitendra Singh Rajput also known as Jitendra Singh Nimod and JS Nimod is a Full Stack Developer and student from Rajasthan, India. Founder of JSS Originals.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Rajput Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitendra Singh <span className="text-blue-600">Rajput</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh Rajput also known as <b>Jitendra Singh Nimod</b>,
              <b> JS Nimod</b> and <b>Jitu Rajput</b> is a Full Stack Web
              Developer and student from Rajasthan, India. He is known for
              modern web development, personal branding websites and digital
              identity projects.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                Developer Profile
              </a>

              <a
                href="/who-is-jitendra-singh-nimod"
                className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
              >
                Full Biography
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="Jitendra Singh Rajput"
              className="rounded-3xl shadow-2xl w-[350px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* KEY INFO */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Known As</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>Jitu Rajput</li>
              <li>JS Nimod</li>
              <li>Jitu Singh</li>
              <li>JS Rajput</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Profession</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Full Stack Developer</li>
              <li>Web Developer Rajasthan</li>
              <li>Frontend Developer</li>
              <li>Student Developer</li>
              <li>JS Developer</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 Location</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Nimod Rajasthan</li>
              <li>Kuchaman City</li>
              <li>Didwana Kuchaman</li>
              <li>Rajasthan India</li>
              <li>Rajput Nimod</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO TEXT */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About Jitendra Singh Rajput
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh Rajput is a web developer and student from Rajasthan,
            India. He is widely known as Jitendra Singh Nimod and JS Nimod
            across the internet. Many people also search him as Jitu Rajput and
            Jitu Singh.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is associated with Nimod village, Kuchaman City and Didwana
            region of Rajasthan. His work focuses on modern web development,
            personal brand websites and SEO optimized platforms.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects all search terms related to Jitendra Singh
            Rajput, Jitendra Singh Nimod, JS Nimod and Jitu Rajput so search
            engines can identify the same person across different name searches.
          </p>

        </div>
      </section>

    </div>
  );
}
