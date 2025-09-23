import Link from "next/link";

export const metadata = {
  title: "Founders | Third Place",
};

const founders = [
  {
    name: "Avery Chen",
    title: "Co-Founder & Creative Director",
    bio: "Avery shapes the artistic vision for Third Place, weaving together disciplines to design immersive, inclusive experiences.",
  },
  {
    name: "Jordan Lee",
    title: "Co-Founder & Community Strategist",
    bio: "Jordan builds partnerships and programs that keep our community connected, supported, and inspired to collaborate.",
  },
  {
    name: "Maya Patel",
    title: "Co-Founder & Operations Lead",
    bio: "Maya keeps everything running smoothly, from production logistics to member services, ensuring every touchpoint feels thoughtful.",
  },
];

export default function FoundersPage() {
  return (
    <main className="container mx-auto space-y-12 px-6 py-24">
      <header className="space-y-4 text-center md:text-left">
        <p className="text-sm uppercase tracking-wide text-gray-500">The Founders</p>
        <h1 className="text-4xl font-semibold text-gray-900">The people behind Third Place</h1>
        <p className="text-lg text-gray-600">
          Our founding team brings together design, community-building, and operations expertise to craft spaces
          where people feel welcome to share, experiment, and grow.
        </p>
      </header>

      <section className="grid gap-8 md:grid-cols-3">
        {founders.map((founder) => (
          <article key={founder.name} className="rounded-xl bg-gray-50 p-6 shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-900">{founder.name}</h2>
            <p className="mt-1 text-sm font-medium text-gray-500">{founder.title}</p>
            <p className="mt-4 text-gray-600">{founder.bio}</p>
          </article>
        ))}
      </section>

      <div>
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base font-medium text-gray-900 hover:underline"
        >
          Back to the landing page →
        </Link>
      </div>
    </main>
  );
}
