import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const clientLogos = [
  {
    name: "Envato",
    svg: (
      <svg width="100" height="40" viewBox="0 0 100 28" fill="currentColor" className="text-foreground">
        <path d="M12 2C6.5 2 3 6.5 3 11c0 6 5 13 9 15 4-2 9-9 9-15 0-4.5-3.5-9-9-9z" />
        <text x="24" y="19" fontSize="25" fontWeight="700" fontFamily="inherit">envato</text>
      </svg>
    ),
  },
  {
    name: "Developer",
    svg: (
      <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" className="text-foreground">
        <rect x="2" y="6" width="16" height="16" rx="3" strokeWidth="2" stroke="currentColor" fill="none" />
        <text x="8" y="19" fontSize="10" fontWeight="800" textAnchor="middle" fill="currentColor">{"</>"}</text>
        <text x="28" y="19" fontSize="13" fontWeight="700" fontFamily="inherit">developer</text>
      </svg>
    ),
  },
  {
    name: "Flavor",
    svg: (
      <svg width="100" height="28" viewBox="0 0 100 28" fill="currentColor" className="text-foreground">
        <circle cx="10" cy="14" r="8" fill="none" stroke="currentColor" strokeWidth="2" />
        <circle cx="10" cy="14" r="3" />
        <text x="24" y="19" fontSize="14" fontWeight="700" fontFamily="inherit">flavor</text>
      </svg>
    ),
  },
  {
    name: "Suspended",
    svg: (
      <svg width="120" height="28" viewBox="0 0 120 28" fill="currentColor" className="text-foreground">
        <polygon points="10,4 18,14 10,24 2,14" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="24" y="19" fontSize="13" fontWeight="700" fontFamily="inherit">suspended</text>
      </svg>
    ),
  },
  {
    name: "Flavor",
    svg: (
      <svg width="90" height="28" viewBox="0 0 90 28" fill="currentColor" className="text-foreground">
        <path d="M4 20 L10 6 L16 20" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <text x="22" y="19" fontSize="13" fontWeight="700" fontFamily="inherit">axion</text>
      </svg>
    ),
  },
  {
    name: "Capsule",
    svg: (
      <svg width="100" height="28" viewBox="0 0 100 28" fill="currentColor" className="text-foreground">
        <rect x="2" y="8" width="14" height="12" rx="6" fill="none" stroke="currentColor" strokeWidth="2" />
        <text x="22" y="19" fontSize="13" fontWeight="700" fontFamily="inherit">capsule</text>
      </svg>
    ),
  },
];

const ClientSection = () => {
  const { ref: imgRef, isVisible: imgVisible } = useScrollAnimation();

  return (
    <section id="home" className=" mt-12 relative overflow-hidden">

      {/* Client logos marquee */}
      <div className=" border-t border-b border-border py-10 md:py-11 overflow-hidden">
       <div className="flex animate-marquee gap-10 md:gap-16 items-center">
  {clientLogos.concat(clientLogos).map((logo, i) => (
    <span key={i} className="relative overflow-hidden cursor-default group h-8 md:h-10 flex items-center shrink-0">
      {/* Default dim logo */}
      <span className="inline-flex items-center opacity-30 transition-transform duration-500 ease-out group-hover:translate-y-full">
        {logo.svg}
      </span>
      {/* White logo sliding down from top on hover */}
      <span className="absolute inset-0 flex items-center opacity-90 -translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
        {logo.svg}
      </span>
    </span>
  ))}
</div>

      </div>
    </section>
  );
};

export default ClientSection;
