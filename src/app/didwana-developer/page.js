export const metadata = {
  title:
    "Web Developer in Didwana Kuchaman | Jitendra Singh Nimod | JS Developer",
  description:
    "Jitendra Singh Nimod is a Web Developer in Didwana Kuchaman Rajasthan also known as JS Nimod and Jitu Developer. Full Stack Developer from Nimod.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Local Developer
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Developer in{" "}
              <span className="text-blue-600">Didwana Kuchaman</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh Nimod is a Full Stack Web Developer in Didwana
              Kuchaman Rajasthan. Also known as <b>JS Nimod</b>,{" "}
              <b>Jitu Developer</b> and <b>Jitendra Singh Dev</b>. He builds
              modern websites, portfolios and SEO optimized web platforms.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                Developer Profile
              </a>

              <a
                href="/contact"
                className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
              >
                Contact
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="Developer in Didwana Kuchaman"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>

        </div>
      </section>

      {/* SERVICES */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Website Development</h3>
            <p className="text-zinc-600">
              Modern responsive websites built using Next.js and modern
              technologies.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">🚀 SEO Websites</h3>
            <p className="text-zinc-600">
              SEO optimized personal brand and business websites for search
              engine ranking.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">⚙️ Web Apps</h3>
            <p className="text-zinc-600">
              Modern web apps and portfolio platforms with fast performance and
              clean UI.
            </p>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About Developer in Didwana Kuchaman
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            If you are searching for a web developer in Didwana Kuchaman
            Rajasthan, Jitendra Singh Nimod is one of the known developer
            identities from this region. He is also known as JS Nimod and Jitu
            Developer.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He builds modern websites, personal brand platforms and SEO
            optimized digital identity websites using modern technologies like
            Next.js and JavaScript frameworks.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search terms like developer in Didwana Kuchaman,
            JS Developer Rajasthan and Jitendra Singh Nimod so search engines
            can identify the correct developer identity.
          </p>

        </div>
      </section>

    </div>
  );
}
