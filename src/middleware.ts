import { NextResponse } from "next/server";

export default function middleware(req:any) {
  let loggedin = req.cookies.get("token");
  const { pathname } = req.nextUrl;
    console.log("loggedin", loggedin,pathname);
  if (loggedin && pathname === "/auth/recruiter-signin") {
    return NextResponse.redirect(new URL("/", req.url));
  }

  if (!loggedin && pathname !== "/auth/recruiter-signin") {
    return NextResponse.redirect(new URL("/auth/recruiter-signin", req.url));
  }
}

export const config = {
  matcher: ["/((?!api|static|.*\\..*|_next).*)"],
};
