"use client";

import Content from "@/components/Content";
import Header from "@/components/Header";
import { DeckStorage } from "@/contexts/DeckContext";

export default function Home() {
  return (
    <main>
      <DeckStorage>
        <Header />
        <Content />
      </DeckStorage>
    </main>
  );
}
