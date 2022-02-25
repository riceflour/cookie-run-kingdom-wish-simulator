import type { Rarity } from "./Rarity";
import type { CharacterPos } from "./CharacterPos";
import type { CharacterType } from "./CharacterType";

export interface Character {
  name: string;
  type: CharacterType | null;
  illustrationImgPath: string;
  soulstoneImgPath: string;
  rarity: Rarity | null;
  position: CharacterPos | null;
}
