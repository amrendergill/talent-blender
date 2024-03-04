"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { validationSchema } from "@/validations/userSchema";
import Link from "next/link";

export default function Signup() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({ email: "", password: "" });
  const router = useRouter();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("formData", formData);
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      router.push("/");
    } catch (ValidationError: any) {
      const newErrors: any = {};
      ValidationError.inner.forEach((error: any) => {
        newErrors[error.path] = error.message;
      });
      setErrors(newErrors);
    }
  };
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <h1 className="text-[32px] pb-[24px]">
        Make the most of your professional life
      </h1>
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle>Sign up</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-3">
            <div>
              <div className="flex items-center gap-1">
                <Label htmlFor="email">Email or phone number</Label>
                <p className="text-red-600 font-bold">*</p>
              </div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    email: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.email}</p>
            </div>
            <div>
            <div className="flex items-center gap-1">

              <Label htmlFor="password">Password (6+ characters)</Label>
              <p className="text-red-600 font-bold">*</p>
              </div>
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e: any) =>
                  setFormData((prevData: any) => ({
                    ...prevData,
                    password: e.target.value,
                  }))
                }
              />
              <p className="text-red-500 text-sm">{errors.password}</p>
            </div>
          </div>
          <div className="flex flex-wrap my-4 gap-2">
            <div className="text-xs text-[rgba(0,0,0,0.9)]">
              By clicking Agree & Join, you agree to the CandidateHub{" "}
              <div>
                <a href="#" className="text-[#0a66c2]">
                  User Agreement,
                </a>{" "}
                <a href="#" className="text-[#0a66c2]">
                  Privacy Policy,
                </a>{" "}
                and{" "}
                <a href="#" className="text-[#0a66c2]">
                  Cookie Policy
                </a>
                .
              </div>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="w-full rounded-full bg-[#0a66c2] py-6"
            >
              Agree & Join
            </Button>
          </div>
          <div className="flex justify-between items-center gap-2 my-5">
            <div className="h-0 w-full border-t"></div>
            <p className="text-sm text-[rgba(0,0,0,0.6)]">or</p>
            <div className="h-0 w-full  border-t"></div>
          </div>

          <div className="flex flex-col gap-3">
            <Button
              variant={"outline"}
              className="w-full rounded-full text-[#3c4043] flex items-center justify-center gap-2"
            >
              <div>
                <Image
                  src={"../../../../svg/google.svg"}
                  alt="google icon"
                  height={18}
                  width={18}
                  priority
                />
              </div>
              Continue with Google
            </Button>
          </div>
          <div className="flex text-base items-center justify-center gap-2 my-5 pt-6">
            <p className="">Already on CandidateHub? </p>
            <Link href="/auth/signin" className="text-[#0a66c2]">
              Sign in
            </Link>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}
