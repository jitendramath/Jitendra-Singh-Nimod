export const metadata = {
  title: "Official Website of Jitendra Singh Nimod | JS Nimod",
  description:
    "Official website of Jitendra Singh Nimod also known as JS Nimod. Full Stack Developer, BSc Mathematics student and founder of JSS Originals from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-50 via-white to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm font-semibold text-blue-600 uppercase tracking-widest mb-4">
          Official Identity Page
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 leading-tight">
          Official Website of{" "}
          <span className="text-blue-600">Jitendra Singh Nimod</span>
        </h1>

        <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
          This is the official website of Jitendra Singh Nimod also known as JS
          Nimod, a Full Stack Web Developer and B.Sc Mathematics student from
          Rajasthan, India. Founder of JSS Originals and creator of modern web
          projects.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="/images/main/jitendra-singh-nimod.jpg"
            alt="Official photo of Jitendra Singh Nimod"
            className="w-64 rounded-3xl shadow-2xl"
          />
        </div>
      </section>

      {/* INFO STRIP */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">Full Stack</h3>
            <p className="text-zinc-600 mt-2">Web Developer</p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">B.Sc Maths</h3>
            <p className="text-zinc-600 mt-2">Student</p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">Founder</h3>
            <p className="text-zinc-600 mt-2">JSS Originals</p>
          </div>

        </div>
      </section>

      {/* MAIN CONTENT */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-sm border p-10">

          <h2 className="text-2xl font-bold mb-6">
            About This Official Website
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            The official website of Jitendra Singh Nimod represents his digital
            identity across the internet. This website contains complete
            information about his work, projects, developer journey and personal
            brand known as JSS Originals.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh Nimod is also known by names like JS Nimod and
            Jitendra Nimod. He is a developer from Rajasthan, India who builds
            modern, fast and SEO optimized websites using technologies like
            Next.js and modern JavaScript frameworks.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-6">
            This official website acts as the central hub of his online presence
            including developer portfolio, blog, projects and professional
            information. It helps search engines and users identify the real and
            official identity of Jitendra Singh Nimod on the internet.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="/who-is-jitendra-singh-nimod"
              className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
            >
              Full Biography
            </a>

            <a
              href="/developer-profile"
              className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
            >
              Developer Profile
            </a>

            <a
              href="/blog"
              className="px-6 py-3 rounded-xl border font-semibold hover:bg-zinc-100 transition"
            >
              Visit Blog
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
