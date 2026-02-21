import Image from "next/image";
import identity from "../data/identity";
import StructuredData from "../components/StructuredData";

export const metadata = {
  title:
    "Jitendra Singh Nimod — Full Stack Developer | B.Sc Mathematics Student | JSS Originals",
  description:
    "Official website of Jitendra Singh Nimod also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function HomePage() {
  return (
    <>
      <StructuredData />

      <section className="section bg-hero-gradient">
        <div className="container-premium grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="fade-in">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {identity.name}
            </h1>

            <h2 className="mt-4 text-xl md:text-2xl font-semibold gradient-text">
              {identity.title}
            </h2>

            <p className="mt-6 seo-text">
              {identity.description} He is currently studying{" "}
              {identity.education.degree} at{" "}
              {identity.education.college} and is based in{" "}
              {identity.location.city}, {identity.location.state},{" "}
              {identity.location.country}.
            </p>

            <p className="mt-4 seo-text">
              Also known as{" "}
              <strong>
                {identity.alternateNames.join(", ")}
              </strong>
              , he builds modern web applications and digital tools under{" "}
              <strong>{identity.brand}</strong>.
            </p>

            <div className="mt-8 flex gap-4">
              <a href="/about" className="btn-premium">
                Learn More
              </a>
              <a
                href={identity.social.github}
                target="_blank"
                className="px-6 py-3 rounded-xl border border-black hover:bg-black hover:text-white transition"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-strong">
              <Image
                src={identity.images.main}
                alt="Jitendra Singh Nimod Full Stack Developer from Rajasthan"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SEO BLOCK */}
      <section className="section">
        <div className="container-premium">
          <h3 className="text-2xl font-bold mb-6">
            Identity & Search Recognition
          </h3>

          <div className="seo-text space-y-4">
            <p>
              Jitendra Singh Nimod is widely searched online as Jitendra Nimod,
              Jitu Nimod and JS Nimod. These names refer to the same individual —
              a Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.
            </p>

            <p>
              If you are searching for Jitendra Singh Nimod from Kuchaman City,
              Didwana, or Nimod village, this is the official website confirming
              his digital identity and professional background.
            </p>

            <p>
              Founder of {identity.brand}, he focuses on building scalable,
              performance-driven web applications and SEO-optimized digital platforms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}