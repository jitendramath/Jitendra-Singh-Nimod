import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitendra Singh Nimod from Kuchaman City Rajasthan",
  description:
    "Jitendra Singh Nimod is a Full Stack Web Developer and B.Sc Mathematics student from Kuchaman City, Rajasthan, India. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
};

export default function KuchamanPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            {identity.name} from {identity.location.city}
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is a Full Stack Web Developer and
              B.Sc Mathematics student based in{" "}
              <strong>{identity.location.city}</strong>, Rajasthan, India.
            </p>

            <p>
              Also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>, he builds
              modern web applications and digital platforms under the brand{" "}
              <strong>{identity.brand}</strong>.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                developer from Kuchaman City, Jitendra Nimod Kuchaman, JS Nimod
                Rajasthan
              </strong>
              . These searches refer to {identity.name}, a developer and student
              from this region.
            </p>

            <p>
              Currently studying {identity.education.degree} at{" "}
              {identity.education.college}, he combines academic knowledge with
              practical development work and digital projects.
            </p>

            <p>
              {identity.shortName} belongs to {identity.location.village} village
              and is actively working from {identity.location.city} to build web
              platforms and scalable online systems.
            </p>

            <p>
              This official website confirms that {identity.name} is a Full Stack
              Developer from {identity.location.city}, Rajasthan, India.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}