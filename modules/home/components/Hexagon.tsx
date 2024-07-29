"use client";

import { motion } from "framer-motion";

import Tooltip from "@/common/components/elements/Tooltip";

interface HexagonProps {
  name: string;
  indexActive?: number;
  indexCurrent: number; 
  children?: React.ReactNode;
}

const Hexagon = ({
  name,
  indexActive,
  indexCurrent,
  children,
}: HexagonProps) => {
  return (
    <div className="relative">
      <Tooltip title={name}>
        <div className="hexagon flex h-[55px] w-[48px] items-center justify-center bg-neutral-800  hover:scale-110 ">
          {indexActive === indexCurrent && (
            <motion.div
              className="absolute z-10 h-4 w-20 bg-white/20 blur-sm"
              initial={{ y: -50, x: -10, rotate: "-30deg" }}
              animate={{ y: 50, x: 20, rotate: "-30deg" }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.75,
              }}
            />
          )}
          {children}
        </div>
      </Tooltip>
    </div>
  );
};

export default Hexagon;
