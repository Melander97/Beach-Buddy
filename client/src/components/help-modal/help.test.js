import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter, Router } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { createMemoryHistory } from "history";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";

import Help from "./Help";

describe("HelpComponent", () => {
  test("should match snapshot", () => {
    const component = renderer
      .create(
        <MemoryRouter>
          <Help />
        </MemoryRouter>
      )
      .toJSON();

    expect(component).toMatchSnapshot();
  });
});
