"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { profileValidationSchema } from "@/validations/userSchema";
const educationTableHeader = [
  {
    header: "Institution",
  },
  {
    header: "Board",
  },
  {
    header: "Degree",
  },
  {
    header: "Stream",
  },
  {
    header: "State",
  },
  {
    header: "City",
  },
  {
    header: "Start Date",
  },
  {
    header: "End Date",
  },
  {
    header: "Presently Studying",
  },
  {
    header: "Actions",
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("basic-details");
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const status: any = params.get("status");
  const router = useRouter();

  useEffect(() => {
    handleTab(status);
  }, [status]);
  const handleTab = (tabName: any) => {
    setActiveTab(tabName);
    router.push(`/profile?status=${tabName}`);
  };

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
  return (
    <main className="bg-white ">
      <div className="py-4 px-5">
        <div className="flex justify-between items-center my-5">
          <div className="">Update Profile</div>
          <Button className="" variant={"outline"}>
            Change Password
          </Button>
        </div>
        <div>
          <div className="flex items-center gap-4">
            <Button
              onClick={() => handleTab("basic-details")}
              className={`bg-[#f5f5f5] text-xs rounded-[3px] ${
                activeTab === "basic-details" && "bg-white border-[#0a66c2]"
              }`}
              variant={"outline"}
            >
              Basic Details
            </Button>
            <Button
              onClick={() => handleTab("resume")}
              className={`bg-[#f5f5f5] text-xs rounded-[3px] ${
                activeTab === "resume" && "bg-white border-[#0a66c2]"
              }`}
              variant={"outline"}
            >
              Resume
            </Button>
            <Button
              onClick={() => handleTab("qualifications")}
              className={`bg-[#f5f5f5] text-xs rounded-[3px] ${
                activeTab === "qualifications" && "bg-white border-[#0a66c2]"
              }`}
              variant={"outline"}
            >
              Qualifications
            </Button>
            <Button
              onClick={() => handleTab("documentation")}
              className={`bg-[#f5f5f5] text-xs rounded-[3px] ${
                activeTab === "documentation" && "bg-white border-[#0a66c2]"
              }`}
              variant={"outline"}
            >
              Documentation
            </Button>
          </div>
          {activeTab === "basic-details" && (
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
                <div className="my-6 flex items-center justify-between">
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
                <div className="my-6 flex items-center gap-4">
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
                </div>
                <div className="my-6 flex items-center gap-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
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
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
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
                  <div className="grid w-full max-w-sm items-center gap-1.5">
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
                  </div>
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
                </div>
                <div className="my-6">
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
            </div>
          )}
          {activeTab === "resume" && (
            <div className="my-6">
              <div className="flex w-full max-w-full items-center justify-between">
                <Label htmlFor="picture" className="flex flex-none">
                  File Name:
                </Label>
                <Input id="picture" type="file" className="w-fit" />
              </div>
            </div>
          )}

          {activeTab === "qualifications" && (
            <div>
              {/* Education Field */}

              <div className="my-6">
                <div className="flex items-end justify-between">
                  <p className="text-xs font-semibold text-[#383838] flex align-bottom">
                    Education
                  </p>

                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {}}
                        className={` text-xs rounded-[3px] bg-[#0a66c2] text-white`}
                        variant={"outline"}
                      >
                        New
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[800px]">
                      <DialogHeader>
                        <DialogTitle>Add Education</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 justify-between gap-y-6 gap-x-4  py-4">
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="institution">Institution</Label>
                          <Input
                            type="text"
                            id="institution"
                            placeholder="Enter Institution"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="board">Board</Label>
                          <Input
                            type="text"
                            id="board"
                            placeholder="Enter Board"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="degree">Degree</Label>
                          <Input
                            type="text"
                            id="degree"
                            placeholder="Enter Degree"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="stream">Stream</Label>
                          <Input
                            type="text"
                            id="stream"
                            placeholder="Enter Stream"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="state">State</Label>
                          <Input
                            type="text"
                            id="state"
                            placeholder="Enter State"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="city">City</Label>
                          <Input
                            type="text"
                            id="city"
                            placeholder="Enter City"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="startDate">Start Date</Label>
                          <Input type="date" id="startDate" placeholder="" />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="endDate">End Date</Label>
                          <Input type="date" id="endDate" placeholder="" />
                        </div>
                      </div>
                      <DialogFooter>
                        <div className="flex w-full justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Accept terms and conditions
                            </label>
                          </div>
                          <Button
                            type="submit"
                            className="bg-[#0a66c2] text-white text-xs "
                          >
                            Save
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>
                <div className="my-6">
                  <Table>
                    <TableHeader className="bg-[#f8f8f8]">
                      <TableRow>
                        {educationTableHeader?.map((el, index) => {
                          return (
                            <>
                              <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                                {el?.header}
                              </TableHead>
                            </>
                          );
                        })}
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Employment History Field */}
              <div className="my-6">
                <div className="flex items-end justify-between ">
                  <p className="text-xs font-semibold text-[#383838] flex align-bottom">
                    Employment History
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {}}
                        className={` text-xs rounded-[3px] bg-[#0a66c2] text-white`}
                        variant={"outline"}
                      >
                        New
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[700px]">
                      <DialogHeader>
                        <DialogTitle>Add Employment</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 justify-between gap-x-4 pt-4">
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="organization">Organization</Label>
                          <Input
                            type="text"
                            id="organization"
                            placeholder="Enter Organization"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="designation">Designation</Label>
                          <Input
                            type="text"
                            id="designation"
                            placeholder="Enter Designation"
                          />
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-6">
                        <div className="grid w-full max-w-full  items-center gap-1.5">
                          <Label htmlFor="roles">
                            Roles & Responsibilities
                          </Label>
                          <Textarea id="roles" className="h-72" />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 justify-between gap-x-4 gap-y-6 pt-4">
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="state">State</Label>
                          <Input
                            type="text"
                            id="state"
                            placeholder="Enter State"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="city">City</Label>
                          <Input
                            type="text"
                            id="city"
                            placeholder="Enter City"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="startDate">Start Date</Label>
                          <Input
                            type="date"
                            id="startDate"
                            placeholder="Enter Institution"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="endDate">End Date</Label>
                          <Input
                            type="date"
                            id="endDate"
                            placeholder="Enter Board"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <div className="flex w-full justify-between">
                          <div className="flex items-center space-x-2">
                            <Checkbox id="terms" />
                            <label
                              htmlFor="terms"
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                            >
                              Accept terms and conditions
                            </label>
                          </div>
                          <Button
                            type="submit"
                            className="bg-[#0a66c2] text-white text-xs "
                          >
                            Save
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="my-6">
                  <Table>
                    <TableHeader>
                      <TableRow className="bg-[#f8f8f8]">
                        <TableHead className="w-[210px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Organization
                        </TableHead>
                        <TableHead className="w-[210px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Designation
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          State
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          City
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Start Date
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          End Date
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Presently Working
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Role
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>

              {/* Certificates Field */}
              <div className="my-6">
                <div className="flex items-end justify-between ">
                  <p className="text-xs font-semibold text-[#383838] flex align-bottom">
                    Certificates
                  </p>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        onClick={() => {}}
                        className={` text-xs rounded-[3px] bg-[#0a66c2] text-white`}
                        variant={"outline"}
                      >
                        New
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[488px]">
                      <DialogHeader>
                        <DialogTitle>Add Certificate</DialogTitle>
                      </DialogHeader>
                      <div className="grid grid-cols-2 justify-between gap-x-4 pt-4">
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="institution">Organization</Label>
                          <Input
                            type="text"
                            id="institution"
                            placeholder="Enter Institution"
                          />
                        </div>
                        <div className="grid w-full max-w-sm  items-center gap-1.5">
                          <Label htmlFor="board">Issue Date</Label>
                          <Input
                            type="text"
                            id="board"
                            placeholder="Enter Board"
                          />
                        </div>
                      </div>
                      <div className="w-full flex flex-col gap-6">
                        <div className="grid w-full max-w-full  items-center gap-1.5">
                          <Label htmlFor="degree">Certificate Id</Label>
                          <Input
                            type="text"
                            id="degree"
                            placeholder="Enter Degree"
                          />
                        </div>
                        <div className="grid w-full max-w-full  items-center gap-1.5">
                          <Label htmlFor="stream">Certificate Title</Label>
                          <Input
                            type="text"
                            id="stream"
                            placeholder="Enter Stream"
                          />
                        </div>
                      </div>
                      <DialogFooter>
                        <div className="flex w-full justify-end">
                          <Button
                            type="submit"
                            className="bg-[#0a66c2] text-white text-xs "
                          >
                            Save
                          </Button>
                        </div>
                      </DialogFooter>
                    </DialogContent>
                  </Dialog>
                </div>

                <div className="my-6">
                  <Table>
                    {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
                    <TableHeader>
                      <TableRow className="bg-[#f8f8f8]">
                        <TableHead className="w-[310px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Title
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Issue Date
                        </TableHead>
                        <TableHead className="w-[310px] text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Organization
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Certificate ID
                        </TableHead>
                        <TableHead className="text-sm text-[#383838] font-semibold text-left px-[18px] my-3">
                          Actions
                        </TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      <TableRow>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                        <TableCell className="text-left"></TableCell>
                      </TableRow>
                    </TableBody>
                  </Table>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
