import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "Jitu Nimod — Official Identity",
  description:
    "Jitu Nimod is also known as Jitendra Singh Nimod and JS Nimod. Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function JituNimodPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            Jitu Nimod
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>Jitu Nimod</strong> is another name used for{" "}
              <strong>{identity.name}</strong>, a Full Stack Web Developer and
              B.Sc Mathematics student from {identity.location.state},{" "}
              {identity.location.country}.
            </p>

            <p>
              Many people search online for{" "}
              <strong>Jitu Nimod</strong>. This name refers to{" "}
              <strong>{identity.name}</strong>, who is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              {identity.shortName} is currently studying{" "}
              {identity.education.degree} at {identity.education.college} and is
              actively building modern web projects and digital platforms.
            </p>

            <p>
              He is based in {identity.location.city}, Rajasthan and belongs to{" "}
              {identity.location.village} village. Under the brand{" "}
              <strong>{identity.brand}</strong>, he builds web tools and
              scalable online platforms.
            </p>

            <p>
              Searches like “Jitu Nimod developer”, “Jitu Nimod Rajasthan” and
              “Jitu Nimod student” all refer to the same individual —
              <strong> {identity.name}</strong>.
            </p>

            <p>
              This official website confirms that Jitu Nimod and{" "}
              {identity.name} are the same person.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}