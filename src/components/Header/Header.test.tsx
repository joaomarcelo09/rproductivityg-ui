import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Header } from "./Header";

describe("SimpleComponent", () => {
  it("renders", () => {
    render(<Header />);

    const textEvidence = screen.getByText("Olá, sou um header");
    expect(textEvidence).toBeInTheDocument();
  });
});
