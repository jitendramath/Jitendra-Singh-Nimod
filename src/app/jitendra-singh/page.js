export const metadata = {
  title: "Jitendra Singh | Jitendra Singh Nimod | JS Developer Rajasthan",
  description:
    "Jitendra Singh also known as Jitendra Singh Nimod, JS Nimod and Jitendra Shekhawat is a Full Stack Developer and BSc Mathematics student from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Personal Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitendra <span className="text-blue-600">Singh</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh also known as <b>Jitendra Singh Nimod</b>,
              <b> JS Nimod</b>, <b>Jitendra Shekhawat</b> and <b>Jitu Singh</b> is
              a Full Stack Web Developer and student from Rajasthan, India. He
              is the founder of JSS Originals and known for building modern web
              projects and personal branding websites.
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
                Full Bio
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="Jitendra Singh"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>
        </div>
      </section>

      {/* KEYWORDS GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Known As</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>JS Nimod</li>
              <li>Jitendra Shekhawat</li>
              <li>Jitu Singh</li>
              <li>Jitu banna</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Profession</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Full Stack Developer</li>
              <li>JS Developer</li>
              <li>Web Developer Rajasthan</li>
              <li>Student Developer</li>
              <li>Frontend Developer</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 Location</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Kuchaman City</li>
              <li>Didwana Kuchaman</li>
              <li>Nimod Rajasthan</li>
              <li>Shekhawat Nimod</li>
              <li>Rajput Nimod</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO TEXT */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            Full Information About Jitendra Singh
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh is a developer and student from Rajasthan, India. He
            is widely known as Jitendra Singh Nimod and JS Nimod on the
            internet. Many users search him using different names like Jitendra
            Shekhawat, Jitu Singh and Jitu banna.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is associated with Kuchaman City, Didwana and Nimod village. His
            work focuses on web development, digital identity and modern website
            creation. He is also the founder of JSS Originals, a digital brand
            focused on creative and modern web projects.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page helps users and search engines understand the identity of
            Jitendra Singh across multiple searches including Jitendra Singh
            Nimod, JS developer, Jitendra Shekhawat and other related keywords.
          </p>

        </div>
      </section>

    </div>
  );
}
