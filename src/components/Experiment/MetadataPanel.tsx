// src/components/Experiment/MetadataPanel.tsx
"use client";

import { ExperimentMetadata } from "@/lib/types";

export default function MetadataPanel({
  metadata,
}: {
  metadata: ExperimentMetadata;
}) {
  if (!metadata) return null;

  return (
    <div className="metadata-panel p-4 border rounded-lg">
      <h2 className="text-xl font-semibold mb-3">Experiment Details</h2>
      <div className="space-y-3">
        <div>
          <h3 className="text-sm font-medium text-gray-500">Protein</h3>
          <p>{metadata.proteinName}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Simulation Type</h3>
          <p>{metadata.simulationType}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Temperature</h3>
          <p>{metadata.temperature} K</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Duration</h3>
          <p>{metadata.duration} ns</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Created By</h3>
          <p>{metadata.researcher}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Date</h3>
          <p>{new Date(metadata.date).toLocaleDateString()}</p>
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-500">Status</h3>
          <p
            className={`${
              metadata.status === "completed"
                ? "text-green-600"
                : metadata.status === "running"
                ? "text-blue-600"
                : "text-gray-600"
            }`}
          >
            {metadata.status.charAt(0).toUpperCase() + metadata.status.slice(1)}
          </p>
        </div>
      </div>
    </div>
  );
}
