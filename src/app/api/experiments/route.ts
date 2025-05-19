// src/app/api/experiments/route.ts - API endpoint for experiments list
import { NextResponse } from "next/server";
import { mockExperiments } from "@/lib/mockData";

export async function GET() {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  return NextResponse.json(mockExperiments);
}
