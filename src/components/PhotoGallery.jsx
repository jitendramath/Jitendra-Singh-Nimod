import Image from "next/image";

export default function PhotoGallery({ images = [], name = "" }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <div
          key={i}
          className="relative w-full h-72 rounded-2xl overflow-hidden shadow-premium group"
        >
          <Image
            src={img.src}
            alt={img.alt || `${name} photo ${i + 1}`}
            fill
            className="object-cover group-hover:scale-105 transition duration-500"
          />

          {/* subtle overlay */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>
        </div>
      ))}
    </div>
  );
}