import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitendra Singh — Jitendra Singh Nimod",
  description:
    "Jitendra Singh refers to Jitendra Singh Nimod, also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Full Stack Developer from Rajasthan, India.",
};

export default function JitendraSinghPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            Jitendra Singh
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>Jitendra Singh</strong> is commonly used as a short name
              for <strong>{identity.name}</strong>, a Full Stack Web Developer
              and B.Sc Mathematics student from {identity.location.state},{" "}
              {identity.location.country}.
            </p>

            <p>
              He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>. All these
              names refer to the same individual — {identity.name}.
            </p>

            <p>
              Many users search online for{" "}
              <strong>Jitendra Singh developer</strong> or{" "}
              <strong>Jitendra Singh Rajasthan</strong>. These searches refer to{" "}
              {identity.name}, who is based in {identity.location.city},
              Rajasthan.
            </p>

            <p>
              {identity.shortName} is currently pursuing{" "}
              {identity.education.degree} at {identity.education.college} and is
              actively working on full stack web development and digital
              projects.
            </p>

            <p>
              Under his brand <strong>{identity.brand}</strong>, he builds modern
              web applications, developer tools and SEO-optimized platforms.
            </p>

            <p>
              The official identity and website of Jitendra Singh Nimod is{" "}
              <strong>{identity.website}</strong>.
            </p>

            <p>
              If you searched for Jitendra Singh from Rajasthan related to web
              development or digital projects, this is the official identity
              website confirming his details.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}