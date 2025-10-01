"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What exactly is this program?",
    a: "It’s a structured growth system that combines digital learning materials (step-by-step video lessons, PDFs, checklists, and a complete roadmap) with guided support to ensure you actually implement and get results. You’re not buying “just a course” — you’re getting a complete, productized system designed to help creators, coaches, and entrepreneurs grow faster and more consistently.",
  },
  {
    q: "Who is it for?",
    a: "Creators, coaches, and small agency owners who want more leads and sales ($5K–$100K/mo).",
  },
  {
    q: "How is it different from other programs?",
    a: "Most courses stop at selling information. We go further by ensuring implementation. Along with the core training, you’ll get a private community, weekly Q&As, and accountability check-ins — so you’re never left wondering what to do next.",
  },
  {
    q: "What results can I expect?",
    a: "Clear positioning, an offer that converts, a working funnel, and steady lead flow within 6–12 weeks (if you implement).",
  },
 
  {
    q: "Do you offer refunds?",
    a: "Because this is a high-touch program with my personal time and resources, there are no refunds. But I work closely with you until the system is in place.",
  },
  
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative py-20 px-6 text-white overflow-hidden">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-20 bg-[#141414]" />
      <div className="absolute inset-0 -z-10 flex items-center justify-center opacity-5">
        <Image
          src="/logo1.svg"
          alt="Background Logo"
          width={800}
          height={800}
          className="w-[500px] md:w-[700px] lg:w-[900px] object-cover"
        />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 max-w-7xl mx-auto md:px-10">
        {/* Section Header */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="anton tracking-wider uppercase font-bold text-center mb-12 "
        >
          Frequently Asked Questions
        </motion.h2>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                className="border-b border-gray-700  overflow-hidden bg-gray-900/30 backdrop-blur-sm"
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(i)}
                  className="w-full flex justify-between items-center px-6 py-4 text-left font-extrabold plus text-sm sm:text-lg focus:outline-none hover:bg-gray-800/50 transition"
                >
                  <span>{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-6 h-6" />
                  </motion.div>
                </button>

                {/* Answer */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0, marginTop: 0 }}
                      animate={{ opacity: 1, height: "auto", marginTop: 8 }}
                      exit={{ opacity: 0, height: 0, marginTop: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="px-6 pb-4 text-gray-300 text-sm sm:text-base plus"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
