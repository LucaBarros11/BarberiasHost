import { services } from "@/lib/data";
import TicketCard from "@/components/ui/TicketCard";

const rotations = [-1.2, 0.8, -0.5, 1.1, -0.9];

export default function Services() {
  return (
    <section id="servicios" className="relative bg-[#170f0b] py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="max-w-xl">
          <h2 className="font-display text-4xl italic text-bone sm:text-5xl">
            Priced by the job, not the hour.
          </h2>
          <p className="mt-5 font-body text-base leading-relaxed text-bone/70">
            Every service below ends the same way: a hot towel, a brush of
            talc, and a mirror check before you leave the chair.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <TicketCard
              key={service.name}
              name={service.name}
              description={service.description}
              price={service.price}
              duration={service.duration}
              rotate={rotations[i % rotations.length]}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
