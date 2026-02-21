export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">

      <div className="flex flex-col items-center gap-6">

        {/* spinner */}
        <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>

        {/* text */}
        <p className="text-sm text-zinc-600 font-medium">
          Loading...
        </p>

      </div>

    </div>
  );
}