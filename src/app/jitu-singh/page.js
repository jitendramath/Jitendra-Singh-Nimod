export const metadata = {
  title: "Jitu Singh | Jitendra Singh Nimod | JS Nimod Rajasthan",
  description:
    "Jitu Singh also known as Jitendra Singh Nimod, JS Nimod and Jitu Rajput is a Full Stack Web Developer from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Popular Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitu <span className="text-blue-600">Singh</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitu Singh is another popular name used for <b>Jitendra Singh Nimod</b>,
              also known as <b>JS Nimod</b>, <b>Jitu Banna</b> and <b>Jitu Rajput</b>.
              He is a Full Stack Web Developer and student from Rajasthan, India.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/jitendra-singh"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                Main Identity
              </a>

              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
              >
                Developer Profile
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="Jitu Singh"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>

        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Also Known As</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>JS Nimod</li>
              <li>Jitu Banna</li>
              <li>Jitu Rajput</li>
              <li>JS Shekhawat</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Profession</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Full Stack Developer</li>
              <li>Web Developer Rajasthan</li>
              <li>Modern Website Creator</li>
              <li>Frontend Developer</li>
              <li>Student Developer</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 Location</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Nimod Rajasthan</li>
              <li>Kuchaman City</li>
              <li>Didwana</li>
              <li>Rajput Nimod</li>
              <li>Shekhawat Nimod</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About Jitu Singh
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitu Singh is a commonly used name for Jitendra Singh Nimod across
            the internet and local searches. Many users search him as Jitu
            Singh, Jitu Banna and JS Nimod. He is a web developer from Rajasthan,
            India.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He focuses on building modern websites, personal branding platforms
            and SEO optimized digital identity sites. He is also associated with
            JSS Originals digital brand.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects all related keywords including Jitu Singh,
            Jitendra Singh Nimod and JS Nimod so search engines can understand
            that they refer to the same person across different searches.
          </p>

        </div>
      </section>

    </div>
  );
}
