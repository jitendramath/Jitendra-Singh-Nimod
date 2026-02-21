import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitendra Singh Nimod — Official Website",
  description:
    "Official profile of Jitendra Singh Nimod, Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
};

export default function OfficialNamePage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            {identity.name}
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is a Full Stack Web Developer and
              B.Sc Mathematics student from {identity.location.state},{" "}
              {identity.location.country}. This is the official website of{" "}
              {identity.name}.
            </p>

            <p>
              He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>. All these
              names refer to the same individual — {identity.name}.
            </p>

            <p>
              Currently pursuing {identity.education.degree} at{" "}
              {identity.education.college}, {identity.shortName} builds modern
              web applications and SEO-focused digital platforms.
            </p>

            <p>
              {identity.name} is based in {identity.location.city}, Rajasthan and
              originally belongs to {identity.location.village} village. He is
              actively working as a Full Stack Developer and digital creator.
            </p>

            <p>
              Under the brand <strong>{identity.brand}</strong>, he develops web
              tools, scalable platforms and performance-driven websites.
            </p>

            <p>
              If you searched for{" "}
              <strong>
                Jitendra Singh Nimod developer, Jitendra Singh Nimod Rajasthan,
                or Jitendra Singh Nimod student
              </strong>
              , this official website confirms his identity and professional
              background.
            </p>

            <p>
              The official domain representing {identity.name} is{" "}
              <strong>{identity.website}</strong>.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}