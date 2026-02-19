"use client"
import Image from "next/image";
import clientLogo1 from "@/assets/clientLogo1.png";
import clientLogo2 from "@/assets/clientLogo2.png";
import clientLogo3 from "@/assets/clientLogo3.png";
import clientLogo4 from "@/assets/clientLogo4.png";
import clientLogo5 from "@/assets/clientLogo5.png";
import clientLogo6 from "@/assets/clientLogo6.png";
import clientLogo7 from "@/assets/clientLogo7.png";
import clientLogo8 from "@/assets/clientLogo8.png";
import clientLogo9 from "@/assets/clientLogo9.png";
import clientLogo10 from "@/assets/clientLogo10.png";
import clientLogo11 from "@/assets/clientLogo11.png";
import clientLogo12 from "@/assets/clientLogo12.png";
import clientLogo13 from "@/assets/clientLogo13.png";
import clientLogo14 from "@/assets/clientLogo14.png";
import clientLogo15 from "@/assets/clientLogo15.png";
import clientLogo16 from "@/assets/clientLogo16.png";
import clientLogo17 from "@/assets/clientLogo17.png";
import clientLogo18 from "@/assets/clientLogo18.png";
import clientLogo19 from "@/assets/clientLogo19.png";
import clientLogo20 from "@/assets/clientLogo20.png";
import clientLogo21 from "@/assets/clientLogo21.png";
import clientLogo22 from "@/assets/clientLogo22.png";
import clientLogo23 from "@/assets/clientLogo23.png";

const clientLogos = [
  { name: "Client 1", image: clientLogo1 },
  { name: "Client 2", image: clientLogo2 },
  { name: "Client 3", image: clientLogo3 },
  { name: "Client 4", image: clientLogo4 },
  { name: "Client 5", image: clientLogo5 },
  { name: "Client 6", image: clientLogo6 },
  { name: "Client 7", image: clientLogo7 },
  { name: "Client 8", image: clientLogo8 },
  { name: "Client 9", image: clientLogo9 },
  { name: "Client 10", image: clientLogo10 },
  { name: "Client 11", image: clientLogo11 },
  { name: "Client 12", image: clientLogo12 },
  { name: "Client 13", image: clientLogo13 },
  { name: "Client 14", image: clientLogo14 },
  { name: "Client 15", image: clientLogo15 },
  { name: "Client 16", image: clientLogo16 },
  { name: "Client 17", image: clientLogo17 },
  { name: "Client 18", image: clientLogo18 },
  { name: "Client 19", image: clientLogo19 },
  { name: "Client 20", image: clientLogo20 },
  { name: "Client 21", image: clientLogo21 },
  { name: "Client 22", image: clientLogo22 },
  { name: "Client 23", image: clientLogo23 },
];

const doubledLogos = [...clientLogos, ...clientLogos];

const ClientSection = () => {
  return (
    <section id="home" className="mt-12 relative overflow-hidden">
      <div className="border-t border-b border-border py-10 md:py-12 overflow-hidden">
        <div
          className="flex items-center gap-12 md:gap-20 w-max"
          style={{
            animation: "marquee 35s linear infinite",
            willChange: "transform",
          }}
        >
          {doubledLogos.map((logo, i) => (
            <span
              key={i}
              className="relative overflow-hidden cursor-default group h-16 md:h-20 flex items-center shrink-0"
            >
              {/* Default dimmed logo — slides down and out on hover */}
              <span className="inline-flex items-center opacity-50 transition-transform duration-500 ease-out group-hover:translate-y-full">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className="w-auto h-14 md:h-16 object-contain"
                  priority={i < 10}
                />
              </span>

              {/* Full-color logo — slides in from top on hover */}
              <span className="absolute inset-0 flex items-center justify-center opacity-100 -translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0">
                <Image
                  src={logo.image}
                  alt={logo.name}
                  className="w-auto h-14 md:h-16 object-contain"
                  priority={i < 10}
                />
              </span>
            </span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </section>
  );
};

export default ClientSection;