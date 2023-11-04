import { test, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Filters from "../Filters.jsx";
import { beforeEach } from "node:test";
import { HeroesContext } from "@/contexts/HeroesContext.jsx";
import { fakeDeck } from "@/helpers/apimock/fakeDeck.jsx";
import CardInterface from "@/interfaces/CardInterface.jsx";

function renderFilters(deck: CardInterface[]) {
  return render(
    <HeroesContext.Provider value={{ deck }}>
      <Filters opened={true}></Filters>
    </HeroesContext.Provider>
  );
}

describe("Filters.tsx", () => {
  test("Componente sendo montado", () => {
    renderFilters(fakeDeck);
    expect(screen.getByText(/Aplicar/i)).toBeDefined();
  });

  // test("Filtro sendo aplicado", async () => {
  //   renderFilters(fakeDeck);
  //   const button = screen.getByText(/Aplicar/i);
  //   fireEvent.click(button);
  // });

  // test("Filtro sendo removido", async () => {
  //   renderFilters(fakeDeck);
  //   const button = screen.getByText(/Aplicar/i);
  //   fireEvent.click(button);
  //   fireEvent.click(button);
  // });
});
