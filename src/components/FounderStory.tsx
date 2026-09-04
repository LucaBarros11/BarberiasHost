export default function FounderStory() {
  return (
    <section id="historia" className="relative bg-espresso py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-12">
        <div className="md:col-span-7">
          <h2 className="font-display text-4xl italic text-bone sm:text-5xl">
            One barber, one strop, no shortcuts.
          </h2>

          <div className="mt-8 space-y-5 font-body text-base leading-relaxed text-bone/80 sm:text-lg">
            <p>
              Eamon Doyle swept floors on Capel Street from the age of
              sixteen, watching men who&rsquo;d been barbers for forty years
              hone a blade before they&rsquo;d let it near a customer&rsquo;s
              neck. That shop closed in 2009. Most of the old ones did, one
              by one, as the trade got faster and the razors got disposable.
            </p>
            <p>
              He didn&rsquo;t want to learn the fast version. So in 2011 he
              put one chair, one mirror, and a wall of strops into a small
              room on Aungier Street and started doing it the way he&rsquo;d
              been taught — hot towels, badger brushes, a blade sharpened by
              hand before every single shave.
            </p>
            <p>
              Fifteen years on, he&rsquo;s still first through the door most
              mornings, still sharpens his own blades, and still trains
              every barber who joins him the same way he learned: slowly,
              and properly.
            </p>
          </div>
        </div>

        <div className="md:col-span-5 md:pt-16">
          <div className="relative mx-auto max-w-xs border border-brass/40 bg-[#241a14] p-10">
            <span className="rivet absolute left-3 top-3" />
            <span className="rivet absolute right-3 top-3" />
            <span className="rivet absolute bottom-3 left-3" />
            <span className="rivet absolute bottom-3 right-3" />

            <p className="text-center font-display text-7xl italic text-brass-light">
              ED
            </p>
            <p className="mt-4 text-center font-mono text-xs uppercase tracking-wider text-bone/60">
              Eamon Doyle
            </p>
            <p className="text-center font-mono text-[0.65rem] uppercase tracking-wider text-bone/40">
              Founder, est. 2011
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
