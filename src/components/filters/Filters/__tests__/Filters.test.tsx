import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
import Filters from "../Filters.jsx";

describe("Filters.tsx", () => {
  test("Componente sendo montado", () => {
    render(<Filters opened={true}></Filters>);
  });

  test("Filtro sendo aplicado", async () => {});

  test("Filtro sendo removido", async () => {});
});
