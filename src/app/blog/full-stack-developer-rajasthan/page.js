import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Full Stack Developer from Rajasthan — Jitendra Singh Nimod",
  description:
    "Jitendra Singh Nimod is a Full Stack Developer from Rajasthan, India. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Based in Kuchaman City.",
};

export default function RajasthanDeveloperPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            Full Stack Developer from Rajasthan
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is a Full Stack Web Developer
              based in {identity.location.city}, {identity.location.state},{" "}
              {identity.location.country}. He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              As a developer from Rajasthan, {identity.shortName} focuses on
              building scalable web applications, performance-driven websites
              and SEO-optimized digital platforms.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                Full Stack Developer in Rajasthan, Jitendra Nimod Rajasthan,
                JS Nimod India
              </strong>
              . These searches refer to {identity.name}, a modern web developer
              working from Rajasthan.
            </p>

            <p>
              Alongside development, he is currently pursuing{" "}
              {identity.education.degree} at{" "}
              {identity.education.college}, combining mathematics and technology
              in his digital projects.
            </p>

            <p>
              Under his brand <strong>{identity.brand}</strong>, he builds web
              solutions, developer tools and online platforms designed for speed,
              SEO performance and scalability.
            </p>

            <p>
              If you are searching for a developer from Kuchaman City,
              Didwana or Rajasthan named Jitendra Nimod, this is the official
              identity website confirming his professional background.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}