interface ErrorMessageProps {
  message: string;
}

export const ErrorMessage = ({ message }: ErrorMessageProps) => {
  return (
    <div
      className="bg-red-50 border-l-4 border-red-500 px-4 my-2 sm:px-6 py-3 text-red-700 text-sm "
      role="alert"
    >
      {message}
    </div>
  );
};
