// src/app/page.tsx - Dashboard page
import { Suspense } from "react";
import ExperimentList from "@/components/Dashboard/ExperimentList";
import { getExperiments } from "@/lib/apiClient";

export default async function DashboardPage() {
  // In App Router, this becomes a Server Component by default
  const experiments = await getExperiments();

  return (
    <div className="dashboard-container p-6">
      <h1 className="text-3xl font-bold mb-6">Protein Folding Experiments</h1>
      <Suspense
        fallback={
          <div className="text-center py-10">Loading experiments...</div>
        }
      >
        <ExperimentList experiments={experiments} />
      </Suspense>
    </div>
  );
}
