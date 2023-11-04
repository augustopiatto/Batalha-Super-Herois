import { test, expect, describe } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { HeroesContext } from "@/contexts/HeroesContext";
import { BattleContext } from "@/contexts/BattleContext";
import Deck from "../Deck";
import { fakeDeck } from "@/helpers/apimock/fakeDeck";
import CardInterface from "@/interfaces/CardInterface";

describe("Deck.tsx", () => {
  function renderDeck(fakeDeck: CardInterface[]) {
    const filteredDeck = fakeDeck;
    const selectedHeroesIds: number[] = [];

    return render(
      <HeroesContext.Provider value={{ filteredDeck }}>
        <BattleContext.Provider value={{ selectedHeroesIds }}>
          <Deck />
        </BattleContext.Provider>
      </HeroesContext.Provider>
    );
  }

  test("Componente sendo montado", () => {
    renderDeck(fakeDeck);
    const supermanCard = screen.getByText(/Superman/i);
    const gambitCard = screen.getByText(/Gambit/i);

    expect(supermanCard).toBeDefined();
    expect(gambitCard).toBeDefined();
  });
});
