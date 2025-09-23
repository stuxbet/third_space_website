import Link from "next/link";

export const metadata = {
  title: "About | Third Place",
};

export default function AboutPage() {
  return (
    <main className="container mx-auto space-y-12 px-6 py-24">
      <header className="space-y-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-gray-500">About Third Place</p>
        <h1 className="text-4xl font-semibold text-gray-900">Cultivating community and creativity</h1>
        <p className="text-lg text-gray-600">
          Third Place began as a gathering spot for people who crave meaningful connection beyond home and work.
          We curate experiences, workshops, and spaces that inspire collaboration and spark new ideas.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-2">
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">What we do</h2>
          <p className="mt-3 text-gray-600">
            From intimate salons to large-scale community events, we design welcoming moments that bring diverse
            voices together. Our programming blends art, technology, and social impact to create memorable
            experiences that resonate long after the event ends.
          </p>
        </div>
        <div className="rounded-xl bg-gray-50 p-6 shadow-sm">
          <h2 className="text-2xl font-semibold text-gray-900">Our approach</h2>
          <p className="mt-3 text-gray-600">
            We believe in human-centered design, listening closely to our community to shape every detail.
            With a passionate collective of facilitators, artists, and technologists, we deliver programs that
            feel personal, inclusive, and forward-thinking.
          </p>
        </div>
      </section>

      <div>
        <Link
          href="/founders"
          className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:underline"
        >
          Meet the founders →
        </Link>
      </div>
    </main>
  );
}
