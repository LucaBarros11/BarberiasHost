import { contact, hours } from "@/lib/data";

export default function LocationHours() {
  return (
    <section id="ubicacion" className="relative bg-[#170f0b] py-28">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 gap-16 px-6 md:grid-cols-2">
        <div>
          <h2 className="font-display text-4xl italic text-bone sm:text-5xl">
            Find the chair.
          </h2>
          <div className="mt-8 space-y-1 font-body text-lg text-bone/85">
            <p>{contact.address}</p>
            <p className="text-bone/60">{contact.phone}</p>
            <p className="text-bone/60">{contact.instagram}</p>
          </div>
          <p className="mt-6 max-w-sm font-body text-sm leading-relaxed text-bone/50">
            Two minutes from Aungier Street Luas stop, tucked between the
            bakery and the bookshop. Look for the brass strop hanging in the
            window.
          </p>
        </div>

        <div className="border border-brass/30 bg-[#241a14] p-8">
          <p className="font-mono text-xs uppercase tracking-wider text-brass-light">
            Opening Hours
          </p>
          <dl className="mt-6 divide-y divide-brass/15">
            {hours.map((h) => (
              <div
                key={h.day}
                className="flex items-center justify-between py-3 font-body text-sm text-bone/80"
              >
                <dt>{h.day}</dt>
                <dd className="font-mono text-bone/60">{h.time}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
