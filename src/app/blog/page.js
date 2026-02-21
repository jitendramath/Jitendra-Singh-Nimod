import identity from "../../data/identity";
import StructuredData from "../../components/StructuredData";

export const metadata = {
  title: "Blog — Jitendra Singh Nimod",
  description:
    "Articles and insights by Jitendra Singh Nimod, Full Stack Developer and B.Sc Mathematics student from Rajasthan, India.",
};

export default function BlogHome() {
  const posts = [
    {
      title: "Who is Jitendra Nimod",
      link: "/blog/who-is-jitendra-nimod",
    },
    {
      title: "My Journey as a Full Stack Developer",
      link: "/blog/my-journey-as-developer",
    },
    {
      title: "Full Stack Developer from Rajasthan",
      link: "/blog/full-stack-developer-rajasthan",
    },
  ];

  return (
    <>
      <StructuredData />

      <section className="section">
        <div className="container-premium max-w-4xl">

          <h1 className="text-4xl font-bold mb-6">
            Blog — {identity.name}
          </h1>

          <p className="seo-text mb-10">
            Articles, identity posts and development insights related to{" "}
            {identity.name}, also known as{" "}
            <strong>{identity.alternateNames.join(", ")}</strong>.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {posts.map((post, i) => (
              <a
                key={i}
                href={post.link}
                className="p-6 rounded-2xl border shadow-premium hover:shadow-strong transition bg-white"
              >
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-sm text-zinc-600">
                  Read article →
                </p>
              </a>
            ))}
          </div>

        </div>
      </section>
    </>
  );
}