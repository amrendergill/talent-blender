"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { jobValidationSchema } from "@/validations/userSchema";
import { useState } from "react";


export default function CreateJob() {
  const [formData, setFormData] = useState({
    companyName: "",
    website: "",
    jobTitle: "",
    jobDescription: "",
    jobType: "",
    email: "",
    jobCategory: "",
    salaryCurrency: "",
    maxSalary: "",
    minSalary: "",
  });

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
      <main className="">
        <div className="p-5">
          {/* <h2 className="font-medium text-xl">Company Details</h2>
          <p className="text-sm font-regular text-gray-600 mt-2">
            Tell us more about your company.{" "}
          </p> */}

          {/* <div className="flex items-center w-full gap-5 my-5">
            <div className="grid w-full max-w-sm items-center gap-1.5 ">
              <div className="flex items-center gap-1">
                <Label htmlFor="companyName">Company Name</Label>
                <p className="text-red-600 font-bold">*</p>
              </div>
              <Input
                type="text"
                id="companyName"
                placeholder="Company Name"
                value={formData?.companyName}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    fullName: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.companyName}</p>
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5 ">
              <div className="flex items-center gap-1">
                <Label htmlFor="website">Website</Label>
                <p className="text-red-600 font-bold">*</p>
              </div>
              <Input
                type="text"
                id="website"
                placeholder="Website"
                value={formData?.website}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    fullName: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.website}</p>
            </div>
          </div> */}
          <div className="">
            <div>
              <h2 className="font-medium text-xl">Job Details</h2>
              <p className="text-sm font-regular text-gray-600 mt-2">
                Describe the roles and responsibilities of the position.{" "}
              </p>
            </div>
            <div className="flex flex-col gap-5 my-5">
              <div className="grid w-full max-w-full items-center gap-1.5 ">
                <div className="flex items-center gap-1">
                  <Label htmlFor="jobTitle">Job Title</Label>
                  <p className="text-red-600 font-bold">*</p>
                </div>
                <Input
                  type="text"
                  id="jobTitle"
                  placeholder="Job Title"
                  value={formData?.jobTitle}
                  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      fullName: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.jobTitle}</p>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5 ">
                <div className="flex items-center gap-1">
                  <Label htmlFor="jobTitle">Job Description</Label>
                  <p className="text-red-600 font-bold">*</p>
                </div>
                <Textarea
                  id="jobDescription"
                  placeholder="Job Description"
                  value={formData?.jobDescription}
                  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      fullName: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.jobDescription}</p>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-full max-w-full items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="jobType">Job Type</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="fullTime">Full-time</SelectItem>
                        <SelectItem value="partTime">Part-time</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-red-500 text-sm">{errors.jobType}</p>
                </div>
                <div className="grid w-full max-w-full items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="jobCategory">Job Category</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectItem value="hr">HR</SelectItem>
                        <SelectItem value="frontendEngineer">
                          Frontend Engineer
                        </SelectItem>
                        <SelectItem value="backendEngineer">
                          Backend Engineer
                        </SelectItem>
                        <SelectItem value="customerSuccessManager">
                          Customer Success Manager
                        </SelectItem>
                        <SelectItem value="projectManager">
                          Project Manager
                        </SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-red-500 text-sm">{errors.jobType}</p>
                </div>
                {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="email">Email</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Input
                    type="email"
                    id="email"
                    placeholder="Email"
                    value={formData?.email}
                    onChange={(e: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        fullName: e.target.value,
                      }))
                    }
                  />
                  <p className="text-red-500 text-sm">{errors.email}</p>
                </div> */}
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="currency">Salary Currency</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Select>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select" />
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
                    {errors.salaryCurrency}
                  </p>
                </div>
                <div className="grid w-full max-w-full items-center gap-1.5 ">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="jobTitle">Maximum Salary / year</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Input
                    type="text"
                    id="maxSalary"
                    placeholder="Max Salary"
                    value={formData?.maxSalary}
                    onChange={(e: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        fullName: e.target.value,
                      }))
                    }
                  />
                  <p className="text-red-500 text-sm">{errors.maxSalary}</p>
                </div>
                <div className="grid w-full max-w-full items-center gap-1.5 ">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="minSalary">Minimum Salary / year</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Input
                    type="text"
                    id="minSalary"
                    placeholder="Min Salary"
                    value={formData?.minSalary}
                    onChange={(e: any) =>
                      setFormData((prevData: any) => ({
                        ...prevData,
                        fullName: e.target.value,
                      }))
                    }
                  />
                  <p className="text-red-500 text-sm">{errors.minSalary}</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-10">
              <h2 className="font-medium text-xl">How to Apply</h2>
              <p className="text-sm font-regular text-gray-600 mt-2">
                Describe the roles and responsibilities of the position.{" "}
              </p>

              <div className="my-5">
                <RadioGroup
                  defaultValue="applyByWebsite"
                  className=" flex items-center gap-10"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="applyByWebsite" id="r1" />
                    <Label htmlFor="r1">Apply by website</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="applyByPortfolio" id="r2" />
                    <Label htmlFor="r2">Apply by portfolio</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>
          </div>
          <div className="w-full flex items-center justify-end">
                  <Button
                    onClick={handleSubmit}
                    className={` text-xs rounded-[3px] bg-white border-[#0a66c2]`}
                    variant={"outline"}
                  >
                    Submit
                  </Button>
                </div>
        </div>
      </main>
    </>
  );
}
