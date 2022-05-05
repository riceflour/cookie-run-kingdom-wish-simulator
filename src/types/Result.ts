import { Character } from '@/bindings/Character'

export class Result {
    soulstones: Character[] = [];
    cookies: Character[] = [];
}

export interface StoredResult {
    name: string,
    soulstones: number
}