import { Link } from "react-router-dom";

import jokerNft from "../../assets/nft_joker.png";

export const HandmadeYieldBearingNfts = function HandmadeYieldBearingNfts() {
  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Handmade Yield-Bearing NFTs</h4>
      <p className="mt-4">
        Color provides a minimalistic painter application where users can draw images for their NFTs. The editor is
        simplified so everyone has the same possibilities to be creative. After the user has drawn the image, they must
        provide a name for it which must reflect the image. For example, an image of many trees can have the name of{" "}
        <q>forest</q> but not <q>cars</q>.
      </p>
      <p className="mt-4">
        To verify this behavior, Color uses{" "}
        <Link to="/technology/ai" className="text-blue-500 underline">
          AI
        </Link>{" "}
        to check the correspondence of the image and the name. Only if the image+name combination is verified can the
        NFT be minted. At this point the NFT is owned by the user and can be transferred or traded via the{" "}
        <Link to="/economy/nft-marketplace" className="text-blue-500 underline">
          marketplace
        </Link>
        .
      </p>
      <p className="mt-4">
        If the image is guessed in a game it will receive rewards for it. For the NFT to receive rewards it must be
        staked in the nft pouch contract. If staked the NFT becomes a part of the game's nft pool and if guessed will
        receive rewards. NFTs are grouped into 3 categories: Easy, Medium, Hard. This is determined by the average guess
        time of the NFT. If the average guess time is between 71% - 99% of the provided guess time in the game, it is
        considered a Hard NFT. If the average guess time is between 41% - 70% of the provided guess time in the game, it
        is considered a Medium NFT. If the average guess time is between 40% - 0% of the provided guess time in the
        games, it is considered an Easy NFT. The game system aims to put an equal amount of NFTs to the game pool from
        each difficulty category.
      </p>
      <p className="mt-4">Example reward distribution when the game ends:</p>
      <ul className="my-4 space-y-2 list-disc list-inside">
        <li>Easy NFTs get 1 unit of tokens</li>
        <li>Medium NFTs get 2 units of tokens</li>
        <li>Hard NFTs get 3 units of tokens</li>
      </ul>
      <p className="mt-4">
        Example sum of units if 8 nfts are guessed in a game: 3 Easy nft * 1 unit + 3 Medium nft * 2 units + 2 Hard nfts
        * 3 units = 15 units. If the reward pool for the guessed nfts is 30 coins then a unit worths 2 coins.
      </p>
      <div className="flex items-center justify-center">
        <img src={jokerNft} loading="lazy" className="w-1/3 mt-4 border-1 border-primary" />
      </div>
      <p className="mt-4">
        From these it is easy to figure out it is best worth drawing images which can ultimately be guessed but not
        immediately. This is particularly hard, because if the NFT is not guessed in a game it will not get any rewards!
        A kindly common advice can be that it is best to draw nice, detailed images which can be immediately recognized
        but can have more names like castle, fort, fortress, so it will be guessed, but not quickly increasing the
        overall ROI of the NFT. Staked NFTs are selected to the games based on weighted random algorithm. The weight of
        NFTs are biased based on the guessrate and rating, meaning the best ROI is achieved with better guessrate and
        rating. This is important to keep a consistent and fair competition between all creators. If a creator deeply
        trusts its NFT, they can{" "}
        <Link to={"/economy/boosts"} className="text-blue-500 underline">
          boost
        </Link>{" "}
        their NFTs to appear in games more often, increasing the ROI potential.
      </p>
      <span className="text-sm text-icon-active mt-8">Last updated: 03.21.2025</span>
    </div>
  );
};
