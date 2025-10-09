import React from "react";
import { motion, Variants, easeOut } from "framer-motion";



const IncludeSection: React.FC = () => {
  const features = [
    {
      title: "Bi-Weekly 1:1 Strategy & Planning Calls",
      description:
        "Get private sessions, personalized guidance and accountability to keep you focused and on track so you always know your next move and never feel like you’re doing it alone.",
    },
    {
      title: "Complete Audit",
      description:
        "Of your Youtube & Instagram channel, offers, sales funnel, business.",
    },
    {
      title: "Weekly Group Training Calls",
      description:
        "Level up every week with live group training sessions. Learn proven strategies, master high-impact skills, and plug into ready-to-use templates. Get real-time answers, personalized feedback, and behind-the-scenes insights to fast-track your success.",
    },
    {
      title: "Custom Funnel Creation",
      description:
        "Including YouTube sales funnel, Instagram sales funnel, and email marketing funnel",
    },
    {
      title: "Private Expert Community",
      description:
        "Join a private space where creators and entrepreneurs connect to exchange strategies, share wins, and support each other’s journey, all with the shared goal of scaling personal brand and business to $20K–$350K+/month.",
    },
    {
      title: "Direct Support & Feedback from Vivek",
      description:
        "You’ll have access to me for support inside the community. When something breaks or stalls, I will help you fix it — fast.",
    },
    {
      title: "Bonus resources",
      description: (
        <>
          Done-for-you resources (valued at $1,800): checklists, templates, and AI prompts to help you take action faster and with total clarity.
          <br />
          Plus, a curated list of tools and software to help you run and grow your brand and business — while saving money and scaling smarter.
        </>
      ),
    },
  ];

  return (
    <section className="transition-colors duration-500 px-4 sm:px-6 lg:px-8 xl:px-12 py-10 md:py-20 w-full">
      <h2 className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl text-black uppercase tracking-wider doner font-black pb-10">
        What&apos;s Included
      </h2>
      <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-black tracking-wider opacity-90 doner leading-relaxed font-black mb-4 lg:mb-6 text-left">
        Everything you need to build a complete growth system that turns views into premium clients
      </p>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-start max-w-7xl mx-auto"
       
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="bg-white text-black rounded-lg p-6 shadow-lg hover:shadow-2xl transition-shadow cursor-pointer min-h-[200px] sm:min-h-[220px] md:min-h-[350px]"
            whileHover={{
              y: -8,
              scale: 1.03,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)",
              transition: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <h3 className="text-sm sm:text-base md:text-lg doner tracking-wider font-black mb-6 lg:mb-8 text-left">
              {feature.title}
            </h3>
            <p className="inter text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-gray-700">
              {feature.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default IncludeSection;
