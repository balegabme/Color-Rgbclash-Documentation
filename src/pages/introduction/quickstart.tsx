import { useState } from "react";
import ReactPlayer from "react-player/youtube";

export const Quickstart = function Quickstart() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Quickstart</h4>
      <p className="my-4">
        In a hurry? Do not worry just watch this 2:28 minutes video and you will understand everything!
      </p>

      <div
        style={{
          position: "relative",
          width: "100%",
          paddingTop: "56.25%",
          backgroundColor: !isLoaded ? "#e0e0e0" : "transparent",
          borderRadius: "10px",
          overflow: "hidden",
        }}
      >
        {!isLoaded && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "#e0e0e0",
            }}
          />
        )}

        <ReactPlayer
          url="https://www.youtube.com/watch?v=ulH-fIuCns8"
          width="100%"
          height="100%"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
          onReady={() => setIsLoaded(true)}
          config={{
            playerVars: {
              modestbranding: 1,
              controls: 1,
              rel: 0,
              wmode: "transparent",
              cc_load_policy: 0,
            },
          }}
        />
      </div>

      <span className="text-sm text-icon-active mt-8">Last updated: 03.21.2025</span>
    </div>
  );
};
