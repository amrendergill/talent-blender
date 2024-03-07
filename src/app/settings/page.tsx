"use client";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { companyProfileValidationSchema } from "@/validations/userSchema";
import Image from "next/image";
import { useState } from "react";
import { MdEdit } from "react-icons/md";

export default function Settings() {
  const [formData, setFormData] = useState({
    coverImage: "",
    companyName: "",
    website: "",
    tagline: "",
    logo: "",
    about: "",
    services: "",
    industry: "",
    headquarter: "",
    companySize: "",
    specialities: "",
  });

  const [errors, setErrors]: any = useState({});

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      await companyProfileValidationSchema.validate(formData, { abortEarly: false });
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
      <main className="bg-white relative">
        <h2 className="font-semibold text-xl p-5">Settings</h2>
        <div>
          <div className="mb-16">
            <div>
              <Image
                src={
                  "/images/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg"
                }
                alt="cover image"
                className="w-full"
                priority
                objectFit="contain"
                width={0}
                height={200}
                sizes="100%"
                style={{ width: "100%", height: "200px" }}
              />
            </div>
            <div className="flex justify-end">
            <p className="text-red-500 text-sm">{errors.coverImage}</p>

            </div>

            <div className="grid w-fit max-w-sm items-center gap-1.5 absolute top-20 p-2 rounded-full right-3 bg-slate-300">
              <Label htmlFor="coverImage">
                <MdEdit size={18} />
              </Label>
              <Input id="coverImage" type="file" className="hidden"  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      coverImage: e.target.value,
                    }))
                  }/>
            </div>
            <div className="absolute top-48 left-6">
              <Avatar className="h-36 w-36  border-4 rounded-full border-white">
                <AvatarImage
                  src={"/images/ken-cheung-0F2nvpob0_c-unsplash.jpg"}
                  alt="logo"
                />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>

            <div className="grid w-fit max-w-sm items-center gap-1.5 absolute top-[202px] p-2 left-32 rounded-full bg-slate-300">
              <Label htmlFor="picture">
                <MdEdit size={18} />
              </Label>
              <Input
                id="picture"
                type="file"
                className="hidden"
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    logo: e.target.value,
                  }))
                }
              />
            </div>
            <p className="text-red-500 text-sm">{errors.logo}</p>

          </div>
          <div className="p-5 flex flex-col gap-5">
            <div className="flex items-center w-full gap-5">
              <div className="grid w-full max-w-full items-center gap-1.5 ">
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
                      companyName: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.companyName}</p>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5 ">
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
                      website: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.website}</p>
              </div>
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5 ">
              <div className="flex items-center gap-1">
                <Label htmlFor="tagline">Tagline</Label>
                <p className="text-red-600 font-bold">*</p>
              </div>
              <Input
                type="text"
                id="tagline"
                placeholder="Tagline"
                value={formData?.tagline}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    tagline: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.tagline}</p>
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5 ">
              <div className="flex items-center gap-1">
                <Label htmlFor="about">About</Label>
                <p className="text-red-600 font-bold">*</p>
              </div>
              <Textarea
                id="about"
                placeholder="About"
                value={formData?.about}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    about: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.about}</p>
            </div>

            <div className="flex items-center gap-4">
              <div className="grid w-full max-w-full items-center gap-1.5 ">
                <div className="flex items-center gap-1">
                  <Label htmlFor="industry">Industry</Label>
                  <p className="text-red-600 font-bold">*</p>
                </div>
                <Input
                  type="text"
                  id="industry"
                  placeholder="Industry"
                  value={formData?.industry}
                  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      industry: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.industry}</p>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5 ">
                <div className="flex items-center gap-1">
                  <Label htmlFor="headquarter">Headquarter</Label>
                  <p className="text-red-600 font-bold">*</p>
                </div>
                <Input
                  type="text"
                  id="headquarter"
                  placeholder="Headquarter"
                  value={formData?.headquarter}
                  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      headquarter: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.headquarter}</p>
              </div>
              <div className="grid w-full max-w-full items-center gap-1.5 ">
                <div className="flex items-center gap-1">
                  <Label htmlFor="companySize">Company size</Label>
                  <p className="text-red-600 font-bold">*</p>
                </div>
                <Input
                  type="text"
                  id="companySize"
                  placeholder="Company Size"
                  value={formData?.companySize}
                  onChange={(e: any) =>
                    setFormData((prevData: any) => ({
                      ...prevData,
                      companySize: e.target.value,
                    }))
                  }
                />
                <p className="text-red-500 text-sm">{errors.companySize}</p>
              </div>
            </div>
            <div className="grid w-full max-w-full items-center gap-1.5 ">
              <div className="flex items-center gap-1">
                <Label htmlFor="specialities">Specialities</Label>
                <p className="text-red-600 font-bold">*</p>
              </div>
              <Textarea
                id="specialities"
                placeholder="Specialities"
                value={formData?.specialities}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    specialities: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.specialities}</p>
            </div>

            <div className="w-full flex items-center justify-end mt-5">
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
      </main>
    </>
  );
}
