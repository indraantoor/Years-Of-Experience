/**
 *  @jest-environment jsdom
 */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Footer } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";

test("navbar has 3 elements", () => {
  render(
    <StaticRouter>
      <Footer />
    </StaticRouter>
  );

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(Number(items.length)).toEqual(3);
});

test("copyright data is present", () => {
  render(
    <StaticRouter>
      <Footer />
    </StaticRouter>
  );

  const copyright = screen.getByTestId("copyright");

  expect(copyright).toBeInTheDocument();
});
