import SettingsBar from "@/components/SettingsBar";


export default function Layout({ children }: any) {
  return (
    <>
      <div className="flex gap-x-4  divide-x">
        <aside className="w-[250px] min-w-[250px]  max-w-[250px]">
          <SettingsBar/>
        </aside>
        <main className="w-full flex flex-col gap-4 pl-4">{children}</main>
      </div>
    </>
  );
}
