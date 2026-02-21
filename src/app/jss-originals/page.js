import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";

export const metadata = {
  title: "JSS Originals — Founded by Jitendra Singh Nimod",
  description:
    "JSS Originals is a digital and web development brand created by Jitendra Singh Nimod, also known as Jitendra Nimod, Jitu Nimod and JS Nimod from Rajasthan, India.",
};

export default function JSSOriginalsPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-4xl">

          <h1 className="text-4xl font-bold mb-6">
            {identity.brand} — Digital Projects & Development
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.brand}</strong> is a digital development and web
              project brand created by <strong>{identity.name}</strong>, a Full
              Stack Web Developer from {identity.location.state},{" "}
              {identity.location.country}.
            </p>

            <p>
              Also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>,{" "}
              {identity.shortName} builds modern web applications, developer
              tools and SEO-optimized websites under the brand{" "}
              <strong>{identity.brand}</strong>.
            </p>

            <p>
              The purpose of {identity.brand} is to create scalable digital
              platforms, high-performance web apps and experimental projects
              related to full stack development, frontend engineering and modern
              web technologies.
            </p>

            <p>
              {identity.name}, founder of {identity.brand}, is currently pursuing{" "}
              {identity.education.degree} at {identity.education.college} while
              actively building digital products and online platforms.
            </p>

            <p>
              Many users search for{" "}
              <strong>
                JSS Originals, JSS Originals founder, Jitendra Nimod JSS
                Originals, JS Nimod brand
              </strong>
              . All these searches refer to {identity.name} and his development
              brand.
            </p>

            <p>
              Through {identity.brand}, he focuses on building performance-driven
              websites, modern UI systems and scalable web-based tools for the
              internet.
            </p>

          </div>

        </div>
      </section>
    </>
  );
}