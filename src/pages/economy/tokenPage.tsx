export const TokenPage = function TokenPage() {
  return (
    <div className="flex flex-col text-start">
      <h4 className="font-bold mb-4">Token</h4>
      <span className="font-normal">The platform only uses the chains' native currencies.</span>
      <ul className="list-disc pl-6">
        <li className="mt-2">More accessible.</li>
        <li className="mt-2">No overhead for users.</li>
        <li className="mt-2">No risk of impermanent loss.</li>
        <li className="mt-2">No spending approval.</li>
      </ul>
      <span className="font-normal mt-4">
        Active planning is ongoing for releasing the platform's own token with additional utilities and features.
      </span>

      <span className="text-sm text-icon-active mt-4">Last updated: 03.21.2025</span>
    </div>
  );
};
