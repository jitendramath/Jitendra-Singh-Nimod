import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";
import Image from "next/image";

export const metadata = {
  title: "Jitendra Singh Nimod — B.Sc Mathematics Student",
  description:
    "Jitendra Singh Nimod is a B.Sc Mathematics student and Full Stack Web Developer from Rajasthan, India. Also known as Jitendra Nimod, Jitu Nimod and JS Nimod.",
};

export default function StudentProfile() {
  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium">

          <h1 className="text-4xl font-bold mb-6">
            B.Sc Mathematics Student — {identity.name}
          </h1>

          {/* image */}
          <div className="mb-10">
            <div className="relative w-64 h-64 rounded-2xl overflow-hidden shadow-strong">
              <Image
                src={identity.images.casual}
                alt="Jitendra Singh Nimod student from Rajasthan"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="seo-text space-y-5">

            <p>
              <strong>{identity.name}</strong> is currently pursuing{" "}
              <strong>{identity.education.degree}</strong> at{" "}
              {identity.education.college} in Rajasthan, India.
            </p>

            <p>
              He is also known as{" "}
              <strong>{identity.alternateNames.join(", ")}</strong> and is
              actively building a career as a Full Stack Web Developer while
              continuing his academic journey in mathematics and science.
            </p>

            <p>
              As a mathematics student from {identity.location.city},{" "}
              {identity.location.state}, {identity.shortName} combines logical
              thinking with modern web development to create efficient digital
              systems and scalable web applications.
            </p>

            <p>
              Many people search online for{" "}
              <strong>
                Jitendra Nimod student, JS Nimod BSc student, Jitendra Singh
                Nimod Rajasthan student
              </strong>
              . These searches refer to the same individual — {identity.name}.
            </p>

            <p>
              Along with academic studies, he works on web development projects,
              SEO-driven websites and modern full stack applications under the
              brand <strong>{identity.brand}</strong>.
            </p>

            <p>
              This official website confirms the identity of {identity.name} as
              both a student and developer from Rajasthan, India.
            </p>

          </div>
        </div>
      </section>
    </>
  );
}