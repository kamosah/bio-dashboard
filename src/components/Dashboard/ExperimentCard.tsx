// src/components/Dashboard/ExperimentCard.tsx
"use client";

import Link from "next/link";
import { Experiment } from "@/lib/types";

export default function ExperimentCard({
  experiment,
}: {
  experiment: Experiment;
}) {
  const { id, title, proteinName, date, status, confidence } = experiment;

  return (
    <Link href={`/experiments/${id}`} className="block">
      <div className="border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer">
        <h3 className="font-bold text-lg">{title}</h3>
        <p className="text-sm text-gray-600">Protein: {proteinName}</p>
        <p className="text-sm text-gray-600">
          Date: {new Date(date).toLocaleDateString()}
        </p>
        <div className="flex justify-between items-center mt-2">
          <span
            className={`px-2 py-1 rounded-full text-xs ${
              status === "completed"
                ? "bg-green-100 text-green-800"
                : status === "running"
                ? "bg-blue-100 text-blue-800"
                : "bg-gray-100 text-gray-800"
            }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </span>
          <span className="font-medium">
            {confidence !== null ? `${confidence}% confidence` : "N/A"}
          </span>
        </div>
      </div>
    </Link>
  );
}
