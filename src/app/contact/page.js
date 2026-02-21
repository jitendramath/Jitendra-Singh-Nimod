import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";

export const metadata = {
  title: "Contact Jitendra Singh Nimod",
  description:
    "Contact Jitendra Singh Nimod, Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
};

export default function ContactPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-3xl">

          <h1 className="text-4xl font-bold mb-6">
            Contact {identity.name}
          </h1>

          <p className="seo-text mb-10">
            You can connect with {identity.name}, also known as{" "}
            <strong>{identity.alternateNames.join(", ")}</strong>, a Full Stack
            Web Developer and B.Sc Mathematics student from{" "}
            {identity.location.state}, {identity.location.country}.
          </p>

          {/* contact cards */}
          <div className="grid gap-6">

            <div className="p-6 rounded-2xl shadow-premium border">
              <h3 className="font-semibold text-lg mb-2">GitHub</h3>
              <p className="text-zinc-600 mb-3">
                Explore projects and development work
              </p>
              <a
                href={identity.social.github}
                target="_blank"
                className="text-blue-600 font-semibold"
              >
                {identity.social.github}
              </a>
            </div>

            <div className="p-6 rounded-2xl shadow-premium border">
              <h3 className="font-semibold text-lg mb-2">Instagram</h3>
              <p className="text-zinc-600 mb-3">
                Personal updates and identity profile
              </p>
              <a
                href={identity.social.instagram}
                target="_blank"
                className="text-blue-600 font-semibold"
              >
                {identity.social.instagram}
              </a>
            </div>

            <div className="p-6 rounded-2xl shadow-premium border">
              <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
              <p className="text-zinc-600 mb-3">
                Professional profile and career details
              </p>
              <a
                href={identity.social.linkedin}
                target="_blank"
                className="text-blue-600 font-semibold"
              >
                {identity.social.linkedin}
              </a>
            </div>

          </div>

          {/* SEO text */}
          <div className="seo-text mt-12 space-y-4">
            <p>
              If you are searching for contact details of Jitendra Nimod,
              Jitu Nimod or JS Nimod, this is the official contact page of{" "}
              {identity.name}.
            </p>

            <p>
              He is based in {identity.location.city},{" "}
              {identity.location.state}, India and currently pursuing{" "}
              {identity.education.degree} at {identity.education.college}.
            </p>

            <p>
              For collaborations, development work or professional connections,
              you can reach out through the official social profiles listed above.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}