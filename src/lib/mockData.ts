// src/lib/mockData.ts
import { Experiment, ExperimentDetail } from './types';

export const mockExperiments: Experiment[] = [
  {
    id: '1',
    title: 'CRISPR-Cas9 Protein Folding Analysis',
    proteinName: 'Cas9',
    date: '2025-04-15T10:00:00Z',
    status: 'completed',
    confidence: 92,
  },
  {
    id: '2',
    title: 'Alpha-Synuclein Misfolding Simulation',
    proteinName: 'Alpha-Synuclein',
    date: '2025-05-01T14:30:00Z',
    status: 'running',
    confidence: 78,
  },
  {
    id: '3',
    title: 'Novel Antibody Structure Prediction',
    proteinName: 'mAb-2023',
    date: '2025-05-10T09:15:00Z',
    status: 'queued',
    confidence: null,
  },
  {
    id: '4',
    title: 'Insulin Receptor Binding Analysis',
    proteinName: 'IR-A',
    date: '2025-04-28T16:45:00Z',
    status: 'completed',
    confidence: 88,
  },
  {
    id: '5',
    title: 'Spike Protein Variant Comparison',
    proteinName: 'SARS-CoV-2 Spike',
    date: '2025-05-05T11:20:00Z',
    status: 'completed',
    confidence: 95,
  },
  {
    id: '6',
    title: 'ACE2 Binding Site Analysis',
    proteinName: 'ACE2',
    date: '2025-05-08T13:10:00Z',
    status: 'running',
    confidence: 65,
  },
];

export const mockExperimentDetails: Record<string, ExperimentDetail> = {
  '1': {
    id: '1',
    title: 'CRISPR-Cas9 Protein Folding Analysis',
    data: {
      timePoints: [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50],
      energyValues: [-120, -135, -142, -150, -155, -158, -160, -162, -163, -164, -165],
    },
    metadata: {
      proteinName: 'Cas9',
      simulationType: 'Molecular Dynamics',
      temperature: 310,
      duration: 50,
      researcher: 'Dr. Elena Rodriguez',
      date: '2025-04-15T10:00:00Z',
      status: 'completed',
    },
  },
  '2': {
    id: '2',
    title: 'Alpha-Synuclein Misfolding Simulation',
    data: {
      timePoints: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100],
      energyValues: [-50, -48, -45, -40, -35, -32, -30, -28, -27, -26, -25],
    },
    metadata: {
      proteinName: 'Alpha-Synuclein',
      simulationType: 'Coarse-Grained Modeling',
      temperature: 300,
      duration: 100,
      researcher: 'Dr. James Chen',
      date: '2025-05-01T14:30:00Z',
      status: 'running',
    },
  },
  // Other experiments can be added here
};