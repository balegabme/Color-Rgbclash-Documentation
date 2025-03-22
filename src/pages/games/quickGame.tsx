import { Link } from "react-router-dom";

import quickGame from "../../assets/quick_game.png";

export const QuickGame = function QuickGame() {
  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Quick Game</h4>
      <p className="mt-4">The most common game type in the Fun Ecosystem.</p>
      <div className="flex items-center justify-center">
        <img src={quickGame} loading="lazy" className="mt-4 border-1 border-primary" />
      </div>
      <p className="mt-4">
        Current number of users (top left), entry price (top right), maximum prize (middle right). If the maximum prize
        is 5x that means the winner will get 5x the entry price.
      </p>
      <p className="mt-4">
        At every time only one lobby is open for each game type. If it is filled the next joining user will join to the
        next lobby.
      </p>
      <h5 className="mt-4 font-bold">Prizes</h5>
      <p className="mt-4 font-semibold">3 player lobby</p>
      <ol className="my-4 space-y-2 list-decimal list-inside pl-4">
        <li> Place: 200% of entry</li>
        <li> Place: remaining amount from the pool. Usually ~70% of entry</li>
        <li> Place: 0% of entry</li>
      </ol>
      <p className="mt-4 font-semibold">6 player lobby</p>
      <ol className="my-4 space-y-2 list-decimal list-inside pl-4">
        <li> Place: 300% of entry</li>
        <li> Place: 58% of remaining amount from the pool, Usually ~140% of entry</li>
        <li> Place: 42% of remaining amount from the pool, Usually ~101% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
      </ol>
      <p className="mt-4 font-semibold">10 player lobby</p>
      <ol className="my-4 space-y-2 list-decimal list-inside pl-4">
        <li> Place: 500% of entry</li>
        <li> Place: 50% of remaining amount from the pool, Usually ~200% of entry</li>
        <li> Place: 30% of remaining amount from the pool, Usually ~120% of entry</li>
        <li> Place: 20% of remaining amount from the pool, Usually ~80% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
        <li> Place: 0% of entry</li>
      </ol>
      <h5 className="mt-4 font-bold">Gameplay</h5>
      <p className="mt-4">
        Nfts presented one after the other and players type their guess in a chat, where they also see other players
        real time guesses. The one who geusses correctly first gets a point. After all nfts are guessed or the timer has
        run out the players get their rewards based on the leaderboard.
      </p>
      <p className="mt-4">
        For more details visit{" "}
        <Link to="/introduction/quickstart" className="text-blue-500 underline">
          Quickstart
        </Link>{" "}
      </p>
      <span className="text-sm text-icon-active mt-8">Last updated: 03.21.2025</span>
    </div>
  );
};
