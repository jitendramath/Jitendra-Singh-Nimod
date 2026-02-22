export const metadata = {
  title:
    "Jitendra Singh Shekhawat Rajput | JS Shekhawat | Jitendra Singh Nimod",
  description:
    "Jitendra Singh Shekhawat Rajput also known as Jitendra Singh Nimod, JS Shekhawat and Jitu Shekhawat is a Full Stack Developer from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Shekhawat Rajput Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitendra Singh{" "}
              <span className="text-blue-600">Shekhawat Rajput</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh Shekhawat Rajput also known as{" "}
              <b>Jitendra Singh Nimod</b>, <b>JS Shekhawat</b> and{" "}
              <b>Jitu Shekhawat</b> is a Full Stack Web Developer and student
              from Rajasthan, India. He is known for modern web development,
              digital identity websites and the brand JSS Originals.
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
              alt="Jitendra Singh Shekhawat Rajput"
              className="rounded-3xl shadow-2xl w-[350px] object-cover"
            />
          </div>

        </div>
      </section>

      {/* GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Known As</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>JS Shekhawat</li>
              <li>Jitu Shekhawat</li>
              <li>Jitendra Rajput</li>
              <li>Jitu Singh</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Work</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Full Stack Developer</li>
              <li>Next.js Developer</li>
              <li>Personal Brand Websites</li>
              <li>Modern Web Apps</li>
              <li>SEO Websites</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 From</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Nimod Rajasthan</li>
              <li>Kuchaman City</li>
              <li>Didwana Kuchaman</li>
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
            About Jitendra Singh Shekhawat Rajput
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh Shekhawat Rajput is a developer and student from
            Rajasthan, India. He is widely known on the internet as Jitendra
            Singh Nimod and JS Shekhawat. Many users search him using names like
            Jitu Shekhawat, Jitendra Rajput and Jitu Singh.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is associated with Nimod village, Kuchaman City and Didwana
            region. His digital identity focuses on web development, technology
            and modern website creation. He is also the founder of JSS Originals
            digital brand.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search terms like Jitendra Singh Shekhawat
            Rajput, Jitendra Singh Nimod, JS Shekhawat and Jitu Shekhawat so
            that search engines can understand they refer to the same person.
          </p>

        </div>
      </section>

    </div>
  );
}
