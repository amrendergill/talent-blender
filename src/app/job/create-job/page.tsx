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
import {
  jobValidationSchema,
  jobTypes,
  jobCategories,
  salaryCurrencies,
} from "@/validations/userSchema";
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
      <main className="bg-white">
        <div className="p-5">
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
                  <Label htmlFor="jobDescription">Job Description</Label>
                  <p className="text-red-600 font-bold">*</p>
                </div>
                <Textarea
                  id="jobDescription"
                  placeholder="Job Description"
                  value={formData?.jobDescription}
                  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      jobDescription: e.target.value,
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
                  <Select
                    name={"jobType"}
                    onValueChange={(e: any) => {
                      setFormData((prevData: any) => ({
                        ...prevData,
                        jobType: e,
                      }));
                    }}
                    value={formData?.jobType}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select">
                        {formData?.jobType}
                      </SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {jobTypes?.length > 0 &&
                          jobTypes?.map((el: any, index: any) => {
                            return (
                              <>
                                <SelectItem
                                  value={el}
                                  key={`index of ${index}`}
                                >
                                  {el}
                                </SelectItem>
                              </>
                            );
                          })}
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
                  <Select
                    name={"jobCategory"}
                    onValueChange={(e: any) => {
                      setFormData((prevData: any) => ({
                        ...prevData,
                        jobCategory: e,
                      }));
                    }}
                    value={formData?.jobCategory}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue  placeholder="Select">{formData?.jobCategory}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {jobCategories?.length > 0 &&
                          jobCategories?.map((el: any, index: any) => {
                            return (
                              <>
                                <SelectItem
                                  value={el}
                                  key={`index of ${index}`}
                                >
                                  {el}
                                </SelectItem>
                              </>
                            );
                          })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-red-500 text-sm">{errors.jobCategory}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="grid w-full max-w-sm items-center gap-1.5">
                  <div className="flex items-center gap-1">
                    <Label htmlFor="currency">Salary Currency</Label>
                    <p className="text-red-600 font-bold">*</p>
                  </div>
                  <Select
                  name={"salaryCurrency"}
                  onValueChange={(e: any) => {
                    setFormData((prevData: any) => ({
                      ...prevData,
                      salaryCurrency: e,
                    }));
                  }}
                  value={formData?.salaryCurrency}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue  placeholder="Select">{formData?.salaryCurrency}</SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        {salaryCurrencies?.length > 0 &&
                          salaryCurrencies?.map((el: any, index: any) => {
                            return (
                              <>
                                <SelectItem value={el} key={`index of ${index}`}>{el}</SelectItem>
                              </>
                            );
                          })}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <p className="text-red-500 text-sm">
                    {errors?.salaryCurrency}
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
