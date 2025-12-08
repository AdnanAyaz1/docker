export const apiResponseHandler = (
  fn: () => Promise<void>,
  setIsLoading: (loading: boolean) => void,
  setError: (error: Error | null) => void
) => {
  return async () => {
    setIsLoading(true);
    setError(null);
    try {
      await fn();
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "API call failed";
      setError(new Error(errorMessage));
    } finally {
      setIsLoading(false);
    }
  };
};

export const apiErrorHandler = async (error: any) => {
  const message = error instanceof Error ? error.message : "Failed to add todo";
  return { success: false, error: message };
};
