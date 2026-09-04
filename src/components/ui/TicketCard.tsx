type TicketCardProps = {
  name: string;
  description: string;
  price: string;
  duration: string;
  rotate?: number;
};

export default function TicketCard({
  name,
  description,
  price,
  duration,
  rotate = 0,
}: TicketCardProps) {
  return (
    <div
      className="ticket transition-transform duration-300 hover:rotate-0 hover:scale-[1.02]"
      style={{ transform: `rotate(${rotate}deg)` }}
    >
      <div className="flex items-baseline justify-between gap-4">
        <h3 className="font-display text-xl text-bone">{name}</h3>
        <span className="whitespace-nowrap font-mono text-lg text-brass-light">
          {price}
        </span>
      </div>
      <p className="mt-2 font-body text-sm leading-relaxed text-bone/65">
        {description}
      </p>
      <p className="mt-4 font-mono text-[0.7rem] uppercase tracking-wider text-bone/40">
        {duration}
      </p>
    </div>
  );
}
