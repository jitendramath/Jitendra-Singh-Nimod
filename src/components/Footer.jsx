import identity from "../data/identity";

export default function Footer() {
  return (
    <footer className="border-t mt-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-3 gap-10">

          {/* about */}
          <div>
            <h3 className="font-bold text-lg mb-3">
              {identity.name}
            </h3>
            <p className="text-sm text-zinc-600 leading-relaxed">
              Full Stack Web Developer & B.Sc Mathematics student from{" "}
              {identity.location.state}, {identity.location.country}. Also known
              as {identity.alternateNames.join(", ")}.
            </p>
          </div>

          {/* links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href="/about" className="hover:text-blue-600">About</a>
              <a href="/developer-profile" className="hover:text-blue-600">Developer</a>
              <a href="/student-profile" className="hover:text-blue-600">Student</a>
              <a href="/blog" className="hover:text-blue-600">Blog</a>
              <a href="/contact" className="hover:text-blue-600">Contact</a>
            </div>
          </div>

          {/* social */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="flex flex-col gap-2 text-sm">
              <a href={identity.social.github} target="_blank">GitHub</a>
              <a href={identity.social.instagram} target="_blank">Instagram</a>
              <a href={identity.social.linkedin} target="_blank">LinkedIn</a>
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t text-xs text-zinc-500 text-center">
          © {new Date().getFullYear()} {identity.name}. All rights reserved.
        </div>

      </div>
    </footer>
  );
}