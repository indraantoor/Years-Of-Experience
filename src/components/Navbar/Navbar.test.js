/**
 *  @jest-environment jsdom
 */
import React from "react";
import { render, screen, within } from "@testing-library/react";
import { Navbar } from ".";
import "@testing-library/jest-dom";
import { StaticRouter } from "react-router-dom/server";

test("displays logo title", () => {
  render(
    <StaticRouter>
      <Navbar />
    </StaticRouter>
  );

  const header = screen.getByRole("heading");
  expect(header).toBeInTheDocument();
  expect(header).toHaveTextContent("Years Of Experience");
});

test("navbar has 6 elements", () => {
  render(
    <StaticRouter>
      <Navbar />
    </StaticRouter>
  );

  const list = screen.getByRole("list");
  const { getAllByRole } = within(list);
  const items = getAllByRole("listitem");

  expect(Number(items.length - 1)).toEqual(6);
});
