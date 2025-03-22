import { Link } from "react-router-dom";

export const OfficialLinks = function OfficialLinks() {
  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Official links</h4>
      <Link
        to="https://x.com/rgbclash_xyz"
        className="mt-4 text-blue-500 underline self-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        Twitter
      </Link>
      <Link
        to="https://rgbclash.xyz/"
        className="mt-4 text-blue-500 underline self-start"
        target="_blank"
        rel="noopener noreferrer"
      >
        Platform
      </Link>
      <span className="text-sm text-icon-active mt-8">Last updated: 03.21.2025</span>
    </div>
  );
};
