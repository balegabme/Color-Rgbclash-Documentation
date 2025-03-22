import sessionKey from "../../assets/session_key.png";

export const SessonKeys = function SessonKeys() {
  return (
    <div className="flex flex-col text-justify">
      <h4 className="font-bold mb-4">Session Key</h4>
      <p className="mt-4">The platform uses signatures to verify wallet ownership.</p>

      <div className="flex items-center justify-center">
        <img src={sessionKey} loading="lazy" className="w-1/3 mt-4 border-1 border-primary" />
      </div>
      <p className="mt-4">
        This is important to prevent unauthorized individuals from accessing others account on the platform. It is only
        possible to make changes on your account with the corresponding session key.
      </p>
      <p className="mt-4 text-lg font-bold">Never share your session key!</p>
      <span className="text-sm text-icon-active mt-8">Last updated: 03.21.2025</span>
    </div>
  );
};
