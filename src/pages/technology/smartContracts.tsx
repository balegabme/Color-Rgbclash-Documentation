import React, { useState } from "react";

import { Button } from "@/components/ui/button";

type Chain = "Monad" | "Sei" | "Base" | "Sonic";
type Contract = "ColorNft" | "ColorNftPouch" | "GroupGame" | "SingleGame";

export const SmartContracts: React.FC = () => {
  const initialExpanded: Record<Chain, boolean> = {
    Monad: false,
    Sei: false,
    Base: false,
    Sonic: false,
  };

  const [expandedGroupGames, setExpandedGroupGames] = useState<Record<Chain, boolean>>(initialExpanded);

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

  const chains: Array<Chain> = ["Monad", "Sei", "Base", "Sonic"];
  const contracts: Array<Contract> = ["ColorNft", "ColorNftPouch", "SingleGame", "GroupGame"];
  const groupGameTypes: Array<string> = ["Type1", "Type2", "Type3"];

  const generateRandomAddress = (): string => {
    return `0x${Math.random().toString(16).slice(2).padEnd(40, "0")}`;
  };

  const renderTable = (chain: Chain) => (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={{ ...thTdStyle, ...headerStyle }}>Contract Name</th>
          <th style={{ ...thTdStyle, ...headerStyle }}>Address</th>
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract) => (
          <tr key={contract}>
            <td style={thTdStyle}>{contract}</td>
            <td style={thTdStyle}>
              {contract === "GroupGame" ? (
                <Button
                  onClick={() =>
                    setExpandedGroupGames((prev) => ({
                      ...prev,
                      [chain]: !prev[chain],
                    }))
                  }
                >
                  {expandedGroupGames[chain] ? "Hide Types" : "Show Types"}
                </Button>
              ) : (
                generateRandomAddress()
              )}
            </td>
          </tr>
        ))}
        {expandedGroupGames[chain] && (
          <tr>
            <td colSpan={2} style={thTdStyle}>
              <table style={tableStyle}>
                <thead>
                  <tr>
                    <th style={{ ...thTdStyle, ...headerStyle }}>GroupGame Type</th>
                    <th style={{ ...thTdStyle, ...headerStyle }}>Address</th>
                  </tr>
                </thead>
                <tbody>
                  {groupGameTypes.map((type) => (
                    <tr key={type}>
                      <td style={thTdStyle}>{type}</td>
                      <td style={thTdStyle}>{generateRandomAddress()}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </td>
          </tr>
        )}
      </tbody>
    </table>
  );

  return (
    <div style={{ padding: "1rem", fontFamily: "Arial, sans-serif" }}>
      <h4 className="font-bold mb-4">Smart Contracts</h4>
      {chains.map((chain) => (
        <div key={chain} style={{ marginBottom: "2rem" }}>
          <h5>{chain}</h5>
          {renderTable(chain)}
        </div>
      ))}
    </div>
  );
};

export default SmartContracts;
