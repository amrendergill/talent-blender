import Link from "next/link";

export default function FollowedHashTags({ title }: any) {
  return (
    <>
      <div>
        <div className="flex items-center justify-between mt-5 ">
          <Link href={"/"}>
            <p className="text-sm text-[#0a66c2] font-semibold hover:text-[#0a66c2] hover:underline hover:cursor-pointer">{title}</p>
          </Link>
        </div>
      </div>
    </>
  );
}
