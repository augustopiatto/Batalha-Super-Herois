"use client";

import Content from "@/components/Content";
import Header from "@/components/Header";
import { HeroesStorage } from "@/contexts/HeroesContext";
import { BattleStorage } from "@/contexts/BattleContext";

export default function Home() {
  return (
    <main>
      <HeroesStorage>
        <BattleStorage>
          <Header />
          <Content />
        </BattleStorage>
      </HeroesStorage>
    </main>
  );
}
