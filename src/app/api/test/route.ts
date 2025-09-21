import { NextResponse } from "next/server";

export async function GET() {
  try {
    const message = {
      success: true,
      message: "VPS test successful! Server is running.",
      timestamp: new Date().toISOString(),
      server: "Next.js API Route",
    };

    return NextResponse.json(message);
  } catch {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
