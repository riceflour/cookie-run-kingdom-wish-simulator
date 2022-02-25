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

// I'm not sure if an interface or a class would b better hm
// u can put methods in classes tho, as well as instantiate them
// methods???
// like functions that are apart of the class
// i don't think it would b rlly needed, cos it's only storing data
//oo ok if i start uh ig making an object would i start w const 
// const is kinda meant for things with literal values that don't change.
// objects technically don't hav changing literal values, so ye it's probs the safest?
// but most people just use `let` nowadays for most things. (u don't need to use let or const or var within the object thoo)
// umm also, how many rarity types are there
// 5 types
// oki, i'll take a look at the wiki
// oh wait just realised need to add rarity as one o.0
// do cookies hav special rarities by themselves?
// or is it just based on rarity?
// just based on rarity, unless theyre the main event banner
// ah oki
// o wait what if theres another probability after rarity is decided cause soulstones
// its probs a good idea to have like a probability variable AND a rarity one, so u can move them independent of each other, but use the rarity as a reference for the base.
// ahh ok does it matter if i make the probabilities have alot of decimal points (so its accurate) or should i round them 
// i think is oki to have them however, it's like a pretty small difference in chance ig
// ye true but i need to make it super accurate so michelle doesnt complain about her bad luck later on :D
// o oki lol
// wait im tripping they dont add up to 1
// ok screw accuracy im just gonna round ._.
// o oki
// um how does the randomization work when it doesn't add up to 100 percent?
// o right well it adds up to 1 now
// o oki
// how abt when like certain characters hav higher chance cos banners
// i think all the other chars of that rarity has lowered odds... im checking rn
// o oki
// just checked yup thats the case
// ah oki
// that should b fine then
// neat 
// wait what's the point of defining the types
// so u can plan out how the data will be stored, as well as have vscode tell u when something is wrong.
// oo ok 
// for example when u type in the array, u'll get autocomplete suggestions on what they require. It'll also complain if something is missing.
// why is the rarity epic but the probability is legendary huhh
// oops
// is it possible to just make more rarities for the soulstones i kinda forgot what u said earlier boout it 
//ooo wait nvm nvmmm
// yeye, u can make more rarities
// okie nice time for more probabilities
// its probs a good idea so write a scraper for the whole wiki lol, cos then u won't hav to manually type out most of the info yourself.
// yeaaa :((