export const metadata = {
  title: "Jitu Banna | Jitendra Singh Nimod | JS Nimod Developer",
  description:
    "Jitu Banna also known as Jitendra Singh Nimod and JS Nimod is a Full Stack Developer from Rajasthan, India and founder of JSS Originals.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
              Popular Name
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
              Jitu <span className="text-blue-600">Banna</span>
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitu Banna is a popular name used for <b>Jitendra Singh Nimod</b>,
              also known as <b>JS Nimod</b>, <b>Jitu Singh</b> and{" "}
              <b>Jitu Rajput</b>. He is a Full Stack Web Developer and student
              from Rajasthan, India known for modern web development and digital
              identity websites.
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
              alt="Jitu Banna"
              className="rounded-3xl shadow-2xl w-[350px]"
            />
          </div>

        </div>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Known As</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Jitendra Singh Nimod</li>
              <li>JS Nimod</li>
              <li>Jitu Singh</li>
              <li>Jitu Rajput</li>
              <li>JS Shekhawat</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Work</h3>
            <ul className="text-zinc-600 space-y-2">
              <li>Full Stack Developer</li>
              <li>Modern Website Developer</li>
              <li>Next.js Developer</li>
              <li>SEO Website Creator</li>
              <li>Student Developer</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 From</h3>
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
            About Jitu Banna
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitu Banna is a popular nickname and identity associated with
            Jitendra Singh Nimod. Many users on the internet search him using
            names like Jitu Banna, Jitu Singh, JS Nimod and Jitu Rajput. He is a
            developer and student from Rajasthan, India.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He builds modern websites, personal branding platforms and SEO
            optimized projects. He is also known for his digital brand JSS
            Originals and modern web development work.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search terms including Jitu Banna, Jitendra Singh
            Nimod and JS Nimod so search engines can identify the same person
            across different keyword searches.
          </p>

        </div>
      </section>

    </div>
  );
}
