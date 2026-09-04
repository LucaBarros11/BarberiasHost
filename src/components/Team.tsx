import { team } from "@/lib/data";

export default function Team() {
  const [founder, ...rest] = team;

  return (
    <section id="equipo" className="relative bg-espresso py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl font-display text-4xl italic text-bone sm:text-5xl">
          Three chairs, one standard.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Founder card, wider and set apart with the oxblood accent */}
          <div className="relative border border-oxblood-light/50 bg-[#241a14] p-8 md:col-span-2 md:flex md:items-end md:justify-between md:gap-8">
            <span className="rivet absolute left-3 top-3" />
            <span className="rivet absolute right-3 top-3" />
            <div>
              <p className="font-mono text-[0.7rem] uppercase tracking-wider text-oxblood-light">
                {founder.role}
              </p>
              <h3 className="mt-2 font-display text-3xl text-bone">
                {founder.name}
              </h3>
              <p className="mt-3 max-w-md font-body text-sm leading-relaxed text-bone/70">
                {founder.bio}
              </p>
            </div>
            <p className="mt-6 font-mono text-xs uppercase tracking-wider text-brass-light md:mt-0 md:text-right">
              {founder.focus}
            </p>
          </div>

          {rest.map((member) => (
            <div
              key={member.name}
              className="relative border border-brass/30 bg-[#241a14] p-8"
            >
              <span className="rivet absolute left-3 top-3" />
              <span className="rivet absolute right-3 top-3" />
              <p className="font-mono text-[0.7rem] uppercase tracking-wider text-bone/50">
                {member.role}
              </p>
              <h3 className="mt-2 font-display text-2xl text-bone">
                {member.name}
              </h3>
              <p className="mt-3 font-body text-sm leading-relaxed text-bone/70">
                {member.bio}
              </p>
              <p className="mt-5 font-mono text-xs uppercase tracking-wider text-brass-light">
                {member.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
