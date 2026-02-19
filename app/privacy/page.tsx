"use client";

import { motion } from "framer-motion";
import { guttie } from "@/lib/fonts";
import Link from "next/link";
import { Mail, Phone, MapPin, Shield, Lock, Cookie } from "lucide-react";
import FollowUs from "@/components/FollowUs";
import Image from "next/image";
import eventimage from "@/assets/eventimage5.png";

const page = () => {
  // Animation variants for consistent motion
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.3 },
    transition: { duration: 0.6, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: { opacity: 0 },
    whileInView: { opacity: 1 },
    viewport: { once: true, amount: 0.2 },
    transition: { staggerChildren: 0.1 }
  };

  const policySections = [
    {
      icon: Shield,
      title: "Who We Are",
      content: "This website is owned and operated by Events First Group. If you have any questions or concerns about this Privacy Policy or your data, please contact us at: partnerships@eventsfirstgroup.com"
    },
    {
      icon: Lock,
      title: "What Information We Collect",
      content: "We do not collect sensitive personal data (e.g. health, biometric, financial details) unless you explicitly provide such information for a specific purpose — in which case, we will treat it with additional care.",
      list: [
        "Information you voluntarily provide: such as name, email address, phone number — for example when you fill out a contact form or sign up for a newsletter.",
        "Automatically collected information: such as IP address, browser type, device type, access times and dates, and general usage analytics (via cookies or similar technologies)."
      ]
    },
    {
      icon: Cookie,
      title: "Cookies & Tracking Technologies",
      content: "Our site may use cookies, log files, and other tracking technologies to collect usage data. Cookies may be used to:",
      list: [
        "enable core site functionality",
        "track usage patterns and analytics",
        "remember preferences (if any)"
      ],
      note: "You may control or disable cookies via your browser settings — note that disabling cookies may affect certain features of the site."
    },
    {
      title: "How and Why We Use Your Information",
      content: "We do not sell your personal information to third parties. We use your information for purposes including but not limited to:",
      list: [
        "Responding to your inquiries (e.g. contact forms)",
        "Sending you updates, newsletters, or marketing communications (only if you opted in)",
        "Improving our website's performance, content and user experience (via analytics)",
        "Complying with legal obligations and protecting our legal rights"
      ]
    },
    {
      title: "Data Sharing and Third Parties",
      content: "We do not share, sell, or lease your personal information to external third parties, except in the following circumstances:",
      list: [
        "When required by law or to comply with a legal process",
        "When necessary to protect or defend our rights, property, or safety, or the rights, property, or safety of others"
      ],
      note: "If in future we decide to share or process data with third-party tools (e.g. analytics, marketing, payment), we will update this Privacy Policy accordingly."
    },
    {
      title: "Data Security & Retention",
      content: "We implement reasonable measures to protect your data against unauthorized access, disclosure, or loss. However, no method of Internet transmission or storage is 100% secure, so we cannot guarantee absolute security.",
      note: "We will retain your personal data only as long as needed for the purposes outlined above (e.g. to respond to your inquiries, send you communications if you opted-in, or comply with legal requirements). Once data is no longer needed, we will delete or anonymize it."
    },
    {
      title: "Your Rights",
      content: "Depending on applicable local laws (e.g. GDPR for EU users, or other regional data protection laws), you may have the right to:",
      list: [
        "Access the personal data we hold about you",
        "Request correction or updates to your data",
        "Request deletion of your data",
        "Withdraw consent to data processing (if processing based on consent)",
        "Object to or restrict certain data processing activities",
        "Receive a portable copy of your data (data portability)"
      ],
      note: "If you wish to exercise any of these rights, contact us at ateeq@eventsfirstgroup.com"
    },
    {
      title: "Children's Privacy",
      content: "Our services and website are not intended for children under 13 years old (or the minimum age required by local law). We do not knowingly collect personal information from children under that age. If you believe we have collected data from a child, please contact us to request deletion."
    },
    {
      title: "Changes to This Privacy Policy",
      content: "We may update this Privacy Policy from time to time to reflect changes in our practices, legal requirements, or the features of our website. If we make material changes, we will note the 'Effective Date' at the top and post the updated policy on this page.",
      note: "We encourage you to review this page periodically to stay informed about how we handle your data."
    }
  ];

  return (
    <>
    {/* Top Section */}
          <motion.section
            className="w-full px-6 md:px-12 pt-28"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="max-w-6xl mx-auto space-y-4">
              <h1 className={`text-4xl md:text-5xl font-bold text-white ${guttie.className}`}>
                PRIVACY POLICY 
              </h1>
    
              {/* Breadcrumb */}
              <div className="text-sm font-[fahkwang] text-amber-600">
                Home <span className="mx-2">/</span> PRIVACY POLICY
              </div>
    
              {/* Banner Image */}
              <div className="w-full h-40 md:h-56 relative rounded-lg overflow-hidden">
                <Image src={eventimage} alt="About Banner" fill className="object-cover" />
              </div>
            </div>
          </motion.section>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 px-6 md:px-12 overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-amber-600/5 to-transparent" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 ${guttie.className}`}>
              PRIVACY POLICY
            </h1>
            <p className="text-gray-400 font-[fahkwang] max-w-2xl mx-auto">
              Your privacy matters. This Privacy Policy describes how we collect, use, store, 
              and protect information you provide when you visit or use our website.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="px-6 md:px-12 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            className="space-y-8"
          >
            {policySections.map((section, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-amber-600/30 transition-all duration-500"
              >
                <div className="flex items-start gap-4">
                  {section.icon && (
                    <div className="shrink-0">
                      <section.icon className="w-6 h-6 text-amber-600 mt-1" />
                    </div>
                  )}
                  <div className="space-y-4 flex-1">
                    <h2 className={`text-2xl font-bold text-white ${guttie.className}`}>
                      {section.title}
                    </h2>
                    
                    <p className="text-gray-400 font-[fahkwang] leading-relaxed">
                      {section.content}
                    </p>

                    {section.list && (
                      <ul className="space-y-2 mt-4">
                        {section.list.map((item, i) => (
                          <li key={i} className="text-gray-400 font-[fahkwang] flex items-start gap-2">
                            <span className="text-amber-600 mt-1.5">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.note && (
                      <div className="mt-4 p-4 bg-amber-600/10 border border-amber-600/20 rounded-xl">
                        <p className="text-sm text-amber-600/90 font-[fahkwang]">
                          {section.note}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          
        </div>
      </section>
      <FollowUs/>
    </>
  );
};

export default page;