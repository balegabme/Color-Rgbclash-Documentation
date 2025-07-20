export enum Chains {
  Sei = 1329,
  Camp = 123420001114,
  Monad = 10143,
}

export enum Contracts {
  Faucet = "Faucet",
  ColorNft = "ColorNft",
  ColorNftPouch = "ColorNftPouch",
  GroupGame = "GroupGame",
  ColorToken = "ColorToken",
  SingleGame = "SingleGame",
  SingleGameBubble = "SingleGameBubble",
}

// First number represents number of players
// Second number represents entry price, 100 being the default lowest
// this enables expanding with lower and higher price ranges without
// corrupting the already available variants
export enum MultiGameVariant {
  Default3100 = "default-3-100",
  Default6100 = "default-6-100",
  Default10100 = "default-10-100",
  Default3101 = "default-3-101",
  Default6101 = "default-6-101",
  Default10101 = "default-10-101",
  Default3102 = "default-3-102",
  Default6102 = "default-6-102",
  Default10102 = "default-10-102",
}

export enum SingleGameVariant {
  Arcade = "arcade",
  BubbleImage = "bubble-image",
}

export type GameVariant = SingleGameVariant | MultiGameVariant;

export type Hex = `0x${string}`;

export const contractAddresses: Partial<Record<Chains, Record<Contracts, Hex | Partial<Record<GameVariant, Hex>>>>> = {
  [Chains.Camp]: {
    [Contracts.Faucet]: "0xd1Ba71383eAbdBeD2552862eaf36fD38815B5693",
    [Contracts.ColorNft]: "0xdd2274147F61813a71c163Cc955Ea27df768fe0E",
    [Contracts.ColorNftPouch]: "0x7757998A5F0747AB66397303327c0164DCBF4b11",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0xD496b5215ec01A456c33e2891780d4bfB60be9B2",
      [MultiGameVariant.Default3101]: "0x4cecAF543033aeDB215B6dC28f09D0b5f7Ab1655",
      [MultiGameVariant.Default6100]: "0xf884cF2591148bD0bcd7D65315556e85d8bbfeA1",
      [MultiGameVariant.Default6101]: "0x100Af4394cA324b4118Ae336386C9b3A1FC75a2E",
      [MultiGameVariant.Default10100]: "0x96387D861eD678eF2907709b74cc21Cc9C22bC01",
      [MultiGameVariant.Default10101]: "0x3f196D98a4157B6d30a65Aaaf7dA47FcCDA1e5A8",
    },
    [Contracts.SingleGame]: "0x0b4955690550F87F1028420EA9E32bF129DeC4dF",
    [Contracts.SingleGameBubble]: "0xBA9B17F67280DB191e9b541Bf08F26e9223fB9b8",
  },
  [Chains.Sei]: {
    [Contracts.Faucet]: "0xD6542FE56414ED52AfE5dBA77a2De0321E091756",
    [Contracts.ColorNft]: "0x833068b2e9A81c55BcB4B0Acb148002f6F9efF07",
    [Contracts.ColorNftPouch]: "0x3b1BcEceA7B956c9215895a6746BB8998D492ced",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0xA02Ba275F5Ea59c66e3fe21F033B7eaD9ED85EA8",
      [MultiGameVariant.Default3101]: "0x0A8FC2c06D249ef671D6F0A46A0d40e03472E8b6",
      [MultiGameVariant.Default3102]: "0x723D9AB3d868f38D333E7f1Ed60E4290c44edfaf",
      [MultiGameVariant.Default6100]: "0x47AD6EbfEcb80f176B7585123E0e0DA0032698D9",
      [MultiGameVariant.Default6101]: "0x40Dc1e31FeaB60d49EfB18eB089711B25838223c",
      [MultiGameVariant.Default6102]: "0x8b69130c10E8D09dB71755bc7F290227F240a942",
      [MultiGameVariant.Default10100]: "0xCAC0C48445C4e8A031030A4Fdd8CA939181741FC",
      [MultiGameVariant.Default10101]: "0xF1A28F5fEa5F200FC49E08693EB96AA9BE4AEfc6",
      [MultiGameVariant.Default10102]: "0x58206C4784467d0e097e4246eD4B8327B1358Dca",
    },
    [Contracts.SingleGame]: "0x9168AF279bcD490DD422b9760Bd9EFa82Ac81cb0",
    [Contracts.SingleGameBubble]: "0xDA8b604C7078ec28BF051CA66e6b2b989fb1e96f",
  },
  [Chains.Monad]: {
    [Contracts.Faucet]: "0xD6542FE56414ED52AfE5dBA77a2De0321E091756",
    [Contracts.ColorNft]: "0x284e0d94f0e83a0Ef4CCC592fD1f3c9718596A87",
    [Contracts.ColorNftPouch]: "0xB1aFb47eA30154927a49b052744D0eE7914df4Ca",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0x7B1926C7f7DC91c780407eFaD37c5BA6A8630bAa",
      [MultiGameVariant.Default3101]: "0xaeCD34A8C902B3563E92aDFa153297B2261196D9",
      [MultiGameVariant.Default6100]: "0x6511149642221C86f1D88DC21b21950DBbAF0092",
      [MultiGameVariant.Default6101]: "0x9AC4BbD8Efa91293e99c86aD5d212C3D23BeD23A",
      [MultiGameVariant.Default10100]: "0xa2A494661802cce3BbA8d3Da3A32A04e45E7Ff2c",
      [MultiGameVariant.Default10101]: "0x4a090FE4714c72AABD7825B54cd836f373ff0D47",
    },
    [Contracts.SingleGame]: "0xFe5334C4d75c78a86d13f1490bAa1D0ca5A624C3",
    [Contracts.SingleGameBubble]: "0x0209e5726f225764d0465486c30dF62359b20107",
  },
};
