import { OfficialLinks } from "@/pages/community/officialLinks";
import { EcoOverview } from "@/pages/economy/ecoOverview";
import { HandmadeYieldBearingNfts } from "@/pages/economy/handmadeYieldBearingNfts";
import { TokenPage } from "@/pages/economy/tokenPage";
import { QuickGame } from "@/pages/games/quickGame";
import { DrawAndEarn } from "@/pages/how-to-earn.tsx/drawAndEarn";
import { PlayAndEarn } from "@/pages/how-to-earn.tsx/playAndEarn";
import { Quickstart } from "@/pages/introduction/quickstart";
import { ComingSoon } from "@/pages/misc/comingSoon";
import { Ai } from "@/pages/technology/ai";
import { SessonKeys } from "@/pages/technology/sessionKeys";
import { SmartContracts } from "@/pages/technology/smartContracts";

export const routes = {
  navMain: [
    {
      title: "Introduction",
      items: [
        { title: "Quickstart", element: Quickstart },
        { title: "Color's Solution", element: Quickstart },
        { title: "Market fit", element: ComingSoon },
        { title: "Roadmap", element: ComingSoon },
      ],
    },
    {
      title: "Economy",
      items: [
        { title: "Overview", element: EcoOverview },
        { title: "Handmade yield bearing NFTs", element: HandmadeYieldBearingNfts },
        { title: "Boosts", element: ComingSoon },
        { title: "Seasons", element: ComingSoon },
        { title: "Token", element: TokenPage },
        { title: "NFT marketplace", element: ComingSoon },
      ],
    },
    {
      title: "How to earn",
      items: [
        { title: "Play and earn (Active)", element: PlayAndEarn },
        { title: "Draw and earn (Passive)", element: DrawAndEarn },
      ],
    },
    {
      title: "Games",
      items: [
        { title: "Quick Game", element: QuickGame },
        { title: "Duel", element: ComingSoon },
        { title: "Single Player", element: ComingSoon },
      ],
    },
    {
      title: "Technology",
      items: [
        { title: "AI", element: Ai },
        { title: "Smart Contracts", element: SmartContracts },
        { title: "Session Key", element: SessonKeys },
        { title: "Crosschain NFTs", element: ComingSoon },
      ],
    },
    {
      title: "Community",
      items: [{ title: "Official links", element: OfficialLinks }],
    },
  ],
};
