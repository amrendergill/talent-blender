import About from "@/components/About";
import Education from "@/components/Education";
import Experience from "@/components/Experience";
import PersonalInfo from "@/components/PersonalInfo";
import Post from "@/components/Post";
import RightSidebar from "@/components/RightSidebar";
import Seo from "@/components/Seo";
import { Card } from "@/components/ui/card";
import { FaArrowRight } from "react-icons/fa6";

export default function User() {

  return (
    <>
      
        <main className=" flex gap-5 ">
          <div className="w-full flex flex-col gap-4">
            <Card className="p-0">
              <PersonalInfo
                coverImage={
                  "/images/tembinkosi-sikupela-ZC3iqcOL5T8-unsplash.jpg"
                }
                avatar={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                name={"Mark Davidson"}
                bio={
                  "Software Engineer | Content Creator | Educator | Mentor | Freelancer"
                }
                address={"Noida, UttarPradesh"}
                mutualFollowerProfilePic={
                  "/images/teodor-drobota-uyyRJA2an4o-unsplash.jpg"
                }
                mutualFollowerName={"Marina"}
                mutalFollowerCount={"27"}
                collegeName={
                  "Rajiv Gandhi College of Engineering, Research and Technology"
                }
                collegeLogo={"/images/dhiraj-chouhan-_1c5jIwOFUY-unsplash.jpg"}
              />
            </Card>
            <Card className="px-7 py-4">
            <h2 className="text-[24px] font-semibold">About</h2>

              <About about={"User's bio"} />
            </Card>
            <Card className="p-0">
              <div className="border-b">
                <div className="px-7 py-4">
                  <h2 className="text-[24px] font-semibold">Posts</h2>
                  <div className="flex items-center gap-4 my-3">
                    <Card className="w-[365px] min-w-[365px] max-w-[365px] p-0">
                      <Post
                        logo={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                        companyName={"Mark Davidson"}
                        followers={"1,458"}
                        timeOfPost={"3h"}
                        content="User's content"
                        comments="13"
                        reposts="25"
                      />
                    </Card>
                  </div>
                </div>
              </div>
              <div className="w-full flex items-center justify-center text-gray-600 font-semibold gap-2">
                <p className="py-4">Show all posts</p>
                <div>
                  <FaArrowRight />
                </div>
              </div>
            </Card>
            <Card className="p-0">
              <div>
                <div className="px-7 py-4">
                  <h2 className="text-[24px] font-semibold">Education</h2>
                  <div className="mt-4">
                    <Education
                      avatar="/images/dhiraj-chouhan-_1c5jIwOFUY-unsplash.jpg"
                      collegeName="Rajiv Gandhi College of Engineering, Research and Technology"
                      degreeName="Bachelors of Technology"
                      years="2010-2014"
                    />
                  </div>
                </div>
              </div>
            </Card>
            <Card className="p-0">
              <div>
                <div className="px-7 py-4">
                  <h2 className="text-[24px] font-semibold">Experience</h2>
                  <div className="mt-4">
                    <Experience
                      companyLogo={"/images/PNH-logo-icon.png"}
                      companyName={"Pitch N Hire"}
                      jobType={"Full-time"}
                      duration={"6 months"}
                      place={"Remote"}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
          <div className="w-[300px] max-w-[300px] min-w-[300px] flex flex-col gap-4">
            <RightSidebar />
          </div>
        </main>
     
    </>
  );
}


