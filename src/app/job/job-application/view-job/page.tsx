import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

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
                <Button variant={'outline'}>Edit Candidate Details</Button>
              </div>
          </div>
        </div>
      </main>
    </>
  );
}
