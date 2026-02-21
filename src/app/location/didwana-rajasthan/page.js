import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitendra Singh Nimod from Didwana Rajasthan",
  description:
    "Jitendra Singh Nimod is a Full Stack Web Developer and B.Sc Mathematics student connected to Didwana, Rajasthan. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
};

export default function DidwanaPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            {identity.name} — Didwana Rajasthan
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is a Full Stack Web Developer and
              B.Sc Mathematics student connected with Didwana region in
              Rajasthan, India. He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              He is currently studying at{" "}
              <strong>{identity.education.college}</strong>, located in Didwana,
              Rajasthan. Alongside studies, he builds modern web applications
              and digital platforms.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                Jitendra Nimod Didwana, JS Nimod Didwana Rajasthan, developer
                from Didwana Rajasthan
              </strong>
              . These searches refer to {identity.name}, a developer and student
              from this region.
            </p>

            <p>
              Originally from {identity.location.village} village and based in{" "}
              {identity.location.city}, he is building his identity as a Full
              Stack Developer and digital creator from Rajasthan.
            </p>

            <p>
              Under his brand <strong>{identity.brand}</strong>, he works on web
              development projects, scalable platforms and SEO-optimized
              websites.
            </p>

            <p>
              This official website confirms that {identity.name} is associated
              with Didwana, Rajasthan, India through education and professional
              work.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}