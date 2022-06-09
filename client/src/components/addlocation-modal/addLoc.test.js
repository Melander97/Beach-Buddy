import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Router } from "react-router-dom";
import renderer from "react-test-renderer";
import AddLocationModal from "./AddLocationModal";

test("Form should have a header", () => {
  const component = renderer.create(<AddLocationModal />).toJSON();
  const header = screen.queryByTestId("form-header");
  expect(header).toBeDefined();
});
