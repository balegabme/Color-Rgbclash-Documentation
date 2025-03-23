import { Link } from "react-router-dom";

export const MarketFit = function MarketFit() {
  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Market Fit</h4>
      <p className="mt-4">
        Current state of the crypto market tells us that there is meaningful, and increasing user activities on
        individual blockchains, best reflected by ethereum mainnet's{" "}
        <Link
          to="https://defillama.com/chain/Ethereum?txs=true&groupBy=daily&currency=ETH&tvl=true"
          className="text-blue-500 underline"
        >
          activity
        </Link>
        . Users try out more and more different dapps in the hope to earn money. Because let’s be honest, profit in a
        way of either airdrops, winning trades or passive ROI is the number one reason people get into web3.
      </p>
      <p className="mt-4">
        There is a problem however: there are finite options to put your money to. Most dapps are duplicates of each
        other like most dexes are forks of Uniswap or most money markets, lending protocols are forks of Aave{" "}
        <Link to="https://defillama.com/forks" className="text-blue-500 underline">
          source
        </Link>
        .
      </p>
      <h5 className="font-bold mt-4">People are here to get rich fast</h5>
      <p className="font-bold text-2xl mt-4">Trading</p>
      <p className="mt-4">
        The best potential of earning money in crypto is trading, especially leveraged trading where bigger profits can
        come from smaller investments. This is not easy however and is not suitable for everyone and more than 80% of
        traders are actually in loss.
      </p>
      <p className="font-bold text-2xl mt-4">Passive income</p>
      <p className="mt-4">
        Passive incomes from providing liquidity in Dex pools or lending tokens on money markets are the most common
        ways of easily earning money in web3. They have one common disadvantage however and that is that it is slow. If
        you bond all of your capital the market can easily run past you. Furthermore, these strategies often require
        careful managment of the bonded assets which makes the whole process less "passive".
      </p>
      <p className="font-bold text-2xl mt-4">Airdrops</p>
      <p className="mt-4">
        Still a passive income, but promises higher ROI. Staking several coins could get 4-5 figures in an airdrop, no
        wonder this lured many new users into the blockchain world. Sadly after getting farmed so hard the potential of
        airdrops have decreased tremendously, but still is the chosen way for many.
      </p>
      <h5 className="font-bold mt-4">There is nothing to do in web3</h5>
      <p className="mt-4">
        The above mentioned things cover more than 90% of the web3 market. But what if there is something else? This is
        where Color - RgbClash comes in the picture.
      </p>
      <p className="mt-4">
        People often find themselves playing quick rounds of chess, poker or other fast games to pass time in work, have
        free time or are on a break. Color’s games offer exactly that, quick, fun games where users can earn money while
        also keeping the option to earn passive income with NFTs. Everyone who has been involved in crypto has at least
        a marginal amount of coins in their wallets, because they need to pay for gas fees. If everyone already has a
        few dollars laying around, why would they play something else when there is an option to have fun, pass time and
        make money at the same time?
      </p>
      <span className="text-sm text-icon-active mt-8">Last updated: 03.21.2025</span>
    </div>
  );
};
