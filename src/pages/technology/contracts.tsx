export enum Chains {
  Base = 84532,
  Sei = 1329,
  Sonic = 146,
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
  [Chains.Base]: {
    [Contracts.Faucet]: "0xB8E80F503B5128a49e7f52c11a596088b09be25c",
    [Contracts.ColorNft]: "0x7dD064421eAeb39c36Ac969D98E2a90fd96766D3",
    [Contracts.ColorNftPouch]: "0x11691C92c312ac5b312372378D539C893E73330C",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0x4CdEA3B3663A0AB26bF163975d88aF4Cbd8F99C6",
      [MultiGameVariant.Default3101]: "0xC982CF7E6857a6b7aE813AA06Debaa3CC7607344",
      [MultiGameVariant.Default6100]: "0x75899f8fC80462A099d5e98Ce6Cc91d3C4Ddf3bA",
      [MultiGameVariant.Default6101]: "0xcaCe8a75ECE8eFc15b0D8d71bFcb3C0f0c4ed078",
      [MultiGameVariant.Default10100]: "0x68695f1F2d827D866204854481e45bD1EfF66999",
      [MultiGameVariant.Default10101]: "0x87F6f3061f8ABFF38c3Cef99d4e31beA6Fb8FE94",
    },
    [Contracts.SingleGame]: "0xAdaA6873af79Ef1e9d1Be33eC36BabDDd2123D2F",
    [Contracts.SingleGameBubble]: "0xEe9Bf62ffE2209359D5c098b9E6530AA1fEc9f23",
  },
  [Chains.Sonic]: {
    [Contracts.Faucet]: "0xd1Ba71383eAbdBeD2552862eaf36fD38815B5693",
    [Contracts.ColorNft]: "0xdd2274147F61813a71c163Cc955Ea27df768fe0E",
    [Contracts.ColorNftPouch]: "0x7757998A5F0747AB66397303327c0164DCBF4b11",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0x8b69130c10e8d09db71755bc7f290227f240a942",
      [MultiGameVariant.Default3101]: "0x243A3e7d31B2d26283B0dA2ceA7904A9F0065Bd9",
      [MultiGameVariant.Default3102]: "0x723D9AB3d868f38D333E7f1Ed60E4290c44edfaf",
      [MultiGameVariant.Default6100]: "0x98Fad607872b49f99206af7F313b09639404e4ED",
      [MultiGameVariant.Default6101]: "0x58206c4784467d0e097e4246ed4b8327b1358dca",
      [MultiGameVariant.Default6102]: "0xc13314d126cba7447ac3b5ba24579244bdc02d61",
      [MultiGameVariant.Default10100]: "0xf884cF2591148bD0bcd7D65315556e85d8bbfeA1",
      [MultiGameVariant.Default10101]: "0x4cecAF543033aeDB215B6dC28f09D0b5f7Ab1655",
      [MultiGameVariant.Default10102]: "0xD496b5215ec01A456c33e2891780d4bfB60be9B2",
    },
    [Contracts.SingleGame]: "0x0b4955690550F87F1028420EA9E32bF129DeC4dF",
    [Contracts.SingleGameBubble]: "0xBA9B17F67280DB191e9b541Bf08F26e9223fB9b8",
  },
  [Chains.Sei]: {
    [Contracts.Faucet]: "0xD6542FE56414ED52AfE5dBA77a2De0321E091756",
    [Contracts.ColorNft]: "0xdd2274147F61813a71c163Cc955Ea27df768fe0E",
    [Contracts.ColorNftPouch]: "0x7757998A5F0747AB66397303327c0164DCBF4b11",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0x243A3e7d31B2d26283B0dA2ceA7904A9F0065Bd9",
      [MultiGameVariant.Default3101]: "0x28826c46F20063721D692892eAc38771D2E19dE4",
      [MultiGameVariant.Default3102]: "0x723D9AB3d868f38D333E7f1Ed60E4290c44edfaf",
      [MultiGameVariant.Default6100]: "0xC13314D126cbA7447aC3b5bA24579244Bdc02d61",
      [MultiGameVariant.Default6101]: "0xF987489c90e014e1014BF9cf5F83abd71a8b1beD",
      [MultiGameVariant.Default6102]: "0x8b69130c10E8D09dB71755bc7F290227F240a942",
      [MultiGameVariant.Default10100]: "0x98Fad607872b49f99206af7F313b09639404e4ED",
      [MultiGameVariant.Default10101]: "0x0191e57d21AF8B48f0cC421C1FdAe9C85F5B8658",
      [MultiGameVariant.Default10102]: "0x58206C4784467d0e097e4246eD4B8327B1358Dca",
    },
    [Contracts.SingleGame]: "0x0b4955690550F87F1028420EA9E32bF129DeC4dF",
    [Contracts.SingleGameBubble]: "0xBA9B17F67280DB191e9b541Bf08F26e9223fB9b8",
  },
  [Chains.Monad]: {
    [Contracts.Faucet]: "0xD6542FE56414ED52AfE5dBA77a2De0321E091756",
    [Contracts.ColorNft]: "0xdd2274147F61813a71c163Cc955Ea27df768fe0E",
    [Contracts.ColorNftPouch]: "0x7757998A5F0747AB66397303327c0164DCBF4b11",
    [Contracts.ColorToken]: "0xB7C2a762ac44201C7FFE3Fa9AC3286633d0F9258",
    [Contracts.GroupGame]: {
      [MultiGameVariant.Default3100]: "0xD854484B164726BED375009Ecf24fBF36E866C3c",
      [MultiGameVariant.Default3101]: "0xA744802270AF8E8b1FA70E3406d969ED0E262B1E",
      [MultiGameVariant.Default6100]: "0x0A8FC2c06D249ef671D6F0A46A0d40e03472E8b6",
      [MultiGameVariant.Default6101]: "0xAD739DC6a36F5B4b449AAF37b71e6b64a7BEbcfF",
      [MultiGameVariant.Default10100]: "0x40Dc1e31FeaB60d49EfB18eB089711B25838223c",
      [MultiGameVariant.Default10101]: "0xA02Ba275F5Ea59c66e3fe21F033B7eaD9ED85EA8",
    },
    [Contracts.SingleGame]: "0x0b4955690550F87F1028420EA9E32bF129DeC4dF",
    [Contracts.SingleGameBubble]: "0xBA9B17F67280DB191e9b541Bf08F26e9223fB9b8",
  },
};
