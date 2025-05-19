// src/lib/apiClient.ts
const BASE_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
export async function getExperiments() {
  const response = await fetch(`${BASE_URL}/api/experiments`);
  if (!response.ok) {
    throw new Error("Failed to fetch experiments");
  }
  return response.json();
}

export async function getExperimentById(id: string) {
  const response = await fetch(`${BASE_URL}/api/experiment/${id}`);
  if (!response.ok) {
    if (response.status === 404) {
      return null;
    }
    throw new Error("Failed to fetch experiment details");
  }
  return response.json();
}
