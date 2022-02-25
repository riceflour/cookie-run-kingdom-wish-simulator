import type { Rarity } from "./Rarity";

export interface RarityChances {
  rarity: Rarity | null;
  cookie: number;
  soulstone: number;
}
