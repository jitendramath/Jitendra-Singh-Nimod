import Image from "next/image";
import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";

export const metadata = {
  title: "About Jitendra Singh Nimod",
  description:
    "Learn about Jitendra Singh Nimod, also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Full Stack Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function AboutPage() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium">

          {/* TITLE */}
          <h1 className="text-4xl font-bold mb-6">
            About {identity.name}
          </h1>

          {/* IMAGE */}
          <div className="mb-10">
            <div className="relative w-56 h-56 rounded-2xl overflow-hidden img-shadow">
              <Image
                src={identity.images.developer}
                alt="Jitendra Nimod Full Stack Developer from Rajasthan"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* BIO */}
          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is a Full Stack Web Developer and
              B.Sc Mathematics student from {identity.location.state},{" "}
              {identity.location.country}. He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong>.
            </p>

            <p>
              Currently pursuing {identity.education.degree} at{" "}
              <strong>{identity.education.college}</strong>, he combines
              mathematical thinking with modern web development to build fast,
              scalable and SEO-optimized web applications.
            </p>

            <p>
              {identity.name} is based in {identity.location.city} and originally
              belongs to {identity.location.village} village in Rajasthan. He is
              focused on building digital products, tools and web platforms
              under the brand <strong>{identity.brand}</strong>.
            </p>

            <p>
              As a developer from Rajasthan, {identity.shortName} is building his
              online presence through projects, open-source contributions and
              professional development in full stack technologies including
              modern frontend and backend systems.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                Jitendra Nimod, Jitu Nimod, JS Nimod and Jitendra Singh Nimod
              </strong>
              . All these names refer to the same individual whose official
              website is <strong>{identity.website}</strong>.
            </p>

            <p>
              His work focuses on web performance, SEO architecture, scalable
              frontend systems and modern web application development. He aims
              to grow as a recognized developer and digital creator from India.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}