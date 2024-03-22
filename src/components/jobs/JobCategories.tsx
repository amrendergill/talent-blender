import Image from "next/image"
export default function JobCategories ({src, name}:any) {
    return(
        <>
        <div className="flex justify-between items-center rounded-[5px] px-3 py-2 hover:bg-[#F9F9F9] cursor-pointer">
                  <div className="flex items-center gap-x-2">
                    <Image
                      src={src}
                      alt="Logo"
                      width={15}
                      height={15}
                      priority
                      className="object-fit"
                    />
                    <p className="text-xs">{name}</p>
                  </div>
                  <p className="text-xs">1234</p>
                </div>
        </>
    )
}