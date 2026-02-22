export const metadata = {
  title:
    "Jitendra Singh Developer | JS Developer Rajasthan | Full Stack Developer",
  description:
    "Jitendra Singh Developer also known as JS Developer and Jitendra Singh Nimod is a Full Stack Web Developer from Rajasthan, India.",
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
              Jitendra Singh <span className="text-blue-600">Developer</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh is a Full Stack Web Developer from Rajasthan,
              India. Also known as <b>JS Developer</b>, <b>Jitu Developer</b> and
              <b> Jitendra Singh Nimod</b>. He builds modern websites, web apps
              and SEO optimized digital identity platforms.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                View Developer Profile
              </a>

              <a
                href="/blog"
                className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
              >
                Read Blog
              </a>
            </div>
          </div>

          <div className="flex justify-center">
            <img
              src="/images/main/jitendra-singh-nimod.jpg"
              alt="Jitendra Singh Developer"
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
              <li>SEO Systems</li>
              <li>Dynamic Websites</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">🚀 Work Focus</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Personal Brand Websites</li>
              <li>SEO Optimized Sites</li>
              <li>Portfolio Sites</li>
              <li>Modern Web Projects</li>
            </ul>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About Jitendra Singh Developer
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh is a modern Full Stack Web Developer from Rajasthan,
            India. He is also known as Jitendra Singh Nimod, JS Developer and
            Jitu Developer across the internet. His work focuses on building
            fast, modern and SEO optimized websites.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He builds websites using modern technologies like Next.js and modern
            JavaScript frameworks. His projects include personal branding
            websites, modern UI websites and developer portfolio platforms.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page represents the developer identity of Jitendra Singh and
            connects all related search terms like JS Developer, Jitendra Singh
            Developer and Full Stack Developer Rajasthan.
          </p>

        </div>
      </section>

    </div>
  );
}
