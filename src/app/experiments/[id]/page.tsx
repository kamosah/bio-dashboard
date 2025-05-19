// src/app/experiments/[id]/page.tsx - Experiment detail page

import Link from "next/link";
import { Suspense } from "react";
import { getExperimentById } from "@/lib/apiClient";
import ExperimentDetail from "@/components/Experiment/ExperimentDetail";

export default async function ExperimentPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const experimentData = await getExperimentById(id);

  return (
    <div className="experiment-page">
      <Link
        href="/"
        className="mb-4 flex items-center text-blue-600 hover:text-blue-800"
      >
        <span>← Back to Dashboard</span>
      </Link>

      <Suspense
        fallback={
          <div className="text-center py-10">Loading experiment details...</div>
        }
      >
        <ExperimentDetail experiment={experimentData} />
      </Suspense>
    </div>
  );
}
