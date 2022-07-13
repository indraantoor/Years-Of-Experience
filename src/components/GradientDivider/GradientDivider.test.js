/**
 *  @jest-environment jsdom
 */
import React from "react";
import { getByTestId, render, screen, within } from "@testing-library/react";
import { GradientDivider } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";

test("displays logo title", () => {
  render(
    <StaticRouter>
      <GradientDivider />
    </StaticRouter>
  );

  const divider = screen.getByTestId("gradientDivider");
  expect(divider).toBeInTheDocument();
});
