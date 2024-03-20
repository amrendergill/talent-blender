"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import {
  jobValidationSchema,
  jobTypes,
  jobCategories,
  salaryCurrencies,
} from "@/validations/userSchema";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function CreateJob() {
  const [formData, setFormData] = useState({
    fullName: "",
    about: "",
    jobTitle: "",
    jobDescription: "",
    jobType: "",
    position: "",
    jobCategory: "",
    salaryCurrency: "",
    maxSalary: "",
    minSalary: "",
  });

  const list: any = [
    { title: 'Collaborate with product managers, designers, and other stakeholders to gather and analyze requirements.' },
    { title: 'Design, develop, and test software solutions using modern programming languages and frameworks.' },
    { title: 'Write clean, efficient, and well-documented code following industry best practices.' },
    { title: 'Perform code reviews, debugging, and troubleshooting to ensure the quality and reliability of software products.' },
    { title: 'Implement and maintain scalable architecture and infrastructure for software applications.' },
    { title: 'Stay updated on emerging technologies and trends in software development, and proactively suggest improvements to existing systems.' },
    { title: 'Provide technical guidance and support to team members, and contribute to a culture of innovation and continuous improvement.' }
  ]

  const [errors, setErrors]: any = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      await jobValidationSchema.validate(formData, { abortEarly: false });
      alert(formData);
    } catch (ValidationError: any) {
      const newErrors: any = {};
      ValidationError.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };


  return (
    <>
      <main className="bg-white">
        <div className="p-5">
          <div className="flex gap-x-6 ">
            <div className="w-[65%]">
              <h2 className="font-semibold text-2xl text-[#000000]">Post a Job</h2>
              <p className="text-sm font-regular text-[#212529] mt-2">
                Enhance the caliber of your recruitment.
              </p>

              <div>
                <Tabs defaultValue="details" className="w-[700px]">
                  <div className='flex justify-between border-b pb-[30px] mb-[30px]'>
                    <TabsList className="">
                      <TabsTrigger value="details">Job Details</TabsTrigger>
                      <TabsTrigger value="questions">Screening Questions</TabsTrigger>
                    </TabsList>
                    <div className="flex gap-3">
                      <Button
                        onClick={handleSubmit}
                        className={` text-xs rounded-[5px] bg-white border-[#000000]`}
                        variant={"outline"}
                      >
                        Save Draft
                      </Button>
                      <Button
                        onClick={handleSubmit}
                        className={` text-xs rounded-[5px] bg-white border-[#000000]`}
                        variant={"outline"}
                      >
                        Publish
                      </Button>
                    </div>
                  </div>
                  <TabsContent value="details">
                    <Card className="bg-[#F9F9F9] border-0 ">
                      <CardHeader>
                        <CardTitle className="text-base font-medium text-[#000000]">Basic Details</CardTitle>
                        <CardDescription className="text-xs font-regular text-[#868686]">
                          Introduce yourself so startups can get to know you.                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="flex flex-wrap  gap-5">
                          <div className="grid w-[48%] max-w-sm gap-1.5 ">
                            <Label htmlFor="fullName">Job Title *</Label>
                            <Input
                              type="text"
                              id="fullName text-xs font-regular text-[#868686]"
                              placeholder="e.g. UI/UX Designer, Web developer, etc."
                              value={formData?.jobTitle}
                              onChange={(e: any) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  jobTitle: e.target.value,
                                }))
                              }
                            />
                            <p className="text-red-500 text-sm">{errors.jobTitle}</p>
                          </div>
                          <div className="grid w-[48%] max-w-sm gap-1.5">

                            <Label htmlFor="email">Type of position *</Label>

                            <Select>
                              <SelectTrigger className="w-full  text-xs font-regular">
                                <SelectValue placeholder="Full time Employees" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="inr">INR</SelectItem>
                                  <SelectItem value="usd">USD</SelectItem>
                                  <SelectItem value="eur">EUR</SelectItem>
                                  <SelectItem value="jyp">JYP</SelectItem>
                                  <SelectItem value="gbp">GBP</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>

                            <p className="text-red-500 text-sm">{errors.position}</p>
                          </div>
                          <div className="grid w-[48%] max-w-sm gap-1.5 ">
                            <div className="flex items-center gap-1">
                              <Label htmlFor="fullName">Role *</Label>

                            </div>
                            <Select>
                              <SelectTrigger className="w-full  text-xs font-regular text-[#868686]">
                                <SelectValue placeholder="Select Role" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="inr">INR</SelectItem>
                                  <SelectItem value="usd">USD</SelectItem>
                                  <SelectItem value="eur">EUR</SelectItem>
                                  <SelectItem value="jyp">JYP</SelectItem>
                                  <SelectItem value="gbp">GBP</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                            <p className="text-red-500 text-sm">{errors.fullName}</p>
                          </div>
                          <div className="grid w-[48%] max-w-sm gap-1.5">
                            <div className="flex items-center gap-1">
                              <Label htmlFor="email">Work Experience</Label>

                            </div>
                            <Select>
                              <SelectTrigger className="w-full  text-xs font-regular text-[#868686]">
                                <SelectValue placeholder="Select years of Experience" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectGroup>
                                  <SelectItem value="inr">INR</SelectItem>
                                  <SelectItem value="usd">USD</SelectItem>
                                  <SelectItem value="eur">EUR</SelectItem>
                                  <SelectItem value="jyp">JYP</SelectItem>
                                  <SelectItem value="gbp">GBP</SelectItem>
                                </SelectGroup>
                              </SelectContent>
                            </Select>
                            <p className="text-red-500 text-sm">{errors.email}</p>
                          </div>
                          <div className=" grid w-full gap-1.5">
                            <div className="flex items-center gap-1">
                              <Label htmlFor="Skills">Skills</Label>

                            </div>
                            <Input
                              type="email"
                              id="email"
                              className=" text-xs font-regular text-[#868686]"
                              placeholder="e.g. Python, react, etc."
                              onChange={(e: any) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  email: e.target.value,
                                }))
                              }
                            />
                            <p className="text-red-500 text-sm">{errors.email}</p>
                          </div>
                          
                            <div className='flex w-full items-center justify-between'>
                              <Label htmlFor="about">Description</Label>
                              <Button
                                onClick={handleSubmit}
                                className={`createJobStyle text-xs rounded-[5px]`}
                                variant={"outline"}
                              >
                               
                                <img src='/images/sparkles.svg' alt='Generate with AI'/> Generate with AI
                             
                              </Button>
                            </div>
                           
                         
                          {/* <Textarea
                            id="about"
                            placeholder="About"
                            value={formData?.about}
                            
                            onChange={(e: any) =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                about: e.target.value,
                              }))
                            }
                          /> */}
                          <div className="w-full bg-white border-[0.2px] p-[20px]">
                            <h3 className="text-base font-semibold text-[#000000]">Job Summary</h3>
                            <p className="mt-[10px] text-xs text-[#212529] font-regular">As a Software Developer at XYZ Tech Solutions, you will be responsible for designing, developing, and maintaining software applications that meet the needs of our clients. You will work closely with our cross-functional teams to deliver scalable and reliable solutions that drive business value.</p>
                            <h3 className="mt-[40px] text-base font-semibold text-[#000000]">Key Responsibilities</h3>
                            {list?.map((item: any, index: any) => (
                              <p key={`list${index}`} className='mt-[10px] text-xs text-[#212529] font-regular'>{item?.title}</p>
                            ))}
                          </div>
                          <p className="text-red-500 text-sm">{errors.about}</p>

                        </div>
                        {/* <div className="border-[20px] border-[#FFFFFF]"></div> */}
                        <div className="">
                          <h2 className="text-base font-medium text-[#000000]">Location</h2>
                          <p className="mt-[10px] text-xs font-regular text-[#868686]">
                            Introduce yourself so startups can get to know you.                        </p>
                          <div className="mt-[30px] grid w-full  gap-1.5 ">
                            <Label htmlFor="fullName">Add Location</Label>
                            <Input
                              type="text"
                              id="fullName"
                              placeholder="e.g. New York"
                              value={formData?.fullName}
                              onChange={(e: any) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  fullName: e.target.value,
                                }))
                              }
                            />
                            <p className="text-red-500 text-sm">{errors.fullName}</p>
                          </div>
                          <p className="mt-[50px] text-[#212529] text-sm font-medium">Are you open to candidates who may need to relocate for the position?</p>
                          <div className="mt-4">
                            <RadioGroup
                              defaultValue="option-one"
                              className="flex items-center gap-10"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">Yes</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">No</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="flex items-center mt-[20px] space-x-2">
                            <Checkbox id="terms" className="border-[#c6c3c3]" />
                            <label
                              htmlFor="terms"
                              className="text-xs font-regular leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Accept terms and conditions
                            </label>
                          </div>
                        </div>
                        {/* <div className="border-[20px] border-[#FFFFFF]"></div> */}
                        <div className="pt-[30px]">
                          <h2 className="text-base font-medium text-[#000000]">Remote Work Specifications</h2>
                          <p className="mt-[10px] text-xs font-regular text-[#868686]">
                            Pitch N Hire stands out as the premier platform for sourcing remote talent. This section assures you’ll be matched with candidates who perfectly match your criteria.
                          </p>

                          <p className="mt-[50px] text-[#212529] text-sm font-medium">What is the policy regarding remote work for this role?</p>
                          <div className="mt-4">
                            <RadioGroup
                              defaultValue="option-one"
                              className="flex items-center gap-10"
                            >
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-one" id="option-one" />
                                <Label htmlFor="option-one">In office</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-two" id="option-two" />
                                <Label htmlFor="option-two">Onsite or Remote</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="option-three" id="option-three" />
                                <Label htmlFor="option-three">Remote only</Label>
                              </div>
                            </RadioGroup>
                          </div>
                          <div className="flex items-center mt-[20px] space-x-2">
                            <Checkbox id="terms" className="border-[#c6c3c3]" />
                            <label
                              htmlFor="terms"
                              className="text-xs font-regular leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Work-from-home (WFH) flexibility - Employees have the option to telecommute several days per week.
                            </label>
                          </div>
                          <div className="flex items-center mt-[20px] space-x-2">
                            <Checkbox id="terms" className="border-[#c6c3c3]" />
                            <label
                              htmlFor="terms"
                              className="text-xs font-regular leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Automatically disregard applicants unable to relocate for this position.
                            </label>
                          </div>
                          <div className="mt-[40px]">
                            <h2 className="text-sm font-medium opacity-50">Geographical regions for hiring remote workers.</h2>
                            <p className="mt-[10px] text-xs font-regular text-[#868686] opacity-50">From which locations are you open to hiring?</p>
                            <div className="flex items-center mt-[20px] space-x-2">
                              <Checkbox id="terms" className="border-[#c6c3c3]" />
                              <label
                                htmlFor="terms"
                                className="text-xs font-regular opacity-50 leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                We are open to hiring remote workers from any location worldwide.
                              </label>
                            </div>
                            <div className="mt-[20px] grid w-full  gap-1.5 ">
                              <Input
                                type="text"
                                id="fullName"
                                className=" text-xs font-regular text-[#868686]"
                                placeholder="e.g. New York"
                                value={formData?.fullName}
                                onChange={(e: any) =>
                                  setFormData((prevData: any) => ({
                                    ...prevData,
                                    fullName: e.target.value,
                                  }))
                                }
                              />
                              <p className="text-red-500 text-sm">{errors.fullName}</p>
                            </div>
                            <div className="mt-[40px]">
                              <h2 className="text-sm font-medium text-[#868686] opacity-50">How would you describe your remote work environment?</h2>
                              <div className="mt-4">
                                <RadioGroup
                                  defaultValue="option-one"
                                  className="flex items-center gap-5"
                                >
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-one" id="option-one" />
                                    <Label htmlFor="option-one" className="text-xs font-regular opacity-50">Primarily, we operate with an in-person arrangement.</Label>
                                  </div>
                                  <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="option-two" id="option-two" />
                                    <Label className="text-xs font-regular opacity-50" htmlFor="option-two">We’re predominantly remote or decentralized.</Label>
                                  </div>
                                </RadioGroup>
                              </div>
                              <div className="mt-[40px]">
                                <p className="font-medium text-sm text-[#212529] opacity-50">Geographical regions for hiring remote workers.</p>
                                <div className="mt-[20px]">
                                  <Input
                                    type="text"
                                    id="fullName"
                                    className="text-sm font-regular opacity-50"
                                    placeholder="Select time zones"
                                    value={formData?.fullName}
                                    onChange={(e: any) =>
                                      setFormData((prevData: any) => ({
                                        ...prevData,
                                        fullName: e.target.value,
                                      }))
                                    }
                                  />
                                </div>
                                <div className="mt-[40px]">
                                  <h2 className="text-base font-medium text-[#000000] opacity-50">Hours of Collaboration</h2>
                                  <p className="text-xs mt-[10px] font-regular opacity-50 text-[#868686]">The designated hours during which we anticipate employees to be accessible for synchronous communications. This information is provided solely for informational purposes.</p>
                                  <div className="flex flex-wrap items-center mt-[20px] gap-5">
                                    <div className="grid w-[13%] max-w-sm gap-1.5 ">
                                      <Input
                                        type="text"
                                        id="fullName"
                                        placeholder="-- : --"
                                        value={formData?.fullName}
                                        onChange={(e: any) =>
                                          setFormData((prevData: any) => ({
                                            ...prevData,
                                            fullName: e.target.value,
                                          }))
                                        }
                                      />
                                      <p className="text-red-500 text-sm">{errors.fullName}</p>
                                    </div>
                                    <div className="text-[#868686] opacity-50"> - </div>
                                    <div className="grid w-[13%] max-w-sm gap-1.5">
                                      <Input
                                        type="text"
                                        id="fullName"
                                        placeholder="-- : --"
                                        value={formData?.fullName}
                                        onChange={(e: any) =>
                                          setFormData((prevData: any) => ({
                                            ...prevData,
                                            fullName: e.target.value,
                                          }))
                                        }
                                      />
                                      <p className="text-red-500 text-sm">{errors.email}</p>
                                    </div>
                                    <div className="grid  w-[60%] gap-1.5 ">

                                      <Select>
                                        <SelectTrigger className="w-full font-xs font-regular text-[#868686] opacity-50">
                                          <SelectValue placeholder="Select time zones" />
                                        </SelectTrigger>
                                        <SelectContent>
                                          <SelectGroup>
                                            <SelectItem value="inr">INR</SelectItem>
                                            <SelectItem value="usd">USD</SelectItem>
                                            <SelectItem value="eur">EUR</SelectItem>
                                            <SelectItem value="jyp">JYP</SelectItem>
                                            <SelectItem value="gbp">GBP</SelectItem>
                                          </SelectGroup>
                                        </SelectContent>
                                      </Select>
                                      <p className="text-red-500 text-sm">{errors.fullName}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="border-[20px] border-[#FFFFFF]"></div> */}
                        <div className="pt-[60px]">
                          <h2 className="text-base font-medium text-[#000000]">Compensation & Equity</h2>
                          <p className="mt-[10px] text-xs font-regular text-[#868686]">
                            Jobs lacking salary information are excluded from candidate search results. If you prefer not to disclose these details initially, you can choose to promote your job after it’s published. Job postings that provide detailed information attract an average of 30% more applicants.
                          </p>
                          <div className="mt-[30px]">
                            <div className="grid mt-[10px] gap-1.5">

                              <Label htmlFor="email">Currency</Label>

                              <Select>
                                <SelectTrigger className="w-full text-xs font-regular">
                                  <SelectValue placeholder="United States Dollars ($)" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="inr">INR</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="jyp">JYP</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <p className="text-red-500 text-sm">{errors.email}</p>
                            </div>
                            <div className="mt-[40px]">
                              <h2 className="text-base font-medium text-[#000000]">Currency</h2>
                              <p className="mt-[10px] w-[48%] text-xs font-regular text-[#868686]">
                                The values supplied will be rounded down to the nearest thousand. The gap between these values should not exceed $80,000 USD.
                              </p>
                              <div className="flex flex-wrap items-center mt-[20px] gap-5">
                                <div className="grid w-[46%] max-w-sm gap-1.5 ">
                                  <Input
                                    type="text"
                                    id="fullName"
                                    placeholder="$ 60, 000"
                                    value={formData?.fullName}
                                    onChange={(e: any) =>
                                      setFormData((prevData: any) => ({
                                        ...prevData,
                                        fullName: e.target.value,
                                      }))
                                    }
                                  />
                                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                                </div>
                                <div className='text-[#868686]'> - </div>
                                <div className="grid w-[46%] max-w-sm gap-1.5 ">
                                  <Input
                                    type="text"
                                    id="fullName"
                                    placeholder="& 70,000"
                                    value={formData?.fullName}
                                    onChange={(e: any) =>
                                      setFormData((prevData: any) => ({
                                        ...prevData,
                                        fullName: e.target.value,
                                      }))
                                    }
                                  />
                                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                                </div>
                              </div>

                            </div>
                            <div className="mt-[40px]">
                              <h2 className="text-sm font-medium text-[#212529]">Equity Range</h2>
                              <div className="flex flex-wrap items-center mt-[20px] gap-5">
                                <div className="grid w-[46%] max-w-sm gap-1.5 ">
                                  <Input
                                    type="text"
                                    id="fullName"
                                    placeholder="0.0%"
                                    value={formData?.fullName}
                                    onChange={(e: any) =>
                                      setFormData((prevData: any) => ({
                                        ...prevData,
                                        fullName: e.target.value,
                                      }))
                                    }
                                  />
                                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                                </div>
                                <div className='text-[#868686]'> - </div>
                                <div className="grid w-[46%] max-w-sm gap-1.5 ">
                                  <Input
                                    type="text"
                                    id="fullName"
                                    placeholder="1.0%"
                                    value={formData?.fullName}
                                    onChange={(e: any) =>
                                      setFormData((prevData: any) => ({
                                        ...prevData,
                                        fullName: e.target.value,
                                      }))
                                    }
                                  />
                                  <p className="text-red-500 text-sm">{errors.fullName}</p>
                                </div>
                              </div>
                              <div className="flex items-center mt-[30px] space-x-2">
                                <Checkbox id="terms" className="border-[#c6c3c3]" />
                                <label
                                  htmlFor="terms"
                                  className="text-xs font-regular leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                  No Equity
                                </label>
                              </div>
                              <div className="mt-[10px]">
                                <p className="text-xs font-medium text-[#212529]">Uncertain about compensation?<span className="underline"> Explore startup salaries and equity.</span></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* <div className="border-[20px] border-[#FFFFFF]"></div> */}
                        <div className="pt-[60px]">
                          <h2 className="text-base font-medium text-[#000000]">Recruitment Point of Contact</h2>

                          <div className="mt-[30px]">
                            <div className="grid  gap-1.5">

                              <Label htmlFor="email">Main point of contact for recruitment</Label>

                              <Select>
                                <SelectTrigger className="w-full mt-[10px] text-xs font-regular">
                                  <SelectValue placeholder="Umang Sharma" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="inr">INR</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="jyp">JYP</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <p className="text-red-500 text-sm">{errors.email}</p>
                            </div>

                          </div>
                          <div className="mt-[40px]">
                            <div className="grid  gap-1.5">

                              <Label htmlFor="email" className="text-sm font-medium">Subscribers</Label>
                              <p className="text-[#868686] text-xs font-regular">Who should be the recipient of applicants for this role? The recruiting contact will always be subscribed.</p>
                              <Select>
                                <SelectTrigger className="w-full mt-[15px] text-xs font-regular">
                                  <SelectValue placeholder="Select Subscribers" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="inr">INR</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="jyp">JYP</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <p className="text-red-500 text-sm">{errors.email}</p>
                            </div>

                          </div>
                        </div>
                        {/* <div className="border-[20px] border-[#FFFFFF]"></div> */}
                        <div className="pt-[60px]">
                          <h2 className="text-base font-medium text-[#000000]">Tag Coworkers</h2>
                          <div className="mt-[30px]">
                            <div className="grid  gap-1.5">

                              <Label htmlFor="email" className="text-sm font-medium">Coworkers</Label>
                              <p className="text-[#868686] w-[80%] text-xs font-regular">Individuals with whom the new hire will closely collaborate. We’ll display these individuals on the job page. Job seekers often rank this as one of their top criteria. If you don’t see someone listed here, please add them to your company profile.</p>
                              <Select>
                                <SelectTrigger className="w-full mt-[15px] text-xs font-regular">
                                  <SelectValue placeholder="Select coworkers" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="inr">INR</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="jyp">JYP</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <p className="text-red-500 text-sm">{errors.email}</p>
                            </div>

                          </div>
                        </div>
                        {/* <div className="border-[20px] border-[#FFFFFF]"></div> */}
                        <div className="pt-[60px]">
                          <h2 className="text-base font-medium text-[#000000]">Company Details</h2>
                          <div className="mt-[30px]">
                            <div className="grid  gap-1.5">

                              <Label htmlFor="email" className="text-sm font-medium">Company Size</Label>

                              <Select>
                                <SelectTrigger className="w-full mt-[15px] text-xs font-regular">
                                  <SelectValue placeholder="Select coworkers" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="inr">INR</SelectItem>
                                    <SelectItem value="usd">USD</SelectItem>
                                    <SelectItem value="eur">EUR</SelectItem>
                                    <SelectItem value="jyp">JYP</SelectItem>
                                    <SelectItem value="gbp">GBP</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>

                              <p className="text-red-500 text-sm">{errors.email}</p>
                            </div>

                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                  <TabsContent value="questions">
                    <Card>
                      <CardHeader>
                        <CardTitle>Screening Questions</CardTitle>
                        <CardDescription>
                          Change your password here. After saving, you'll be logged out.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2">
                        <div className="space-y-1">
                          <Label htmlFor="current">Current password</Label>
                          <Input id="current" type="password" />
                        </div>
                        <div className="space-y-1">
                          <Label htmlFor="new">New password</Label>
                          <Input id="new" type="password" />
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button>Save password</Button>
                      </CardFooter>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>


            </div>
            <div className="w-[35%]">
            <h2 className="font-medium text-base text-[#000000]">Your recent Jobs</h2>
              <Tabs defaultValue="details" className="w-[700px]">
                 
                    <TabsList className="">
                      <TabsTrigger value="details">Active</TabsTrigger>
                      <TabsTrigger value="questions">Draft</TabsTrigger>
                    </TabsList>
                    
              </Tabs>
            </div>
          </div>
        </div>
      </main >
    </>
  );
}
