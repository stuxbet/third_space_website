import Link from "next/link";

export default function Page() {
  return (
    <main className="space-y-24">
      <section className="relative overflow-hidden bg-gray-50">
        <div className="container mx-auto flex flex-col gap-16 px-6 py-24 md:flex-row md:items-center">
          <div className="w-full md:w-1/2">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-500">Welcome to Third Place</p>
            <h1 className="mt-4 text-4xl font-semibold text-gray-900 sm:text-5xl">
              Build community in the spaces between home and work
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-600">
              We host gatherings, workshops, and collaborative labs where curious people connect and new ideas take
              shape. Join us to discover your next creative partner, project, or path.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-lg bg-gray-900 px-6 py-3 text-base font-medium text-white shadow-sm transition hover:bg-gray-700"
              >
                Learn more about Third Place
              </Link>
              <Link
                href="/founders"
                className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-6 py-3 text-base font-medium text-gray-900 transition hover:bg-white/60"
              >
                Meet the founders
              </Link>
            </div>
          </div>

          <div className="relative w-full md:w-1/2">
            <div className="aspect-[4/3] overflow-hidden rounded-3xl bg-gray-200 shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=1200&q=80"
                alt="Third Place community gathering"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-2xl bg-white/90 p-4 shadow-lg md:block">
              <p className="text-sm font-medium uppercase tracking-wide text-gray-500">Upcoming</p>
              <p className="mt-1 text-base font-semibold text-gray-900">Monthly Makers Lab</p>
              <p className="text-sm text-gray-600">Collaborative prototyping night · 28 July</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 pb-24 text-center md:text-left">
        <h2 className="text-3xl font-semibold text-gray-900">Discover Your Third Place</h2>
        <p className="mt-4 text-lg text-gray-600">
          Third Place is where community, creativity, and collaboration intersect. Explore our story,
          learn more about our mission, and meet the people who make it all happen.
        </p>
        <div className="mt-8 flex flex-col gap-4 md:flex-row">
          <Link
            href="/about"
            className="inline-flex justify-center rounded-lg bg-gray-900 px-6 py-3 text-white shadow hover:bg-gray-700"
          >
            Learn About Us
          </Link>
          <Link
            href="/founders"
            className="inline-flex justify-center rounded-lg border border-gray-300 px-6 py-3 text-gray-900 shadow hover:bg-gray-100"
          >
            Meet the Founders
          </Link>
        </div>
      </section>
    </main>
  );
}
