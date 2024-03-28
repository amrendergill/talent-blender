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
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  jobValidationSchema,
  jobTypes,
  jobCategories,
  salaryCurrencies,
} from "@/validations/userSchema";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CreateJobRightBar from "@/components/CreateJobRightBar";


export default function CreateJob() {
  const [formData, setFormData] = useState({
    experience: "",
    role: "",
    jobTitle: "",
    jobDescription: "",
    location: "",
    position: "",
    jobCategory: "",
    salaryCurrency: "",
    maxSalary: "",
    minSalary: "",
    fullName: "",
  });
  const [inputValue, setInputValue] = useState('');

  const list: any = [
    {
      title:
        "Collaborate with product managers, designers, and other stakeholders to gather and analyze requirements.",
    },
    {
      title:
        "Design, develop, and test software solutions using modern programming languages and frameworks.",
    },
    {
      title:
        "Write clean, efficient, and well-documented code following industry best practices.",
    },
    {
      title:
        "Perform code reviews, debugging, and troubleshooting to ensure the quality and reliability of software products.",
    },
    {
      title:
        "Implement and maintain scalable architecture and infrastructure for software applications.",
    },
    {
      title:
        "Stay updated on emerging technologies and trends in software development, and proactively suggest improvements to existing systems.",
    },
    {
      title:
        "Provide technical guidance and support to team members, and contribute to a culture of innovation and continuous improvement.",
    },
  ];

  const [errors, setErrors]: any = useState({});

  const handleInputChange = (e: any) => {
    setInputValue(e.target.value);
  }

  const [question, setQuestion] = useState(
    [
      { 
        index: 0,
        title: 'What tools and software do you typically use for UI/UX design?' },
      { 
        index: 1,
        title: 'Can you walk us through your experience in UI/UX design?' },
      { 
        index: 2,
        title: 'Can you provide examples of user interfaces or experiences you’ve designed in the past?' },
      { 
        index: 3,
        title: "Can you provide examples of user interfaces or experiences you’ve designed in the past?" }])

  const addNewQuestion = () => {
    setQuestion((existingList:any) => (
      [...existingList, { index: existingList?.index, title: inputValue }]
    ));
    setInputValue("");
  }


  const deleteQuestion = (index:any) => {
    console.log('question')
      let deleteTodos = question.filter((item:any) => item?.index !== index);
      setQuestion([...deleteTodos])
  }



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
        <div className="py-5">
          <div className="flex gap-5 ">
            <div className="w-[100%]">
              <h2 className="font-semibold text-2xl text-[#000000]">
                Post a Job
              </h2>
              <p className="text-xs font-regular text-[#212529] mt-[13px]">
                Enhance the caliber of your recruitment.
              </p>
              <Tabs defaultValue="details" className="">
                <div className="flex justify-between items-center border-b pb-[30px] my-[30px]">
                  <TabsList className="grid grid-cols-2  w-[300px] min-w-[300px] mx-w-[300px]  rounded-none relative bg-white">
                    <TabsTrigger
                      value="details"
                      className="clipDetailsTab pl-[20px] h-[33px] flex justify-start text-xs w-[155px] min-w-[160px] max-w-[160px]  data-[state=active]:shadow-none data-[state=active]:bg-[#FBE9E7] bg-[#F2E8FE] rounded-none data-[state=active]:rounded-none"
                    >
                      Job Details
                    </TabsTrigger>
                    <TabsTrigger
                      value="questions"
                      className="clipQuestionsTab h-[33px] text-xs flex justify-start absolute pl-10 left-[125px] w-[180px] min-w-[180px] max-w-[180px] bg-[#F2E8FE] rounded-none data-[state=active]:rounded-none data-[state=active]:bg-[#FBE9E7]"
                    >
                      Screening Questions
                    </TabsTrigger>
                  </TabsList>
                  <div className="flex gap-3">
                    <Button
                      onClick={handleSubmit}
                      className={` text-sm font-regular border-[0.2px] px-[20px] py-[10px] rounded-[5px] bg-white`}
                      variant={"outline"}
                    >
                      Save Draft
                    </Button>
                    <Button
                      onClick={handleSubmit}
                      className={` text-sm font-regular border-[0.2px] px-[20px] py-[10px] rounded-[5px] bg-white border-[#bed4ee] shadow-[0px_3px_6px_#0000000D]`}
                      variant={"outline"}
                    >
                      Publish
                    </Button>
                  </div>
                </div>
                <TabsContent value="details">
                  <Card className="bg-[#F9F9F9] border-0 ">
                    <CardHeader>
                      <CardTitle className="text-base font-medium text-[#000000]">
                        Basic Details
                      </CardTitle>
                      <CardDescription className="text-xs font-regular text-[#868686]">
                        Introduce yourself so startups can get to know you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="mt-[30px]">
                      <div className="flex w-[100%] flex-wrap gap-5 justify-between">
                        <div className="grid w-[48%]  gap-[10px] ">
                          <Label
                            htmlFor="jobTitle"
                            className="text-sm font-medium text-[#212529]"
                          >
                            Job Title *
                          </Label>
                          <Input
                            type="text"
                            id="jobTitle"
                            className="text-xs font-regular text-[#868686]"
                            placeholder="e.g. UI/UX Designer, Web developer, etc."
                            value={formData?.jobTitle}
                            onChange={(e: any) =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                jobTitle: e.target.value,
                              }))
                            }
                          />
                          <p className="text-red-500 text-sm">
                            {errors.jobTitle}
                          </p>
                        </div>
                        <div className="grid w-[48%] gap-[10px]">
                          <Label
                            htmlFor="position"
                            className="text-sm font-medium text-[#212529]"
                          >
                            Type of position *
                          </Label>
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
                          <p className="text-red-500 text-sm">
                            {errors.position}
                          </p>
                        </div>
                        <div className="grid w-[48%]   gap-[10px] ">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="role">Role *</Label>
                          </div>
                          <Select>
                            <SelectTrigger
                              className="w-full text-xs font-regular
                             text-[#868686]"
                            >
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
                          <p className="text-red-500 text-sm">{errors.role}</p>
                        </div>
                        <div className="grid w-[48%]   gap-[10px]">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="experience">Work Experience</Label>
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
                          <p className="text-red-500 text-sm">
                            {errors.experience}
                          </p>
                        </div>
                        <div className=" grid relative  w-full  gap-[10px]">
                          <div className="flex items-center gap-1">
                            <Label htmlFor="Skills">Skills</Label>
                          </div>
                          <img src="/images/search.svg" className='h-[20px] w-[20px] absolute left-5 top-9' alt="skills" />
                          <Input
                            type="text"
                            id="Skills"
                            className="text-xs pl-[50px] font-regular text-[#868686]"
                            placeholder="e.g. Python, react, etc."
                            onChange={(e: any) =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                skills: e.target.value,
                              }))
                            }
                          />
                          <p className="text-red-500 text-sm">
                            {errors.Skills}
                          </p>
                        </div>
                        <div className="flex w-full items-center justify-between">
                          <Label htmlFor="description">Description</Label>
                          <Button
                            onClick={handleSubmit}
                            className={`createJobStyle text-xs rounded-[5px]`}
                            variant={"outline"}
                          >
                            <img
                              src="/images/sparkles.svg"
                              alt="Generate with AI"
                            />
                            Generate with AI
                          </Button>
                        </div>
                        <div className="w-full bg-white rounded-[5px] border-[0.2px] p-[20px]">
                          <h3 className="text-base font-semibold text-[#000000]">
                            Job Summary
                          </h3>
                          <p className="mt-[10px] text-xs text-[#212529] font-regular">
                            As a Software Developer at XYZ Tech Solutions, you
                            will be responsible for designing, developing, and
                            maintaining software applications that meet the
                            needs of our clients. You will work closely with our
                            cross-functional teams to deliver scalable and
                            reliable solutions that drive business value.
                          </p>
                          <h3 className="mt-[40px] text-base font-semibold text-[#000000]">
                            Key Responsibilities
                          </h3>
                          {list?.map((item: any, index: any) => (
                            <p
                              key={`list${index}`}
                              className="mt-[10px] text-xs text-[#212529] font-regular"
                            >
                              {item?.title}
                            </p>
                          ))}
                          <p className="text-red-500 text-sm">
                            {errors.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                    <CardContent className="space-y-2">
                      <div className="">
                        <h2 className="text-base font-medium text-[#000000]">
                          Location
                        </h2>
                        <p className="mt-[10px] text-xs font-regular text-[#868686]">
                          Introduce yourself so startups can get to know you.{" "}
                        </p>
                        <div className="mt-[30px] relative grid w-full ">
                          <Label
                            htmlFor="location"
                            className="text-sm font-medium text-[#212529]"
                          >
                            Add Location
                          </Label>
                          <img src="/images/search.svg" className='h-[20px] w-[20px] absolute left-5 top-[42px]' alt="skills" />
                          <Input
                            type="text"
                            id="location"
                            placeholder="e.g. New York"
                            className="mt-[10px] pl-[50px] text-xs font-regular text-[#868686]"
                            value={formData?.location}
                            onChange={(e: any) =>
                              setFormData((prevData: any) => ({
                                ...prevData,
                                location: e.target.value,
                              }))
                            }
                          />
                          <p className="text-red-500 text-sm">
                            {errors.location}
                          </p>
                        </div>
                        <p className="mt-[40px] text-[#212529] text-sm font-medium">
                          Are you open to candidates who may need to relocate
                          for the position?
                        </p>
                        <div className="mt-4">
                          <RadioGroup
                            defaultValue="option-one"
                            className="flex items-center border-[#0472F4] gap-10"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option-one"
                                id="option-one"
                              />
                              <Label htmlFor="option-one">Yes</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="option-two"
                                id="option-two"
                              />
                              <Label htmlFor="option-two">No</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="flex items-center mt-[20px] space-x-2">
                          <Checkbox
                            id="relocation"
                            className="border-[#c6c3c3]"
                          />
                          <label
                            htmlFor="relocation"
                            className="text-xs font-regular leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Willing to offer relocation assistance?
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                    <CardContent className="space-y-2">
                      <div className="">
                        <h2 className="text-base font-medium text-[#000000]">
                          Remote Work Specifications
                        </h2>
                        <p className="mt-[10px] text-xs font-regular text-[#868686]">
                          Pitch N Hire stands out as the premier platform for
                          sourcing remote talent. This section assures you’ll be
                          matched with candidates who perfectly match your
                          criteria.
                        </p>

                        <p className="mt-[30px] text-[#212529] text-sm font-medium">
                          What is the policy regarding remote work for this
                          role?
                        </p>
                        <div className="mt-4">
                          <RadioGroup
                            defaultValue="office"
                            className="flex items-center gap-10"
                          >
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="office" id="office" />
                              <Label htmlFor="office">In office</Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem
                                value="remote-office"
                                id="remote-office"
                              />
                              <Label htmlFor="remote-office">
                                Onsite or Remote
                              </Label>
                            </div>
                            <div className="flex items-center space-x-2">
                              <RadioGroupItem value="remote" id="remote" />
                              <Label htmlFor="remote">Remote only</Label>
                            </div>
                          </RadioGroup>
                        </div>
                        <div className="flex items-center mt-[20px] space-x-2">
                          <Checkbox id="wfh" className="border-[#c6c3c3]" />
                          <label
                            htmlFor="wfh"
                            className="text-xs font-regular opacity-50 leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Work-from-home (WFH) flexibility - Employees have
                            the option to telecommute several days per week.
                          </label>
                        </div>
                        <div className="flex items-center mt-[20px] space-x-2">
                          <Checkbox
                            id="disregard"
                            className="border-[#c6c3c3]"
                          />
                          <label
                            htmlFor="disregard"
                            className="text-xs font-regular opacity-50 leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Automatically disregard applicants unable to
                            relocate for this position.
                          </label>
                        </div>
                        <div className="mt-[40px]">
                          <h2 className="text-sm font-medium text-[#212529] opacity-50">
                            Geographical regions for hiring remote workers.
                          </h2>
                          <p className="mt-[10px] text-xs font-regular text-[#868686] opacity-50">
                            From which locations are you open to hiring?
                          </p>
                          <div className="flex items-center mt-[20px] space-x-2">
                            <Checkbox
                              id="worldwide"
                              className="border-[#c6c3c3]"
                            />
                            <label
                              htmlFor="worldwide"
                              className="text-xs font-regular opacity-50 leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              We are open to hiring remote workers from any
                              location worldwide.
                            </label>
                          </div>
                          <div className="mt-[20px] grid w-full relative gap-1.5 ">
                          <img src="/images/search.svg" className='h-[20px] w-[20px] absolute left-5 top-3' alt="skills" />
                            <Input
                              type="text"
                              id="fullName"
                              className=" text-xs  pl-[50px] font-regular opacity-50 text-[#868686]"
                              placeholder="e.g. New York"
                              value={formData?.fullName}
                              onChange={(e: any) =>
                                setFormData((prevData: any) => ({
                                  ...prevData,
                                  fullName: e.target.value,
                                }))
                              }
                            />
                            <p className="text-red-500 text-sm">
                              {errors.fullName}
                            </p>
                          </div>
                          <div className="mt-[40px]">
                            <h2 className="text-sm font-medium text-[#868686] opacity-50">
                              How would you describe your remote work
                              environment?
                            </h2>
                            <div className="mt-4">
                              <RadioGroup
                                defaultValue=""
                                className="flex items-center gap-5 text-[#868686] opacity-50 "
                              >
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="in-person"
                                    id="in-person"
                                  />
                                  <Label
                                    htmlFor="in-person"
                                    className="text-xs text-[#000000] font-regular opacity-50"
                                  >
                                    Primarily, we operate with an in-person
                                    arrangement.
                                  </Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <RadioGroupItem
                                    value="decentralized"
                                    id="decentralized"
                                  />
                                  <Label
                                    className="text-xs text-[#000000] font-regular opacity-50"
                                    htmlFor="decentralized"
                                  >
                                    We’re predominantly remote or decentralized.
                                  </Label>
                                </div>
                              </RadioGroup>
                            </div>
                            <div className="mt-[40px]">
                              <p className="font-medium text-sm text-[#212529] opacity-50">
                                Geographical regions for hiring remote workers.
                              </p>
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
                                <h2 className="text-base font-medium text-[#000000] opacity-50">
                                  Hours of Collaboration
                                </h2>
                                <p className="text-xs mt-[10px] font-regular opacity-50 text-[#868686]">
                                  The designated hours during which we
                                  anticipate employees to be accessible for
                                  synchronous communications. This information
                                  is provided solely for informational purposes.
                                </p>
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
                                    <p className="text-red-500 text-sm">
                                      {errors.fullName}
                                    </p>
                                  </div>
                                  <div className="text-[#868686] opacity-50">
                                    -
                                  </div>
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
                                    <p className="text-red-500 text-sm">
                                      {errors.email}
                                    </p>
                                  </div>
                                  <div className="grid  w-[60%] gap-1.5 ">
                                    <Select>
                                      <SelectTrigger className="w-full font-xs font-regular text-[#868686] opacity-50">
                                        <SelectValue placeholder="Select time zones" />
                                      </SelectTrigger>
                                      <SelectContent>
                                        <SelectGroup>
                                          <SelectItem value="inr">
                                            INR
                                          </SelectItem>
                                          <SelectItem value="usd">
                                            USD
                                          </SelectItem>
                                          <SelectItem value="eur">
                                            EUR
                                          </SelectItem>
                                          <SelectItem value="jyp">
                                            JYP
                                          </SelectItem>
                                          <SelectItem value="gbp">
                                            GBP
                                          </SelectItem>
                                        </SelectGroup>
                                      </SelectContent>
                                    </Select>
                                    <p className="text-red-500 text-sm">
                                      {errors.fullName}
                                    </p>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                    <CardContent className="space-y-2">
                      <div className="">
                        <h2 className="text-base font-medium text-[#000000]">
                          Compensation & Equity
                        </h2>
                        <p className="mt-[10px] text-xs font-regular text-[#868686]">
                          Jobs lacking salary information are excluded from
                          candidate search results. If you prefer not to
                          disclose these details initially, you can choose to
                          promote your job after it’s published. Job postings
                          that provide detailed information attract an average
                          of 30% more applicants.
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

                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          </div>
                          <div className="mt-[40px]">
                            <h2 className="text-base font-medium text-[#000000]">
                              Currency
                            </h2>
                            <p className="mt-[10px] w-[48%] text-xs font-regular text-[#868686]">
                              The values supplied will be rounded down to the
                              nearest thousand. The gap between these values
                              should not exceed $80,000 USD.
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
                                <p className="text-red-500 text-sm">
                                  {errors.fullName}
                                </p>
                              </div>
                              <div className="text-[#868686]"> - </div>
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
                                <p className="text-red-500 text-sm">
                                  {errors.fullName}
                                </p>
                              </div>
                            </div>
                          </div>
                          <div className="mt-[40px]">
                            <h2 className="text-sm font-medium text-[#212529]">
                              Equity Range
                            </h2>
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
                                <p className="text-red-500 text-sm">
                                  {errors.fullName}
                                </p>
                              </div>
                              <div className="text-[#868686]"> - </div>
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
                                <p className="text-red-500 text-sm">
                                  {errors.fullName}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center mt-[30px] space-x-2">
                              <Checkbox
                                id="terms"
                                className="border-[#c6c3c3]"
                              />
                              <label
                                htmlFor="terms"
                                className="text-xs font-regular leading-none text-[#868686] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                              >
                                No Equity
                              </label>
                            </div>
                            <div className="mt-[10px]">
                              <p className="text-xs font-medium text-[#212529]">
                                Uncertain about compensation?
                                <span className="underline">
                                  {" "}
                                  Explore startup salaries and equity.
                                </span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                    <CardContent className="space-y-2">
                      <div className="">
                        <h2 className="text-base font-medium text-[#000000]">
                          Recruitment Point of Contact
                        </h2>

                        <div className="mt-[30px]">
                          <div className="grid  gap-1.5">
                            <Label htmlFor="email">
                              Main point of contact for recruitment
                            </Label>

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

                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          </div>
                        </div>
                        <div className="mt-[40px]">
                          <div className="grid  gap-1.5">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Subscribers
                            </Label>
                            <p className="text-[#868686] text-xs font-regular">
                              Who should be the recipient of applicants for this
                              role? The recruiting contact will always be
                              subscribed.
                            </p>
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

                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                    <CardContent className="space-y-2">
                      <div className="">
                        <h2 className="text-base font-medium text-[#000000]">
                          Tag Coworkers
                        </h2>
                        <div className="mt-[30px]">
                          <div className="grid  gap-1.5">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Coworkers
                            </Label>
                            <p className="text-[#868686] w-[80%] text-xs font-regular">
                              Individuals with whom the new hire will closely
                              collaborate. We’ll display these individuals on
                              the job page. Job seekers often rank this as one
                              of their top criteria. If you don’t see someone
                              listed here, please add them to your company
                              profile.
                            </p>
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

                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-[#F9F9F9] mt-[10px] border-0 ">
                    <CardContent className="space-y-2">
                      <div className="">
                        <h2 className="text-base font-medium text-[#000000]">
                          Company Details
                        </h2>
                        <div className="mt-[30px]">
                          <div className="grid  gap-1.5">
                            <Label
                              htmlFor="email"
                              className="text-sm font-medium"
                            >
                              Company Size
                            </Label>

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
                            <p className="text-red-500 text-sm">
                              {errors.email}
                            </p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                <TabsContent value="questions" className="">
                  <Card className=" border-0 bg-[#F9F9F9]">
                    <CardHeader>
                      <CardTitle className="text-base font-medium">
                        Screening Questions
                      </CardTitle>
                      <CardDescription className="mt-[10px] font-regular text-xs">
                        Introduce yourself so startups can get to know you.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="bg-white rounded-[10px] px-[25px] py-[20px] mt-[10px]">
                      <h2 className="font-medium text-sm">Templates</h2>
                      <div className="mt-[30px]">
                        <Select>
                          <SelectTrigger className="w-full text-[#868686] mt-[15px] text-xs font-regular">
                            <SelectValue placeholder="Select Template" />
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
                      </div>
                    </CardContent>
                    <CardContent className="bg-white rounded-[10px] px-[25px] py-[20px] mt-[10px]">
                      <div className="flex mb-[40px] justify-between">
                        <div className="font-medium text-[#212529] text-sm">
                          Add Question
                        </div>
                        <div className="flex gap-3">
                          <Button
                            onClick={handleSubmit}
                            className={` text-xs font-regular border-[0.2px] px-[20px] py-[10px] rounded-[5px] bg-white border-[#000000]`}
                            variant={"outline"}
                          >
                            Save as Template
                          </Button>
                          <Button
                            onClick={handleSubmit}
                            className={` text-xs text-[#0472F4] font-regular border-[0.2px] px-[20px] py-[10px] rounded-[5px] bg-white border-[#0472F4]`}
                            variant={"outline"}
                          >
                            + Add a Question
                          </Button>
                        </div>
                      </div>
                      <div className="grid w-full relative items-center ">
                        <Input
                          type="text"
                          id="fullName"
                          placeholder="Enter your question"
                          value={inputValue}
                          onChange={handleInputChange}
                        />
                        <img
                          src="/images/floppy-disks.svg"
                          alt="Questions"
                          onClick={addNewQuestion}
                          className="image"
                        />
                      </div>
                      <div className="border-t mt-[30px] pt-[15px]">
                        {question?.map((item: any, index: any) => (

                          // <div
                          //   key={`questionsArr${index}`}
                          //   className="border-[0.3px] mt-[15px] px-[20px] py-[20px] justify-between flex items-center rounded-[5px] bg-[#F9FAFB]"
                          // >
                          <>
                            <div key={`question${index}`} className="flex relative ">
                              <img src="/images/apps.svg" className='absolute left-5 top-8 ' alt="apps" />
                              <Input
                                type="text"
                                value={item?.title}
                                className="border-[0.3px] outline-none  mt-[15px] px-[40px] py-[20px] justify-between  flex items-center rounded-[5px] bg-[#F9FAFB] font-regular text-[#000000] text-sm"
                              // onChange={handleInputChange}
                              />
                              <div className="flex gap-[15px]">
                                <img
                                  src="/images/pen-circle.svg"
                                  alt="edit"
                                  className="absolute right-[50px] top-7"
                                />
                                <img src="/images/circle-trash.svg"
                                  className="absolute right-[20px] top-7"
                                  alt="trash"
                                  onClick={()=>{deleteQuestion(index)}}
                                />
                              </div>
                            </div>
                          </>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
            <CreateJobRightBar/>
          </div>
        </div>
      </main>
    </>
  );
}
