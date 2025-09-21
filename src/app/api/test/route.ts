import { NextResponse } from "next/server";

export async function GET() {
  try {
    const message = {
      success: true,
      message: "VPS test successful! Server is running.",
      timestamp: new Date().toISOString(),
      server: "Next.js API Route",
      health: "healthy",
    };

    return NextResponse.json(message, { status: 200 });
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: "Server error",
        health: "unhealthy",
      },
      { status: 500 }
    );
  }
}
