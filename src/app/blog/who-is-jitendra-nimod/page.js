import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Who is Jitendra Nimod",
  description:
    "Who is Jitendra Nimod? Learn about Jitendra Singh Nimod, also known as Jitu Nimod and JS Nimod. Full Stack Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function WhoIsPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            Who is {identity.shortName}?
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong>, also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>, is a Full
              Stack Web Developer and B.Sc Mathematics student from{" "}
              {identity.location.state}, {identity.location.country}.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                Who is Jitendra Nimod, Jitu Nimod, JS Nimod or Jitendra Singh
                Nimod
              </strong>
              . All these names refer to the same individual — {identity.name},
              a developer and student based in {identity.location.city}.
            </p>

            <p>
              He is currently pursuing {identity.education.degree} at{" "}
              {identity.education.college} and is actively working on modern web
              development projects and digital platforms.
            </p>

            <p>
              {identity.shortName} is known for building web applications,
              developer tools and SEO-focused websites under his brand{" "}
              <strong>{identity.brand}</strong>. He focuses on performance-driven
              development and modern full stack technologies.
            </p>

            <p>
              Born on {identity.dob}, {identity.name} belongs to{" "}
              {identity.location.village} village and is based in{" "}
              {identity.location.city}, Rajasthan, India.
            </p>

            <p>
              If you are searching for real information about{" "}
              <strong>
                Jitendra Nimod developer, JS Nimod India, or Jitu Nimod student
              </strong>
              , this is the official website confirming his identity and
              professional background.
            </p>

            <p>
              His goal is to grow as a recognized Full Stack Developer and build
              impactful digital projects and online platforms from India.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}