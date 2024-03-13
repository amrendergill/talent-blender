import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function ViewJob() {
  return (
    <>
      <main className="bg-white">
        <div className="p-5">
          <div className="flex w-full gap-7 items-center">
            <div>
              <Avatar className={`h-20 w-20`}>
                <AvatarImage
                  src={
                    "/images/fermin-rodriguez-penelas-b8kEUZqMNoQ-unsplash.jpg"
                  }
                  alt="@shadcn"
                />
                <AvatarFallback>MD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex justify-between w-full">
              <div className="flex flex-col gap-6">
                <div>
                  <p className="text-sm text-gray-500 font-semibold">
                    Application ID
                  </p>
                  <p className="text-sm font-medium mt-2">12345</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">
                    Hiring Executive
                  </p>
                  <p className="text-sm font-medium mt-2">-</p>
                </div>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Job Title</p>
                <p className="text-sm font-medium mt-2">HR</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">Status</p>
                <p className="text-sm font-medium mt-2">Applied</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Applied On
                </p>
                <p className="text-sm font-medium mt-2">12-03-24</p>
              </div>
            </div>
          </div>
          <div className="py-6 flex justify-between">
            <div>
              <p className="text-sm text-gray-500 font-semibold">Full Name</p>
              <p className="text-sm font-medium mt-2">Cherry Robert</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">Email</p>
              <p className="text-sm font-medium mt-2">cherry@gmail.com</p>
            </div>
            <div>
              <Button variant={"outline"}>Edit Candidate Details</Button>
            </div>
          </div>
          <div className="py-6 flex justify-between">
            <div>
              <p className="text-sm text-gray-500 font-semibold">Mobile</p>
              <p className="text-sm font-medium mt-2">1234567890</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">
                Date of Birth
              </p>
              <p className="text-sm font-medium mt-2">10-12-1994</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">Gender</p>
              <p className="text-sm font-medium mt-2">Female</p>
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 font-semibold">About Me</p>
            <p className="text-sm font-medium mt-2">-</p>
          </div>
          <div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">Skills</p>
              <p className="text-sm font-medium mt-2">-</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">Tags</p>
              <p className="text-sm font-medium mt-2">-</p>
            </div>
            <div>
              <p className="text-sm text-gray-500 font-semibold">
                Work link/Portfolio
              </p>
              <p className="text-sm font-medium mt-2">-</p>
            </div>
            <div className="py-6 flex gap-80">
              <div>
                <p className="text-sm text-gray-500 font-semibold">Source</p>
                <p className="text-sm font-medium mt-2">-</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Current Salary
                </p>
                <p className="text-sm font-medium mt-2">-</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Expected Salary
                </p>
                <p className="text-sm font-medium mt-2">-</p>
              </div>
            </div>
            <div className="py-6 flex gap-80">
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Total Experience (Years)
                </p>
                <p className="text-sm font-medium mt-2">0</p>
              </div>
              <div>
                <p className="text-sm text-gray-500 font-semibold">
                  Notice Period (Days)
                </p>
                <p className="text-sm font-medium mt-2">0</p>
              </div>
            </div>
            <div className="mt-8 w-full">
              <div className="flex items-center w-full gap-2">
                <p className="nowrap flex-none text-sm">Prefered Location</p>
                <div className="border-t w-full"></div>
              </div>
              <div className="py-6 flex gap-80">
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Country</p>
                  <p className="text-sm font-medium mt-2">-</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">State</p>
                  <p className="text-sm font-medium mt-2">-</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">City</p>
                  <p className="text-sm font-medium mt-2">-</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-semibold">Pincode</p>
                  <p className="text-sm font-medium mt-2">-</p>
                </div>
              </div>
              <div className="my-8">
                <div className="flex items-center w-full gap-2">
                  <p className="nowrap flex-none text-sm">Current Location</p>
                  <div className="border-t w-full"></div>
                </div>
                <div className="py-6 flex gap-80">
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      Country
                    </p>
                    <p className="text-sm font-medium mt-2">-</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">State</p>
                    <p className="text-sm font-medium mt-2">-</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">City</p>
                    <p className="text-sm font-medium mt-2">-</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 font-semibold">
                      Pincode
                    </p>
                    <p className="text-sm font-medium mt-2">-</p>
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Work Experience</p>
                  <div className="py-6 flex gap-80">
                    <Table>
                      <TableCaption>
                        A list of your recent work experiences.
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            Organisation
                          </TableHead>
                          <TableHead>Job Title</TableHead>
                          <TableHead className="">Designation</TableHead>
                          <TableHead className="">City</TableHead>
                          <TableHead className="">State</TableHead>
                          <TableHead className="">Start Date</TableHead>
                          <TableHead className="">End Date</TableHead>
                          <TableHead className="">Presently Working</TableHead>
                          <TableHead className="">Role</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key={""}>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Education Details </p>
                  <div className="py-6 flex gap-80">
                    <Table>
                      <TableCaption>
                        A list of your recent education details.
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">
                            Institution
                          </TableHead>
                          <TableHead>Board</TableHead>
                          <TableHead className="">Degree</TableHead>
                          <TableHead className="">Stream</TableHead>
                          <TableHead className="">State</TableHead>
                          <TableHead className="">City</TableHead>
                          <TableHead className="">Start Date</TableHead>
                          <TableHead className="">End Date</TableHead>
                          <TableHead className="">Presently Studying</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key={""}>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Certificates</p>
                  <div className="py-6 flex gap-80">
                    <Table>
                      <TableCaption>
                        A list of your recent certificates.
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Title</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead className="">Organisation</TableHead>
                          <TableHead className="">Certificate ID</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key={""}>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Awards</p>
                  <div className="py-6 flex gap-80">
                    <Table>
                      <TableCaption>
                        A list of your recent awards.
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Award</TableHead>
                          <TableHead>Issue Date</TableHead>
                          <TableHead className="">Organisation</TableHead>
                          <TableHead className="">Award ID</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key={""}>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Volutary Services</p>
                  <div className="py-6 flex gap-80">
                    <Table>
                      <TableCaption>
                        A list of your recent volantary services.
                      </TableCaption>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="w-[100px]">Name</TableHead>
                          <TableHead>Start Date</TableHead>
                          <TableHead className="">End date</TableHead>
                          <TableHead className="">Description</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        <TableRow key={""}>
                          <TableCell className="font-medium"></TableCell>
                          <TableCell></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                          <TableCell className=""></TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Personal Information</p>
                  <div className="py-6 flex gap-80"></div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Screening Questions</p>
                  <div className="py-6 flex gap-80"></div>
                </div>
                <div className="my-6">
                  <p className="text-sm">Cover Letter</p>
                  <div className="py-6 flex gap-80"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
