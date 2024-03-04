"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import Image from 'next/image'
import { profileValidationSchema } from "@/validations/userSchema";
export default function CreateCandidate () {
    const [formData, setFormData] = useState({
        fullName: "",
        email: "",
        mobile: "",
        dateOfBirth: "",
        gender: "",
        profileSummary: "",
        skills: "",
        workLink: "",
        socialUrl: "",
        currentSalary: "",
        salaryCurrency: "",
        expectedSalary: "",
        noticePeriod: "",
        currentCompany: "",
        yearsOfExperience: "",
        country: "",
        state: "",
        city: "",
        pinCode: "",
        address: "",
      });
      const [errors, setErrors]: any = useState({});

      const handleSubmit = async (e: any) => {
        e.preventDefault();
        console.log("formData", formData);
        try {
          await profileValidationSchema.validate(formData, { abortEarly: false });
          alert(formData);
        } catch (ValidationError: any) {
          const newErrors: any = {};
          ValidationError.inner.forEach((error: any) => {
            newErrors[error.path] = error.message;
          });
          setErrors(newErrors);
        }
      };
    return(
        <>
         <main className="p-24 bg-white">
        <div className="mx-[308px] ">
          <h2 className="font-medium text-xl">Personal Details</h2>

          <div>
              <div className="my-6 mx-2">
                <div className="flex items-center gap-20">
                  <div className="mx-3">
                    <div>
                      <Image
                        src={
                          "/images/blank-profile-picture-973460_960_720.webp"
                        }
                        alt={"upload profile"}
                        height={98}
                        width={98}
                        className="rounded-full"
                        priority
                      />
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <Button className="text-xs w-10 h-6" variant={"outline"}>
                        Edit
                      </Button>
                      <Button className="text-xs w-14 h-6" variant={"outline"}>
                        Delete
                      </Button>
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-5">
                    <div className="grid w-full max-w-sm items-center gap-1.5 ">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="fullName">Full Name</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Input
                        type="text"
                        id="fullName"
                        placeholder="Full Name"
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
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="email">Email</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Input
                        type="email"
                        id="email"
                        placeholder="Email"
                        onChange={(e: any) =>
                          setFormData((prevData: any) => ({
                            ...prevData,
                            email: e.target.value,
                          }))
                        }
                      />
                      <p className="text-red-500 text-sm">{errors.email}</p>
                    </div>
                  </div>
                </div>
                <div className="my-6 flex items-center gap-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="mobile">Mobile</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="tel"
                      id="mobile"
                      placeholder="Mobile"
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          mobile: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.mobile}</p>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="mobile">Date of Birth</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="date"
                      id="mobile"
                      placeholder=""
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          dateOfBirth: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.dateOfBirth}</p>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="gender">Gender</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="text"
                      id="gender"
                      placeholder=""
                      value={formData?.gender}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          gender: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.gender}</p>
                  </div>
                </div>
                <div className="flex flex-col gap-6 w-full">
                  <div className="grid w-full gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="message">Profile Summary</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Textarea
                      id="message"
                      value={formData?.profileSummary}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          profileSummary: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">
                      {errors.profileSummary}
                    </p>
                  </div>
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="skills">Skills</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="text"
                      id="skills"
                      placeholder=""
                      value={formData?.skills}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          skills: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.skills}</p>
                  </div>
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <Label htmlFor="workLink">Work link/Portfolio</Label>
                    <Input
                      type="text"
                      id="workLink"
                      placeholder=""
                      value={formData?.workLink}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          workLink: e.target.value,
                        }))
                      }
                    />
                  </div>
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="profileURL">Social Profile URL</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="text"
                      id="profileURL"
                      placeholder=""
                      value={formData?.socialUrl}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          socialUrl: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.socialUrl}</p>
                  </div>
                </div>
                {/* <div className="my-6 flex items-center gap-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="currentSalary">Current Salary</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="number"
                      id="currentSalary"
                      placeholder=""
                      value={formData?.currentSalary}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          currentSalary: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">
                      {errors.currentSalary}
                    </p>
                  </div>
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
                    <p className="text-red-500 text-sm">{errors.salaryCurrency}</p>
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="expectedSalary">Expected Salary</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="number"
                      id="expectedSalary"
                      placeholder=""
                      value={formData?.expectedSalary}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          expectedSalary: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">
                      {errors.expectedSalary}
                    </p>
                  </div>
                </div> */}
                <div className="my-6 flex items-center gap-4">
                  {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="currentSalary">
                        Notice Period (Days)
                      </Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="number"
                      id="currentSalary"
                      placeholder=""
                      value={formData?.noticePeriod}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          noticePeriod: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">
                      {errors.noticePeriod}
                    </p>
                  </div> */}
                  <div className="grid w-full max-w-full items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="currency">Current Company</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="text"
                      id="currency"
                      placeholder=""
                      value={formData?.currentCompany}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          currentCompany: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">
                      {errors.currentCompany}
                    </p>
                  </div>
                  {/* <div className="grid w-full max-w-sm items-center gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="expectedSalary">
                        Total Experience(Years)
                      </Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Input
                      type="number"
                      id="expectedSalary"
                      placeholder=""
                      value={formData?.yearsOfExperience}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          yearsOfExperience: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">
                      {errors.yearsOfExperience}
                    </p>
                  </div> */}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="flex-none flex">Current Location</p>
                    <div className="w-full h-0 border-t"></div>
                  </div>
                  <div className="my-6 flex items-center justify-between">
                    <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="currentSalary">Country</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Select>
                        <SelectTrigger className="w-100">
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
                    </div>
                    <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="currency">State</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Select>
                        <SelectTrigger className="w-100">
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
                    </div>
                    <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="city">City</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Input
                        type="text"
                        id="city"
                        placeholder=""
                        value={formData?.city}
                        onChange={(e: any) =>
                          setFormData((prevData: any) => ({
                            ...prevData,
                            city: e.target.value,
                          }))
                        }
                      />
                      <p className="text-red-500 text-sm">{errors.city}</p>
                    </div>
                    <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="pinCode">Pincode</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Input
                        type="number"
                        id="pinCode"
                        placeholder=""
                        value={formData?.pinCode}
                        onChange={(e: any) =>
                          setFormData((prevData: any) => ({
                            ...prevData,
                            pinCode: e.target.value,
                          }))
                        }
                      />
                      <p className="text-red-500 text-sm">{errors.pinCode}</p>
                    </div>
                  </div>
                  {/* <div className="grid w-full gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="address">Address</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Textarea
                      id="address"
                      value={formData?.address}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          address: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  </div> */}
                </div>
                {/* <div className="my-6">
                  <div className="flex items-center gap-2">
                    <p className="flex-none flex">Prefered Location</p>
                    <div className="w-full h-0 border-t"></div>
                  </div>
                  <div className="my-6 flex items-center justify-between">
                    <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="currentSalary">Country</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Select>
                        <SelectTrigger className="w-100">
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
                    </div>
                    <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="currency">State</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Select>
                        <SelectTrigger className="w-100">
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
                    </div>
                    <div className="grid w-[210px] max-w-[210px]  items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="city">City</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Input
                        type="text"
                        id="city"
                        placeholder=""
                        value={formData?.city}
                        onChange={(e: any) =>
                          setFormData((prevData: any) => ({
                            ...prevData,
                            city: e.target.value,
                          }))
                        }
                      />
                      <p className="text-red-500 text-sm">{errors.city}</p>
                    </div>
                    <div className="grid w-[210px] max-w-[210px] items-center gap-1.5">
                      <div className="flex items-center gap-1">
                        <Label htmlFor="pinCode">Pincode</Label>
                        <p className="text-red-600 font-bold">*</p>
                      </div>
                      <Input
                        type="number"
                        id="pinCode"
                        placeholder=""
                        value={formData?.pinCode}
                        onChange={(e: any) =>
                          setFormData((prevData: any) => ({
                            ...prevData,
                            pinCode: e.target.value,
                          }))
                        }
                      />
                      <p className="text-red-500 text-sm">{errors.pinCode}</p>
                    </div>
                  </div>
                  <div className="grid w-full gap-1.5">
                    <div className="flex items-center gap-1">
                      <Label htmlFor="address">Address</Label>
                      <p className="text-red-600 font-bold">*</p>
                    </div>
                    <Textarea
                      id="address"
                      value={formData?.address}
                      onChange={(e: any) =>
                        setFormData((prevData: any) => ({
                          ...prevData,
                          address: e.target.value,
                        }))
                      }
                    />
                    <p className="text-red-500 text-sm">{errors.address}</p>
                  </div>
                </div> */}
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
            </div>
          

          
        </div>
      </main>
        </>
    )
}