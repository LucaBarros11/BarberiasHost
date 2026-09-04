import { testimonials } from "@/lib/data";

const rotations = [-1, 1.3, -0.6];

export default function Testimonials() {
  return (
    <section id="resenas" className="relative bg-tile py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <h2 className="max-w-xl font-display text-4xl italic text-bone sm:text-5xl">
          Word of mouth, mostly.
        </h2>

        <div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={t.name}
              className="border-b border-dashed border-brass/40 bg-transparent pb-6"
              style={{ transform: `rotate(${rotations[i]}deg)` }}
            >
              <blockquote className="font-display text-xl italic leading-snug text-bone/90">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-5 font-mono text-xs uppercase tracking-wider text-brass-light">
                {t.name}
                <span className="text-bone/40"> — {t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
