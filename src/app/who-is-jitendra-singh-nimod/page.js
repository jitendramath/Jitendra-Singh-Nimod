export const metadata = {
  title: "Who is Jitendra Singh Nimod? | Full Information",
  description:
    "Who is Jitendra Singh Nimod also known as JS Nimod. Full Stack Developer, BSc Mathematics student and founder of JSS Originals from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* TEXT */}
          <div>
            <p className="text-sm font-semibold text-blue-600 mb-3 tracking-widest uppercase">
              Official Identity
            </p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-zinc-900">
              Who is <span className="text-blue-600">Jitendra Singh Nimod</span>?
            </h1>

            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Jitendra Singh Nimod also known as <b>JS Nimod</b> is a Full Stack
              Web Developer and B.Sc Mathematics student from Rajasthan, India.
              He is the founder of <b>JSS Originals</b> and known for creating
              modern web experiences and digital identity based websites.
            </p>

            <div className="flex gap-4 mt-8">
              <a
                href="/developer-profile"
                className="px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-zinc-800 transition"
              >
                Developer Profile
              </a>

              <a
                href="/photos-jitendra-singh-nimod"
                className="px-6 py-3 rounded-xl border border-zinc-300 font-semibold hover:bg-zinc-100 transition"
              >
                View Photos
              </a>
            </div>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/main/jitendra-singh-nimod.jpg"
                alt="Jitendra Singh Nimod"
                className="rounded-3xl shadow-2xl w-[350px] object-cover"
              />

              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-xl text-sm shadow-lg">
                Full Stack Developer
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INFO SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold mb-3">👨‍💻 Profession</h3>
            <p className="text-zinc-600">
              Full Stack Web Developer building modern websites, tools and
              digital identity systems using Next.js and modern web tech.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold mb-3">🎓 Education</h3>
            <p className="text-zinc-600">
              B.Sc Mathematics student with strong interest in programming,
              technology and digital branding.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-sm border">
            <h3 className="text-xl font-bold mb-3">🚀 Brand</h3>
            <p className="text-zinc-600">
              Founder of JSS Originals focusing on creative digital projects,
              tools and personal brand websites.
            </p>
          </div>

        </div>
      </section>

      {/* LONG SEO CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-20">
        <div className="bg-white rounded-2xl p-10 shadow-sm border">
          <h2 className="text-2xl font-bold mb-6">
            Full Information About Jitendra Singh Nimod
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Jitendra Singh Nimod is an Indian web developer and student known
            for his modern web projects and personal branding websites. He is
            from Rajasthan and currently pursuing a Bachelor of Science in
            Mathematics while working as a Full Stack Developer.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            He is also known by names like JS Nimod and Jitendra Nimod. His work
            focuses on creating fast, SEO optimized and modern user interface
            based websites using technologies like Next.js, Tailwind CSS and
            modern JavaScript frameworks.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            Jitendra Singh Nimod is building his digital identity across search
            engines and social platforms through consistent branding, web
            development projects and content creation. His official website
            serves as the central hub for his work, projects and online
            presence.
          </p>
        </div>
      </section>
    </div>
  );
}
