import UserRightSidebar from "@/components/UserRightSidebar";



export default function Layout({ children }:any) {
  return (
    <>
      <div className="flex gap-x-4 mt-4">
        <main className="w-full flex flex-col gap-4 ">{children}</main>
        <aside className="w-[375px] min-w-[375px] max-w-[375px]">
          <UserRightSidebar />
        </aside>
      </div>
    </>
  );
}