import { FaArrowRight } from "react-icons/fa";
import { Card } from "./ui/card";

export default function BasicCompanyCardLayout({
  title,
  children,
  footer,
}: any) {
  const pathname = ['/company']

  return (
    <>
      <Card className="p-0">
        <div
          className={` ${
            pathname?.includes("/company") ? "border-b" : "border-none"
          }`}
        >
          <div className="px-7 py-4">
            <h2 className="text-[24px] font-semibold">{title}</h2>
            {children}
          </div>
        </div>

        <div
          className={`w-full flex items-center justify-center text-gray-600 font-semibold gap-2 ${
            pathname?.includes("/company") ? "block" : "hidden"
          }`}
        >
          <p className="py-4">Show all {footer}</p>
          <div>
            <FaArrowRight />
          </div>
        </div>
      </Card>
    </>
  );
}
