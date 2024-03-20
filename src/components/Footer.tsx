import { GoDotFill } from "react-icons/go";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "./ui/select";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full pb-6">
      <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
      <div className="w-full">
        <div className="text-xl flex justify-center items-center font-semibold gap-x-2 ">
          <span>Talent </span>
          <span className="text-[#0472F4]">Blender</span>
        </div>
        <div className="text-sm text-[#868686] flex items-center gap-x-12 my-8 justify-center">
          <p>Term of Services</p>
          <GoDotFill size={6} />
          <p>Privacy Policy</p>
          <GoDotFill size={6} />

          <p>Jobs</p>
          <GoDotFill size={6} />

          <p>Support</p>
        </div>
      </div>
      <div className="container">
        <hr className="border-t-[0.5px]  border-gray-200 w-full my-4"></hr>
        <div className="flex justify-between items-center">
          <Select>
            <SelectTrigger className="w-[100px] !border-none !outline-none">
              <SelectValue placeholder="English" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>English</SelectLabel>
                <SelectItem value="apple">Spanish</SelectItem>
                <SelectItem value="banana">French</SelectItem>
                <SelectItem value="blueberry">Chinese</SelectItem>
                <SelectItem value="grapes">Italian</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
          <div className="flex items-center gap-x-2">
            <p className="text-xs text-[#868686] font-medium">
              © 2024 TalentBlender
            </p>
            <Image
              src={"/images/linkedin.svg"}
              alt="Logo"
              width={18}
              height={21}
              priority
              className="z-50 object-fit"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
