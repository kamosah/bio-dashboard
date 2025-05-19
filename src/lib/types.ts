// src/lib/types.ts
export interface Experiment {
  id: string;
  title: string;
  proteinName: string;
  date: string;
  status: 'completed' | 'running' | 'queued';
  confidence: number | null;
}

export interface ExperimentData {
  timePoints: number[];
  energyValues: number[];
}

export interface ExperimentMetadata {
  proteinName: string;
  simulationType: string;
  temperature: number;
  duration: number;
  researcher: string;
  date: string;
  status: 'completed' | 'running' | 'queued';
}

export interface ExperimentDetail {
  id: string;
  title: string;
  data: ExperimentData;
  metadata: ExperimentMetadata;
}

export interface ChartData {
  labels: string[] | number[];
  values: number[];
}