import { Avatar, AvatarFallback, AvatarImage } from "../components/ui/avatar";

export default function Chat({ message, setMessage }: any) {
  const userData = [
    {
      avatar: "/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg",
      message: "hello!",
    },
    {
      avatar: "/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg",
      message: "How are you?",
    },
    {
      avatar: "/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg",
      message: "hello!",
    },
    {
      avatar: "/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg",
      message: "hello!",
    },
    {
      avatar: "/images/thomas-bennie-lxziZx-TfSo-unsplash.jpg",
      message: "hello!",
    },
  ];
  return (
    <>
      <div>
        <div className="flex flex-col gap-5">
          {userData?.map((el: any, index: any) => {
            return (
              <>
                <div className="flex items-center gap-3">
                  <div>
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={el?.avatar} alt="logo" />
                      <AvatarFallback>MD</AvatarFallback>
                    </Avatar>
                  </div>
                  <div className="bg-gray-200 px-3 py-3 rounded-full">
                    <p className="text-xs">{el?.message}</p>
                  </div>
                </div>
              </>
            );
          })}
          <div className="flex justify-end">
            <div className="flex items-center gap-3 flex-row-reverse">
              <div>
                <Avatar className="h-8 w-8">
                  <AvatarImage
                    src={"/images/joshua-hanson-e616t35Vbeg-unsplash.jpg"}
                    alt="logo"
                  />
                  <AvatarFallback>MD</AvatarFallback>
                </Avatar>
              </div>
              <div className="bg-gray-200 px-3 py-3 rounded-full">
                <p className="text-xs">{message}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
