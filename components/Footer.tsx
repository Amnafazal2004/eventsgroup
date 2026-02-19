"use client"
import Link from "next/link";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { FaPhoneAlt, FaMapMarkerAlt, FaLinkedinIn, FaInstagram, FaYoutube } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { guttie } from "@/lib/fonts";

const Footer = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <footer className="" ref={ref}>
      {/* Top border */}
      <div className="border-t border-white/10" />

      {/* Main Footer — no container/padding here so dividers touch top+bottom borders */}
      <div
        className={`grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-white/10 transition-all duration-700 ${
          isVisible ? "animate-fade-up" : "opacity-0"
        }`}
      >
        {/* Column 1 — Brand + Contact */}
        <div className="flex flex-col gap-8 px-8 lg:px-14 py-14">
          {/* Logo */}
          <div>
            <h2 className={`text-white text-3xl font-bold ${guttie.className}`}>
              EventsFirstGroup
            </h2>
            <div className="w-10 h-[3px] bg-primary rounded-full mt-3" />
          </div>

          {/* Description */}
          <p className="text-white/40 text-sm font-[fahkwang] leading-relaxed">
            Welcome to our Company, First choice for events. Where we specialize in creating
            exceptional B2B events that are tailored to meet the unique needs and goals of our clients.
          </p>

          {/* Contact Details */}
          <div className="flex flex-col gap-3">
            <p className="text-white/30 text-xs font-[fahkwang] uppercase tracking-widest">
              How to reach us?
            </p>
            <div className="flex items-start gap-2">
              <FaMapMarkerAlt className="text-primary text-xs mt-1 shrink-0" />
              <p className="text-white/60 text-sm font-[fahkwang] leading-relaxed">
                Office no: M07, The Light Commercial Tower, Arjan, Dubai
              </p>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-primary text-xs shrink-0" />
              <a
                href="tel:+971565535513"
                className="text-white font-bold text-sm font-[fahkwang] hover:text-primary transition-colors duration-300 uppercase tracking-wide"
              >
                +971 56 553 5513
              </a>
            </div>
            <div className="flex items-center gap-2">
              <MdEmail className="text-primary text-sm shrink-0" />
              <a
                href="mailto:info@eventsfirstgroup.com"
                className="text-white font-bold text-sm font-[fahkwang] hover:text-primary transition-colors duration-300 uppercase tracking-wide"
              >
                INFO@EVENTSFIRSTGROUP.COM
              </a>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href="/contactus"
            className="flex items-center justify-between gap-4 border border-white/20 rounded-full px-6 py-4 text-white font-[fahkwang] text-sm font-bold tracking-widest uppercase hover:border-primary hover:text-primary transition-all duration-300 group pr-4"
          >
            LET'S WORK TOGETHER
            <span className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300 text-base shrink-0">
              →
            </span>
          </Link>
        </div>

        {/* Column 2 — Useful Links */}
        <div className="flex flex-col gap-8 px-8 lg:px-14 py-14">
          <div>
            <h4 className="text-white text-xl font-bold font-[fahkwang] uppercase tracking-widest">
              Useful Links
            </h4>
            <div className="w-10 h-[3px] bg-primary rounded-full mt-3" />
          </div>

          <nav className="flex flex-col gap-5">
            {[
              { label: "About Us", href: "/aboutus" },
              { label: "What We Do", href: "/whatwedo" },
              { label: "Upcoming Events", href: "/events" },
              { label: "Privacy Policy", href: "/privacy" },
              { label: "Contact", href: "/contactus" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="flex items-center gap-3 group w-fit"
              >
                <span className="text-primary font-bold text-lg transition-transform duration-300 group-hover:translate-x-1">
                  ›
                </span>
                <span className="text-white/50 text-sm font-[fahkwang] tracking-wider group-hover:text-white transition-colors duration-300">
                  {item.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>

        {/* Column 3 — Follow Us */}
        <div className="flex flex-col gap-8 px-8 lg:px-14 py-14">
          <div>
            <h4 className="text-white text-xl font-bold font-[fahkwang] uppercase tracking-widest">
              Follow Us
            </h4>
            <div className="w-10 h-[3px] bg-primary rounded-full mt-3" />
          </div>

          <p className="text-white/40 text-sm font-[fahkwang] leading-relaxed">
            Stay connected with us on social media for the latest updates, events, and news.
          </p>

          <div className="flex flex-col gap-4">
            {[
              { label: "LINKEDIN", href: "https://www.linkedin.com/company/events-first-group/posts/?feedView=all", icon: <FaLinkedinIn /> },
              { label: "INSTAGRAM", href: "https://www.instagram.com/eventsfirstgroup/", icon: <FaInstagram /> },
              { label: "YOUTUBE", href: "https://www.youtube.com/@EventsFirstGroup-fe8rq", icon: <FaYoutube /> },
            ].map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                className="flex items-center gap-4 group"
              >
                <span className="text-white/20 text-sm group-hover:text-primary transition-colors duration-300">
                  {s.icon}
                </span>
                <span className="text-white/50 font-bold font-[fahkwang] text-sm tracking-widest group-hover:text-white transition-colors duration-300 border-b border-white/10 pb-3 w-full group-hover:border-primary">
                  {s.label}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto px-8 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-[fahkwang] tracking-wide">
            Copyright © <span className="text-white/60 font-bold">Events First Group</span>. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6 text-xs text-white/30 font-[fahkwang] tracking-widest">
            <Link href="/privacy" className="hover:text-primary transition-colors duration-300 uppercase">Privacy Policy</Link>
            <Link href="/sitemap" className="hover:text-primary transition-colors duration-300 uppercase">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;