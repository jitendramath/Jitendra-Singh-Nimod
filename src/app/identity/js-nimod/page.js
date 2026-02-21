import identity from "../../../data/identity";
import StructuredData from "../../../components/StructuredData";

export const metadata = {
  title: "JS Nimod — Official Profile",
  description:
    "JS Nimod is also known as Jitendra Singh Nimod, Jitendra Nimod and Jitu Nimod. Full Stack Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function JSNimodPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            JS Nimod
          </h1>

          <div className="seo-text space-y-5">

            <p>
              <strong>JS Nimod</strong> is a short name and online identity of{" "}
              <strong>{identity.name}</strong>, a Full Stack Web Developer from{" "}
              {identity.location.state}, {identity.location.country}.
            </p>

            <p>
              Many people search for{" "}
              <strong>JS Nimod</strong> on Google and social platforms. This
              name refers to {identity.name}, who is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              As a developer and student, {identity.shortName} is currently
              pursuing {identity.education.degree} at{" "}
              {identity.education.college}. He builds modern web applications,
              developer tools and SEO-optimized platforms.
            </p>

            <p>
              Based in {identity.location.city}, Rajasthan, India, JS Nimod is
              actively working on digital projects and web technologies under
              the brand <strong>{identity.brand}</strong>.
            </p>

            <p>
              Searches such as “JS Nimod developer”, “JS Nimod India” and
              “JS Nimod Rajasthan” all refer to the same person —
              <strong> {identity.name}</strong>.
            </p>

            <p>
              This official website confirms that JS Nimod is the same individual
              as {identity.name}, also known as Jitendra Nimod and Jitu Nimod.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}