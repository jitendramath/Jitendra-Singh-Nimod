export const metadata = {
  title: "JS Shekhawat | Jitendra Singh Shekhawat | JS Nimod Developer",
  description:
    "JS Shekhawat also known as Jitendra Singh Nimod and Jitu Shekhawat is a Full Stack Web Developer from Rajasthan, India and founder of JSS Originals.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Short Name Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              JS <span className="text-blue-600">Shekhawat</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              JS Shekhawat is a popular short name of <b>Jitendra Singh Nimod</b>
              also known as <b>Jitu Shekhawat</b> and <b>Jitendra Rajput</b>. He
              is a Full Stack Web Developer and student from Rajasthan, India
              building modern websites and digital identity platforms.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/jitendra-singh"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                Main Profile
              </a>

              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
              >
                Developer Page
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="JS Shekhawat"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>

        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Full Names</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>Jitendra Singh Shekhawat</li>
              <li>Jitendra Rajput</li>
              <li>Jitu Shekhawat</li>
              <li>Jitu Singh</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Profession</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Full Stack Developer</li>
              <li>JS Developer</li>
              <li>Frontend Developer</li>
              <li>Modern Web Developer</li>
              <li>Student Developer</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 Location</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Nimod Rajasthan</li>
              <li>Kuchaman City</li>
              <li>Didwana</li>
              <li>Shekhawat Nimod</li>
              <li>Rajput Nimod</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About JS Shekhawat
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            JS Shekhawat is a short and popular name used for Jitendra Singh
            Nimod across the internet. Many users search him using names like JS
            Shekhawat, Jitu Shekhawat and Jitendra Rajput. He is a web developer
            from Rajasthan, India.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is known for building modern websites, personal branding sites
            and developer platforms. His digital brand JSS Originals focuses on
            creative web projects and online identity development.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects all related search terms including JS Shekhawat,
            Jitendra Singh Nimod and Jitu Shekhawat so search engines can
            recognize the same person across different name searches.
          </p>

        </div>
      </section>

    </div>
  );
}
