import PersonalInfo from "@/components/PersonalInfo";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import UserRightSidebar from "@/components/UserRightSidebar";


export default function User() {

  const list = ['Curated content for social media platforms, including Facebook and LinkedIn.', 'Edited photographs and produced graphic design artwork using Adobe Illustrator and Photoshop.', 'Administered on-page optimisation activites, including keyword research.']

  const skillList = [
    'Hospitality', 'Multitasking', 'New hire training', 'Teamwork and collaboration', 'Beverage preparation', 'Food serving', 'Self-motivated', 'Liquor, beer and wine knowledge', 'Safe Food Handling',
    'Customer Service Skills', 'Proficient in Adobe CS6', 'Microsoft Office Suite'
  ]

  const links = [
    {
      text: 'Website',
      name: 'www.appsierra.com'
    },
    {
      text: 'LinkedIn',
      name: 'linkedin.com/in/arpit-singhal-'
    },
    {
      text: 'Twitter',
      name: 'www.appsierra.com'
    },
  ]

  return (
    <>
      <main className="w-full flex flex-col gap-4 mt-4">
        <PersonalInfo
          coverImage={"/images/tembinkosi-sikupela-ZC3iqcOL5T8-unsplash.jpg"}
          avatar={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
          name={"Umang Sharma"}
          bio={"UI/UX Designer | Software Developer | Graphic Designer"}
          address={"Noida, UttarPradesh"}
          mutualFollowerProfilePic={
            "/images/teodor-drobota-uyyRJA2an4o-unsplash.jpg"
          }
          underlineStyle={'underline'}
          mutualFollowerName={"Marina"}
          mutalFollowerCount={"27"}
          collegeName={
            "Rajiv Gandhi College of Engineering, Research and Technology"
          }
          collegeLogo={"/images/dhiraj-chouhan-_1c5jIwOFUY-unsplash.jpg"}
        />
        <div className=" border-b ">
          <div className='w-fit text-base border-[#212529] mb-0 border-b-[2px] font-medium text-[#212529]'>
            Profile
          </div>
        </div>
        <div className='flex gap-5 mt-[20px] '>
          <div className="w-full">
            <Card className="px-7 py-4 ">
              <h2 className="text-[24px] font-semibold">About</h2>
              <p className="mt-[14px] text-sm font-regular text-[#212529]">
                As a tech entrepreneur with multiple ventures under Appsierra Group, Arpit is passionate about creating innovative products and providing services that solve real-world problems and add value to customers. <br /><br />His core competencies include market penetration, business strategy, product engineering, and digital marketing. He is known for identifying, developing, and implementing business strategies that drive growth and customer satisfaction. He also has strong engineering and marketing teams that support him in delivering quality and timely solutions. He is a transhumanist and a social activist who believes in using technology for the betterment of humanity.
              </p>

            </Card>
            <Card className="mt-[15px] bg-[#F9F9F9] border-0">
              <h2 className="text-[20px] text-[#212529] font-semibold">Work Experience</h2>
              <div className='mt-[20px] bg-[#FFF] px-[20px] py-[15px] rounded-[5px]'>
                <h3 className="text-lg font-semibold">Marketing Coordinator Assistant Intern</h3>
                <h4 className="text-base font-regular text-[#0472F4]">Pitch N Hire</h4>
                <div className="mt-[10px] items-center gap-[13px] flex">
                  <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                    June 2021 - August 2024
                  </div>
                  <div className="flex gap-[9px]">
                    <Image
                      src={"/images/map-pin.svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="object-fit"
                    />
                    <p className="font-regular text-xs text-[#000000]">Noida, Uttar Pradesh</p>
                  </div>
                </div>
                <ul className="mt-[20px]  list-inside list-disc">
                  {list?.map((item: any, index: any) => (
                    <li className='text-xs mt-[10px] font-regular text-[#212529]' key={`userList${index}`}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='mt-[15px] bg-[#FFF] px-[20px] py-[15px] rounded-[5px]'>
                <h3 className="text-lg font-semibold">Marketing Coordinator Assistant Intern</h3>
                <h4 className="text-base font-regular text-[#0472F4]">Pitch N Hire</h4>
                <div className="mt-[10px] items-center gap-[13px] flex">
                  <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                    June 2021 - August 2024
                  </div>
                  <div className="flex gap-[9px]">
                    <Image
                      src={"/images/map-pin.svg"}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="object-fit"
                    />
                    <p className="font-regular text-xs text-[#000000]">Noida, Uttar Pradesh</p>
                  </div>
                </div>
                <p className="text-xs w-[670px] mt-[20px] font-regular text-[#212529]">As a Software Developer at XYZ Tech Solutions, you will be responsible for designing, developing, and maintaining software applications that meet the needs of our clients. You will work closely with our cross-functional teams to deliver scalable and reliable solutions that drive business value.</p>
              </div>
            </Card>
            <Card className="mt-[10px] p-[20px] border-0 bg-[#F9F9F9]">
              <h2 className="text-[20px] text-[#212529] font-semibold">Education</h2>
              <div className="mt-[20px] pb-[20px] rounded-[5px] bg-[#FFF] px-[20px] py-[15px]">
                <div className="border-b pb-[20px]">
                  <h3 className="text-lg font-semibold text-[#212529]">Harold Washington College</h3>
                  <p className="mt-[5px] font-regular text-base text-[#212529]">Associates, Applied Science Digital Multimedia Design,</p>
                  <div className="mt-[10px] items-center gap-[13px] flex">
                    <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                      June 2012 - December 2015
                    </div>
                    <div className="flex gap-[9px]">
                      <Image
                        src={"/images/map-pin.svg"}
                        alt="Logo"
                        width={15}
                        height={15}
                        priority
                        className="object-fit"
                      />
                      <p className="font-regular text-xs text-[#000000]">Chicago, IL</p>
                    </div>
                  </div>
                </div>
                <div className="mt-[20px]">
                  <h3 className="text-lg font-semibold text-[#212529]">Roosevelt University</h3>
                  <p className="mt-[5px] font-regular text-base text-[#212529]">Bachelors, Science in Business Administration & Marketing</p>
                  <div className="mt-[10px] items-center gap-[13px] flex">
                    <div className="text-xs font-regular text-[#000000] bg-[#F5F5F5] rounded-full py-[4px] px-[15px]">
                      August 2019 - June 2021
                    </div>
                    <div className="flex gap-[9px]">
                      <Image
                        src={"/images/map-pin.svg"}
                        alt="Logo"
                        width={15}
                        height={15}
                        priority
                        className="object-fit"
                      />
                      <p className="font-regular text-xs text-[#000000]">Chicago, IL</p>
                    </div>
                  </div>
                </div>
              </div>

            </Card>
            <Card className="mt-[10px] p-[20px]">
              <h2 className="text-[20px] text-[#212529] font-semibold">Skills</h2>
              <ul className='mt-[25px] flex flex-wrap gap-[5px]'>
                {skillList?.map((item: any, index: any) => (
                  <li key={`skillList${index}`} className='text-base font-regular bg-[#F5F5F5] rounded-full px-[20px] py-[9px]'>{item}

                  </li>
                ))}

              </ul>
            </Card>
            <Card className="mt-[10px] p-[20px]">
              <h2 className="text-[20px] mb-[20px] text-[#212529] font-semibold">Links</h2>
              {links?.map((item: any, index: any) => (
                <div key={`links${index}`} className="mt-[20px] flex gap-5">
                  <div>

                  </div>
                  <div>
                    <p className="text-xs font-medium text-[#212529]">{item?.text}</p>
                    <p className="text-xs font-regular text-[#0472F4]">{item?.name}</p>
                  </div>
                </div>
              ))}

            </Card>
          </div>
          <div className="w-[395px] min-w-[395px] max-w-[395px]">
            <UserRightSidebar />
          </div>
        </div>
      </main>
    </>
  );
}


