import { getTaskCountLabel } from "../utils";

interface TodoFooterProps {
  taskCount: number;
}

export const TodoFooter = ({ taskCount }: TodoFooterProps) => {
  return (
    <div className="bg-gray-50 px-6 sm:px-8 py-4 border-t border-gray-200 text-center">
      <span
        className="text-indigo-500 font-semibold text-sm uppercase tracking-wider"
        aria-live="polite"
      >
        {getTaskCountLabel(taskCount)}
      </span>
    </div>
  );
};
