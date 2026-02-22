export const metadata = {
  title:
    "Jitendra Singh Kuchaman City | Jitendra Singh Nimod | JS Developer",
  description:
    "Jitendra Singh from Kuchaman City also known as Jitendra Singh Nimod and JS Nimod is a Full Stack Web Developer from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Local Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitendra Singh{" "}
              <span className="text-blue-600">Kuchaman City</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh from Kuchaman City is also known as{" "}
              <b>Jitendra Singh Nimod</b>, <b>JS Nimod</b> and{" "}
              <b>Jitu Developer</b>. He is a Full Stack Web Developer from
              Rajasthan building modern websites and digital platforms.
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
              alt="Jitendra Singh Kuchaman City"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>

        </div>
      </section>

      {/* INFO */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 Location</h3>
            <p className="text-zinc-600">
              Kuchaman City is located in Rajasthan and connected with Didwana
              region and nearby villages like Nimod.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Identity</h3>
            <p className="text-zinc-600">
              Jitendra Singh Nimod is associated with Kuchaman City and known
              online as JS Nimod and Jitu Developer.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Work</h3>
            <p className="text-zinc-600">
              Full Stack Developer building modern websites, portfolios and SEO
              optimized digital identity platforms.
            </p>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About Jitendra Singh Kuchaman City
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh from Kuchaman City Rajasthan is known as Jitendra
            Singh Nimod and JS Nimod across the internet. He is a Full Stack Web
            Developer building modern websites and web applications.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is associated with Nimod village and Didwana Kuchaman region and
            focuses on modern web development, portfolio sites and SEO optimized
            digital identity platforms.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search keywords like Jitendra Singh Kuchaman
            City, JS Developer Rajasthan and Jitendra Singh Nimod so search
            engines can identify the same person across different searches.
          </p>

        </div>
      </section>

    </div>
  );
}
