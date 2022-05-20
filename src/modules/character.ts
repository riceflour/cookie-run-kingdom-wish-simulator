interface AllCharacters {
    [index: number]: Character
}

interface Character {
    name: string
    type: CharacterType
    imagePath: string
    probability: CharacterRarity | number
    rarity: CharacterRarity
}

enum CharacterType {
    Ambush,
    Bomber,
    Charge,
    Defense,
    Healing,
    Magic,
    Ranged,
    Support
}

enum CharacterRarity {
    Common = 0.4197,
    Rare = 0.3766,
    Epic = 0.1929,
    Legendary = 0.0036,
    Ancient = 0.0072
}

const charactersList: AllCharacters = [
    {
        name: "Sea Fairy Soulstone",
        imagePath: "",
        type: CharacterType.Bomber,
        probability: CharacterRarity.Legendary,
        rarity: CharacterRarity.Legendary
    }
]
