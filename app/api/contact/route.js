import { NextResponse } from "next/server";

export async function POST(request) {
  const body = await request.json();
  if (!body.name || !body.email || !body.message) {
    return NextResponse.json({ message: "Please complete all fields." }, { status: 400 });
  }
  console.log("Contact message:", body);
  return NextResponse.json({ message: "Message received — thank you!" });
}
