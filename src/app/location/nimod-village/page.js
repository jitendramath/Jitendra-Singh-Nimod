import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitendra Singh Nimod from Nimod Village Rajasthan",
  description:
    "Jitendra Singh Nimod belongs to Nimod village in Rajasthan, India. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Full Stack Developer and B.Sc Mathematics student.",
};

export default function NimodVillagePage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            {identity.name} — Nimod Village Rajasthan
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> belongs to{" "}
              <strong>{identity.location.village}</strong> village in Rajasthan,
              India. He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                Nimod village Jitendra Nimod, JS Nimod Nimod village, developer
                from Nimod Rajasthan
              </strong>
              . These searches refer to the same individual — {identity.name}.
            </p>

            <p>
              Currently based in {identity.location.city}, Rajasthan, he is
              pursuing {identity.education.degree} at{" "}
              {identity.education.college} and working as a Full Stack Web
              Developer.
            </p>

            <p>
              From {identity.location.village} village, {identity.shortName} is
              building modern web applications, digital tools and scalable
              online platforms under the brand{" "}
              <strong>{identity.brand}</strong>.
            </p>

            <p>
              He represents a new generation of developers emerging from rural
              and small-town regions of Rajasthan and building their presence on
              the internet through technology and web development.
            </p>

            <p>
              This official website confirms that {identity.name} is originally
              from {identity.location.village} village in Rajasthan, India.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}