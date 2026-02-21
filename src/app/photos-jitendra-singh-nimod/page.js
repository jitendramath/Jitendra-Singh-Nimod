import Image from "next/image";
import StructuredData from "../../components/StructuredData";
import identity from "../../data/identity";

export const metadata = {
  title: "Jitendra Singh Nimod Photos",
  description:
    "Photos of Jitendra Singh Nimod also known as Jitendra Nimod, Jitu Nimod and JS Nimod. Full Stack Web Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function PhotosPage() {
  const gallery = [
    identity.images.main,
    identity.images.developer,
    identity.images.casual,
    "/images/gallery/photo1.jpg",
    "/images/gallery/photo2.jpg",
    "/images/gallery/photo3.jpg",
  ];

  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium">

          <h1 className="text-4xl font-bold mb-6">
            Photos of {identity.name}
          </h1>

          <p className="seo-text mb-10">
            This gallery contains official photos of {identity.name}, also known
            as {identity.alternateNames.join(", ")}. He is a Full Stack Web
            Developer and B.Sc Mathematics student from{" "}
            {identity.location.state}, {identity.location.country}.
          </p>

          {/* gallery */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {gallery.map((img, i) => (
              <div
                key={i}
                className="relative w-full h-72 rounded-2xl overflow-hidden shadow-premium"
              >
                <Image
                  src={img}
                  alt={`Jitendra Singh Nimod photo ${i + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* seo text */}
          <div className="seo-text mt-12 space-y-4">
            <p>
              These are official images of {identity.name} from Rajasthan,
              India. Many people search for photos of Jitendra Nimod, Jitu Nimod
              or JS Nimod on Google Images.
            </p>

            <p>
              All images on this page belong to {identity.name}, a Full Stack Web
              Developer and student currently studying at{" "}
              {identity.education.college}.
            </p>

            <p>
              If you are searching for real images of Jitendra Singh Nimod from
              Kuchaman City or Didwana Rajasthan, this is the official gallery.
            </p>
          </div>

        </div>
      </section>
    </>
  );
}