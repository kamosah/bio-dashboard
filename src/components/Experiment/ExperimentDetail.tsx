// src/components/Experiment/ExperimentDetail.tsx
"use client";

import { useState } from "react";
import VisualizationPanel from "./VisualizationPanel";
import MetadataPanel from "./MetadataPanel";
import { ExperimentDetail as ExperimentDetailType } from "@/lib/types";

// BUG: This component has rendering issues
export default function ExperimentDetail({
  experiment,
}: {
  experiment: ExperimentDetailType | null;
}) {
  // Bug: No proper handling of null experiment data
  // This will cause issues if experiment is null

  if (!experiment) {
    return (
      <div className="p-4 text-red-500">
        Error: Unable to load experiment details
      </div>
    );
  }

  return (
    <div className="experiment-detail">
      <h1 className="text-2xl font-bold mb-4">{experiment.title}</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VisualizationPanel data={experiment.data} />
        </div>
        <div className="lg:col-span-1">
          <MetadataPanel metadata={experiment.metadata} />
        </div>
      </div>
    </div>
  );
}
