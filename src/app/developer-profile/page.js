import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import Image from "next/image";

export const metadata = {
  title: "Jitendra Nimod — Full Stack Developer from Rajasthan",
  description:
    "Jitendra Singh Nimod is a Full Stack Web Developer from Rajasthan, India also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Founder of JSS Originals.",
};

export default function DeveloperProfile() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium">

          <h1 className="text-4xl font-bold mb-6">
            Full Stack Developer — {identity.name}
          </h1>

          {/* developer image */}
          <div className="mb-10">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-strong">
              <Image
                src={identity.images.developer}
                alt="Jitendra Singh Nimod Full Stack Web Developer"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is a Full Stack Web Developer from{" "}
              {identity.location.state}, {identity.location.country}. He is also
              known online as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              As a modern web developer, {identity.shortName} focuses on building
              high-performance websites, scalable web apps and SEO-optimized
              platforms. He develops frontend interfaces, backend APIs and
              complete full stack systems.
            </p>

            <p>
              Currently a student of {identity.education.degree} at{" "}
              {identity.education.college}, he combines mathematics and logic
              with development to create efficient digital products.
            </p>

            <p>
              {identity.shortName} builds and experiments with modern web
              technologies and publishes projects under his brand{" "}
              <strong>{identity.brand}</strong>. His work includes responsive
              web apps, developer tools, SEO-optimized websites and online
              platforms.
            </p>

            <p>
              Many users search online for{" "}
              <strong>
                Jitendra Nimod developer, JS Nimod developer India, Jitu Nimod
                full stack developer
              </strong>
              . All these searches refer to {identity.name}, a developer from
              Rajasthan building modern web solutions.
            </p>

            <p>
              You can explore his work and professional identity on his official
              website and connected profiles including GitHub, LinkedIn and
              other developer platforms.
            </p>

            <div className="pt-6">
              <a
                href={identity.social.github}
                target="_blank"
                className="btn-premium"
              >
                Visit GitHub Profile
              </a>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}