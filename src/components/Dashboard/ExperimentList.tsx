// src/components/Dashboard/ExperimentList.tsx - Component with search bug
"use client";

import { useState, useEffect } from "react";
import ExperimentCard from "./ExperimentCard";
import SearchBar from "./SearchBar";
import { Experiment } from "@/lib/types";

// BUG: Search functionality doesn't work correctly
export default function ExperimentList({
  experiments,
}: {
  experiments: Experiment[];
}) {
  const [filteredExperiments, setFilteredExperiments] =
    useState<Experiment[]>(experiments);
  const [searchTerm, setSearchTerm] = useState("");

  // Bug: This implementation doesn't filter correctly
  useEffect(() => {
    // This doesn't handle case-insensitive search
    const filtered = experiments.filter(
      (exp) =>
        exp.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exp.proteinName.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredExperiments(filtered);
  }, [searchTerm, experiments]); // Bug: Missing dependency on experiments

  const handleSearch = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="experiment-list">
      <SearchBar onSearch={handleSearch} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {filteredExperiments.length > 0 ? (
          filteredExperiments.map((experiment) => (
            <ExperimentCard key={experiment.id} experiment={experiment} />
          ))
        ) : (
          <p className="col-span-3 text-center text-gray-500">
            No experiments found
          </p>
        )}
      </div>
    </div>
  );
}
