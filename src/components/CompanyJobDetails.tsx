import Image from "next/image"
export default function CompanyJobDetails () {
    return(
        <>
        <div className="bg-[#F9F9F9] py-[30px] rounded-[10px] px-5">
              <div className="flex items-center gap-[11px]">
                <Image
                  src={"/images/map-pin (2).png"}
                  alt="location"
                  height={20}
                  width={20}
                />
                <p className="font-medium text-base">Noida, Uttar Pradesh</p>
              </div>
              <p className="text-[#868686] text-xs mt-2">
                Please send us your detailed CV to apply for this job post
              </p>
              <div className="my-[23px]">
                <p className="font-medium text-xl">$124,65</p>
                <p className="text-xs text-[#868686]">Avg. Salary</p>
              </div>

              <div className="flex flex-col gap-5">
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/svg/envelopes.svg"}
                      alt="experience"
                      height={15}
                      width={17}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">2-5 years</p>
                    <p className="text-[10px] text-[#868686]">Experience</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/svg/clock-five.svg"}
                      alt=""
                      height={15}
                      width={15}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Full - Time</p>
                    <p className="text-[10px] text-[#868686]">Job type</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/svg/category (1).svg"}
                      alt=""
                      height={15}
                      width={15}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">Software Development</p>
                    <p className="text-[10px] text-[#868686]">Job Category</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div>
                    <Image
                      src={"/svg/calendar-lines.svg"}
                      alt=""
                      height={15}
                      width={15}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-medium">16 Sep 2024</p>
                    <p className="text-[10px] text-[#868686]">Posted date</p>
                  </div>
                </div>
              </div>
            </div>
        </>
    )
}