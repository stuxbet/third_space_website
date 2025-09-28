import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main className="text-foreground">
      <section className="border-b border-border/70 bg-[#F2E900] py-24">
        <div className="container mx-auto px-6">
          <div className="relative mx-auto max-w-5xl overflow-hidden angular-shell angular-border panel-angular bg-cyber-gradient px-8 py-16 text-center shadow-[0_0_68px_rgba(0,0,0,0.45)] [--angle-border-color:rgba(2,215,242,0.35)]">
            <div className="pointer-events-none absolute left-0 top-0 h-1 w-full overflow-hidden" aria-hidden="true">
              <span
                className="block h-full w-full bg-gradient-to-r from-[#02D7F2]/0 via-[#02D7F2] via-40% to-[#F2E900]/0"
                style={{ animation: "sweep-accent 3.5s linear infinite" }}
              />
            </div>
            <div className="absolute -left-20 top-12 h-40 w-40 rounded-full bg-[#02D7F2]/30 blur-3xl" aria-hidden="true" />
            <div className="absolute -right-16 bottom-8 h-48 w-48 rounded-full bg-[#000] opacity-40 blur-2xl" aria-hidden="true" />
            <div className="relative space-y-6">
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#02D7F2]">
                Welcome to Third Place
              </p>
              <h1 className="text-4xl font-black tracking-tight text-black sm:text-5xl">
                A cyberpunk canteen for night shift dreamers
              </h1>
              <p className="text-lg leading-relaxed text-black/80">
                We hacked a corner of the city into a neon sanctuary—brewed espresso, synthwave haze, and a table for
                every wild idea. It’s part café, part lab, part third dimension where collaborators collide at odd hours.
              </p>
              <p className="text-lg leading-relaxed text-black/80">
                Drop in, plug in, or space out. Our crew keeps the lights pulsing, the tools ready, and the conversations
                sparking long after the skyline powers down.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#F2E900] py-24">
        <div className="container mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <h2 className="text-2xl font-bold uppercase tracking-[0.4em] text-black">What hums inside</h2>
            <p className="mt-3 text-base text-black/70">
              Anchored in black steel and cyan sparks, every zone keeps the energy cycling.
            </p>
          </div>
          <div className="grid gap-10 md:grid-cols-3">
            <div className="cyber-panel angular-shell angular-border panel-angular p-6 text-left">
              <div className="mb-4 h-1 w-16 bg-[#02D7F2]" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#F2E900]">Make</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Prototype corners, solder fumes, and neon workbenches fueled by midnight playlists.
              </p>
            </div>
            <div className="cyber-panel angular-shell angular-border panel-angular p-6 text-left">
              <div className="mb-4 h-1 w-16 bg-[#02D7F2]" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#F2E900]">Gather</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Communal tables under cyan strip lights—debates, jam sessions, and story swaps till dawn.
              </p>
            </div>
            <div className="cyber-panel angular-shell angular-border panel-angular p-6 text-left">
              <div className="mb-4 h-1 w-16 bg-[#02D7F2]" />
              <h3 className="text-lg font-semibold uppercase tracking-[0.25em] text-[#F2E900]">Recharge</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/75">
                Quiet booths, gentle basslines, and sensory resets before your next neon sprint.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-black/70 bg-black py-24">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-2xl space-y-8 text-center text-white">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold uppercase tracking-[0.35em] text-[#02D7F2]">
                Join the waitlist
              </h2>
              <p className="text-base text-white/70">
                Drop your number to get the encrypted ping when the café doors unlock.
              </p>
            </div>
            <form className="cyber-glow angular-shell angular-border panel-angular mx-auto flex max-w-xl flex-col gap-3 bg-black/70 p-6 shadow-[0_0_32px_rgba(2,215,242,0.25)] backdrop-blur [--angle-border-color:rgba(2,215,242,0.45)]" action="#" method="post">
              <div className="flex flex-col gap-3 sm:flex-row">
                <label htmlFor="waitlist-phone" className="sr-only">
                  Phone number
                </label>
                <input
                  id="waitlist-phone"
                  name="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  required
                  placeholder="Enter your phone number"
                  className="w-full rounded-lg border border-[#02D7F2]/40 bg-black/60 px-4 py-3 text-base text-white outline-none transition focus:border-[#02D7F2] focus:ring-2 focus:ring-[#02D7F2]/60"
                />
                <Button type="submit" className="w-full sm:w-auto">
                  Submit
                </Button>
              </div>
              <span className="mt-2 block text-xs uppercase tracking-[0.3em] text-[#F2E900]/70">
                Limited seats · zero spam
              </span>
            </form>
          </div>
        </div>
      </section>


    </main>
  );
}
