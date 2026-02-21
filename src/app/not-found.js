import identity from "../data/identity";

export const metadata = {
  title: "Page Not Found — Jitendra Singh Nimod",
  description:
    "The page you are looking for does not exist on the official website of Jitendra Singh Nimod.",
};

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-white">
      <div className="text-center max-w-xl px-4">

        <h1 className="text-6xl font-bold mb-4">404</h1>

        <h2 className="text-2xl font-semibold mb-4">
          Page Not Found
        </h2>

        <p className="text-zinc-600 mb-8 leading-relaxed">
          This page does not exist on the official website of{" "}
          <strong>{identity.name}</strong>, also known as{" "}
          {identity.alternateNames.join(", ")}.
        </p>

        <a
          href="/"
          className="inline-block px-6 py-3 rounded-xl bg-black text-white font-semibold hover:bg-blue-600 transition"
        >
          Go to Homepage
        </a>

      </div>
    </section>
  );
}