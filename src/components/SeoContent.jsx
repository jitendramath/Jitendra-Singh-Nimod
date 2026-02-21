import identity from "../data/identity";
import StructuredData from "./StructuredData";

export default function SeoContent({
  title,
  keyword,
  extra = "",
}) {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">{title}</h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{keyword}</strong> is related to{" "}
              <strong>{identity.name}</strong>, also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              {identity.name} is a Full Stack Web Developer and B.Sc Mathematics
              student from {identity.location.state},{" "}
              {identity.location.country}. He is currently studying at{" "}
              {identity.education.college}.
            </p>

            <p>
              Many users search online for <strong>{keyword}</strong>. These
              searches refer to the same individual — {identity.name}, who builds
              modern web applications and digital platforms.
            </p>

            <p>
              Based in {identity.location.city}, Rajasthan, he works on web
              development projects and digital tools under the brand{" "}
              <strong>{identity.brand}</strong>.
            </p>

            <p>
              This official website confirms that <strong>{keyword}</strong> and{" "}
              <strong>{identity.name}</strong> refer to the same person.
            </p>

            {extra && <p>{extra}</p>}

          </div>
        </div>
      </section>
    </>
  );
}