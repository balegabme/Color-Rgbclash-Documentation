import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

interface PrevNextButtonsProps {
  previousHref?: string;
  previousTitle?: string;
  nextHref?: string;
  nextTitle?: string;
}

const PrevNextButtons = ({ previousHref, previousTitle, nextHref, nextTitle }: PrevNextButtonsProps) => {
  return (
    <div className="flex justify-center mt-6 gap-4">
      <Link
        to={previousHref ?? "/"} // If undefined its not clickable
        className={`${previousHref && previousTitle ? "flex-1" : "pointer-events-none opacity-0 flex-1"} flex items-center justify-between gap-2 px-4 py-2 border rounded hover:bg-card-hover`}
      >
        <ChevronLeft />
        <div className="flex flex-col">
          <span className="text-right text-sm font-semibold text-icon-active">Previous</span>
          <span>{previousTitle}</span>
        </div>
      </Link>
      <Link
        to={nextHref ?? "/"} // If undefined its not clickable
        className={`${nextHref && nextTitle ? "flex-1" : "pointer-events-none opacity-0 flex-1"} flex items-center justify-between px-4 py-2 border rounded hover:bg-card-hover`}
      >
        <div className="flex flex-col">
          <span className="text-left text-sm font-semibold text-icon-active">Next</span>
          <span>{nextTitle}</span>
        </div>
        <ChevronRight />
      </Link>
    </div>
  );
};

export default PrevNextButtons;
