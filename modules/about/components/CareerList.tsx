import { HiOutlineBriefcase as CareerIcon } from "react-icons/hi";

import SectionHeading from "@/common/components/elements/SectionHeading";
import SectionSubHeading from "@/common/components/elements/SectionSubHeading";
import { CAREERS } from "@/common/constant/carreers";

import CareerCard from "./CareerCard";
import Resume from "./Resume";

export default function CareerList() {
  return (
    <section className="space-y-6">
      <div className="space-y-2">
        <SectionHeading title="Career" icon={<CareerIcon />} />
        <SectionSubHeading>
          <p>My professional career journey.</p>
          <Resume/>
        </SectionSubHeading>
      </div>

      <div className="grid grid-cols-1 gap-4">
        {CAREERS?.map((career, index) => (
          <CareerCard key={index} {...career} />
        ))}
      </div>
    </section>
  );
}
