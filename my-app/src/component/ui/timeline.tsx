"use client";

import {
  motion,
  useScroll,
  useTransform,
  MotionValue,
} from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
  fullDetails: React.ReactNode;
}

interface TimelineItemProps {
  index: number;
  offset: number;
  heightTransform: MotionValue<number>;
  item: TimelineEntry;
  onKnowMore: (entry: TimelineEntry) => void;
}

const TimelineItem = ({
  index,
  offset,
  heightTransform,
  item,
  onKnowMore,
}: TimelineItemProps) => {
  const isActive: MotionValue<boolean> = useTransform(
    heightTransform,
    (h: number) => h > offset
  );

  const circleBg = useTransform(isActive, (active) =>
    active ? "#22c55e" : "#ffffff"
  );
  const textColor = useTransform(isActive, (active) =>
    active ? "#ffffff" : "#737373"
  );
  const contentOpacity = useTransform(isActive, (active) =>
    active ? 1 : 0.5
  );

  return (
    <div
      data-item
      className="flex justify-start py-16  border-t-2 border-green-100"
    >
      <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
        <motion.div
          className="h-12 sm:h-20 w-12 sm:w-20 rounded-full flex items-center justify-center font-bold text-2xl sm:text-4xl anton"
          style={{ backgroundColor: circleBg, color: textColor }}
        >
          {index + 1}
        </motion.div>
      </div>

      <motion.div
        className="relative pl-10 pr-4 md:pl-4 w-full space-y-4"
        style={{ opacity: contentOpacity }}
      >
        {item.content}
        <button
          onClick={() => onKnowMore(item)}
          className="block anton tracking-wider  max-w-md text-center px-6 py-2 rounded-md border border-white text-white font-medium uppercase 
          transition-all duration-300 ease-in-out 
          transform hover:scale-110 hover:-rotate-2 
          hover:backdrop-blur-md hover:bg-white/10"        >
          Know More
        </button>
      </motion.div>
    </div>
  );
};

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);
  const [itemOffsets, setItemOffsets] = useState<number[]>([]);

  const [open, setOpen] = useState(false);
  const [selectedPhase, setSelectedPhase] = useState<TimelineEntry | null>(
    null
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);

      const sections = Array.from(
        ref.current.querySelectorAll("[data-item]")
      );
      const offsets = sections.map((el) => (el as HTMLElement).offsetTop);
      setItemOffsets(offsets);
    }
  }, [ref, data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 100%"],
  });

  const heightTransform: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [0, height]
  );

  const opacityTransform: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 0.1],
    [0, 1]
  );

  const handleKnowMore = (entry: TimelineEntry) => {
    setSelectedPhase(entry);
    setOpen(true);
  };

  return (
    <div className="w-full md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <TimelineItem
            key={index}
            index={index}
            offset={itemOffsets[index] || 0}
            heightTransform={heightTransform}
            item={item}
            onKnowMore={handleKnowMore}
          />
        ))}

        <div
          style={{ height: height + "px" }}
          className="absolute top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] 
            from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]
            [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]"
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>

      <div
        className={`fixed inset-0 z-50 transition ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute top-0 pt-[50px] lg:pt-[75px] right-0 h-full w-full max-w-md bg-[#1e1e1e] text-slate-100 shadow-xl transform transition-transform duration-300 ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center border-b border-gray-700 p-4">
            <h2 className="text-lg font-bold tracking-wide uppercase">
              {selectedPhase?.title || ""}
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="text-gray-400 hover:text-white text-xl"
            >
              ✕
            </button>
          </div>
          <div className="p-6 overflow-y-auto max-h-[calc(100vh-4rem)] space-y-6">
            <div className="prose prose-invert max-w-none prose-p:text-slate-300 prose-li:text-slate-300 prose-strong:text-white prose-h3:text-green-400 prose-h4:text-slate-200">
              {selectedPhase?.fullDetails}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
