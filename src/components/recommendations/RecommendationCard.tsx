import Image from "next/image";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

const RecommendationCard = ({value}:any) => {
  return (
    <div className="space-y-4 pt-4">
      <div className="flex items-start justify-between w-full">
        <div className="flex items-center gap-x-2">
          <Image
            src={"/images/1698213510276@2x.png"}
            alt="Logo"
            width={49}
            height={49}
            priority
            className="object-fit rouned-full"
          />
          <div className="space-y-1">
            <p className="text-sm font-medium">Arpit Singhal</p>
            <p className="text-xs text-[#868686] ">
              Founder & CEO at AppSierra Group | Specialized in Strategic
              Business Development and Product Engineering
            </p>
            <p className="text-[10px] ">March 27, 2024</p>
          </div>
        </div>

        <Image
          src={"/images/menu-dots-vertical (1).png"}
          alt="Logo"
          width={3}
          height={40}
          priority
          className="object-fit rouned-full"
        />
      </div>
      {value==="pending" && 
      <div className="flex items-center gap-x-2">
        <Button className="bg-[#F7F7F7] text-black text-xs !h-[30px] font-semibold ">
          Admit
        </Button>
        <Button className="bg-[#ffff] text-[#FF0000] !h-[30px] border-[0.3px] border-gray-200 text-xs font-semibold">
          Deny
        </Button>
      </div>
      }
      <p className="text-xs">
        I had the privilege of working closely with Arpit Singhal during my time
        at Appsierra. He is an exceptional leader who consistently demonstrates
        strong strategic vision, decisive decision-making, and a genuine passion
        for driving the success of the company. He fosters a culture of
        collaboration and innovation, empowering employees to reach their full
        potential. Arpit Singhal is not only a visionary CEO but also a mentor
        and role model for aspiring leaders. I highly recommend him for any
        leadership role and am grateful for the opportunity to have worked under
        his guidance.
      </p>
    </div>
  );
};

export default RecommendationCard;
