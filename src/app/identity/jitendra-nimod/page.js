import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitendra Nimod — Official Profile",
  description:
    "Jitendra Nimod is the same person as Jitendra Singh Nimod, also known as Jitu Nimod and JS Nimod. Full Stack Developer from Rajasthan, India.",
};

export default function JitendraNimodPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            Jitendra Nimod
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>Jitendra Nimod</strong> is the commonly searched name of{" "}
              <strong>{identity.name}</strong>, a Full Stack Web Developer from{" "}
              {identity.location.state}, {identity.location.country}.
            </p>

            <p>
              He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>. All these
              names refer to the same individual.
            </p>

            <p>
              Jitendra Nimod is currently pursuing{" "}
              {identity.education.degree} at {identity.education.college} and is
              actively building modern web applications and digital platforms.
            </p>

            <p>
              Based in {identity.location.city}, Rajasthan, he develops scalable
              and SEO-optimized websites under the brand{" "}
              <strong>{identity.brand}</strong>.
            </p>

            <p>
              If you searched for “Jitendra Nimod developer”, “Jitendra Nimod
              Rajasthan” or “Jitendra Nimod student”, this official website
              confirms his professional and academic identity.
            </p>

            <p>
              The official and complete name is{" "}
              <strong>{identity.name}</strong>, but Jitendra Nimod is widely used
              across the internet.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}