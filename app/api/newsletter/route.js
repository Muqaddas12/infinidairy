import { NextResponse } from "next/server";

export async function POST(request) {
  const { email } = await request.json();
  if (!email || !email.includes("@")) return NextResponse.json({ message: "Please enter a valid email." }, { status: 400 });
  console.log("Newsletter signup:", email);
  return NextResponse.json({ message: "Thanks — you're subscribed!" });
}
