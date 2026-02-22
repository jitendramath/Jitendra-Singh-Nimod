export const metadata = {
  title: "JSS Rajput | JSS Originals Rajput | Jitendra Singh Nimod",
  description:
    "JSS Rajput refers to JSS Originals brand by Jitendra Singh Nimod also known as JS Nimod and Jitu Rajput from Rajasthan, India.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
          Brand Identity
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900">
          JSS <span className="text-blue-600">Rajput</span>
        </h1>

        <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
          JSS Rajput is connected with <b>JSS Originals</b>, a digital brand
          created by <b>Jitendra Singh Nimod</b>, also known as <b>JS Nimod</b>{" "}
          and <b>Jitu Rajput</b> from Rajasthan, India.
        </p>
      </section>

      {/* INFO GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">🚀 Brand</h3>
            <p className="text-zinc-600">
              JSS Originals is a digital brand focused on modern web development
              and personal branding websites.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Founder</h3>
            <p className="text-zinc-600">
              Founded by Jitendra Singh Nimod also known as JS Nimod and Jitu
              Rajput from Rajasthan.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Work</h3>
            <p className="text-zinc-600">
              Creating modern websites, developer portfolios and digital
              identity platforms.
            </p>
          </div>

        </div>
      </section>

      {/* LONG SEO */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About JSS Rajput
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            JSS Rajput is associated with JSS Originals, a digital brand created
            by Jitendra Singh Nimod from Rajasthan, India. He is also known as
            JS Nimod and Jitu Rajput across the internet.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            The brand focuses on modern website development, personal branding
            platforms and digital identity creation using modern web
            technologies.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search terms like JSS Rajput, JSS Originals and
            Jitendra Singh Nimod so search engines can understand the brand and
            identity connection.
          </p>

        </div>
      </section>

    </div>
  );
}
