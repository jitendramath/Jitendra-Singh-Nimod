export const metadata = {
  title:
    "Official Jitendra Singh Rajput | Jitendra Singh Nimod | JS Rajput",
  description:
    "Official page of Jitendra Singh Rajput also known as Jitendra Singh Nimod and JS Nimod. Full Stack Web Developer from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">

        <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
          Official Identity Page
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900">
          Official Jitendra Singh{" "}
          <span className="text-blue-600">Rajput</span>
        </h1>

        <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
          This is the official identity page of <b>Jitendra Singh Rajput</b>,
          also known as <b>Jitendra Singh Nimod</b>, <b>JS Nimod</b> and{" "}
          <b>Jitu Rajput</b>. He is a Full Stack Web Developer from Rajasthan,
          India and founder of JSS Originals.
        </p>

        <div className="mt-10 flex justify-center">
          <img
            src="/images/main/jitendra-singh-nimod.jpg"
            alt="Official Jitendra Singh Rajput"
            className="w-64 rounded-3xl shadow-2xl"
          />
        </div>

      </section>

      {/* INFO STRIP */}
      <section className="bg-white border-y">
        <div className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8 text-center">

          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">
              Full Stack
            </h3>
            <p className="text-zinc-600 mt-2">Web Developer</p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">
              Rajasthan
            </h3>
            <p className="text-zinc-600 mt-2">India</p>
          </div>

          <div>
            <h3 className="text-3xl font-extrabold text-blue-600">
              Founder
            </h3>
            <p className="text-zinc-600 mt-2">JSS Originals</p>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <div className="bg-white rounded-3xl shadow-sm border p-10">

          <h2 className="text-2xl font-bold mb-6">
            About Official Jitendra Singh Rajput
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Official Jitendra Singh Rajput refers to the verified digital
            identity of Jitendra Singh Nimod from Rajasthan, India. He is widely
            known online as JS Nimod and Jitu Rajput.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He builds modern websites, personal branding platforms and SEO
            optimized digital identity systems using modern technologies like
            Next.js and JavaScript frameworks.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This official page connects all search terms including Jitendra
            Singh Rajput, Jitendra Singh Nimod, JS Nimod and Jitu Rajput so
            search engines can clearly identify the same person across different
            searches.
          </p>

        </div>
      </section>

    </div>
  );
}
