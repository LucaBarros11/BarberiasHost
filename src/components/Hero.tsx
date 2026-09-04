export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden bg-espresso"
    >
      {/* Base texture: oxblood glow bleeding up from the bottom-left, like light off a leather chair */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 100%, rgba(107,30,35,0.45), transparent 60%), radial-gradient(ellipse 60% 50% at 90% 0%, rgba(74,90,94,0.25), transparent 60%)",
        }}
      />
      <div className="grain absolute inset-0" />

      {/* Straight razor, drawn faint and large, anchoring the right side of the composition */}
      <svg
        viewBox="0 0 400 400"
        aria-hidden="true"
        className="pointer-events-none absolute -right-16 top-1/2 h-[36rem] w-[36rem] -translate-y-1/2 opacity-[0.12] md:opacity-[0.16]"
      >
        <g stroke="#B08D57" strokeWidth="1.5" fill="none">
          <path d="M40 340 L230 150" />
          <path d="M230 150 C 260 120, 300 90, 340 70" />
          <path d="M340 70 L 360 50" strokeWidth="2.5" />
          <path d="M40 340 L 60 360" strokeWidth="3" strokeLinecap="round" />
          <circle cx="50" cy="350" r="14" />
        </g>
      </svg>

      <div className="relative mx-auto max-w-6xl px-6 py-32">
        <div className="max-w-2xl">
          <h1 className="font-display text-6xl italic leading-[0.95] text-bone sm:text-7xl md:text-8xl">
            The Strop
            <br />
            House
          </h1>

          <p className="mt-8 max-w-lg font-body text-lg leading-relaxed text-bone/80 sm:text-xl">
            Straight razors, steady hands, and a trade Eamon Doyle has
            sharpened for over a decade on Dublin&rsquo;s south side. No
            rush, no shortcuts — just a proper cut.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#reservar"
              className="bg-brass px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-espresso transition-colors hover:bg-brass-light"
            >
              Book a Chair
            </a>
            <a
              href="#historia"
              className="border border-bone/30 px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-bone transition-colors hover:border-bone hover:bg-bone/5"
            >
              Read the Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
