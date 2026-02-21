import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "My Journey as a Full Stack Developer — Jitendra Nimod",
  description:
    "Journey of Jitendra Singh Nimod, Full Stack Developer from Rajasthan and B.Sc Mathematics student. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
};

export default function JourneyPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            My Journey as a Full Stack Developer
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong>, also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>, is a Full
              Stack Web Developer from {identity.location.state},{" "}
              {identity.location.country}.
            </p>

            <p>
              His journey into web development started with curiosity about how
              websites and applications work. Over time, {identity.shortName}
              developed strong interest in building modern websites, frontend
              interfaces and backend systems.
            </p>

            <p>
              Currently pursuing {identity.education.degree} at{" "}
              {identity.education.college}, he balances academic studies with
              practical development and real-world web projects.
            </p>

            <p>
              As a developer from {identity.location.city}, Rajasthan,{" "}
              {identity.shortName} focuses on creating performance-driven and
              SEO-optimized web applications. He works on modern web
              technologies, scalable platforms and digital tools.
            </p>

            <p>
              Under the brand <strong>{identity.brand}</strong>, he builds
              projects related to full stack development, web performance and
              modern UI/UX systems.
            </p>

            <p>
              Many users search for{" "}
              <strong>
                Jitendra Nimod developer, JS Nimod developer journey, Jitu Nimod
                web developer India
              </strong>
              . All these refer to {identity.name}, a growing developer from
              Rajasthan.
            </p>

            <p>
              His long-term goal is to become a recognized developer and create
              impactful digital products and scalable online platforms.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}