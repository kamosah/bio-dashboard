// src/app/page.tsx - Dashboard page
import { Suspense, useEffect, useState } from "react";
import ExperimentList from "@/components/Dashboard/ExperimentList";
import { getExperiments } from "@/lib/apiClient";

export default function DashboardPage() {
  // In App Router, this becomes a Server Component by default
  const [experiments, setExperiments] = useState([]);

  useEffect(() => {
    async function fetchExperiments() {
      try {
        const response = await getExperiments();
        setExperiments(response);
      } catch (error) {
        console.error("Error fetching experiments:", error);
      }
    }
    fetchExperiments();
  }, []);

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
