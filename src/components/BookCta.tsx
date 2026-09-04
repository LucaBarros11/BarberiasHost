import { contact } from "@/lib/data";

export default function BookCta() {
  return (
    <section id="reservar" className="relative bg-oxblood py-24">
      <div className="grain absolute inset-0" />
      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-display text-4xl italic text-bone sm:text-5xl">
          Book your chair.
        </h2>
        <p className="mx-auto mt-5 max-w-md font-body text-base leading-relaxed text-bone/85">
          Online booking is on its way. Until then, ring the shop or drop us
          a line on Instagram and we&rsquo;ll get you in.
        </p>
        <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
          <a
            href={`tel:${contact.phone.replace(/\s+/g, "")}`}
            className="bg-bone px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-espresso transition-colors hover:bg-brass-light"
          >
            Call {contact.phone}
          </a>
          <span className="border border-bone/40 px-7 py-3.5 font-mono text-xs uppercase tracking-wider text-bone/80">
            {contact.instagram}
          </span>
        </div>
      </div>
    </section>
  );
}
