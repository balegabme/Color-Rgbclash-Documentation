import React, { useState } from "react";
import { ExternalLink } from "lucide-react";

import { Button } from "@/components/ui/button";

import { Chains, contractAddresses, Contracts, MultiGameVariant } from "./contracts";

type Chain = keyof typeof Chains;
type Contract = keyof typeof Contracts;

export const SmartContracts: React.FC = () => {
  const initialExpanded: Record<Chain, boolean> = {
    Monad: false,
    Sei: false,
    Camp: false,
  };

  const [expandedGroupGames, setExpandedGroupGames] = useState<Record<Chain, boolean>>(initialExpanded);

  // Helper function to parse variant labels
  const parseVariantLabel = (variant: MultiGameVariant): string => {
    const [, players, priceCode] = variant.split("-");
    const priceTier =
      {
        "100": "Low price",
        "101": "Mid price",
        "102": "High price",
      }[priceCode] || `Price tier ${priceCode}`;

    return `${players} player · ${priceTier}`;
  };

  // Helper to get contract address
  const getContractAddress = (chain: Chain, contract: Contract): string | undefined => {
    const chainId = Chains[chain];
    return contractAddresses[chainId]?.[Contracts[contract]] as string | undefined;
  };

  // Helper to get GroupGame variant addresses
  const getGroupGameVariantAddress = (chain: Chain, variant: MultiGameVariant): string | undefined => {
    const chainId = Chains[chain];
    const groupGameContracts = contractAddresses[chainId]?.[Contracts.GroupGame];
    return typeof groupGameContracts === "object" ? groupGameContracts[variant] : undefined;
  };

  // Filter out Faucet and ColorToken contracts
  const filteredContracts = Object.values(Contracts).filter(
    (contract) => contract !== Contracts.Faucet && contract !== Contracts.ColorToken,
  );

  // Table styling
  const tableStyle: React.CSSProperties = {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "1rem",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
  };

  const thTdStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    padding: "12px",
    textAlign: "left",
  };

  const headerStyle: React.CSSProperties = {
    backgroundColor: "#f9f9f9",
  };

  // Helper to get block explorer URL
  const getExplorerUrl = (chain: Chain, address: string | undefined) => {
    if (!address) return "";
    switch (chain) {
      case "Camp":
        return `https://camp.cloud.blockscout.com/address/${address}`;
      case "Sei":
        return `https://seitrace.com/address/${address}`;
      case "Monad":
        return `https://testnet.monadexplorer.com/address/${address}`;
      default:
        return "";
    }
  };

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h4 className="font-bold mb-4">Smart Contracts</h4>
      {Object.keys(Chains)
        .filter((chain) => isNaN(Number(chain)) && chain !== "Base")
        .map((chain) => (
          <div key={chain} style={{ marginBottom: "2rem" }}>
            <h5>{chain}</h5>
            <table style={tableStyle}>
              <thead>
                <tr>
                  <th style={{ ...thTdStyle, ...headerStyle }}>Contract</th>
                  <th style={{ ...thTdStyle, ...headerStyle }}>Address</th>
                </tr>
              </thead>
              <tbody>
                {filteredContracts
                  .filter((contract) => contract !== Contracts.GroupGame)
                  .map((contract) => (
                    <tr key={contract}>
                      <td style={thTdStyle}>{contract}</td>
                      <td style={thTdStyle}>
                        {(() => {
                          const address = getContractAddress(chain as Chain, contract as Contract);
                          if (!address) return "N/A";
                          const explorerUrl = getExplorerUrl(chain as Chain, address);
                          return explorerUrl ? (
                            <a href={explorerUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                              {address}
                              <ExternalLink style={{ marginLeft: 4, width: 16, height: 16 }} />
                            </a>
                          ) : (
                            address
                          );
                        })()}
                      </td>
                    </tr>
                  ))}
                <tr>
                  <td style={thTdStyle} colSpan={2}>
                    <Button
                      onClick={() =>
                        setExpandedGroupGames((prev) => ({
                          ...prev,
                          [chain]: !prev[chain as Chain],
                        }))
                      }
                    >
                      {expandedGroupGames[chain as Chain] ? "Hide Group Games" : "Show Group Games"}
                    </Button>
                    {expandedGroupGames[chain as Chain] && (
                      <table style={tableStyle}>
                        <thead>
                          <tr>
                            <th style={{ ...thTdStyle, ...headerStyle }}>Game Type</th>
                            <th style={{ ...thTdStyle, ...headerStyle }}>Address</th>
                          </tr>
                        </thead>
                        <tbody>
                          {Object.values(MultiGameVariant)
                            .map((variant) => ({
                              label: parseVariantLabel(variant),
                              address: getGroupGameVariantAddress(chain as Chain, variant),
                            }))
                            .filter(({ address }) => !!address)
                            .map(({ label, address }) => (
                              <tr key={label}>
                                <td style={thTdStyle}>{label}</td>
                                <td style={thTdStyle}>
                                  {(() => {
                                    if (!address) return "N/A";
                                    const explorerUrl = getExplorerUrl(chain as Chain, address);
                                    return explorerUrl ? (
                                      <a href={explorerUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
                                        {address}
                                        <ExternalLink style={{ marginLeft: 4, width: 16, height: 16 }} />
                                      </a>
                                    ) : (
                                      address
                                    );
                                  })()}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    )}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        ))}
      <span className="text-sm text-icon-active mt-8">Last updated: 07.20.2025</span>
    </div>
  );
};

export default SmartContracts;
