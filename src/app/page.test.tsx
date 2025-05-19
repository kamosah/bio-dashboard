/**
 * @jest-environment jsdom
 */

import { render, screen } from "@testing-library/react";
import Page from "./page";
import { mockExperiments } from "../lib/mockData";

jest.mock("@/lib/apiClient", () => ({
  getExperiments: jest.fn(),
}));
import { getExperiments } from "@/lib/apiClient";

describe("ExperimentPage", () => {
  it("renders the main heading for Protein Folding Experiments", () => {
    render(<Page />);
    expect(screen.getByText("Protein Folding Experiments")).toBeInTheDocument();
  });

  it("renders the placeholder", async () => {
    (getExperiments as jest.Mock).mockResolvedValueOnce([]);
    render(<Page />);
    expect(
      await screen.findByText(/No experiments found/i)
    ).toBeInTheDocument();
  });

  it("renders the experiments", async () => {
    (getExperiments as jest.Mock).mockResolvedValueOnce([...mockExperiments]);
    render(<Page />);
    expect(
      await screen.findByText("CRISPR-Cas9 Protein Folding Analysis")
    ).toBeInTheDocument();
    expect(screen.queryByText(/No experiments found/i)).not.toBeInTheDocument();
  });
});
