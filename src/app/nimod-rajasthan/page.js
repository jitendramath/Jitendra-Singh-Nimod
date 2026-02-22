export const metadata = {
  title: "Nimod Rajasthan | Jitendra Singh Nimod | Nimod Village Information",
  description:
    "Nimod Rajasthan is the village of Jitendra Singh Nimod, also known as JS Nimod and Jitu Rajput. Developer and student from Nimod, Kuchaman Didwana Rajasthan.",
};

export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-zinc-50 to-zinc-100">

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16 text-center">
        <p className="text-sm font-semibold text-blue-600 mb-3 uppercase tracking-widest">
          Location Identity
        </p>

        <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900">
          Nimod <span className="text-blue-600">Rajasthan</span>
        </h1>

        <p className="mt-6 text-lg text-zinc-600 max-w-3xl mx-auto">
          Nimod is a village in Rajasthan associated with Jitendra Singh Nimod,
          also known as JS Nimod and Jitu Rajput. He is a Full Stack Web
          Developer and student from Nimod village near Kuchaman City and
          Didwana region.
        </p>
      </section>

      {/* CARDS */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">📍 About Nimod</h3>
            <p className="text-zinc-600">
              Nimod is a village in Rajasthan connected to Kuchaman City and
              Didwana region. It is known locally for Rajput and Shekhawat
              families.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">👑 Known Identity</h3>
            <p className="text-zinc-600">
              Jitendra Singh Nimod is one of the known identities from Nimod
              Rajasthan. He is also known as JS Nimod and Jitu Rajput.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border shadow-sm">
            <h3 className="font-bold text-xl mb-3">💻 Work</h3>
            <p className="text-zinc-600">
              Full Stack Web Developer building modern websites and digital
              identity projects from Rajasthan, India.
            </p>
          </div>

        </div>
      </section>

      {/* LONG CONTENT */}
      <section className="max-w-4xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-2xl p-10 border shadow-sm">

          <h2 className="text-2xl font-bold mb-6">
            About Nimod Village Rajasthan
          </h2>

          <p className="text-zinc-700 leading-relaxed mb-4">
            Nimod is a village located in Rajasthan near Kuchaman City and
            Didwana region. It is associated with Rajput and Shekhawat
            communities and local families. Many people search for Nimod
            Rajasthan to know about people and identity from this village.
          </p>

          <p className="text-zinc-700 leading-relaxed mb-4">
            One of the known names associated with Nimod is Jitendra Singh Nimod,
            a developer and student from Rajasthan. He is also known online as
            JS Nimod and Jitu Rajput.
          </p>

          <p className="text-zinc-700 leading-relaxed">
            This page connects search keywords like Nimod Rajasthan, Nimod
            village and Jitendra Singh Nimod so search engines can understand
            their relation and identity across the web.
          </p>

        </div>
      </section>

    </div>
  );
}
