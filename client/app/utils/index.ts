  export const getTaskCountLabel = (count: number): string => {
    return `${count} ${count === 1 ? "task" : "tasks"}`;
  };
