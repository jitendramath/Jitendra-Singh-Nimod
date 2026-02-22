export const metadata = {
  title: "Jitendra Singh Shekhawat | JS Shekhawat | Jitendra Singh Nimod",
  description:
    "Jitendra Singh Shekhawat also known as Jitendra Singh Nimod, JS Shekhawat, Jitu Shekhawat and Jitendra Rajput. Full Stack Developer from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Identity & Aliases
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitendra Singh <span className="text-blue-600">Shekhawat</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh Shekhawat also known as <b>Jitendra Singh Nimod</b>,
              <b> JS Shekhawat</b>, <b>Jitu Shekhawat</b> and <b>Jitendra Rajput</b>
              is a Full Stack Web Developer and student from Rajasthan, India.
              He is known for building modern websites and running the digital
              brand JSS Originals.
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
              alt="Jitendra Singh Shekhawat"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>
        </div>
      </section>

      {/* ALIAS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Popular Names</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>JS Shekhawat</li>
              <li>Jitu Shekhawat</li>
              <li>Jitu Singh</li>
              <li>Jitu banna</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Developer Identity</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>JS Developer</li>
              <li>Jitu Developer</li>
              <li>Jitu banna developer</li>
              <li>Jitendra Singh Dev</li>
              <li>Full Stack Developer Rajasthan</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 Location Identity</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Kuchaman City</li>
              <li>Jitendra Singh Didwana Kuchaman</li>
              <li>Nimod Rajasthan</li>
              <li>Shekhawat in Nimod</li>
              <li>Rajput Nimod</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO TEXT */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">
          <h2 className="text-2xl font-bold mb-6">
            Full Information About Jitendra Singh Shekhawat
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh Shekhawat is also known as Jitendra Singh Nimod and
            JS Shekhawat. He is a developer and student from Rajasthan, India.
            Many people know him by names like Jitu Shekhawat, Jitu Singh and
            Jitendra Rajput across the internet and social platforms.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is associated with Kuchaman City, Didwana and Nimod village in
            Rajasthan. His digital identity is connected with web development,
            technology and modern online branding through his projects and his
            brand JSS Originals.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects all identity keywords including Jitendra Singh
            Shekhawat, JS Shekhawat, Jitu Shekhawat, Jitendra Singh Nimod and
            other related names so that users and search engines can identify
            the same person across different searches on the internet.
          </p>
        </div>
      </section>

    </div>
  );
}
