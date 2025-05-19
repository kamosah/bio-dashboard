// src/app/api/experiment/[id]/route.ts - API endpoint for experiment details
import { NextResponse } from 'next/server';
import { mockExperimentDetails } from '@/lib/mockData';

export async function GET(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 700));
  
  const id = params.id;
  
  if (mockExperimentDetails[id]) {
    return NextResponse.json(mockExperimentDetails[id]);
  }
  
  return NextResponse.json(
    { error: 'Experiment not found' },
    { status: 404 }
  );
}
