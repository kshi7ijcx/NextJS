import { NextResponse } from "next/server";

export async function POST(req, res) {
  let {name, email, password } = await req.json();
  if (!name || !email || !password) {
    return NextResponse.json(
      { error: "all fields should be filled" },
      { status: 400 }
    );
  }
  console.log(name, email, password);
  return NextResponse.json({ res: "data sent successfully" });
}
