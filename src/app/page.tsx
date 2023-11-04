"use client";

import Content from "@/components/Content";
import Header from "@/components/Header";
import { HeroesStorage } from "@/contexts/HeroesContext";
import { BattleStorage } from "@/contexts/BattleContext";
import { WarningStorage } from "@/contexts/WarningContext";

export default function Home() {
  return (
    <main>
      <HeroesStorage>
        <BattleStorage>
          <WarningStorage>
            <Header />
            <Content />
          </WarningStorage>
        </BattleStorage>
      </HeroesStorage>
    </main>
  );
}
