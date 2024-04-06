import Image from "next/image";
import { Card } from "./ui/card";

const RewardsCard = ({ name, img, bio, bg }: any) => {
  return (
    <div>
      <Card className="flex items-start justify-start gap-x-3">
        <div
          className={`${bg} rounded-[5px] h-[35px] w-[35px] flex items-center justify-center `}
        >
          <Image
            src={img}
            alt="Logo"
            width={15}
            height={15}
            priority
            className="object-fit w-[15px] h-[15px]"
          />
        </div>
        <div className="space-y-3 flex-[0.9]">
          <p className="text-base font-semibold">{name}</p>
          <p className="text-xs">{bio}</p>
        </div>
      </Card>
    </div>
  );
};

export default RewardsCard;
