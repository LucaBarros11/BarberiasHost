import { contact } from "@/lib/data";
import LeatherDivider from "@/components/ui/LeatherDivider";

export default function Footer() {
  return (
    <footer className="bg-espresso">
      <LeatherDivider />
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <p className="font-display text-xl italic text-bone">
              The Strop House
            </p>
            <p className="mt-1 font-body text-sm text-bone/50">
              {contact.address}
            </p>
          </div>

          <a
            href="#reservar"
            className="border border-brass px-6 py-3 font-mono text-xs uppercase tracking-wider text-brass-light transition-colors hover:bg-brass hover:text-espresso"
          >
            Book a Chair
          </a>
        </div>

        <p className="mt-10 font-mono text-[0.65rem] uppercase tracking-wider text-bone/30">
          &copy; {new Date().getFullYear()} The Strop House, Dublin.
        </p>
      </div>
    </footer>
  );
}
